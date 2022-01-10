# Overview

This extension generates the scaffolding of solutions based on Azure Services, such as Azure Databricks, Azure ML and users can import their own scaffolding template as a zip file.

It can be used as starter kit to simplify the project generation.

It generates the following artifacts for a solution:

- **Generate Azure DevOps Repository** in the project with sample code and branches.
- **Generate Azure DevOps Pipelines** with yaml files.
- **Generate Azure DevOps Variable Groups** with environment variables used in pipelines.

Note: The extension needs the permission scopes as below. And it is hosed as Github Pages (a static website), so **no user data can be collected**.

```text
    "vso.build_execute",
    "vso.project_manage",
    "vso.work_full",
    "vso.release_manage",
    "vso.settings",
    "vso.variablegroups_manage",
    "vso.code_full",
    "vso.tokens",
    "vso.tokenadministration",
    "vso.security_manage",
    "vso.machinegroup_manage",
    "vso.environment_manage",
    "vso.taskgroups_manage",
    "vso.serviceendpoint_manage"
```

After installing this extension, you can find **Scaffolding** under **Repos**

![**Scaffolding** under **Repos**](https://github.com/scaffolding-repos/ado-scaffolding/raw/dev/screenshots/scaffolding.png)

Click **Scaffolding** to go to the extension UI.

![**Scaffolding** under **Repos**](https://github.com/scaffolding-repos/ado-scaffolding/raw/dev/screenshots/extension_ui.png)

**If download the generated code only, please use the GitHub Page, no Azure DevOps extension install needed.**

https://scaffolding-repos.github.io/ado-scaffolding

## Build-in Scaffolding List

The scaffolding templates provided by this extension.

1. [azure-databricks-starterkit](https://github.com/scaffolding-repos/ado-scaffolding/blob/release/scaffoldings/azure-databricks-starterkit/scaffolding.md)

   When building a project in Azure Databricks, we can start from a notebook and implement the business logic in Python or SparkSQL. Before go-production, we need to create CI/CD pipelines. To reduce the effort of build CI/CD pipelines, we build this scaffolding as template including sample notebooks and unit tests with CI/CD pipelines in Azure DevOps yaml files.

1. [azure-mlops-mlflow-starterkit](https://github.com/scaffolding-repos/ado-scaffolding/blob/release/scaffoldings/azure-mlops-mlflow-starterkit/scaffolding.md)

    This is a MLOps scaffolding template using azureml-mlflow and Pytorch to train and register an Iris classifier model in _Azure Machine Learning_ studio, and deploy it to _Azure Container Instances_ as scoring web service.

1. [simple-repo](https://github.com/scaffolding-repos/ado-scaffolding/blob/release/scaffoldings/simple-repo/scaffolding.md)

   This is a sample project to demonstrate how the extension creates sample code, repo, branches, pipelines and variable groups.

## Import scaffolding as zip file

You can import your own scaffolding as a zip file

![import a zip](https://github.com/scaffolding-repos/ado-scaffolding/raw/dev/screenshots/import_zip.png)

### Create your scaffolding as zip file

1. Put all sample code under the folder named as your scaffolding name.
2. Create a **scaffolding.json** file.
3. zip the folder and import.

### The content of scaffolding.json

In the **scaffolding.json**, you need define the following fields:

- variables

    The variables will be rendered in the extension as input fields, and the value of the variable input by user will be used in template engine to generate code.

    ```json
    "variables": {
        "name": {
            "type": "string",
            "title": "Project Name",
            "default": "sampleApp"
        },
        ...
    }
    ```

    **Build-in variable:**

    **_pipeline** is a boolean type build-in variable to identify if "Create Pipelines" is checked by user.

- rules

    It is a key-value collection, the key is the file name, and the value is the name of variables which type is boolean. The value can be an array, when multiple boolean variables applied. see the example below.

    ```json
    "rules": {
        "test/test.sh": "test",
        "devops/pipeline.yml": "_pipelines",
        "devops/ci_pipeline.yml": ["_pipelines", "test"]
    }
    ```

    The file will be created in the scaffolding when the value is true, vice versa.

- branches

    ```json
    "branches":{
        "dev":{
            "description": "Dev Branch"
        },
        "stg":{
            "description": "Staging Branch"
        },
        "release":{
            "description": "Release Branch"
        }
    }
    ```

    Define the code branches to be created in the repo by the extension. The first one is the default branch.

- pipelines

    ```json
    "pipelines": {
        "ci_pipeline":{
            "folder":"pipelines",
            "path":"devops/ci_pipeline.yml"
        },
        "cd_pipeline":{
            "folder":"pipelines",
            "path":"devops/cd_pipeline.yml"
        }
    }
    ```

    Define the pipelines to be created by the extension.

- variable groups

    ```json
    "variablegroups": {
        "sample-vg": { //variable group name
            "sample_var": { //variable name
                "isSecured": false,
                "value": "val"
            }
        }
    }
    ```

    Variable groups will be created by the extension.

### An entire example of scaffolding.json

```json
{
  "name":"simple-repo",
  "variables": {
    "name": {
      "type": "string",
      "title": "Project Name",
      "default": "sampleApp"
    },
    "description": {
      "type": "string",
      "title": "Project Description",
      "default": "sample app"
    },
    "test": {
      "type": "boolean",
      "title": "Need Test",
      "default": true
    },
    "license": {
      "type": "string",
      "title": "License",
      "enum": ["Apache-2.0", "ISC"],
      "default": "ISC"
    }
  },
  "rules": {
    "test/test.sh": "test",
    "devops/pipeline.yml": "_pipelines",
    "devops/ci_pipeline.yml": ["_pipelines", "test"]
  },
  "branches":{
    "dev":{
      "description": "Dev Branch"
    },
    "stg":{
      "description": "Staging Branch"
    },
    "release":{
      "description": "Release Branch"
    }
  },
  "variablegroups": {
    "sample-vg": {
      "sample_var": {
        "isSecured": false,
        "value": "val"
      }
    }
  },
  "pipelines": {
    "ci_pipeline":{
      "folder":"pipelines",
      "path":"devops/ci_pipeline.yml"
    },
    "cd_pipeline":{
      "folder":"pipelines",
      "path":"devops/cd_pipeline.yml"
    }
  }
}
```

### Render variables as form in the extension view automatically

The variables in the above scaffolding.json will be rendered as a form in extension UI.
![scaffolding settings](https://github.com/scaffolding-repos/ado-scaffolding/raw/dev/screenshots/settings.png "scaffolding settings")

### Template Engine

This extension uses [doT.js](https://olado.github.io/doT/) as template engine to generate code.

- Tag, to avoid conflict with sample code grammar, it uses

  - **{%{ as start tag**
  - **}%} as end tag**

- Interpolate

  Here is a markdown template of README.md, for example, it uses two variables _name_, and _description_:

    ```md
    # {%{=params.name}%}

    {%{=params.description}%}
    ```

    This extension will generate the README.md based on the variable input by users. 

    When name is **"MyApp"** and description is **"My Application"**

    ```md
    # MyApp

    My Application
    ```

- Conditional

    ```md
    {%{ if(params._pipelines)  }%}

    _Put the conditional code here_

    {%{ } }%}
    ```

    The code will be generated only if the variable **_pipelines** is **true**

    _Here **_pipelines** is the build-in variable to identify if user need create pipelines by selecting the checkbox in extension UI._

- Advanced Usage

  Please refer [doT.js doc](https://olado.github.io/doT/) for more advanced usage of the template engine.

## Open Source under MIT

The source code of this extension is at github

https://github.com/scaffolding-repos/ado-scaffolding