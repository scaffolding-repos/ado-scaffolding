# Overview

This extension generates **code repository** of solutions based on Azure Services, such as Azure DataBricks, Azure ML and so on. It can be used as starter kit to simplify the project generation.

It generate the following artifacts for a solution

- A Repo in azure devops project with sample code and branches
- Azure DevOps Pipelines and yaml files
- Azure DevOps Variable groups with environment variables used in Pipelines

After installing this extension, you can find **Scaffolding** under **Repos**

**To download the generated code only, please use the GitHub Page**

https://scaffolding-repos.github.io/ado-scaffolding

## Scaffolding List

1. [azure-databricks-starterkit](https://github.com/scaffolding-repos/ado-scaffolding/blob/release/scaffoldings/azure-databricks-starterkit/scaffolding.md)

   When building a project in Azure Databricks, we can start from a notebook and implement the business logic in Python or SparkSQL. Before go-production, we need to create CI/CD pipelines. To reduce the effort of build CI/CD pipelines, we build this scaffolding as template including sample notebooks and unit tests with CI/CD pipelines in Azure DevOps yaml files.

1. [simple-repo](https://github.com/scaffolding-repos/ado-scaffolding/blob/release/scaffoldings/simple-repo/scaffolding.md)

   This is a sample project to demonstrate how the extension creates sample code, repo, branches, pipelines and variable groups.

1. [simple-nodejs](https://github.com/scaffolding-repos/ado-scaffolding/blob/release/scaffoldings/simple-nodejs/scaffolding.md)

   This is a sample NodeJS project.

## Open Source

The source code of this extension is at github

https://github.com/scaffolding-repos/ado-scaffolding