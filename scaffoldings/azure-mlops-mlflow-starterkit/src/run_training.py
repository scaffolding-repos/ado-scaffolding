import json
import mlflow
from azureml.core import Experiment
from pathlib import Path
from utils.mlops_utils import get_aml_workspace

# Load the JSON settings file and relevant section
print(">>> Loading settings")
with open(Path("resources", "settings.json").as_posix()) as f:
    settings = json.load(f)
azureml_settings = settings["azureml"]
experiment_settings = settings["experiment"]
deployment_settings = settings["deployment"]
compute_target_settings = settings["compute_target"]


# Get workspace
ws = get_aml_workspace(azureml_settings["workspace_name"],
                       azureml_settings["subscription_id"],
                       azureml_settings["resource_group"])


# Set mlflow tracking
mlflow.set_tracking_uri(ws.get_mlflow_tracking_uri())

# os.environ["MLFLOW_TRACKING_URI"] = ws.get_mlflow_tracking_uri()

# Attach Experiment
print(">>> Loading Experiment")
exp = Experiment(workspace=ws,
                 name=experiment_settings["name"])
mlflow.set_experiment(exp.name)


# Submit Project
print(">>> Running mlflow project on AML")
remote_mlflow_run = mlflow.projects.run(uri=".",
                                        parameters={"epochs": 200},
                                        backend="azureml",
                                        backend_config={"COMPUTE": compute_target_settings["training"]["amlcompute"]["name"],
                                                        "USE_CONDA": True},
                                        synchronous=True)

# Save run details
run_details = {}
run_details["run_id"] = remote_mlflow_run.run_id
run_details["experiment_name"] = exp.name

print(f">>> Experiment run id: {remote_mlflow_run.run_id}")
with open(Path("resources", "run_details.json").as_posix(), "w") as outfile:
    json.dump(run_details, outfile)
