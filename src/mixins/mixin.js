

var gitzip = require("../gitzip");
var convert = require("../convert");
var JSZip = require("jszip");
var FileSaver = require("file-saver");


export default {
    methods: {
        async handleSubmit() {
          this.convertedCode = await convert(this.scaffoldingObj, this.variables, this.createPipelines);
          const repo = await this.createRepo();
          if (this.createVariableGroups) {
            try {
              Object.keys(this.scaffoldingSettings.variablegroups).forEach(
                (variablegroupName) => {
                  this.adoClient.createVariableGroup(
                    variablegroupName,
                    this.scaffoldingSettings.variablegroups[variablegroupName]
                  );
                }
              );
            } catch (error) {
              console.log(error);
            }
          }
    
          if (this.createPipelines) {
            try {
              Object.keys(this.scaffoldingSettings.pipelines).forEach(
                (pipelineName) => {
                  this.adoClient.createPipeline(
                    this.scaffoldingSettings.pipelines[pipelineName].path,
                    repo.id,
                    pipelineName,
                    this.scaffoldingSettings.pipelines[pipelineName].folder
                  );
                }
              );
            } catch (error) {
              console.log(error);
            }
          }

          if (this.createServiceConnections) {
            try {
              Object.keys(this.scaffoldingSettings.serviceconnections).forEach(
                (serviceconnectionName) => {
                  if (this.scaffoldingSettings.serviceconnections[serviceconnectionName].type == "AzureMLWorkspace") {
                    this.adoClient.createAMLServiceConnection(
                      this.variables.subscriptionId,
                      this.variables.resourceGroup,
                      this.variables.tenantId,
                      this.variables.mlWorkspaceName,
                      this.variables.mlWorkspaceLocation,
                      serviceconnectionName
                    );
                  }
                }
              );
            } catch (error) {
              console.log(error);
            }
          }          
        },
        async previewCode() {

          this.convertedCode = await convert(this.scaffoldingObj, this.variables, this.createPipelines);
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
    
          this.showNotification = true;
          this.notificationMsg = "Start Downloading";
    
          setTimeout(() => {
            that.showNotification = false;
          }, 5000);
        },
        loadCode(path) {
          return this.convertedCode[path];
        },
        async onScaffoldingChanged() {
          this.loadScaffodling();
        },
        async loadScaffodling() {
          const scaffolding = this.scaffoldings[this.scaffoldingsIdx];
          this.scaffoldingObj = await gitzip(scaffolding);
          const scaffoldingJSON = this.scaffoldingObj["scaffolding.json"];
          const scaffoldingSettings = JSON.parse(scaffoldingJSON);
          this.schema = {
            type: "object",
            properties: scaffoldingSettings.variables,
          };
          this.scaffoldingSettings = scaffoldingSettings;
          this.convertedCode = await convert(this.scaffoldingObj, this.variables, this.createPipelines);
          this.$forceUpdate();
        },
        async getProjects() {
          this.adoProjects = this.adoClient.getProjects();
        },
        async createVariableGroup() {
          try {
            await this.adoClient.createVariableGroup("test0001");
          } catch (e) {
            console.log(e);
          }
        },
    
        async getVariableGroups() {
          this.adoClient.getVariableGroups(this.adoProject.id);
        },
        async createRepo() {
          const repo = await this.adoClient.createRepo(
            this.repoName,
            this.adoProject.id,
            this.convertedCode,
            this.scaffoldingSettings.branches
          );
          const that = this;
          this.showNotification = true;
          this.notificationMsg = "Create Repo Successfully";
          setTimeout(() => {
            that.showNotification = false;
          }, 5000);
    
          return repo
        },
      },
  };