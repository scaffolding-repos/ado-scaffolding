from os import environ
from azureml.core import Workspace
from azureml.core.authentication import InteractiveLoginAuthentication
from azureml.core.authentication import ServicePrincipalAuthentication
from azureml.exceptions import WorkspaceException


def get_aml_workspace(workspace_name, subscription_id, resource_group, location=None):
    """Get AML workspace, create a new one if it doesn't exist.
    - It takes use of service principal authentication if it's running in ADO pipeline, since environment
      variables tenantId, servicePrincipalId and servicePrincipalKey is set by Azure CLI task;
    - While test/debug locally, if there's no servicePrincipalId and servicePrincipalKey, it takes use of
      interactive login authentication instead

    Parameters
    ----------
    workspace_name: string
        AML workspace name
    subscription_id: string
        Azure subscription id
    resource_group: string
        Azure resource group
    location: string
        Azure resource location
    """

    tenant_id = environ.get("tenantId")
    service_principal_id = environ.get("servicePrincipalId")
    service_principal_key = environ.get("servicePrincipalKey")

    # If this is running in ADO pipeline, tenant_id, service_principal_id and service_principal_key is given by Azure CLI task
    if service_principal_id and service_principal_key:
        service_principal_auth = ServicePrincipalAuthentication(tenant_id,
                                                                service_principal_id,
                                                                service_principal_key)
        try:
            ws = Workspace.get(
                name=workspace_name,
                subscription_id=subscription_id,
                resource_group=resource_group,
                auth=service_principal_auth)
        except WorkspaceException:
            print("Not found expected workspace, creating new one instead")
            ws = Workspace.create(
                name=workspace_name,
                subscription_id=subscription_id,
                resource_group=resource_group,
                location=location,
                create_resource_group=True,
                show_output=True,
                auth=service_principal_auth)
    else:   # If it's test/debug run locally, we could only set tenant_id and get/create AML workspace via interactive login authentication
        interactive_login_auth = InteractiveLoginAuthentication(tenant_id=tenant_id)
        try:
            ws = Workspace.get(
                name=workspace_name,
                subscription_id=subscription_id,
                resource_group=resource_group,
                auth=interactive_login_auth)
        except WorkspaceException:
            print("Not found expected workspace, creating new one instead")
            ws = Workspace.create(
                name=workspace_name,
                subscription_id=subscription_id,
                resource_group=resource_group,
                location=location,
                create_resource_group=True,
                show_output=True,
                auth=interactive_login_auth)

    return ws
