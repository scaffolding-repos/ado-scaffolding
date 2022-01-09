import json
import mlflow.azureml
from azureml.core.webservice import AciWebservice
from os import environ
from pathlib import Path
from src.utils.mlops_utils import get_aml_workspace


def deploy_model():
    # Load configures from settings.json file
    with open(Path("src/resources", "settings.json").as_posix()) as f:
        settings = json.load(f)
    azureml_settings = settings["training"]["azureml"]
    deployment_settings = settings["deployment"]
    aci_settings = deployment_settings["dev_deployment"]

    # Get workspace
    ws = get_aml_workspace(azureml_settings["workspace_name"],
                           azureml_settings["subscription_id"],
                           azureml_settings["resource_group"])

    # Deploying model on ACI
    aci_config = AciWebservice.deploy_configuration(
        cpu_cores=aci_settings["cpu_cores"],
        memory_gb=aci_settings["memory_gb"])

    mlflow.set_tracking_uri(ws.get_mlflow_tracking_uri())

    # Deploying dev web service from image
    mlflow.azureml.deploy(model_uri='runs:/{}/{}'.format(environ.get("EXPERIMENT_RUN_ID"),
                                                         deployment_settings["model"]["path"]),
                          workspace=ws,
                          deployment_config=aci_config,
                          service_name=aci_settings["name"],
                          model_name=deployment_settings["model"]["name"])

    print(">>> Deployed model as scoring web service properly.")


if __name__ == '__main__':
    deploy_model()
