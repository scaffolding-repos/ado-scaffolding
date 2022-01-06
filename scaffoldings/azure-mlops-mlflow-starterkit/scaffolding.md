# Overview

This is a simple MLOps scaffolding template using azureml-mlflow and Pytorch to train and register an Iris classifier model in _Azure Machine Learning_ studio, and finally deploy it to _Azure Container Instances_ as scoring web service.

The following list is the scope of this scaffolding:

1. Sample code to train an Iris classifier model, register it to AML workspace and deploy it as scoring web service, using azureml-mlflow and Pytorch.
2. DevOps CI pipeline to build and publish relevant Python source code as artifact.
3. DevOps CD pipeline to train and register model in AML workspace, and finally deploy it as scoring web service, which requires AML service connection to bridge between Azure DevOps and AML, therefore you need to provide below values before create Git repo from the given template, with which the _Scaffolding_ extension would help to create required AML service connection for you automatically.
    - Subscription ID
    - Resource Group
    - Tenant ID
    - AML workspace name
    - AML workspace location
