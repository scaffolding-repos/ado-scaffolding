# Overview

When building a project in Databricks, we can start from a notebook and implement the business logic in Python or SparkSQL. Before go-production, we need to create CI/CD pipelines. To reduce the effort of build CI/CD pipelines, we build this scaffolding as template including sample notebooks and unit tests with CI/CD pipelines in Azure DevOps yaml files.

The following list is the scope of this scaffolding:

1. Sample code of a notebook
2. Testing code for the sample notebook
3. DevOps pipelines build, test and deploy the spark jobs on Databricks cluster
