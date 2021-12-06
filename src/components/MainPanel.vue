<template>
  <div class="columns" style="height: 100%; overflow: hidden; ">
    <div class="column is-half">
      <div class="card" style="padding:10px">
        <header class="card-header">
          <p class="card-header-title">Scaffolding Settings</p>
        </header>
        <form class="box">
          <b-field label="Select Scaffolding" labelPosition="on-border">
            <b-select
              placeholder="Select Scaffolding"
              expanded
              v-model="scaffoldingsIdx"
              @input="onScaffoldingChanged"
              style="padding-bottom: 20px"
            >
              <option
                :value="idx"
                v-for="(scaffolding, idx) in scaffoldings"
                :key="scaffolding"
              >
                {{ scaffolding }}
              </option>
            </b-select>
          </b-field>

          <template v-if="adoProjects">
            <b-field label="Azure DevOps Project" labelPosition="on-border">
              <b-select
                placeholder="Select Project"
                expanded
                v-model="adoProject"
                 style="padding-bottom:20px"
              >
                <option
                  v-for="adoProject in adoProjects"
                  :value="adoProject"
                  :key="adoProject.id"
                >
                  {{ adoProject.name }}
                </option>
              </b-select>
            </b-field>

            <b-field label="Repository Name" labelPosition="on-border" >
              <b-input v-model="repoName" expanded  style="padding-bottom:20px"></b-input>
            </b-field>
          </template>
          <schema-form
            :schema="schema"
            :ado="adoProjects"
            v-model="variables"
            @submit="handleSubmit()"
            @submit2="previewCode()"
            @submit3="downloadCode()"
          />

          <b-notification style="margin-top:10px" v-if="showNotification"
            aria-close-label="Close notification">
            {{notificationMsg}}
        </b-notification>
        </form>
      </div>
    </div>
    <div class="column" style="height: 100%; overflow: auto">
      <div class="card"  style="padding:10px">
        <header class="card-header">
          <p class="card-header-title">Code Preview</p>
        </header>
        <section>
          <b-collapse
            v-for="path in paths"
            :key="path"
            class="card"
            animation="slide"
            aria-id="contentIdForA11y3"
            :open="false"
          >
            <template #trigger="props">
              <div
                class="card-header"
                role="button"
                aria-controls="contentIdForA11y3"
              >
                <p class="card-header-title">
                  {{ path }}
                </p>
                <a class="card-header-icon">
                  <b-icon :icon="props.open ? 'menu-down' : 'menu-up'">
                  </b-icon>
                </a>
              </div>
            </template>

            <div class="card-content">
              <div class="content">
                <pre
                  >{{ loadCode(path) }}
</pre
                >
              </div>
            </div>
          </b-collapse>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */

// import { CoreRestClient } from "azure-devops-extension-api/Core/CoreClient";

import * as SDK from "azure-devops-extension-sdk";
// import { GitServiceIds } from "azure-devops-extension-api/Git/GitServices";
import { getClient } from "azure-devops-extension-api";
import { CoreRestClient } from "azure-devops-extension-api/Core";
import { GitRestClient } from "azure-devops-extension-api/Git/GitClient";

import SchemaForm from "@/components/SchemaForm";

var gitzip = require("../gitzip");
var convert = require("../convert");
var JSZip = require("jszip");
var FileSaver = require("file-saver");
const scaffoldings = require("../scaffoldings.json");

import { ToastProgrammatic as Toast } from 'buefy'

export default {
  name: "HelloWorld",
  components: {
    SchemaForm,
  },
  props: {
    msg: String,
  },
  computed: {
    paths() {
      return Object.keys(this.convertedCode);
    },
  },
  data() {
    return {
      adoProjects: null,
      adoProject: null,
      scaffoldings: scaffoldings,
      repoName: "app-repo",
      scaffoldingsIdx: 0,
      scaffoldingObj: {},
      convertedCode: {},
      variables: null,
      schema: {},
      showNotification: false,
      notificationMsg: ""
    };
  },
  methods: {
    async handleSubmit() {
      this.convertedCode = await convert(this.scaffoldingObj, this.variables);
      this.createRepo();
    },
    async previewCode() {
      this.convertedCode = await convert(this.scaffoldingObj, this.variables);
    },
    async downloadCode() {
      const that = this;
      const zip = new JSZip();
      const paths = Object.keys(this.convertedCode);
      paths.forEach((path) => {
        zip.file(path, this.convertedCode[path]);
      });

      zip.generateAsync({ type: "blob" }).then(function (blob) {
        FileSaver.saveAs(blob, that.repoName + ".zip");
      });

      this.showNotification = true
      this.notificationMsg = "Start Downloading"

      setTimeout(()=>{
        that.showNotification = false
      }, 5000)
    },
    loadCode(path) {
      return this.convertedCode[path];
    },
    async onScaffoldingChanged() {
      this.loadScafdoling();
    },
    async loadScafdoling() {
      const scaffolding = this.scaffoldings[this.scaffoldingsIdx];
      this.scaffoldingObj = await gitzip(scaffolding);
      const scaffoldingJSON = this.scaffoldingObj["scaffolding.json"];
      const scaffoldingSettings = JSON.parse(scaffoldingJSON);
      this.schema = {
        type: "object",
        properties: scaffoldingSettings.variables,
      };

      this.convertedCode = await convert(this.scaffoldingObj, this.variables);
      this.$forceUpdate();
    },
    async getProjects() {
      const client = getClient(CoreRestClient);
      const projects = await client.getProjects();
      this.adoProjects = projects;
    },
    async createRepo() {
      const that = this
      const client = getClient(GitRestClient);
      const repository = await client.createRepository(
        { name: this.repoName },
        this.adoProject.id
      );
      const paths = Object.keys(this.convertedCode);
      const changes = [];
      paths.forEach((path) => {
        changes.push({
          changeType: "add",
          item: {
            path: path,
          },
          newContent: {
            content: this.convertedCode[path],
            contentType: "rawtext",
          },
        });
      });

      await client.createPush(
        {
          refUpdates: [
            {
              name: "refs/heads/main",
              oldObjectId: "0000000000000000000000000000000000000000",
            },
          ],
          commits: [
            {
              comment: "Initial commit.",
              changes: changes,
            },
          ],
        },
        repository.id,
        this.adoProject.id
      );
      this.showNotification = true
      this.notificationMsg = "Create Repo Successfully"
      setTimeout(()=>{
        that.showNotification = false
      }, 5000)

      // await client.createPush(
      //   {
      //     refUpdates: [
      //       {
      //         name: "refs/heads/main",
      //         oldObjectId: response.refUpdates[0].newObjectId,
      //       },
      //     ],
      //     commits: commits.splice(1),
      //   },
      //   repository.id,
      //   this.adoProject.id
      // );
    },
  },
  mounted() {
    const that = this;
    // var octo = new Octokat();

    // debugger;
    // fetch(
    //   "https://github.com/scaffolding-repos/simple-nodejs/archive/refs/heads/main.zip",
    //   { mode: "no-cors", redirect: "follow" }
    // )
    //   // Handle success
    //   .then((response) => {
    //     if (response.redirected) {
    //       console.log(response.url)
    //     }
    //   }) // convert to json
    //   .then((response) => response.arrayBuffer()) // convert to json
    //   .then((json) => console.log(json)) //print data to console
    //   .catch((err) => console.log("Request Failed", err)); // Catch errors

    (async () => {
      try {
        await SDK.init();
        await that.getProjects();
      } catch (e) {
        console.log(e);
      }
    })();

    (async () => {
      that.loadScafdoling();
    })();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
