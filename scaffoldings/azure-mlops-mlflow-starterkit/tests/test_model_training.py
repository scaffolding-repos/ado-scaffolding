import os
from pathlib import Path
from src.run_training import train_model


def test_model_training():
    # Trigger model training
    train_model()

    # Check local experiment run results path
    mlruns_results_path = Path("mlruns/0")
    assert mlruns_results_path.is_dir()

    # Check model file existence
    mlruns_results = os.listdir(mlruns_results_path)
    # The numeric mlrun folder would have one run id folder and one meta.yaml file,
    # totally 2 objects by default
    assert len(mlruns_results) == 2

    for result_object in mlruns_results:
        if Path(result_object).is_dir():
            sub_result_folders = os.listdir(result_object)
            for sub_result_object in sub_result_folders:
                if "artifacts" in sub_result_object:
                    model_path = Path(sub_result_object, "model/data/model.pth")
                    assert Path(model_path).is_file()
