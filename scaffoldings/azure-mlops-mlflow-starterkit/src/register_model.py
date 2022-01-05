import json
from azureml.core import Experiment, Run
from pathlib import Path
from utils.mlops_utils import get_aml_workspace


# Load the JSON settings file and relevant section
print(">>> Loading settings")
with open(Path("resources", "settings.json").as_posix()) as f:
    settings = json.load(f)
azureml_settings = settings["azureml"]
experiment_settings = settings["experiment"]
deployment_settings = settings["deployment"]

# Get details from Run
print(">>> Loading Run Details")
with open(Path("resources", "run_details.json").as_posix()) as f:
    run_details = json.load(f)

# Get workspace
ws = get_aml_workspace(azureml_settings["workspace_name"],
                       azureml_settings["subscription_id"],
                       azureml_settings["resource_group"])

# Loading Experiment Run
print(">>> Loading Experiment Run")
experiment = Experiment(workspace=ws, name=run_details["experiment_name"])
run = Run(experiment=experiment, run_id=run_details["run_id"])

# Register model
tags = deployment_settings["model"]["tags"]
model = run.register_model(model_name=deployment_settings["model"]["name"],
                           model_path=deployment_settings["model"]["path"],
                           tags=tags,
                           description=deployment_settings["model"]["description"])
