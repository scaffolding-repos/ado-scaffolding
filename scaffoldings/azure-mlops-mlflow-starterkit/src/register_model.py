import json
from azureml.core import Experiment, Run
from os import environ
from pathlib import Path
from src.utils.mlops_utils import get_aml_workspace


def register_model():
    # Load configures from settings.json file
    with open(Path("src/resources", "settings.json").as_posix()) as f:
        settings = json.load(f)
    azureml_settings = settings["training"]["azureml"]
    deployment_settings = settings["deployment"]

    # Get workspace
    ws = get_aml_workspace(azureml_settings["workspace_name"],
                           azureml_settings["subscription_id"],
                           azureml_settings["resource_group"])

    # Loading Experiment Run
    experiment = Experiment(workspace=ws, name=environ.get("EXPERIMENT_NAME"))
    run = Run(experiment=experiment, run_id=environ.get("EXPERIMENT_RUN_ID"))

    # Register model
    tags = deployment_settings["model"]["tags"]
    run.register_model(model_name=deployment_settings["model"]["name"],
                       model_path=deployment_settings["model"]["path"],
                       tags=tags)

    print(">>> Registered model properly.")


if __name__ == '__main__':
    register_model()
