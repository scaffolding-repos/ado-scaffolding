<template>
  <div class="columns" style="height: 100%; overflow: hidden">
    <div class="column is-half">
      <form class="box">
        <b-field label="Scaffolding">
          <b-select placeholder="Select Scaffolding" expanded v-model="scaffoldingsIdx" @input="onScaffoldingChanged">
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
        <schema-form
          :schema="schema"
          v-model="variables"
          @submit="handleSubmit()"
          @submit2="previewCode()"
        />
      </form>
      <pre>
        {{ JSON.stringify(variables, null, 4) }}
      </pre>
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
// import { CoreRestClient } from "azure-devops-extension-api/Core";
import { GitRestClient } from "azure-devops-extension-api/Git/GitClient";
import SchemaForm from "@/components/SchemaForm";

var gitzip = require("../gitzip");
var convert = require("../convert");

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
      scaffoldings: [
        {
          account: "scaffolding-repos",
          repo: "simple-nodejs",
          branch: "main",
        },
      ],
      scaffoldingsIdx: 0,
      scaffoldingObj: {},
      convertedCode: {},
      variables: null,
      schema: {},
    };
  },
  methods: {
    async handleSubmit() {
      console.log(this.variables);
      this.convertedCode = await convert(this.scaffoldingObj, this.variables);
      console.log(this.convertedCode);
    },
    async previewCode() {
      this.convertedCode = await convert(this.scaffoldingObj, this.variables);
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
    async createRepo(repoName, project) {
      const client = getClient(GitRestClient);
      const repository = await client.createRepository(
        { name: repoName },
        project
      );
      await client.createPush(
        {
          refUpdates: [
            {
              name: "refs/heads/main",
              oldObjectId: "c913f4b6f62dd4ea7c5260a5385173c7a95f5110",
            },
          ],
          commits: [
            {
              comment: "Initial commit.",
              changes: [
                {
                  changeType: "add",
                  item: {
                    path: "/readme3.md",
                  },
                  newContent: {
                    content: "My third file!",
                    contentType: "rawtext",
                  },
                },
              ],
            },
          ],
        },
        repository.id,
        project
      );
    },
  },
  mounted() {
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
      try{
        await SDK.init();
      } catch(e) {
        console.log(e);
      }
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
