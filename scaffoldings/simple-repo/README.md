# {%{=params.name}%}

{%{=params.description}%}

This is a sample project to demonstrate how the extension creates sample code, repo, branches, pipelines and variable groups.

- Sample Code:

  It creates a simple shell script in the repo to echo the input argument.
the shell script is located [src/echo.sh](src/echo.sh)

- Branches:

  It creates three branches: **dev, stg, release**.

- Pipeline:

  It creates a pipeline named **pr_pipeline** under folder **pipelines**, with the yaml file located at [./devops/pipeline.yml](./devops/pipeline.yml), it will trigger when a PR occurred in **dev branch**. .

- Variable Group:

  It creates a Variable Group named **sample-vg** with one variable named **sample_var**.

By clicking the "Create" button, the extension will generate the above components in the selected project and then the pipeline can be run to invoke the shell script.

## References

- Pipeline:
https://docs.microsoft.com/en-us/azure/devops/pipelines/get-started/what-is-azure-pipelines?view=azure-devops

- Variable Groups:
https://docs.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups?view=azure-devops&tabs=yaml