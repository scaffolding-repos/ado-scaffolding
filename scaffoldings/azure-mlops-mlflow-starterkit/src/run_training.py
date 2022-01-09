import json
import mlflow
from azureml.core import Experiment
from os import environ
from pathlib import Path
from src.utils.mlops_utils import get_aml_workspace


def train_model():
    # Load configures from settings.json file
    with open(Path("src/resources/settings.json").as_posix()) as f:
        settings = json.load(f)

    training_platform = environ.get("TRAINING_PLATFORM")
    training_backend_config = None
    use_conda = True
    if training_platform == "azureml":
        azureml_settings = settings["training"]["azureml"]
        training_backend_config = {"COMPUTE": azureml_settings["compute_target"]["name"]}

        # Get AML workspace
        ws = get_aml_workspace(azureml_settings["workspace_name"],
                               azureml_settings["subscription_id"],
                               azureml_settings["resource_group"])

        # Set mlflow tracking uri
        mlflow.set_tracking_uri(ws.get_mlflow_tracking_uri())

        # Attach AML experiment
        exp = Experiment(workspace=ws,
                         name=azureml_settings["experiment"]["name"])
        mlflow.set_experiment(exp.name)
    elif training_platform == "local":
        azureml_settings = settings["training"]["local"]
        use_conda = False

    # Submit mlflow project
    remote_mlflow_run = mlflow.projects.run(uri="src",
                                            parameters={"epochs": azureml_settings["epochs"]},
                                            backend=training_platform,
                                            backend_config=training_backend_config,
                                            use_conda=use_conda,
                                            synchronous=True)

    # Set output variable to Azure DevOps pipeline with experiment_name and
    # run_id, then subsequent DevOps pipeline stages could find the target experiment run
    if training_platform == "azureml":
        print(f"##vso[task.setvariable variable=experimentName;isOutput=true]{exp.name}")
        print(f"##vso[task.setvariable variable=experimentRunId;isOutput=true]{remote_mlflow_run.run_id}")


if __name__ == '__main__':
    train_model()
