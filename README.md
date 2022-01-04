# An Azure DevOps Extension for Azure Solutions Scafoddlings

This is a repo of Azure DevOps Extension to generate code of solutions based on Azure Services, such as Azure DataBricks, Azure ML and so on. User can use this extension as startkit to simplify the project generation.

Generally, this extension generates the code includes:

- A Repo with sample code and branches
- Azure DevOps Pipelines and yaml files
- Azure DevOps Variable groups with environment variables used in Pipelines

## How to use

- Install from Azure DevOps Marketplace

Note: The extension need permission scopes to generate repo, branches and pipelines. And it is hosed as Github Pages, no server-side to collect user data.

- GitHub Page

https://scaffolding-repos.github.io/ado-scaffolding/

Code download only.
Note: repo and pipelines will not be generated.

## How to contribute

### Create your own scafoddling

- Fork this repo and create a new folder under scaffoldings folder
- Put your sample code under the folder
- Find [./src/scaffoldings.json]{./src/scaffoldings.json} and put the folder name into this json file.
- create a scaffolding.json file and define the following fields:
  - variables

    The variables will be rendered in the extension as input fields, and the value of the variable input by user will be used to replace in the code.

  - rules

    It is a key-value collection, key is the file name, value is the name of variables which type is boolean, the file will be created in the scaffolding when the value is true, vice versa  

  - branches

    The code branches will be created in the repo by the extension. The first one is default branch.

  - pipelines

    Pipelines will be created by the extension

  - variablegroups
  
    Variablegroups will be created by the extension

- Build the scaffolding

```shell
npm install
gulp
```

- Test the scaffolding

```shell
npm run serve
```

And open your web browser and visit
https://localhost:8080

In the local mode, you can only check teh code generation. the repo, pipeline and variable group cannot be created.

- Create a pull request to this repo

### an example of scafollding.json

```json
{
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
    "gitignore": {
      "type": "boolean",
      "title": "Need .gitignore",
      "default": true
    }
  },
  "rules": {
    ".gitignore": "gitignore"
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
    "pr_pipeline":{
      "folder":"pipelines",
      "path":"devops/pipeline.yml"
    }
  }
}
```

Here is a README.md as sample code

```md
# {%{=params.name}%}

{%{=params.description}%}
```

In this example, the extension will replace

- params.name with the value of variable 'name'
- params.description with the value of variable 'description'

Use {%{ params.[VARIABLE_NAME]}%} in sample code for dynamic content.

Please find existing scaffoldings as reference under [./scaffoldings](./scaffoldings) folder
