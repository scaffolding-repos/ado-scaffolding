# {%{=params.name}%}

{%{=params.description}%}

- Notebooks:

  All notebooks are located under [src](./src) folder. And follow this [document](https://docs.microsoft.com/en-us/azure/databricks/repos) you can import the notebooks from the repository to databricks workspace.

  Under [test](./test) folder, there are testing notebooks build with  nutter framework.

- Code Branch:

  The repo of the project has three branches: **dev, stg, release**.

  - **dev branch** is the code base of development
  - **stg branch** is for integration testing
  - **release branch** is for production deployment
  
- Pipeline:

  The project has 3 devops pipelines

  - **pr-pipeline** triggered when code merged into **dev branch**, it will run testing.

  - **cd-pipeline** triggered when code merged into **stg branch**, it will run testing.

  - **pd-pipeline** triggered when code merged into **release branch**, it will run testing and deploy notebooks to the production Databricks workspace and cluster.

- Variable Group:

  It creates 3 Variable Groups as the names below
  - Databricks-dev-environment
  - Databricks-stg-environment
  - Databricks-prod-environment
  
  Each variable group has 3 variables:
  - **databricksClusterId_[dev|stg|prod]**: the id of Databricks cluster.
  - **databricksDomain_[dev|stg|prod]**: the url of Databricks workspace.
  - **databricksToken_[dev|stg|prod]**: the access token of Databricks.

Before running the pipeline, please fill the value of variables.

## References

- [Azure DevOps](https://azure.microsoft.com/en-us/services/devops/)
- [Azure Databricks](https://azure.microsoft.com/en-au/free/databricks/)
- [Azure Resource Manager](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/overview)
- [nutter](https://github.com/microsoft/nutter)
- [databricks cli](https://docs.microsoft.com/en-us/azure/databricks/dev-tools/cli/)
- [dbx](https://github.com/databrickslabs/dbx) - Databricks CLI extensions
