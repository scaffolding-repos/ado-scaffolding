import * as SDK from "azure-devops-extension-sdk";

import axios from "axios";
import { getClient } from "azure-devops-extension-api";
import { CoreRestClient } from "azure-devops-extension-api/Core";
import { GitRestClient } from "azure-devops-extension-api/Git/GitClient";
import { TaskAgentRestClient } from "azure-devops-extension-api/TaskAgent/TaskAgentClient";

class ADOClient {
  constructor() {}
  account = null;
  user = null;
  project = null;
  host = null;
  tenant = null;
  token = null;
  authHeader = null;
  VSS = null;
  axiosInstance = null;
  async init() {
    this.VSS = VSS || window.VSS;
    const VSS = this.VSS;
    const that = this;
    VSS.init();
    VSS.ready(function () {
      VSS.require(["VSS/Authentication/Services"], function (VSS_Auth_Service) {
        VSS.getAccessToken().then(function (token) {
          that.token = token;
          that.authHeader =
            VSS_Auth_Service.authTokenManager.getAuthorizationHeader(token);
          that.user = VSS.getWebContext().user;
          that.account = VSS.getWebContext().account;
          that.project = VSS.getWebContext().project;
          that.host = VSS.getWebContext().host;
          that.tenant = VSS.getWebContext().tenant;

          that.axiosInstance = axios.create({
            baseURL: that.host.uri,
            timeout: 3000,
            headers: {
              authorization: that.authHeader,
              "Content-Type": "application/json",
            },
          });
        });
      });
    });

    await SDK.init();
  }

  async getProjects() {
    const client = getClient(CoreRestClient);
    const projects = await client.getProjects();
    return projects;
  }

  async createRepo(repoName, projectId, code, branches) {
    branches = branches || {'main':{description:"Main Branch"}}
    branches = Object.keys(branches)
    const client = getClient(GitRestClient);
    const repository = await client.createRepository(
      { name: repoName },
      projectId
    );
    const paths = Object.keys(code);
    const changes = [];
    paths.forEach((path) => {
      changes.push({
        changeType: "add",
        item: {
          path: path,
        },
        newContent: {
          content: code[path],
          contentType: "rawtext",
        },
      });
    });

    const gitPush = await client.createPush(
      {
        refUpdates: [
          {
            name: "refs/heads/"+branches[0],
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
      projectId
    );

    if(branches.length>1) {
      let objId =gitPush.commits[0].commitId
      for(let i=1;i<branches.length;i++) {
         const result = await client.updateRefs(
          [
            {
              "name":"refs/heads/"+branches[i],
              "oldObjectId": "0000000000000000000000000000000000000000",
              "newObjectId": objId
            }
          ],
          repository.id,
          projectId
        );
        objId = result[0].newObjectId
        
      }
    }


    
    return repository
  }
  // variables = {
  //   prop1: {
  //     isSecredt: false,
  //     value: "val1",
  //   },
  // }
  async createVariableGroup(variablegroupName, variables) {
    const data = JSON.stringify({
      name: variablegroupName,
      type: "Vsts",
      description: variablegroupName,
      variables: variables,
      providerData: {
        name: variablegroupName,
        description: variablegroupName,
        projectReference: this.project,
      },
      variableGroupProjectReferences: [
        {
          name: variablegroupName,
          description: variablegroupName,
          projectReference: this.project,
        },
      ],
    });
    try {
      const response = await this.axiosInstance({
        method: "post",
        url: `/${this.project.id}/_apis/distributedtask/variablegroups`,
        params: {
          "api-version": "6.0-preview.2",
        },
        data: data,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createPipeline(yamlPath, repoId, pipelineName, folder) {
    const data = JSON.stringify({
      configuration: {
        path: yamlPath,
        repository: {
          id: repoId,
          type: "azureReposGit",
        },
        type: "yaml",
      },
      name: pipelineName,
      folder: "\\" + folder,
    });
    try {
      const response = await this.axiosInstance({
        method: "post",
        url: `/${this.project.id}/_apis/pipelines`,
        params: {
          "api-version": "6.1-preview.1",
        },
        data: data,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getVariableGroups(projectId) {
    const client = getClient(TaskAgentRestClient);
    const variableGroups = await client.getVariableGroups(projectId);
    return variableGroups
  }

  async createAMLServiceConnection(
    subscriptionId,
    resourceGroup,
    tenantId,
    mlWorkspaceName,
    mlWorkspaceLocation,
    mlServiceConnectionName) {
    const data = JSON.stringify({
      "data": {
        "environment": "AzureCloud",
        "scopeLevel": "AzureMLWorkspace",
        "subscriptionId": subscriptionId,
        "resourceGroupName": resourceGroup,
        "mlWorkspaceName": mlWorkspaceName,
        "mlWorkspaceLocation": mlWorkspaceLocation,
        "creationMode": "Automatic"
      },
      "name": mlServiceConnectionName,
      "type": "azurerm",
      "description": "",
      "authorization": {
        "parameters": {
          "tenantid": tenantId,
          "authenticationType": "spnKey"
        },
        "scheme": "ServicePrincipal"
      },
      "isShared": false,
      "isReady": true,
      "serviceEndpointProjectReferences": [
        {
          "projectReference": this.project,
          "name": mlServiceConnectionName
        }]
    });
    try {
      const response = await this.axiosInstance({
        method: "post",
        url: `/${this.project.name}/_apis/serviceendpoint/endpoints`,
        params: {
          "api-version": "6.0-preview.4",
        },
        data: data,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export { ADOClient };
