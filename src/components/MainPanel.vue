<template>
  <div class="columns" style="height: 100%; overflow: hidden">
    <div class="column is-half">
      <div style="padding: 10px; border: 0">
        <p class="card-header-title">Scaffolding - [ {{ scaffoldingSettings.name }} ]</p>

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
              <option value="-1">
                &lt;&lt;Import a scaffolding via zip file...&gt;&gt;
              </option>
            </b-select>
          </b-field>

          <template v-if="adoProjects">
            <b-field label="Azure DevOps Project" labelPosition="on-border">
              <b-select
                placeholder="Select Project"
                expanded
                v-model="adoProject"
                style="padding-bottom: 20px"
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

            <b-field label="Repository Name" labelPosition="on-border">
              <b-input
                v-model="repoName"
                expanded
                style="padding-bottom: 20px"
              ></b-input>
            </b-field>

            <b-field
              v-if="scaffoldingSettings.serviceconnections"
              style="padding-bottom: 10px"
            >
              <b-checkbox v-model="createServiceConnections">
                <span style="padding-left: 10px">Create Azure ML Service Connection</span>
              </b-checkbox>
            </b-field>

            <b-field
              v-if="scaffoldingSettings.variablegroups"
              style="padding-bottom: 10px"
            >
              <b-checkbox v-model="createVariableGroups">
                <span style="padding-left: 10px">Create Variable Group</span>
              </b-checkbox>
            </b-field>
            <b-field
              v-if="scaffoldingSettings.pipelines"
              style="padding-bottom: 10px"
            >
              <b-checkbox v-model="createPipelines" @input="previewCode()">
                <span style="padding-left: 10px">Create DevOps Pipeline</span>
              </b-checkbox>
            </b-field>
          </template>
          <schema-form
            :schema="schema"
            :ado="adoProjects || {}"
            v-model="variables"
            @submit="handleSubmit()"
            @submit2="previewCode()"
            @submit3="downloadCode()"
          />

          <b-notification
            style="margin-top: 10px"
            v-if="showNotification"
            aria-close-label="Close notification"
          >
            {{ notificationMsg }}
          </b-notification>

          <!-- <a href="#" @click="getVariableGroups">Test</a>
          <a href="#" @click="createVariableGroup">Create</a> -->
        </form>
      </div>
    </div>
    <div class="column" style="height: 100%; overflow: auto">
      <div style="padding: 10px; border: 0">
        <p class="card-header-title">Code Preview</p>

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

import SchemaForm from "@/components/SchemaForm";

var gitzip = require("../gitzip");
var convert = require("../convert");
var JSZip = require("jszip");
var FileSaver = require("file-saver");
const scaffoldings = require("../scaffoldings.json");
const { ADOClient } = require("@/utility/ado-rest-client");

import { ToastProgrammatic as Toast } from "buefy";
import mixin from "@/mixins/mixin";

