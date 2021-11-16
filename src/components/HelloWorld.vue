<template>
  <div class="columns" style="height: 100%; overflow: hidden">
    <div class="column is-half">
      <form class="box">
        <b-field label="Scaffolding">
          <b-select
            placeholder="Select Scaffolding"
            expanded
            v-model="scaffoldingsIdx"
            @input="onScaffoldingChanged"
          >
            <option
              :value="idx"
              v-for="(scaffolding, idx) in scaffoldings"
              :key="
                scaffolding.account +
                '-' +
                scaffolding.repo +
                '-' +
                scaffolding.branch
              "
            >
              {{ scaffolding.repo }}
            </option>
          </b-select>
        </b-field>

        <template v-if="adoProjects">
          <b-field label="Project">
            <b-select
              placeholder="Select Project"
              expanded
              v-model="adoProject"
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

          <b-field label="Repository Name">
            <b-input v-model="repoName" expanded></b-input>
          </b-field>
        </template>
        <schema-form
          :schema="schema"
          v-model="variables"
          @submit="handleSubmit()"
          @submit2="previewCode()"
          @submit3="downloadCode()"
        />
      </form>
    </div>
    <div class="column" style="height: 100%; overflow: auto">
      <h4 class="title is-5">Preview</h4>
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
                <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
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
      scaffoldings: [
        {
          account: "scaffolding-repos",
          repo: "simple-nodejs",
          branch: "main",
        },
      ],
      repoName: "app-repo",
      scaffoldingsIdx: 0,
      scaffoldingObj: {},
      convertedCode: {},
      variables: null,
      schema: {},
    };
  },
  methods: {
    async handleSubmit() {
      this.convertedCode = await convert(this.scaffoldingObj, this.variables);
      this.createRepo()
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
    },
    loadCode(path) {
      return this.convertedCode[path];
    },
    async onScaffoldingChanged() {
      const scaffolding = this.scaffoldings[this.scaffoldingsIdx];
      this.scaffoldingObj = await gitzip(
        scaffolding.account,
        scaffolding.repo,
        scaffolding.branch
      );
    },
    async loadScafdoling() {},
    async getProjects() {
      const client = getClient(CoreRestClient);
      const projects = await client.getProjects();
      this.adoProjects = projects;
    },
    async createRepo() {
      const client = getClient(GitRestClient);
      const repository = await client.createRepository(
        { name: this.repoName },
        this.adoProject.id
      );
      const paths = Object.keys(this.convertedCode);
      const commits = [];
      paths.forEach((path) => {
        commits.push({
          comment: "Initial commit.",
          changes: [
            {
              changeType: "add",
              item: {
                path: path,
              },
              newContent: {
                content: this.convertedCode[path],
                contentType: "rawtext",
              },
            },
          ],
        });
      });

      await client.createPush(
        {
          refUpdates: [
            {
              name: "refs/heads/main",
              oldObjectId: "c913f4b6f62dd4ea7c5260a5385173c7a95f5110",
            },
          ],
          commits: commits
        },
        repository.id,
        this.adoProject.id
      );
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
      const scaffolding = this.scaffoldings[this.scaffoldingsIdx];
      this.scaffoldingObj = await gitzip(
        scaffolding.account,
        scaffolding.repo,
        scaffolding.branch
      );
      const scaffoldingJSON = this.scaffoldingObj["scaffolding.json"];
      const scaffoldingSettings = JSON.parse(scaffoldingJSON);
      this.schema = {
        type: "object",
        properties: scaffoldingSettings.variables,
      };
      this.convertedCode = await convert(this.scaffoldingObj, this.variables);
    })();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