export default {
  name: "MainPanel",
  components: {
    SchemaForm,
  },
  mixins: [mixin],
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
      scaffoldingSettings: {},
      convertedCode: {},
      variables: null,
      schema: {},
      showNotification: false,
      notificationMsg: "",
      adoClient: null,
      createVariableGroups: true,
      createPipelines: true,
      createServiceConnections: true
    };
  },
  methods: {
    // async handleSubmit() {
    //   this.convertedCode = await convert(this.scaffoldingObj, this.variables);
    //   const repo = await this.createRepo();
    //   if (this.createVariableGroups) {
    //     try {
    //       Object.keys(this.scaffoldingSettings.variablegroups).forEach(
    //         (variablegroupName) => {
    //           this.adoClient.createVariableGroup(
    //             variablegroupName,
    //             this.scaffoldingSettings.variablegroups[variablegroupName]
    //           );
    //         }
    //       );
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    //   if (this.createPipelines) {
    //     try {
    //       Object.keys(this.scaffoldingSettings.pipelines).forEach(
    //         (pipelineName) => {
    //           this.adoClient.createPipeline(
    //             this.scaffoldingSettings.pipelines[pipelineName].path,
    //             repo.id,
    //             pipelineName,
    //             this.scaffoldingSettings.pipelines[pipelineName].folder
    //           );
    //         }
    //       );
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    // },
    // async previewCode() {
    //   this.convertedCode = await convert(this.scaffoldingObj, this.variables);
    // },
    // async downloadCode() {
    //   const that = this;
    //   const zip = new JSZip();
    //   const paths = Object.keys(this.convertedCode);
    //   paths.forEach((path) => {
    //     zip.file(path, this.convertedCode[path]);
    //   });
    //   zip.generateAsync({ type: "blob" }).then(function (blob) {
    //     FileSaver.saveAs(blob, that.repoName + ".zip");
    //   });
    //   this.showNotification = true;
    //   this.notificationMsg = "Start Downloading";
    //   setTimeout(() => {
    //     that.showNotification = false;
    //   }, 5000);
    // },
    // loadCode(path) {
    //   return this.convertedCode[path];
    // },
    // async onScaffoldingChanged() {
    //   this.loadScaffodling();
    // },
    // async loadScaffodling() {
    //   const scaffolding = this.scaffoldings[this.scaffoldingsIdx];
    //   this.scaffoldingObj = await gitzip(scaffolding);
    //   const scaffoldingJSON = this.scaffoldingObj["scaffolding.json"];
    //   const scaffoldingSettings = JSON.parse(scaffoldingJSON);
    //   this.schema = {
    //     type: "object",
    //     properties: scaffoldingSettings.variables,
    //   };
    //   this.scaffoldingSettings = scaffoldingSettings;
    //   this.convertedCode = await convert(this.scaffoldingObj, this.variables);
    //   this.$forceUpdate();
    // },
    // async getProjects() {
    //   this.adoProjects = this.adoClient.getProjects();
    // },
    // async createVariableGroup() {
    //   try {
    //     await this.adoClient.createVariableGroup("test0001");
    //   } catch (e) {
    //     console.log(e);
    //   }
    // },
    // async getVariableGroups() {
    //   this.adoClient.getVariableGroups(this.adoProject.id);
    // },
    // async createRepo() {
    //   const repo = await this.adoClient.createRepo(
    //     this.repoName,
    //     this.adoProject.id,
    //     this.convertedCode,
    //     this.scaffoldingSettings.branches
    //   );
    //   const that = this;
    //   this.showNotification = true;
    //   this.notificationMsg = "Create Repo Successfully";
    //   setTimeout(() => {
    //     that.showNotification = false;
    //   }, 5000);
    //   return repo
    //   // const that = this
    //   // const client = getClient(GitRestClient);
    //   // const repository = await client.createRepository(
    //   //   { name: this.repoName },
    //   //   this.adoProject.id
    //   // );
    //   // const paths = Object.keys(this.convertedCode);
    //   // const changes = [];
    //   // paths.forEach((path) => {
    //   //   changes.push({
    //   //     changeType: "add",
    //   //     item: {
    //   //       path: path,
    //   //     },
    //   //     newContent: {
    //   //       content: this.convertedCode[path],
    //   //       contentType: "rawtext",
    //   //     },
    //   //   });
    //   // });
    //   // await client.createPush(
    //   //   {
    //   //     refUpdates: [
    //   //       {
    //   //         name: "refs/heads/main",
    //   //         oldObjectId: "0000000000000000000000000000000000000000",
    //   //       },
    //   //     ],
    //   //     commits: [
    //   //       {
    //   //         comment: "Initial commit.",
    //   //         changes: changes,
    //   //       },
    //   //     ],
    //   //   },
    //   //   repository.id,
    //   //   this.adoProject.id
    //   // );
    //   // this.showNotification = true
    //   // this.notificationMsg = "Create Repo Successfully"
    //   // setTimeout(()=>{
    //   //   that.showNotification = false
    //   // }, 5000)
    // },
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
        that.adoClient = new ADOClient();
        await that.adoClient.init();
        that.adoProjects = await that.adoClient.getProjects();
        if (that.adoProjects.length > 0) {
          that.adoProject = that.adoProjects[0];
        }
      } catch (e) {
        console.log(e);
      }
    })();

    (async () => {
      that.loadScaffodling();
    })();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
