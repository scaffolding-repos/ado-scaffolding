// Type definitions for Microsoft Visual Studio Services v141.20180928.1724
// Project: https://www.visualstudio.com/integrate/extensions/overview
// Definitions by: Microsoft <vsointegration@microsoft.com>

/// <reference types='knockout' />
/// <reference types='jquery' />
/// <reference types='jqueryui' />
/// <reference types='q' />
/// <reference types='requirejs' />
/// <reference types='react' />
/// <reference types='mousetrap' />
/// <reference path='vss.d.ts' />
/// <reference path='rmo.contracts.d.ts' />
/// <reference path='tfs.d.ts' />
declare module "ReleaseManagement/Core/Constants" {
export module ApprovalOptions {
    var ApprovalMinimumTimeoutInMinutes: number;
    var ApprovalMaximumTimeoutInMinutes: number;
}
export module ArtifactDefinitionConstants {
    var ProjectId: string;
    var ConnectionId: string;
    var ConnectionName: string;
    var DefinitionId: string;
    var DefaultVersionTypeId: string;
    var DefaultVersionBranchId: string;
    var DefaultVersionTagsId: string;
    var DefaultVersionSpecificId: string;
    var LatestType: string;
    var LatestFromBranchType: string;
    var LatestWithBranchAndTagsType: string;
    var LatestWithBuildDefinitionBranchAndTagsType: string;
    var SpecificVersionType: string;
    var SelectDuringReleaseCreationType: string;
    var RepositoryId: string;
    var BranchId: string;
    var MappingsId: string;
    var MappingTypeId: string;
    var ServerPathId: string;
    var LocalPathId: string;
    var ArtifactId: string;
    var ItemPath: string;
    var Version: string;
    var ArtifactSourceVersionUrl: string;
    var ArtifactSourceDefinitionUrl: string;
    var ArtifactItems: string;
    var LabelSources: string;
    var LabelSourcesFormat: string;
    var CheckoutSubmodules: string;
    var CheckoutNestedSubmodules: string;
    var GitLfsSupport: string;
    var FetchDepth: string;
    var ReportBuildStatus: string;
    var ArtifactItemContent: string;
    var BranchesId: string;
    var VisibleRule: string;
    var JenkinsJobTypeId: string;
    var Feed: string;
    var RegistryUrl: string;
    var IsTriggeringArtifact: string;
    var ConnectedServiceId: string;
}
export module ArtifactDownloadInputConstants {
    var All: string;
    var Selective: string;
    var Skip: string;
}
export module ArtifactTypes {
    var BuildArtifactType: string;
    var GitArtifactType: string;
    var GitHubArtifactType: string;
    var JenkinsArtifactType: string;
    var TfvcArtifactType: string;
    var NugetArtifactType: string;
    var TfsOnPremArtifactType: string;
    var ExternalGitArtifactType: string;
    var ExternalTfsBuildArtifactType: string;
    var SvnArtifactType: string;
    var ExternalTfsXamlBuildArtifactType: string;
    var PackageManagementArtifactType: string;
    var DockerHubArtifactType: string;
    var AzureContainerRepositoryArtifactType: string;
}
export module BuildVersionConstants {
    var SourceBranchKey: string;
    var SourceVersionKey: string;
    var RepositoryIdKey: string;
    var RepositoryTypeKey: string;
    var PullRequestSourceBranchCommitIdKey: string;
    var PullRequestMergedAtKey: string;
    var PullRequestIdKey: string;
    var CommitMessageKey: string;
}
export module DeploymentHealthOptionConstants {
    var AllTargetsInParallel: string;
    var HalfOfTargetsInParallel: string;
    var QuarterOfTargetsInParallel: string;
    var OneTargetAtATime: string;
    var Custom: string;
}
export module FavoriteItemKeys {
    var ReleaseDefinitionId: string;
    var RestEndpointUrl: string;
    var WebEndpointUrl: string;
}
export module FavoriteItemNames {
    var ReleaseDefinitionItemName: string;
}
export module FavoriteItemTypes {
    var ReleaseDefinitionTypeName: string;
}
export module FavoritesScopeNames {
    var ReleaseDefinitionScopeName: string;
}
export module RedeployTriggerAction {
    var LatestSuccessfulDeployment: string;
    var SpecificRelease: string;
}
export module RunOptionsConstants {
    var EnvironmentOwnerEmailNotificationValueAlways: string;
    var EnvironmentOwnerEmailNotificationValueTypeOnlyOnFailure: string;
    var EnvironmentOwnerEmailNotificationValueNever: string;
    var EnvironmentOwnerEmailNotificationTypeDefaultValue: string;
    var ReleaseCreator: string;
    var EnvironmentOwner: string;
}
export module VariableGroupType {
    var Vsts: string;
    var AzureKeyVault: string;
}
export module WellKnownExtendedReleaseVariables {
    var ReleaseArtifacts: string;
    var ReleaseEnvironments: string;
}
export module WellKnownMetrics {
    var SuccessfulDeployments: string;
    var FailedDeployments: string;
    var PartiallySuccessfulDeployments: string;
}
export module WellKnownPullRequestVariables {
    var PullRequestSystemType: string;
    var PullRequestId: string;
    var PullRequestSourceBranchCommitId: string;
    var PullRequestMergeCommitId: string;
    var PullRequestMergedAt: string;
    var TfsGitRepositoryId: string;
    var TfsGitProjectId: string;
    var GitHubRepositoryName: string;
    var GitHubConnection: string;
}
export module WellKnownReleaseVariables {
    var AgentReleaseDirectory: string;
    var DeploymentGroupId: string;
    var EnableAccessTokenVariableName: string;
    var HostType: string;
    var ArtifactsDirectory: string;
    var CollectionId: string;
    var TeamProjectId: string;
    var TeamProject: string;
    var TotalJobsInPhase: string;
    var JobPositionInPhase: string;
    var ParallelExecutionType: string;
    var ReleaseId: string;
    var SkipArtifactsDownload: string;
    var ReleaseName: string;
    var ReleaseDescription: string;
    var ReleaseDisableRobocopy: string;
    var ReleaseDefinitionName: string;
    var ReleaseDefinitionId: string;
    var ReleaseDefinitionEnvironmentId: string;
    var DeploymentId: string;
    var ReleaseUri: string;
    var ReleaseWebUrl: string;
    var ReleaseEnvironmentUri: string;
    var ReleaseEnvironmentId: string;
    var ReleaseEnvironmentName: string;
    var ReleaseDeployPhaseId: string;
    var RequestorId: string;
    var ReleaseRequestedForId: string;
    var ReleaseRequestedForEmail: string;
    var AttemptNumber: string;
    var ReleaseReason: string;
    var ReleasePrimaryArtifactSourceAlias: string;
    var ReleaseTriggeringArtifactAlias: string;
    var ReleaseDeploymentRequestedForId: string;
    var ReleaseDeploymentRequestedForEmail: string;
    var ReleaseDeploymentRequestedFor: string;
    var ReleaseDeploymentStartTime: string;
}
}
declare module "ReleaseManagement/Core/Contracts" {
/**
 * ---------------------------------------------------------
 * Generated file, DO NOT EDIT
 * ---------------------------------------------------------
 *
 * See following wiki page for instructions on how to regenerate:
 *   https://vsowiki.com/index.php?title=Rest_Client_Generation
 *
 * Configuration file:
 *   releasemanagement\client\webapi\clientgeneratorconfigs\genclient.json
 */
import TFS_DistributedTask_Common_Contracts = require("TFS/DistributedTaskCommon/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
import VSS_FormInput_Contracts = require("VSS/Common/Contracts/FormInput");
export interface AgentArtifactDefinition {
    alias: string;
    artifactType: AgentArtifactType;
    details: string;
    name: string;
    version: string;
}
export enum AgentArtifactType {
    XamlBuild = 0,
    Build = 1,
    Jenkins = 2,
    FileShare = 3,
    Nuget = 4,
    TfsOnPrem = 5,
    GitHub = 6,
    TFGit = 7,
    ExternalTfsBuild = 8,
    Custom = 9,
    Tfvc = 10
}
export interface AgentBasedDeployPhase extends DeployPhase {
    deploymentInput: AgentDeploymentInput;
}
export interface AgentDeploymentInput extends DeploymentInput {
    imageId: number;
    parallelExecution: ExecutionInput;
}
export enum ApprovalExecutionOrder {
    BeforeGates = 1,
    AfterSuccessfulGates = 2,
    AfterGatesAlways = 4
}
export enum ApprovalFilters {
    /**
     * No approvals or approval snapshots
     */
    None = 0,
    /**
     * Manual approval steps but no approval snapshots (Use with ApprovalSnapshots for snapshots)
     */
    ManualApprovals = 1,
    /**
     * Automated approval steps but no approval snapshots (Use with ApprovalSnapshots for snapshots)
     */
    AutomatedApprovals = 2,
    /**
     * No approval steps, but approval snapshots (Use with either ManualApprovals or AutomatedApprovals for approval steps)
     */
    ApprovalSnapshots = 4,
    /**
     * All approval steps and approval snapshots
     */
    All = 7
}
export interface ApprovalOptions {
    autoTriggeredAndPreviousEnvironmentApprovedCanBeSkipped: boolean;
    enforceIdentityRevalidation: boolean;
    executionOrder: ApprovalExecutionOrder;
    releaseCreatorCanBeApprover: boolean;
    requiredApproverCount: number;
    timeoutInMinutes: number;
}
export enum ApprovalStatus {
    Undefined = 0,
    Pending = 1,
    Approved = 2,
    Rejected = 4,
    Reassigned = 6,
    Canceled = 7,
    Skipped = 8
}
export enum ApprovalType {
    Undefined = 0,
    PreDeploy = 1,
    PostDeploy = 2,
    All = 3
}
export interface Artifact {
    /**
     * Gets or sets alias.
     */
    alias: string;
    /**
     * Gets or sets definition reference. e.g. {"project":{"id":"fed755ea-49c5-4399-acea-fd5b5aa90a6c","name":"myProject"},"definition":{"id":"1","name":"mybuildDefinition"},"connection":{"id":"1","name":"myConnection"}}
     */
    definitionReference: {
        [key: string]: ArtifactSourceReference;
    };
    /**
     * Gets or sets as artifact is primary or not.
     */
    isPrimary: boolean;
    isRetained: boolean;
    sourceId: string;
    /**
     * Gets or sets type. It can have value as 'Build', 'Jenkins', 'GitHub', 'Nuget', 'Team Build (external)', 'ExternalTFSBuild', 'Git', 'TFVC', 'ExternalTfsXamlBuild'.
     */
    type: string;
}
export interface ArtifactContributionDefinition {
    artifactType: string;
    artifactTypeStreamMapping: {
        [key: string]: string;
    };
    browsableArtifactTypeMapping: {
        [key: string]: string;
    };
    dataSourceBindings: DataSourceBinding[];
    displayName: string;
    downloadTaskId: string;
    endpointTypeId: string;
    inputDescriptors: VSS_FormInput_Contracts.InputDescriptor[];
    name: string;
    taskInputMapping: {
        [key: string]: string;
    };
    uniqueSourceIdentifier: string;
}
export interface ArtifactDownloadInputBase {
    alias: string;
    artifactDownloadMode: string;
    artifactType: string;
}
export interface ArtifactFilter {
    createReleaseOnBuildTagging: boolean;
    sourceBranch: string;
    tags: string[];
    useBuildDefinitionBranch: boolean;
}
export interface ArtifactInstanceData {
    accountName: string;
    authenticationToken: string;
    tfsUrl: string;
    version: string;
}
export interface ArtifactMetadata {
    /**
     * Sets alias of artifact.
     */
    alias: string;
    /**
     * Sets instance reference of artifact. e.g. for build artifact it is build number.
     */
    instanceReference: BuildVersion;
}
export interface ArtifactProvider {
    id: number;
    name: string;
    sourceUri: string;
    version: string;
}
export interface ArtifactsDownloadInput {
    downloadInputs: ArtifactDownloadInputBase[];
}
export interface ArtifactSourceId {
    artifactTypeId: string;
    sourceIdInputs: SourceIdInput[];
}
export interface ArtifactSourceIdsQueryResult {
    artifactSourceIds: ArtifactSourceId[];
}
export interface ArtifactSourceReference {
    id: string;
    name: string;
}
export interface ArtifactSourceTrigger extends ReleaseTriggerBase {
    /**
     * Artifact source alias for Artifact Source trigger type
     */
    artifactAlias: string;
    triggerConditions: ArtifactFilter[];
}
export interface ArtifactTypeDefinition {
    displayName: string;
    endpointTypeId: string;
    inputDescriptors: VSS_FormInput_Contracts.InputDescriptor[];
    name: string;
    uniqueSourceIdentifier: string;
}
export interface ArtifactVersion {
    alias: string;
    defaultVersion: BuildVersion;
    errorMessage: string;
    sourceId: string;
    versions: BuildVersion[];
}
export interface ArtifactVersionQueryResult {
    artifactVersions: ArtifactVersion[];
}
export enum AuditAction {
    Add = 1,
    Update = 2,
    Delete = 3,
    Undelete = 4
}
export enum AuthorizationHeaderFor {
    RevalidateApproverIdentity = 0,
    OnBehalfOf = 1
}
export interface AutoTriggerIssue {
    issue: Issue;
    issueSource: IssueSource;
    project: ProjectReference;
    releaseDefinitionReference: ReleaseDefinitionShallowReference;
    releaseTriggerType: ReleaseTriggerType;
}
export interface AzureKeyVaultVariableGroupProviderData extends VariableGroupProviderData {
    lastRefreshedOn: Date;
    serviceEndpointId: string;
    vault: string;
}
export interface AzureKeyVaultVariableValue extends VariableValue {
    contentType: string;
    enabled: boolean;
    expires: Date;
}
export interface BaseDeploymentInput {
    condition: string;
    /**
     * Gets or sets the job cancel timeout in minutes for deployment which are cancelled by user for this release environment
     */
    jobCancelTimeoutInMinutes: number;
    overrideInputs: {
        [key: string]: string;
    };
    /**
     * Gets or sets the job execution timeout in minutes for deployment which are queued against this release environment
     */
    timeoutInMinutes: number;
}
export interface BuildArtifactDownloadInput extends ArtifactDownloadInputBase {
    artifactItems: string[];
}
export interface BuildVersion {
    commitMessage: string;
    id: string;
    name: string;
    sourceBranch: string;
    sourcePullRequestVersion: SourcePullRequestVersion;
    sourceRepositoryId: string;
    sourceRepositoryType: string;
    sourceVersion: string;
}
/**
 * Represents a change associated with a build.
 */
export interface Change {
    /**
     * The author of the change.
     */
    author: VSS_Common_Contracts.IdentityRef;
    /**
     * The type of source. "TfsVersionControl", "TfsGit", etc.
     */
    changeType: string;
    /**
     * The location of a user-friendly representation of the resource.
     */
    displayUri: string;
    /**
     * Something that identifies the change. For a commit, this would be the SHA1. For a TFVC changeset, this would be the changeset id.
     */
    id: string;
    /**
     * The location of the full representation of the resource.
     */
    location: string;
    /**
     * A description of the change. This might be a commit message or changeset description.
     */
    message: string;
    /**
     * The person or process that pushed the change.
     */
    pushedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * The person or process that pushed the change.
     */
    pusher: string;
    /**
     * A timestamp for the change.
     */
    timestamp: Date;
}
export interface CodeRepositoryReference {
    repositoryReference: {
        [key: string]: ReleaseManagementInputValue;
    };
    /**
     * It can have value as ???GitHub???, ???Vsts???.
     */
    systemType: PullRequestSystemType;
}
export interface Condition {
    /**
     * Gets or sets the condition type.
     */
    conditionType: ConditionType;
    /**
     * Gets or sets the name of the condition. e.g. 'ReleaseStarted'.
     */
    name: string;
    /**
     * Gets or set value of the condition.
     */
    value: string;
}
export enum ConditionType {
    /**
     * The condition type is undefined.
     */
    Undefined = 0,
    /**
     * The condition type is event.
     */
    Event = 1,
    /**
     * The condition type is environment state.
     */
    EnvironmentState = 2,
    /**
     * The condition type is artifact.
     */
    Artifact = 4
}
export interface ConfigurationVariableValue {
    /**
     * Gets or sets if a variable can be overridden at deployment time or not.
     */
    allowOverride: boolean;
    /**
     * Gets or sets as variable is secret or not.
     */
    isSecret: boolean;
    /**
     * Gets or sets value of the configuration variable.
     */
    value: string;
}
export interface Consumer {
    consumerId: number;
    consumerName: string;
}
export interface ContainerImageTrigger extends ReleaseTriggerBase {
    alias: string;
}
export interface ContinuousDeploymentTriggerIssue extends AutoTriggerIssue {
    artifactType: string;
    artifactVersionId: string;
    sourceId: string;
}
export interface ControlOptions {
    alwaysRun: boolean;
    continueOnError: boolean;
    enabled: boolean;
}
export interface CustomArtifactDownloadInput extends ArtifactDownloadInputBase {
}
export interface DataSourceBinding {
    callbackContextTemplate: string;
    callBackRequiredTemplate: string;
    dataSourceName: string;
    endpointId: string;
    endpointUrl: string;
    initialContextTemplate: string;
    parameters: {
        [key: string]: string;
    };
    resultSelector: string;
    resultTemplate: string;
    target: string;
}
export interface DefinitionEnvironmentReference {
    definitionEnvironmentId: number;
    definitionEnvironmentName: string;
    releaseDefinitionId: number;
    releaseDefinitionName: string;
}
export interface Deployment {
    /**
     * Gets links to access the deployment.
     */
    _links: any;
    /**
     * Gets attempt number.
     */
    attempt: number;
    /**
     * Gets the date on which deployment is complete.
     */
    completedOn: Date;
    /**
     * Gets the list of condition associated with deployment.
     */
    conditions: Condition[];
    /**
     * Gets release definition environment id.
     */
    definitionEnvironmentId: number;
    /**
     * Gets status of the deployment.
     */
    deploymentStatus: DeploymentStatus;
    /**
     * Gets the unique identifier for deployment.
     */
    id: number;
    /**
     * Gets the identity who last modified the deployment.
     */
    lastModifiedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets the date on which deployment is last modified.
     */
    lastModifiedOn: Date;
    /**
     * Gets operation status of deployment.
     */
    operationStatus: DeploymentOperationStatus;
    /**
     * Gets list of PostDeployApprovals.
     */
    postDeployApprovals: ReleaseApproval[];
    /**
     * Gets list of PreDeployApprovals.
     */
    preDeployApprovals: ReleaseApproval[];
    /**
     * Gets or sets project reference.
     */
    projectReference: ProjectReference;
    /**
     * Gets the date on which deployment is queued.
     */
    queuedOn: Date;
    /**
     * Gets reason of deployment.
     */
    reason: DeploymentReason;
    /**
     * Gets the reference of release.
     */
    release: ReleaseReference;
    /**
     * Gets releaseDefinitionReference which specifies the reference of the release definition to which the deployment is associated.
     */
    releaseDefinition: ReleaseDefinitionShallowReference;
    /**
     * Gets releaseEnvironmentReference which specifies the reference of the release environment to which the deployment is associated.
     */
    releaseEnvironment: ReleaseEnvironmentShallowReference;
    /**
     * Gets the identity who requested.
     */
    requestedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets the identity for whom deployment is requested.
     */
    requestedFor: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets the date on which deployment is scheduled.
     */
    scheduledDeploymentTime: Date;
    /**
     * Gets the date on which deployment is started.
     */
    startedOn: Date;
}
export interface DeploymentApprovalCompletedEvent {
    approval: ReleaseApproval;
    project: ProjectReference;
    release: Release;
}
export interface DeploymentApprovalPendingEvent {
    approval: ReleaseApproval;
    approvalOptions: ApprovalOptions;
    completedApprovals: ReleaseApproval[];
    data: {
        [key: string]: any;
    };
    deployment: Deployment;
    isMultipleRankApproval: boolean;
    pendingApprovals: ReleaseApproval[];
    project: ProjectReference;
    release: Release;
}
export interface DeploymentAttempt {
    attempt: number;
    deploymentId: number;
    /**
     * Error log to show any unexpected error that occurred during executing deploy step
     */
    errorLog: string;
    /**
     * Specifies whether deployment has started or not
     */
    hasStarted: boolean;
    id: number;
    /**
     * All the issues related to the deployment
     */
    issues: Issue[];
    job: ReleaseTask;
    lastModifiedBy: VSS_Common_Contracts.IdentityRef;
    lastModifiedOn: Date;
    operationStatus: DeploymentOperationStatus;
    postDeploymentGates: ReleaseGates;
    preDeploymentGates: ReleaseGates;
    queuedOn: Date;
    reason: DeploymentReason;
    releaseDeployPhases: ReleaseDeployPhase[];
    requestedBy: VSS_Common_Contracts.IdentityRef;
    requestedFor: VSS_Common_Contracts.IdentityRef;
    runPlanId: string;
    status: DeploymentStatus;
    tasks: ReleaseTask[];
}
export interface DeploymentAuthorizationInfo {
    authorizationHeaderFor: AuthorizationHeaderFor;
    resources: string[];
    tenantId: string;
    vstsAccessTokenKey: string;
}
export enum DeploymentAuthorizationOwner {
    Automatic = 0,
    DeploymentSubmitter = 1,
    FirstPreDeploymentApprover = 2
}
export interface DeploymentCompletedEvent {
    comment: string;
    data: {
        [key: string]: any;
    };
    deployment: Deployment;
    environment: ReleaseEnvironment;
    project: ProjectReference;
}
export enum DeploymentExpands {
    All = 0,
    DeploymentOnly = 1,
    Approvals = 2,
    Artifacts = 4
}
export interface DeploymentInput extends BaseDeploymentInput {
    artifactsDownloadInput: ArtifactsDownloadInput;
    demands: any[];
    enableAccessToken: boolean;
    queueId: number;
    skipArtifactsDownload: boolean;
}
export interface DeploymentJob {
    job: ReleaseTask;
    tasks: ReleaseTask[];
}
export interface DeploymentManualInterventionPendingEvent {
    deployment: Deployment;
    emailRecipients: string[];
    environmentOwner: VSS_Common_Contracts.IdentityRef;
    manualIntervention: ManualIntervention;
    project: ProjectReference;
    release: Release;
}
export enum DeploymentOperationStatus {
    /**
     * The deployment operation status is undefined.
     */
    Undefined = 0,
    /**
     * The deployment operation status is queued.
     */
    Queued = 1,
    /**
     * The deployment operation status is scheduled.
     */
    Scheduled = 2,
    /**
     * The deployment operation status is pending.
     */
    Pending = 4,
    /**
     * The deployment operation status is approved.
     */
    Approved = 8,
    /**
     * The deployment operation status is rejected.
     */
    Rejected = 16,
    /**
     * The deployment operation status is deferred.
     */
    Deferred = 32,
    /**
     * The deployment operation status is queued for agent.
     */
    QueuedForAgent = 64,
    /**
     * The deployment operation status is phase inprogress.
     */
    PhaseInProgress = 128,
    /**
     * The deployment operation status is phase succeeded.
     */
    PhaseSucceeded = 256,
    /**
     * The deployment operation status is phase partially succeeded.
     */
    PhasePartiallySucceeded = 512,
    /**
     * The deployment operation status is phase failed.
     */
    PhaseFailed = 1024,
    /**
     * The deployment operation status is canceled.
     */
    Canceled = 2048,
    /**
     * The deployment operation status is phase canceled.
     */
    PhaseCanceled = 4096,
    /**
     * The deployment operation status is manualintervention pending.
     */
    ManualInterventionPending = 8192,
    /**
     * The deployment operation status is queued for pipeline.
     */
    QueuedForPipeline = 16384,
    /**
     * The deployment operation status is cancelling.
     */
    Cancelling = 32768,
    /**
     * The deployment operation status is EvaluatingGates.
     */
    EvaluatingGates = 65536,
    /**
     * The deployment operation status is GateFailed.
     */
    GateFailed = 131072,
    /**
     * The deployment operation status is all.
     */
    All = 258047
}
export interface DeploymentQueryParameters {
    artifactSourceId: string;
    artifactTypeId: string;
    artifactVersions: string[];
    deploymentsPerEnvironment: number;
    deploymentStatus: DeploymentStatus;
    environments: DefinitionEnvironmentReference[];
    expands: DeploymentExpands;
    isDeleted: boolean;
    latestDeploymentsOnly: boolean;
    maxDeploymentsPerEnvironment: number;
    maxModifiedTime: Date;
    minModifiedTime: Date;
    operationStatus: DeploymentOperationStatus;
    queryOrder: ReleaseQueryOrder;
    queryType: DeploymentsQueryType;
    sourceBranch: string;
}
export enum DeploymentReason {
    /**
     * The deployment reason is none.
     */
    None = 0,
    /**
     * The deployment reason is manual.
     */
    Manual = 1,
    /**
     * The deployment reason is automated.
     */
    Automated = 2,
    /**
     * The deployment reason is scheduled.
     */
    Scheduled = 4,
    /**
     * The deployment reason is RedeployTrigger.
     */
    RedeployTrigger = 8
}
export enum DeploymentsQueryType {
    Regular = 1,
    FailingSince = 2
}
export interface DeploymentStartedEvent {
    environment: ReleaseEnvironment;
    project: ProjectReference;
    release: Release;
}
export enum DeploymentStatus {
    /**
     * The deployment status is undefined.
     */
    Undefined = 0,
    /**
     * The deployment status is not deployed.
     */
    NotDeployed = 1,
    /**
     * The deployment status is inprogress.
     */
    InProgress = 2,
    /**
     * The deployment status is succeeded.
     */
    Succeeded = 4,
    /**
     * The deployment status is partiallysucceeded.
     */
    PartiallySucceeded = 8,
    /**
     * The deployment status is failed.
     */
    Failed = 16,
    /**
     * The deployment status is all.
     */
    All = 31
}
export interface DeployPhase {
    name: string;
    phaseType: DeployPhaseTypes;
    rank: number;
    workflowTasks: WorkflowTask[];
}
export enum DeployPhaseStatus {
    Undefined = 0,
    NotStarted = 1,
    InProgress = 2,
    PartiallySucceeded = 4,
    Succeeded = 8,
    Failed = 16,
    Canceled = 32,
    Skipped = 64,
    Cancelling = 128
}
export enum DeployPhaseTypes {
    Undefined = 0,
    AgentBasedDeployment = 1,
    RunOnServer = 2,
    MachineGroupBasedDeployment = 4
}
export interface EmailRecipients {
    emailAddresses: string[];
    tfsIds: string[];
}
/**
 * Defines policy on environment queuing at Release Management side queue. We will send to Environment Runner [creating pre-deploy and other steps] only when the policies mentioned are satisfied.
 */
export interface EnvironmentExecutionPolicy {
    /**
     * This policy decides, how many environments would be with Environment Runner.
     */
    concurrencyCount: number;
    /**
     * Queue depth in the EnvironmentQueue table, this table keeps the environment entries till Environment Runner is free [as per it's policy] to take another environment for running.
     */
    queueDepthCount: number;
}
export interface EnvironmentOptions {
    autoLinkWorkItems: boolean;
    badgeEnabled: boolean;
    emailNotificationType: string;
    emailRecipients: string;
    enableAccessToken: boolean;
    publishDeploymentStatus: boolean;
    pullRequestDeploymentEnabled: boolean;
    skipArtifactsDownload: boolean;
    timeoutInMinutes: number;
}
export interface EnvironmentRetentionPolicy {
    daysToKeep: number;
    releasesToKeep: number;
    retainBuild: boolean;
}
export enum EnvironmentStatus {
    Undefined = 0,
    NotStarted = 1,
    InProgress = 2,
    Succeeded = 4,
    Canceled = 8,
    Rejected = 16,
    Queued = 32,
    Scheduled = 64,
    PartiallySucceeded = 128
}
export interface EnvironmentTrigger {
    definitionEnvironmentId: number;
    releaseDefinitionId: number;
    triggerContent: string;
    triggerType: EnvironmentTriggerType;
}
export interface EnvironmentTriggerContent {
    action: string;
    eventTypes: string[];
}
export enum EnvironmentTriggerType {
    Undefined = 0,
    DeploymentGroupRedeploy = 1
}
export interface ExecutionInput {
    parallelExecutionType: ParallelExecutionTypes;
}
/**
 * Class to represent favorite entry
 */
export interface FavoriteItem {
    /**
     * Application specific data for the entry
     */
    data: string;
    /**
     * Unique Id of the the entry
     */
    id: string;
    /**
     * Display text for favorite entry
     */
    name: string;
    /**
     * Application specific favorite entry type. Empty or Null represents that Favorite item is a Folder
     */
    type: string;
}
export interface Folder {
    createdBy: VSS_Common_Contracts.IdentityRef;
    createdOn: Date;
    description: string;
    lastChangedBy: VSS_Common_Contracts.IdentityRef;
    lastChangedDate: Date;
    path: string;
}
export enum FolderPathQueryOrder {
    /**
     * No order
     */
    None = 0,
    /**
     * Order by folder name and path ascending.
     */
    Ascending = 1,
    /**
     * Order by folder name and path descending.
     */
    Descending = 2
}
export enum GateStatus {
    None = 0,
    Pending = 1,
    InProgress = 2,
    Succeeded = 4,
    Failed = 8,
    Canceled = 16
}
export interface GateUpdateMetadata {
    /**
     * Comment
     */
    comment: string;
    /**
     * Name of gate to be ignored.
     */
    gatesToIgnore: string[];
}
export interface GitArtifactDownloadInput extends ArtifactDownloadInputBase {
}
export interface GitHubArtifactDownloadInput extends ArtifactDownloadInputBase {
}
export interface IgnoredGate {
    /**
     * Gets the date on which gate is last ignored.
     */
    lastModifiedOn: Date;
    /**
     * Name of gate ignored.
     */
    name: string;
}
export interface Issue {
    data: {
        [key: string]: string;
    };
    issueType: string;
    message: string;
}
export enum IssueSource {
    None = 0,
    User = 1,
    System = 2
}
export interface JenkinsArtifactDownloadInput extends ArtifactDownloadInputBase {
    artifactItems: string[];
}
export interface MachineGroupBasedDeployPhase extends DeployPhase {
    deploymentInput: MachineGroupDeploymentInput;
}
export interface MachineGroupDeploymentInput extends DeploymentInput {
    deploymentHealthOption: string;
    healthPercent: number;
    tags: string[];
}
export interface MailMessage {
    body: string;
    cC: EmailRecipients;
    inReplyTo: string;
    messageId: string;
    replyBy: Date;
    replyTo: EmailRecipients;
    sections: MailSectionType[];
    senderType: SenderType;
    subject: string;
    to: EmailRecipients;
}
export enum MailSectionType {
    Details = 0,
    Environments = 1,
    Issues = 2,
    TestResults = 3,
    WorkItems = 4,
    ReleaseInfo = 5
}
export interface ManualIntervention {
    /**
     * Gets or sets the identity who should approve.
     */
    approver: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets or sets comments for approval.
     */
    comments: string;
    /**
     * Gets date on which it got created.
     */
    createdOn: Date;
    /**
     * Gets the unique identifier for manual intervention.
     */
    id: number;
    /**
     * Gets or sets instructions for approval.
     */
    instructions: string;
    /**
     * Gets date on which it got modified.
     */
    modifiedOn: Date;
    /**
     * Gets or sets the name.
     */
    name: string;
    /**
     * Gets releaseReference for manual intervention.
     */
    release: ReleaseShallowReference;
    /**
     * Gets releaseDefinitionReference for manual intervention.
     */
    releaseDefinition: ReleaseDefinitionShallowReference;
    /**
     * Gets releaseEnvironmentReference for manual intervention.
     */
    releaseEnvironment: ReleaseEnvironmentShallowReference;
    /**
     * Gets or sets the status of the manual intervention.
     */
    status: ManualInterventionStatus;
    /**
     * Get task instance identifier.
     */
    taskInstanceId: string;
    /**
     * Gets url to access the manual intervention.
     */
    url: string;
}
/**
 * Describes manual intervention status
 */
export enum ManualInterventionStatus {
    /**
     * The manual intervention does not have the status set.
     */
    Unknown = 0,
    /**
     * The manual intervention is pending.
     */
    Pending = 1,
    /**
     * The manual intervention is rejected.
     */
    Rejected = 2,
    /**
     * The manual intervention is approved.
     */
    Approved = 4,
    /**
     * The manual intervention is canceled.
     */
    Canceled = 8
}
export interface ManualInterventionUpdateMetadata {
    /**
     * Sets the comment for manual intervention update.
     */
    comment: string;
    /**
     * Sets the status of the manual intervention.
     */
    status: ManualInterventionStatus;
}
export interface MappingDetails {
    mappings: {
        [key: string]: VSS_FormInput_Contracts.InputValue;
    };
}
export interface Metric {
    name: string;
    value: number;
}
export interface MultiConfigInput extends ParallelExecutionInputBase {
    multipliers: string;
}
export interface MultiMachineInput extends ParallelExecutionInputBase {
}
export interface PackageTrigger extends ReleaseTriggerBase {
    alias: string;
}
export interface ParallelExecutionInputBase extends ExecutionInput {
    continueOnError: boolean;
    maxNumberOfAgents: number;
}
export enum ParallelExecutionTypes {
    None = 0,
    MultiConfiguration = 1,
    MultiMachine = 2
}
export interface PipelineProcess {
    type: PipelineProcessTypes;
}
export enum PipelineProcessTypes {
    Designer = 1,
    Yaml = 2
}
export interface ProjectReference {
    /**
     * Gets the unique identifier of this field.
     */
    id: string;
    /**
     * Gets name of project.
     */
    name: string;
}
export interface PropertySelector {
    properties: string[];
    selectorType: PropertySelectorType;
}
export enum PropertySelectorType {
    Inclusion = 0,
    Exclusion = 1
}
export interface PullRequestConfiguration {
    codeRepositoryReference: CodeRepositoryReference;
    /**
     * In case of Source based artifacts, Code reference will be present in Artifact details.
     */
    useArtifactReference: boolean;
}
export interface PullRequestFilter {
    tags: string[];
    targetBranch: string;
}
export enum PullRequestSystemType {
    None = 0,
    TfsGit = 1,
    GitHub = 2
}
export interface PullRequestTrigger extends ReleaseTriggerBase {
    artifactAlias: string;
    pullRequestConfiguration: PullRequestConfiguration;
    triggerConditions: PullRequestFilter[];
}
export interface QueuedReleaseData {
    projectId: string;
    queuePosition: number;
    releaseId: number;
}
export interface RealtimeReleaseDefinitionEvent {
    definitionId: number;
    projectId: string;
}
export interface RealtimeReleaseEvent {
    environmentId: number;
    projectId: string;
    releaseId: number;
}
export interface Release {
    /**
     * Gets links to access the release.
     */
    _links: any;
    /**
     * Gets or sets the list of artifacts.
     */
    artifacts: Artifact[];
    /**
     * Gets or sets comment.
     */
    comment: string;
    /**
     * Gets or sets the identity who created.
     */
    createdBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets date on which it got created.
     */
    createdOn: Date;
    /**
     * Gets revision number of definition snapshot.
     */
    definitionSnapshotRevision: number;
    /**
     * Gets or sets description of release.
     */
    description: string;
    /**
     * Gets list of environments.
     */
    environments: ReleaseEnvironment[];
    /**
     * Gets the unique identifier of this field.
     */
    id: number;
    /**
     * Whether to exclude the release from retention policies.
     */
    keepForever: boolean;
    /**
     * Gets logs container url.
     */
    logsContainerUrl: string;
    /**
     * Gets or sets the identity who modified.
     */
    modifiedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets date on which it got modified.
     */
    modifiedOn: Date;
    /**
     * Gets name.
     */
    name: string;
    /**
     * Gets pool name.
     */
    poolName: string;
    /**
     * Gets or sets project reference.
     */
    projectReference: ProjectReference;
    properties: any;
    /**
     * Gets reason of release.
     */
    reason: ReleaseReason;
    /**
     * Gets releaseDefinitionReference which specifies the reference of the release definition to which this release is associated.
     */
    releaseDefinition: ReleaseDefinitionShallowReference;
    /**
     * Gets release name format.
     */
    releaseNameFormat: string;
    /**
     * Gets status.
     */
    status: ReleaseStatus;
    /**
     * Gets or sets list of tags.
     */
    tags: string[];
    triggeringArtifactAlias: string;
    url: string;
    /**
     * Gets the list of variable groups.
     */
    variableGroups: VariableGroup[];
    /**
     * Gets or sets the dictionary of variables.
     */
    variables: {
        [key: string]: ConfigurationVariableValue;
    };
}
export interface ReleaseAbandonedEvent {
    project: ProjectReference;
    release: Release;
}
export interface ReleaseApproval {
    /**
     * Gets or sets the type of approval.
     */
    approvalType: ApprovalType;
    /**
     * Gets the identity who approved.
     */
    approvedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets or sets the identity who should approve.
     */
    approver: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets or sets attempt which specifies as which deployment attempt it belongs.
     */
    attempt: number;
    /**
     * Gets or sets comments for approval.
     */
    comments: string;
    /**
     * Gets date on which it got created.
     */
    createdOn: Date;
    /**
     * Gets history which specifies all approvals associated with this approval.
     */
    history: ReleaseApprovalHistory[];
    /**
     * Gets the unique identifier of this field.
     */
    id: number;
    /**
     * Gets or sets as approval is automated or not.
     */
    isAutomated: boolean;
    isNotificationOn: boolean;
    /**
     * Gets date on which it got modified.
     */
    modifiedOn: Date;
    /**
     * Gets or sets rank which specifies the order of the approval. e.g. Same rank denotes parallel approval.
     */
    rank: number;
    /**
     * Gets releaseReference which specifies the reference of the release to which this approval is associated.
     */
    release: ReleaseShallowReference;
    /**
     * Gets releaseDefinitionReference which specifies the reference of the release definition to which this approval is associated.
     */
    releaseDefinition: ReleaseDefinitionShallowReference;
    /**
     * Gets releaseEnvironmentReference which specifies the reference of the release environment to which this approval is associated.
     */
    releaseEnvironment: ReleaseEnvironmentShallowReference;
    /**
     * Gets the revision number.
     */
    revision: number;
    /**
     * Gets or sets the status of the approval.
     */
    status: ApprovalStatus;
    trialNumber: number;
    /**
     * Gets url to access the approval.
     */
    url: string;
}
export interface ReleaseApprovalHistory {
    approver: VSS_Common_Contracts.IdentityRef;
    changedBy: VSS_Common_Contracts.IdentityRef;
    comments: string;
    createdOn: Date;
    modifiedOn: Date;
    revision: number;
}
export interface ReleaseApprovalPendingEvent {
    approval: ReleaseApproval;
    approvalOptions: ApprovalOptions;
    completedApprovals: ReleaseApproval[];
    definitionName: string;
    deployment: Deployment;
    environmentId: number;
    environmentName: string;
    environments: ReleaseEnvironment[];
    isMultipleRankApproval: boolean;
    pendingApprovals: ReleaseApproval[];
    releaseCreator: string;
    releaseName: string;
    title: string;
    webAccessUri: string;
}
export interface ReleaseArtifact {
    artifactProvider: ArtifactProvider;
    artifactType: string;
    definitionData: string;
    definitionId: number;
    description: string;
    id: number;
    name: string;
    releaseId: number;
}
export interface ReleaseCondition extends Condition {
    result: boolean;
}
export interface ReleaseCreatedEvent {
    project: ProjectReference;
    release: Release;
}
export interface ReleaseDefinition extends ReleaseDefinitionShallowReference {
    /**
     * Gets or sets the list of artifacts.
     */
    artifacts: Artifact[];
    /**
     * Gets or sets comment.
     */
    comment: string;
    /**
     * Gets or sets the identity who created.
     */
    createdBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets date on which it got created.
     */
    createdOn: Date;
    /**
     * Gets or sets the description.
     */
    description: string;
    /**
     * Gets or sets the list of environments.
     */
    environments: ReleaseDefinitionEnvironment[];
    /**
     * Whether release definition is deleted.
     */
    isDeleted: boolean;
    /**
     * Gets the reference of last release.
     */
    lastRelease: ReleaseReference;
    /**
     * Gets or sets the identity who modified.
     */
    modifiedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets date on which it got modified.
     */
    modifiedOn: Date;
    /**
     * Gets or sets properties.
     */
    properties: any;
    /**
     * Gets or sets the release name format.
     */
    releaseNameFormat: string;
    retentionPolicy: RetentionPolicy;
    /**
     * Gets the revision number.
     */
    revision: number;
    /**
     * Gets or sets source of release definition.
     */
    source: ReleaseDefinitionSource;
    /**
     * Gets or sets list of tags.
     */
    tags: string[];
    /**
     * Gets or sets the list of triggers.
     */
    triggers: ReleaseTriggerBase[];
    /**
     * Gets or sets the list of variable groups.
     */
    variableGroups: number[];
    /**
     * Gets or sets the dictionary of variables.
     */
    variables: {
        [key: string]: ConfigurationVariableValue;
    };
}
export interface ReleaseDefinitionApprovals {
    approvalOptions: ApprovalOptions;
    approvals: ReleaseDefinitionApprovalStep[];
}
export interface ReleaseDefinitionApprovalStep extends ReleaseDefinitionEnvironmentStep {
    approver: VSS_Common_Contracts.IdentityRef;
    isAutomated: boolean;
    isNotificationOn: boolean;
    rank: number;
}
export interface ReleaseDefinitionDeployStep extends ReleaseDefinitionEnvironmentStep {
    /**
     * The list of steps for this definition.
     */
    tasks: WorkflowTask[];
}
export interface ReleaseDefinitionEnvironment {
    badgeUrl: string;
    conditions: Condition[];
    currentRelease: ReleaseShallowReference;
    demands: any[];
    deployPhases: DeployPhase[];
    deployStep: ReleaseDefinitionDeployStep;
    environmentOptions: EnvironmentOptions;
    environmentTriggers: EnvironmentTrigger[];
    executionPolicy: EnvironmentExecutionPolicy;
    id: number;
    name: string;
    owner: VSS_Common_Contracts.IdentityRef;
    postDeployApprovals: ReleaseDefinitionApprovals;
    postDeploymentGates: ReleaseDefinitionGatesStep;
    preDeployApprovals: ReleaseDefinitionApprovals;
    preDeploymentGates: ReleaseDefinitionGatesStep;
    processParameters: TFS_DistributedTask_Common_Contracts.ProcessParameters;
    properties: any;
    queueId: number;
    rank: number;
    retentionPolicy: EnvironmentRetentionPolicy;
    runOptions: {
        [key: string]: string;
    };
    schedules: ReleaseSchedule[];
    variableGroups: number[];
    variables: {
        [key: string]: ConfigurationVariableValue;
    };
}
export interface ReleaseDefinitionEnvironmentStep {
    id: number;
}
export interface ReleaseDefinitionEnvironmentSummary {
    id: number;
    lastReleases: ReleaseShallowReference[];
    name: string;
}
export interface ReleaseDefinitionEnvironmentTemplate {
    canDelete: boolean;
    category: string;
    description: string;
    environment: ReleaseDefinitionEnvironment;
    iconTaskId: string;
    iconUri: string;
    id: string;
    isDeleted: boolean;
    name: string;
}
export enum ReleaseDefinitionExpands {
    None = 0,
    Environments = 2,
    Artifacts = 4,
    Triggers = 8,
    Variables = 16,
    Tags = 32,
    LastRelease = 64
}
export interface ReleaseDefinitionGate {
    tasks: WorkflowTask[];
}
export interface ReleaseDefinitionGatesOptions {
    isEnabled: boolean;
    minimumSuccessDuration: number;
    samplingInterval: number;
    stabilizationTime: number;
    timeout: number;
}
export interface ReleaseDefinitionGatesStep {
    gates: ReleaseDefinitionGate[];
    gatesOptions: ReleaseDefinitionGatesOptions;
    id: number;
}
export enum ReleaseDefinitionQueryOrder {
    IdAscending = 0,
    IdDescending = 1,
    NameAscending = 2,
    NameDescending = 3
}
export interface ReleaseDefinitionRevision {
    /**
     * Gets api-version for revision object.
     */
    apiVersion: string;
    /**
     * Gets the identity who did change.
     */
    changedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets date on which it got changed.
     */
    changedDate: Date;
    /**
     * Gets type of change.
     */
    changeType: AuditAction;
    /**
     * Gets comments for revision.
     */
    comment: string;
    /**
     * Get id of the definition.
     */
    definitionId: number;
    /**
     * Gets definition url.
     */
    definitionUrl: string;
    /**
     * Get revision number of the definition.
     */
    revision: number;
}
export interface ReleaseDefinitionShallowReference {
    /**
     * Gets the links to related resources, APIs, and views for the release definition.
     */
    _links: any;
    /**
     * Gets the unique identifier of release definition.
     */
    id: number;
    /**
     * Gets or sets the name of the release definition.
     */
    name: string;
    /**
     * Gets or sets the path of the release definition.
     */
    path: string;
    /**
     * Gets or sets project reference.
     */
    projectReference: ProjectReference;
    /**
     * Gets the REST API url to access the release definition.
     */
    url: string;
}
export enum ReleaseDefinitionSource {
    Undefined = 0,
    RestApi = 1,
    UserInterface = 2,
    Ibiza = 4,
    PortalExtensionApi = 8
}
export interface ReleaseDefinitionSummary {
    environments: ReleaseDefinitionEnvironmentSummary[];
    releaseDefinition: ReleaseDefinitionShallowReference;
    releases: Release[];
}
export interface ReleaseDefinitionUndeleteParameter {
    /**
     * Gets or sets comment.
     */
    comment: string;
}
export interface ReleaseDeployPhase {
    deploymentJobs: DeploymentJob[];
    errorLog: string;
    id: number;
    manualInterventions: ManualIntervention[];
    name: string;
    phaseId: string;
    phaseType: DeployPhaseTypes;
    rank: number;
    runPlanId: string;
    status: DeployPhaseStatus;
}
export interface ReleaseEnvironment {
    /**
     * Gets list of conditions.
     */
    conditions: ReleaseCondition[];
    /**
     * Gets date on which it got created.
     */
    createdOn: Date;
    /**
     * Gets definition environment id.
     */
    definitionEnvironmentId: number;
    /**
     * Gets demands.
     */
    demands: any[];
    /**
     * Gets list of deploy phases snapshot.
     */
    deployPhasesSnapshot: DeployPhase[];
    /**
     * Gets deploy steps.
     */
    deploySteps: DeploymentAttempt[];
    /**
     * Gets environment options.
     */
    environmentOptions: EnvironmentOptions;
    /**
     * Gets the unique identifier of this field.
     */
    id: number;
    /**
     * Gets date on which it got modified.
     */
    modifiedOn: Date;
    /**
     * Gets name.
     */
    name: string;
    /**
     * Gets next scheduled UTC time.
     */
    nextScheduledUtcTime: Date;
    /**
     * Gets the identity who is owner for release environment.
     */
    owner: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets list of post deploy approvals snapshot.
     */
    postApprovalsSnapshot: ReleaseDefinitionApprovals;
    /**
     * Gets list of post deploy approvals.
     */
    postDeployApprovals: ReleaseApproval[];
    postDeploymentGatesSnapshot: ReleaseDefinitionGatesStep;
    /**
     * Gets list of pre deploy approvals snapshot.
     */
    preApprovalsSnapshot: ReleaseDefinitionApprovals;
    /**
     * Gets list of pre deploy approvals.
     */
    preDeployApprovals: ReleaseApproval[];
    preDeploymentGatesSnapshot: ReleaseDefinitionGatesStep;
    /**
     * Gets process parameters.
     */
    processParameters: TFS_DistributedTask_Common_Contracts.ProcessParameters;
    /**
     * Gets queue id.
     */
    queueId: number;
    /**
     * Gets rank.
     */
    rank: number;
    /**
     * Gets release reference which specifies the reference of the release to which this release environment is associated.
     */
    release: ReleaseShallowReference;
    /**
     * Gets the identity who created release.
     */
    releaseCreatedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets releaseDefinitionReference which specifies the reference of the release definition to which this release environment is associated.
     */
    releaseDefinition: ReleaseDefinitionShallowReference;
    /**
     * Gets release description.
     */
    releaseDescription: string;
    /**
     * Gets release id.
     */
    releaseId: number;
    /**
     * Gets schedule deployment time of release environment.
     */
    scheduledDeploymentTime: Date;
    /**
     * Gets list of schedules.
     */
    schedules: ReleaseSchedule[];
    /**
     * Gets environment status.
     */
    status: EnvironmentStatus;
    /**
     * Gets time to deploy.
     */
    timeToDeploy: number;
    /**
     * Gets trigger reason.
     */
    triggerReason: string;
    /**
     * Gets the list of variable groups.
     */
    variableGroups: VariableGroup[];
    /**
     * Gets the dictionary of variables.
     */
    variables: {
        [key: string]: ConfigurationVariableValue;
    };
    /**
     * Gets list of workflow tasks.
     */
    workflowTasks: WorkflowTask[];
}
export interface ReleaseEnvironmentCompletedEvent {
    createdByName: string;
    definitionId: number;
    definitionName: string;
    environment: ReleaseEnvironment;
    environmentId: number;
    projectName: string;
    reason: DeploymentReason;
    releaseCreatedBy: VSS_Common_Contracts.IdentityRef;
    releaseLogsUri: string;
    releaseName: string;
    status: string;
    title: string;
    webAccessUri: string;
}
export interface ReleaseEnvironmentShallowReference {
    /**
     * Gets the links to related resources, APIs, and views for the release environment.
     */
    _links: any;
    /**
     * Gets the unique identifier of release environment.
     */
    id: number;
    /**
     * Gets or sets the name of the release environment.
     */
    name: string;
    /**
     * Gets the REST API url to access the release environment.
     */
    url: string;
}
export interface ReleaseEnvironmentStatusUpdatedEvent extends RealtimeReleaseDefinitionEvent {
    environmentId: number;
    environmentStatus: EnvironmentStatus;
    releaseId: number;
}
export interface ReleaseEnvironmentUpdateMetadata {
    /**
     * Gets or sets comment.
     */
    comment: string;
    /**
     * Gets or sets scheduled deployment time.
     */
    scheduledDeploymentTime: Date;
    /**
     * Gets or sets status of environment.
     */
    status: EnvironmentStatus;
}
export enum ReleaseExpands {
    None = 0,
    Environments = 2,
    Artifacts = 4,
    Approvals = 8,
    ManualInterventions = 16,
    Variables = 32,
    Tags = 64
}
export interface ReleaseGates {
    deploymentJobs: DeploymentJob[];
    id: number;
    ignoredGates: IgnoredGate[];
    lastModifiedOn: Date;
    runPlanId: string;
    stabilizationCompletedOn: Date;
    startedOn: Date;
    status: GateStatus;
    succeedingSince: Date;
}
export interface ReleaseManagementInputValue {
    /**
     * The text to show for the display of this value
     */
    displayValue: string;
    /**
     * The value to store for this input
     */
    value: string;
}
export enum ReleaseQueryOrder {
    Descending = 0,
    Ascending = 1
}
export enum ReleaseReason {
    None = 0,
    Manual = 1,
    ContinuousIntegration = 2,
    Schedule = 3,
    PullRequest = 4
}
export interface ReleaseReference {
    /**
     * Gets links to access the release.
     */
    _links: any;
    /**
     * Gets list of artifacts.
     */
    artifacts: Artifact[];
    /**
     * Gets the identity who created.
     */
    createdBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets date on which it got created.
     */
    createdOn: Date;
    /**
     * Gets description.
     */
    description: string;
    /**
     * Gets the unique identifier of this field.
     */
    id: number;
    /**
     * Gets the identity who modified.
     */
    modifiedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets name of release.
     */
    name: string;
    /**
     * Gets reason for release.
     */
    reason: ReleaseReason;
    /**
     * Gets release definition shallow reference.
     */
    releaseDefinition: ReleaseDefinitionShallowReference;
    url: string;
    webAccessUri: string;
}
export interface ReleaseRevision {
    changedBy: VSS_Common_Contracts.IdentityRef;
    changedDate: Date;
    changeDetails: string;
    changeType: string;
    comment: string;
    definitionSnapshotRevision: number;
    releaseId: number;
}
export interface ReleaseSchedule {
    /**
     * Days of the week to release
     */
    daysToRelease: ScheduleDays;
    /**
     * Team Foundation Job Definition Job Id
     */
    jobId: string;
    /**
     * Local time zone hour to start
     */
    startHours: number;
    /**
     * Local time zone minute to start
     */
    startMinutes: number;
    /**
     * Time zone Id of release schedule, such as 'UTC'
     */
    timeZoneId: string;
}
export interface ReleaseSettings {
    retentionSettings: RetentionSettings;
}
export interface ReleaseShallowReference {
    /**
     * Gets the links to related resources, APIs, and views for the release.
     */
    _links: any;
    /**
     * Gets the unique identifier of release.
     */
    id: number;
    /**
     * Gets or sets the name of the release.
     */
    name: string;
    /**
     * Gets the REST API url to access the release.
     */
    url: string;
}
export interface ReleaseStartEnvironmentMetadata {
    /**
     * Sets release definition environment id.
     */
    definitionEnvironmentId: number;
    /**
     * Sets list of environments variables to be overridden at deployment time.
     */
    variables: {
        [key: string]: ConfigurationVariableValue;
    };
}
export interface ReleaseStartMetadata {
    /**
     * Sets list of artifact to create a release.
     */
    artifacts: ArtifactMetadata[];
    /**
     * Sets definition Id to create a release.
     */
    definitionId: number;
    /**
     * Sets description to create a release.
     */
    description: string;
    /**
     * Sets list of environments meta data.
     */
    environmentsMetadata: ReleaseStartEnvironmentMetadata[];
    /**
     * Sets 'true' to create release in draft mode, 'false' otherwise.
     */
    isDraft: boolean;
    /**
     * Sets list of environments to manual as condition.
     */
    manualEnvironments: string[];
    properties: any;
    /**
     * Sets reason to create a release.
     */
    reason: ReleaseReason;
    /**
     * Sets list of release variables to be overridden at deployment time.
     */
    variables: {
        [key: string]: ConfigurationVariableValue;
    };
}
export enum ReleaseStatus {
    Undefined = 0,
    Draft = 1,
    Active = 2,
    Abandoned = 4
}
export interface ReleaseTask {
    agentName: string;
    dateEnded: Date;
    dateStarted: Date;
    finishTime: Date;
    id: number;
    issues: Issue[];
    lineCount: number;
    logUrl: string;
    name: string;
    percentComplete: number;
    rank: number;
    startTime: Date;
    status: TaskStatus;
    task: WorkflowTaskReference;
    timelineRecordId: string;
}
export interface ReleaseTaskAttachment {
    _links: any;
    createdOn: Date;
    modifiedBy: VSS_Common_Contracts.IdentityRef;
    modifiedOn: Date;
    name: string;
    recordId: string;
    timelineId: string;
    type: string;
}
export interface ReleaseTaskLogUpdatedEvent extends RealtimeReleaseEvent {
    lines: string[];
    stepRecordId: string;
    timelineRecordId: string;
}
export interface ReleaseTasksUpdatedEvent extends RealtimeReleaseEvent {
    job: ReleaseTask;
    planId: string;
    releaseDeployPhaseId: number;
    releaseStepId: number;
    tasks: ReleaseTask[];
}
export interface ReleaseTriggerBase {
    triggerType: ReleaseTriggerType;
}
export enum ReleaseTriggerType {
    Undefined = 0,
    ArtifactSource = 1,
    Schedule = 2,
    SourceRepo = 3,
    ContainerImage = 4,
    Package = 5,
    PullRequest = 6
}
export interface ReleaseUpdatedEvent extends RealtimeReleaseEvent {
    release: Release;
}
export interface ReleaseUpdateMetadata {
    /**
     * Sets comment for release.
     */
    comment: string;
    /**
     * Set 'true' to exclude the release from retention policies.
     */
    keepForever: boolean;
    /**
     * Sets list of manual environments.
     */
    manualEnvironments: string[];
    /**
     * Sets status of the release.
     */
    status: ReleaseStatus;
}
export interface ReleaseWorkItemRef {
    assignee: string;
    id: string;
    state: string;
    title: string;
    type: string;
    url: string;
}
export interface RetentionPolicy {
    daysToKeep: number;
}
export interface RetentionSettings {
    daysToKeepDeletedReleases: number;
    defaultEnvironmentRetentionPolicy: EnvironmentRetentionPolicy;
    maximumEnvironmentRetentionPolicy: EnvironmentRetentionPolicy;
}
export interface RunOnServerDeployPhase extends DeployPhase {
    deploymentInput: ServerDeploymentInput;
}
export enum ScheduleDays {
    None = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 4,
    Thursday = 8,
    Friday = 16,
    Saturday = 32,
    Sunday = 64,
    All = 127
}
export interface ScheduledReleaseTrigger extends ReleaseTriggerBase {
    /**
     * Release schedule for Scheduled Release trigger type
     */
    schedule: ReleaseSchedule;
}
export enum SenderType {
    ServiceAccount = 1,
    RequestingUser = 2
}
export interface ServerDeploymentInput extends BaseDeploymentInput {
    parallelExecution: ExecutionInput;
}
export enum SingleReleaseExpands {
    None = 0,
    Tasks = 1
}
export interface SourceIdInput {
    id: string;
    name: string;
}
export interface SourcePullRequestVersion {
    /**
     * Pull Request Id for which the release will publish status
     */
    pullRequestId: string;
    pullRequestMergedAt: Date;
    /**
     * Source branch commit Id of the Pull Request for which the release will publish status
     */
    sourceBranchCommitId: string;
}
export interface SourceRepoTrigger extends ReleaseTriggerBase {
    alias: string;
    branchFilters: string[];
}
export interface SummaryMailSection {
    htmlContent: string;
    rank: number;
    sectionType: MailSectionType;
    title: string;
}
export interface TaskOrchestrationPlanGroupReference {
    planGroup: string;
    projectId: string;
}
export interface TaskOrchestrationPlanGroupsStartedEvent {
    planGroups: TaskOrchestrationPlanGroupReference[];
}
export enum TaskStatus {
    Unknown = 0,
    Pending = 1,
    InProgress = 2,
    Success = 3,
    Failure = 4,
    Canceled = 5,
    Skipped = 6,
    Succeeded = 7,
    Failed = 8,
    PartiallySucceeded = 9
}
export interface TfvcArtifactDownloadInput extends ArtifactDownloadInputBase {
}
export interface TimeZone {
    displayName: string;
    id: string;
}
export interface TimeZoneList {
    utcTimeZone: TimeZone;
    validTimeZones: TimeZone[];
}
export interface VariableGroup {
    /**
     * Gets or sets the identity who created.
     */
    createdBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets date on which it got created.
     */
    createdOn: Date;
    /**
     * Gets or sets description.
     */
    description: string;
    /**
     * Gets the unique identifier of this field.
     */
    id: number;
    /**
     * Gets or sets the identity who modified.
     */
    modifiedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets date on which it got modified.
     */
    modifiedOn: Date;
    /**
     * Gets or sets name.
     */
    name: string;
    /**
     * Gets or sets provider data.
     */
    providerData: VariableGroupProviderData;
    /**
     * Gets or sets type.
     */
    type: string;
    variables: {
        [key: string]: VariableValue;
    };
}
export enum VariableGroupActionFilter {
    None = 0,
    Manage = 2,
    Use = 16
}
export interface VariableGroupProviderData {
}
export interface VariableValue {
    isSecret: boolean;
    value: string;
}
export interface WorkflowTask {
    alwaysRun: boolean;
    condition: string;
    continueOnError: boolean;
    definitionType: string;
    enabled: boolean;
    inputs: {
        [key: string]: string;
    };
    name: string;
    overrideInputs: {
        [key: string]: string;
    };
    refName: string;
    taskId: string;
    timeoutInMinutes: number;
    version: string;
}
export interface WorkflowTaskReference {
    id: string;
    name: string;
    version: string;
}
export var TypeInfo: {
    AgentArtifactDefinition: any;
    AgentArtifactType: {
        enumValues: {
            "xamlBuild": number;
            "build": number;
            "jenkins": number;
            "fileShare": number;
            "nuget": number;
            "tfsOnPrem": number;
            "gitHub": number;
            "tFGit": number;
            "externalTfsBuild": number;
            "custom": number;
            "tfvc": number;
        };
    };
    AgentBasedDeployPhase: any;
    AgentDeploymentInput: any;
    ApprovalExecutionOrder: {
        enumValues: {
            "beforeGates": number;
            "afterSuccessfulGates": number;
            "afterGatesAlways": number;
        };
    };
    ApprovalFilters: {
        enumValues: {
            "none": number;
            "manualApprovals": number;
            "automatedApprovals": number;
            "approvalSnapshots": number;
            "all": number;
        };
    };
    ApprovalOptions: any;
    ApprovalStatus: {
        enumValues: {
            "undefined": number;
            "pending": number;
            "approved": number;
            "rejected": number;
            "reassigned": number;
            "canceled": number;
            "skipped": number;
        };
    };
    ApprovalType: {
        enumValues: {
            "undefined": number;
            "preDeploy": number;
            "postDeploy": number;
            "all": number;
        };
    };
    ArtifactContributionDefinition: any;
    ArtifactMetadata: any;
    ArtifactSourceTrigger: any;
    ArtifactTypeDefinition: any;
    ArtifactVersion: any;
    ArtifactVersionQueryResult: any;
    AuditAction: {
        enumValues: {
            "add": number;
            "update": number;
            "delete": number;
            "undelete": number;
        };
    };
    AuthorizationHeaderFor: {
        enumValues: {
            "revalidateApproverIdentity": number;
            "onBehalfOf": number;
        };
    };
    AutoTriggerIssue: any;
    AzureKeyVaultVariableGroupProviderData: any;
    AzureKeyVaultVariableValue: any;
    BuildVersion: any;
    Change: any;
    CodeRepositoryReference: any;
    Condition: any;
    ConditionType: {
        enumValues: {
            "undefined": number;
            "event": number;
            "environmentState": number;
            "artifact": number;
        };
    };
    ContainerImageTrigger: any;
    ContinuousDeploymentTriggerIssue: any;
    Deployment: any;
    DeploymentApprovalCompletedEvent: any;
    DeploymentApprovalPendingEvent: any;
    DeploymentAttempt: any;
    DeploymentAuthorizationInfo: any;
    DeploymentAuthorizationOwner: {
        enumValues: {
            "automatic": number;
            "deploymentSubmitter": number;
            "firstPreDeploymentApprover": number;
        };
    };
    DeploymentCompletedEvent: any;
    DeploymentExpands: {
        enumValues: {
            "all": number;
            "deploymentOnly": number;
            "approvals": number;
            "artifacts": number;
        };
    };
    DeploymentJob: any;
    DeploymentManualInterventionPendingEvent: any;
    DeploymentOperationStatus: {
        enumValues: {
            "undefined": number;
            "queued": number;
            "scheduled": number;
            "pending": number;
            "approved": number;
            "rejected": number;
            "deferred": number;
            "queuedForAgent": number;
            "phaseInProgress": number;
            "phaseSucceeded": number;
            "phasePartiallySucceeded": number;
            "phaseFailed": number;
            "canceled": number;
            "phaseCanceled": number;
            "manualInterventionPending": number;
            "queuedForPipeline": number;
            "cancelling": number;
            "evaluatingGates": number;
            "gateFailed": number;
            "all": number;
        };
    };
    DeploymentQueryParameters: any;
    DeploymentReason: {
        enumValues: {
            "none": number;
            "manual": number;
            "automated": number;
            "scheduled": number;
            "redeployTrigger": number;
        };
    };
    DeploymentsQueryType: {
        enumValues: {
            "regular": number;
            "failingSince": number;
        };
    };
    DeploymentStartedEvent: any;
    DeploymentStatus: {
        enumValues: {
            "undefined": number;
            "notDeployed": number;
            "inProgress": number;
            "succeeded": number;
            "partiallySucceeded": number;
            "failed": number;
            "all": number;
        };
    };
    DeployPhase: any;
    DeployPhaseStatus: {
        enumValues: {
            "undefined": number;
            "notStarted": number;
            "inProgress": number;
            "partiallySucceeded": number;
            "succeeded": number;
            "failed": number;
            "canceled": number;
            "skipped": number;
            "cancelling": number;
        };
    };
    DeployPhaseTypes: {
        enumValues: {
            "undefined": number;
            "agentBasedDeployment": number;
            "runOnServer": number;
            "machineGroupBasedDeployment": number;
        };
    };
    EnvironmentStatus: {
        enumValues: {
            "undefined": number;
            "notStarted": number;
            "inProgress": number;
            "succeeded": number;
            "canceled": number;
            "rejected": number;
            "queued": number;
            "scheduled": number;
            "partiallySucceeded": number;
        };
    };
    EnvironmentTrigger: any;
    EnvironmentTriggerType: {
        enumValues: {
            "undefined": number;
            "deploymentGroupRedeploy": number;
        };
    };
    ExecutionInput: any;
    Folder: any;
    FolderPathQueryOrder: {
        enumValues: {
            "none": number;
            "ascending": number;
            "descending": number;
        };
    };
    GateStatus: {
        enumValues: {
            "none": number;
            "pending": number;
            "inProgress": number;
            "succeeded": number;
            "failed": number;
            "canceled": number;
        };
    };
    IgnoredGate: any;
    IssueSource: {
        enumValues: {
            "none": number;
            "user": number;
            "system": number;
        };
    };
    MachineGroupBasedDeployPhase: any;
    MailMessage: any;
    MailSectionType: {
        enumValues: {
            "details": number;
            "environments": number;
            "issues": number;
            "testResults": number;
            "workItems": number;
            "releaseInfo": number;
        };
    };
    ManualIntervention: any;
    ManualInterventionStatus: {
        enumValues: {
            "unknown": number;
            "pending": number;
            "rejected": number;
            "approved": number;
            "canceled": number;
        };
    };
    ManualInterventionUpdateMetadata: any;
    MultiConfigInput: any;
    MultiMachineInput: any;
    PackageTrigger: any;
    ParallelExecutionInputBase: any;
    ParallelExecutionTypes: {
        enumValues: {
            "none": number;
            "multiConfiguration": number;
            "multiMachine": number;
        };
    };
    PipelineProcess: any;
    PipelineProcessTypes: {
        enumValues: {
            "designer": number;
            "yaml": number;
        };
    };
    PropertySelector: any;
    PropertySelectorType: {
        enumValues: {
            "inclusion": number;
            "exclusion": number;
        };
    };
    PullRequestConfiguration: any;
    PullRequestSystemType: {
        enumValues: {
            "none": number;
            "tfsGit": number;
            "gitHub": number;
        };
    };
    PullRequestTrigger: any;
    Release: any;
    ReleaseAbandonedEvent: any;
    ReleaseApproval: any;
    ReleaseApprovalHistory: any;
    ReleaseApprovalPendingEvent: any;
    ReleaseCondition: any;
    ReleaseCreatedEvent: any;
    ReleaseDefinition: any;
    ReleaseDefinitionApprovals: any;
    ReleaseDefinitionEnvironment: any;
    ReleaseDefinitionEnvironmentTemplate: any;
    ReleaseDefinitionExpands: {
        enumValues: {
            "none": number;
            "environments": number;
            "artifacts": number;
            "triggers": number;
            "variables": number;
            "tags": number;
            "lastRelease": number;
        };
    };
    ReleaseDefinitionQueryOrder: {
        enumValues: {
            "idAscending": number;
            "idDescending": number;
            "nameAscending": number;
            "nameDescending": number;
        };
    };
    ReleaseDefinitionRevision: any;
    ReleaseDefinitionSource: {
        enumValues: {
            "undefined": number;
            "restApi": number;
            "userInterface": number;
            "ibiza": number;
            "portalExtensionApi": number;
        };
    };
    ReleaseDefinitionSummary: any;
    ReleaseDeployPhase: any;
    ReleaseEnvironment: any;
    ReleaseEnvironmentCompletedEvent: any;
    ReleaseEnvironmentStatusUpdatedEvent: any;
    ReleaseEnvironmentUpdateMetadata: any;
    ReleaseExpands: {
        enumValues: {
            "none": number;
            "environments": number;
            "artifacts": number;
            "approvals": number;
            "manualInterventions": number;
            "variables": number;
            "tags": number;
        };
    };
    ReleaseGates: any;
    ReleaseQueryOrder: {
        enumValues: {
            "descending": number;
            "ascending": number;
        };
    };
    ReleaseReason: {
        enumValues: {
            "none": number;
            "manual": number;
            "continuousIntegration": number;
            "schedule": number;
            "pullRequest": number;
        };
    };
    ReleaseReference: any;
    ReleaseRevision: any;
    ReleaseSchedule: any;
    ReleaseStartMetadata: any;
    ReleaseStatus: {
        enumValues: {
            "undefined": number;
            "draft": number;
            "active": number;
            "abandoned": number;
        };
    };
    ReleaseTask: any;
    ReleaseTaskAttachment: any;
    ReleaseTasksUpdatedEvent: any;
    ReleaseTriggerBase: any;
    ReleaseTriggerType: {
        enumValues: {
            "undefined": number;
            "artifactSource": number;
            "schedule": number;
            "sourceRepo": number;
            "containerImage": number;
            "package": number;
            "pullRequest": number;
        };
    };
    ReleaseUpdatedEvent: any;
    ReleaseUpdateMetadata: any;
    RunOnServerDeployPhase: any;
    ScheduleDays: {
        enumValues: {
            "none": number;
            "monday": number;
            "tuesday": number;
            "wednesday": number;
            "thursday": number;
            "friday": number;
            "saturday": number;
            "sunday": number;
            "all": number;
        };
    };
    ScheduledReleaseTrigger: any;
    SenderType: {
        enumValues: {
            "serviceAccount": number;
            "requestingUser": number;
        };
    };
    ServerDeploymentInput: any;
    SingleReleaseExpands: {
        enumValues: {
            "none": number;
            "tasks": number;
        };
    };
    SourcePullRequestVersion: any;
    SourceRepoTrigger: any;
    SummaryMailSection: any;
    TaskStatus: {
        enumValues: {
            "unknown": number;
            "pending": number;
            "inProgress": number;
            "success": number;
            "failure": number;
            "canceled": number;
            "skipped": number;
            "succeeded": number;
            "failed": number;
            "partiallySucceeded": number;
        };
    };
    VariableGroup: any;
    VariableGroupActionFilter: {
        enumValues: {
            "none": number;
            "manage": number;
            "use": number;
        };
    };
};
}
declare module "ReleaseManagement/Core/ExtensionContracts" {
import RMContracts = require("ReleaseManagement/Core/Contracts");
/**
* The type of object to be used when contributing a link. linkId field will be used as an argument to onLickClicked callback.
*/
export interface IContributionHtmlLink {
    linkId: string;
    onLinkClicked: (linkId: string) => void;
}
export interface IContributionHtmlSpanData {
    text: string;
    foregroundColor: string;
    link: IContributionHtmlLink;
}
/**
* The type of object to be used when contributing a hypertext string with link.
*/
export interface IContributionHtmlData {
    spanItems: IContributionHtmlSpanData[];
}
/**
* Interface defining the configuration that is shared between extension targeted at "ms.vss-releaseManagement-web.release-details-view" and the host
*/
export interface IReleaseViewExtensionConfig {
    /**
    * Required if reacting to the current release.
    * More than one callbacks can be added, and all will be called.
    * It is important to have atleast one call back, since that's how an extension can get information about the current release.
    */
    onReleaseChanged: (handler: (release: RMContracts.Release) => void) => void;
    /**
    * Optional, If needed, this callback will be called when this particular extension is selected/displayed
    */
    onViewDisplayed: (onDisplayedCallBack: () => void) => void;
    /**
    * Optional, for a given tab id, which can be contribution id,
    * the corresponding tab is selected if the tab is visible.
    */
    selectTab: (tabId: string) => void;
    /**
    * Optional, isReleaseV2 i.e. new UI. This property can be used by extensions to decide weather to show up in new UI or not.
    */
    isReleaseV2?: boolean;
}
/**
* Base extension context,
* place holder for base properties to all types of extension for release/definition extensions.
*/
export interface IExtensionContext {
}
/**
* Context for release extensions.
*/
export interface IReleaseExtensionContext extends IExtensionContext {
    /**
    * Selected release, update notification is driven thru registeredObject.
    */
    release: RMContracts.Release;
}
/**
* Context for release environment extensions.
*/
export interface IReleaseEnvironmentExtensionContext extends IExtensionContext {
    /**
    * Selected release environment, update notification is driven thru registeredObject.
    */
    releaseEnvironment: RMContracts.ReleaseEnvironment;
}
export interface IReleaseEnvironmentsSummaryDataExtension {
    /**
    * Required if reacting to the current release. RM will call this function whenever it paints environments summary section for a given release.
    */
    onReleaseChanged: (release: RMContracts.Release) => IPromise<{
        [environmentId: number]: IContributionHtmlData;
    }>;
}
export interface IReleaseEnvironmentsSummaryDataExtensionConfig {
    /**
    * Optional, for a given tab id, which is essentially contribution id,
    * the corresponding tab is selected if the tab is visible.
    */
    selectTab: (tabId: string, additionalUrlParams?: {
        [key: string]: string;
    }) => void;
}
export interface IDeploymentWidgetDataExtension {
    /**
    * Deployment widget will call this function whenever it tries to render/refresh the widget view.
    * As the amount of data being fetched is too huge, we need to batch it.
    * Calling triggerFetchData will only start the process of fetching required data in batches.
    * The extension will be calling updateContributionData as and when it has finished fetching results for one of the batches.
    */
    triggerFetchingContributionData: (releaseEnvironments: {
        releaseId: number;
        environmentId: number;
    }[]) => void;
}
export interface IDeploymentWidgetDataExtensionConfig {
    /**
    * The extension will be calling this as and when it has finished fetching results for one of the batches.
    */
    updateContributionData: (overlayData: IDeploymentWidgetOverlayData[]) => void;
}
/**
    * releaseEnvironmentReference -> release and environment to which the test results belong to.
    * data: Contains value of the overlay metric
    * toolTipData: KeyValuePair -> These details will be added to the tool-tip shown on hover
    * targetUrl: The url to navigate to on clicking the overlayData.
*/
export interface IDeploymentWidgetOverlayData {
    releaseEnvironmentReference: IReleaseEnvironmentReference;
    data: string;
    targetUrl: string;
    toolTipData: string[];
}
export interface IReleaseEnvironmentReference {
    releaseId: number;
    environmentId: number;
}
/**
 * Context for extensions contributing on environment nodes
 */
export interface IReleaseEnvironmentNodeExtensionContext extends IExtensionContext {
    releaseId: number;
    releaseEnvironmentId: number;
    /**
     * Initial status of the environment node
     */
    initialStatus: number;
    /**
     * The event name to which the extension should listen for while using Event Services
     */
    hostEventUpdateId: string;
    /**
     * Use this to set visibility state of the contribution, whether the contribution is to be seen or not
     */
    setVisibilityState: (isVisible: boolean) => void;
}
}
declare module "ReleaseManagement/Core/RestClient" {
/**
 * ---------------------------------------------------------
 * Generated file, DO NOT EDIT
 * ---------------------------------------------------------
 *
 * See following wiki page for instructions on how to regenerate:
 *   https://vsowiki.com/index.php?title=Rest_Client_Generation
 *
 * Configuration file:
 *   releasemanagement\client\webapi\clientgeneratorconfigs\genclient.json
 */
import Contracts = require("ReleaseManagement/Core/Contracts");
import VSS_FormInput_Contracts = require("VSS/Common/Contracts/FormInput");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2To5 extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    protected agentartifactsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Returns the artifact details that automation agent requires
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @return IPromise<Contracts.AgentArtifactDefinition[]>
     */
    getAgentArtifactDefinitions(project: string, releaseId: number): IPromise<Contracts.AgentArtifactDefinition[]>;
}
export class CommonMethods2_2To5 extends CommonMethods2To5 {
    protected approvalsApiVersion: string;
    protected approvalsApiVersion_250c7158: string;
    protected approvalsApiVersion_b47c6458: string;
    protected changesApiVersion: string;
    protected definitionsApiVersion: string;
    protected environmentsApiVersion: string;
    protected environmenttemplatesApiVersion: string;
    protected historyApiVersion: string;
    protected inputvaluesqueryApiVersion: string;
    protected logsApiVersion: string;
    protected logsApiVersion_c37fbab5: string;
    protected releasesApiVersion: string;
    protected revisionsApiVersion: string;
    protected sendmailApiVersion: string;
    protected tasksApiVersion: string;
    protected typesApiVersion: string;
    protected versionsApiVersion: string;
    protected workitemsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} baseReleaseId
     * @param {number} top
     * @return IPromise<Contracts.ReleaseWorkItemRef[]>
     */
    getReleaseWorkItemsRefs(project: string, releaseId: number, baseReleaseId?: number, top?: number): IPromise<Contracts.ReleaseWorkItemRef[]>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Artifact[]} artifacts
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ArtifactVersionQueryResult>
     */
    getArtifactVersionsForSources(artifacts: Contracts.Artifact[], project: string): IPromise<Contracts.ArtifactVersionQueryResult>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseDefinitionId
     * @return IPromise<Contracts.ArtifactVersionQueryResult>
     */
    getArtifactVersions(project: string, releaseDefinitionId: number): IPromise<Contracts.ArtifactVersionQueryResult>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ArtifactTypeDefinition[]>
     */
    getArtifactTypeDefinitions(project: string): IPromise<Contracts.ArtifactTypeDefinition[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @param {number} attemptId
     * @return IPromise<Contracts.ReleaseTask[]>
     */
    getTasks(project: string, releaseId: number, environmentId: number, attemptId?: number): IPromise<Contracts.ReleaseTask[]>;
    /**
     * [Preview API]
     *
     * @param {Contracts.MailMessage} mailMessage
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @return IPromise<void>
     */
    sendSummaryMail(mailMessage: Contracts.MailMessage, project: string, releaseId: number): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @return IPromise<Contracts.SummaryMailSection[]>
     */
    getSummaryMailSections(project: string, releaseId: number): IPromise<Contracts.SummaryMailSection[]>;
    /**
     * [Preview API] Get revision history for a release definition
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Id of the definition.
     * @return IPromise<Contracts.ReleaseDefinitionRevision[]>
     */
    getReleaseDefinitionHistory(project: string, definitionId: number): IPromise<Contracts.ReleaseDefinitionRevision[]>;
    /**
     * [Preview API] Get release definition for a given definitionId and revision
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Id of the definition.
     * @param {number} revision - Id of the revision.
     * @return IPromise<string>
     */
    getDefinitionRevision(project: string, definitionId: number, revision: number): IPromise<string>;
    /**
     * [Preview API] Update few properties of a release.
     *
     * @param {Contracts.ReleaseUpdateMetadata} releaseUpdateMetadata - Properties of release to update.
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release to update.
     * @return IPromise<Contracts.Release>
     */
    updateReleaseResource(releaseUpdateMetadata: Contracts.ReleaseUpdateMetadata, project: string, releaseId: number): IPromise<Contracts.Release>;
    /**
     * [Preview API] Update a complete release object.
     *
     * @param {Contracts.Release} release - Release object for update.
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release to update.
     * @return IPromise<Contracts.Release>
     */
    updateRelease(release: Contracts.Release, project: string, releaseId: number): IPromise<Contracts.Release>;
    /**
     * [Preview API] Get release for a given revision number.
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {number} definitionSnapshotRevision - Definition snapshot revision number.
     * @return IPromise<string>
     */
    getReleaseRevision(project: string, releaseId: number, definitionSnapshotRevision: number): IPromise<string>;
    /**
     * [Preview API] Get release summary of a given definition Id.
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Id of the definition to get release summary.
     * @param {number} releaseCount - Count of releases to be included in summary.
     * @param {boolean} includeArtifact - Include artifact details.Default is 'false'.
     * @param {number[]} definitionEnvironmentIdsFilter
     * @return IPromise<Contracts.ReleaseDefinitionSummary>
     */
    getReleaseDefinitionSummary(project: string, definitionId: number, releaseCount: number, includeArtifact?: boolean, definitionEnvironmentIdsFilter?: number[]): IPromise<Contracts.ReleaseDefinitionSummary>;
    /**
     * [Preview API] Soft delete a release
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {string} comment - Comment for deleting a release.
     * @return IPromise<void>
     */
    deleteRelease(project: string, releaseId: number, comment?: string): IPromise<void>;
    /**
     * [Preview API] Create a release.
     *
     * @param {Contracts.ReleaseStartMetadata} releaseStartMetadata - Metadata to create a release.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.Release>
     */
    createRelease(releaseStartMetadata: Contracts.ReleaseStartMetadata, project: string): IPromise<Contracts.Release>;
    /**
     * [Preview API] Gets logs
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {number} environmentId - Id of release environment.
     * @param {number} taskId - ReleaseTask Id for the log.
     * @param {number} attemptId - Id of the attempt.
     * @return IPromise<string>
     */
    getLog(project: string, releaseId: number, environmentId: number, taskId: number, attemptId?: number): IPromise<string>;
    /**
     * [Preview API] Get logs for a release Id.
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @return IPromise<ArrayBuffer>
     */
    getLogs(project: string, releaseId: number): IPromise<ArrayBuffer>;
    /**
     * [Preview API]
     *
     * @param {VSS_FormInput_Contracts.InputValuesQuery} query
     * @param {string} project - Project ID or project name
     * @return IPromise<VSS_FormInput_Contracts.InputValuesQuery>
     */
    getInputValues(query: VSS_FormInput_Contracts.InputValuesQuery, project: string): IPromise<VSS_FormInput_Contracts.InputValuesQuery>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @return IPromise<Contracts.ReleaseRevision[]>
     */
    getReleaseHistory(project: string, releaseId: number): IPromise<Contracts.ReleaseRevision[]>;
    /**
     * [Preview API] Gets a list of definition environment templates
     *
     * @param {string} project - Project ID or project name
     * @param {boolean} isDeleted - 'true' to get definition environment templates that have been deleted. Default is 'false'
     * @return IPromise<Contracts.ReleaseDefinitionEnvironmentTemplate[]>
     */
    listDefinitionEnvironmentTemplates(project: string, isDeleted?: boolean): IPromise<Contracts.ReleaseDefinitionEnvironmentTemplate[]>;
    /**
     * [Preview API] Gets a definition environment template
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId - Id of the definition environment template
     * @return IPromise<Contracts.ReleaseDefinitionEnvironmentTemplate>
     */
    getDefinitionEnvironmentTemplate(project: string, templateId: string): IPromise<Contracts.ReleaseDefinitionEnvironmentTemplate>;
    /**
     * [Preview API] Delete a definition environment template
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId - Id of the definition environment template
     * @return IPromise<void>
     */
    deleteDefinitionEnvironmentTemplate(project: string, templateId: string): IPromise<void>;
    /**
     * [Preview API] Creates a definition environment template
     *
     * @param {Contracts.ReleaseDefinitionEnvironmentTemplate} template - Definition environment template to create
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ReleaseDefinitionEnvironmentTemplate>
     */
    createDefinitionEnvironmentTemplate(template: Contracts.ReleaseDefinitionEnvironmentTemplate, project: string): IPromise<Contracts.ReleaseDefinitionEnvironmentTemplate>;
    /**
     * [Preview API] Update the status of a release environment
     *
     * @param {Contracts.ReleaseEnvironmentUpdateMetadata} environmentUpdateData - Environment update meta data.
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {number} environmentId - Id of release environment.
     * @return IPromise<Contracts.ReleaseEnvironment>
     */
    updateReleaseEnvironment(environmentUpdateData: Contracts.ReleaseEnvironmentUpdateMetadata, project: string, releaseId: number, environmentId: number): IPromise<Contracts.ReleaseEnvironment>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @return IPromise<Contracts.ReleaseEnvironment>
     */
    getReleaseEnvironment(project: string, releaseId: number, environmentId: number): IPromise<Contracts.ReleaseEnvironment>;
    /**
     * [Preview API] Update a release definition.
     *
     * @param {Contracts.ReleaseDefinition} releaseDefinition - Release definition object to update.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ReleaseDefinition>
     */
    updateReleaseDefinition(releaseDefinition: Contracts.ReleaseDefinition, project: string): IPromise<Contracts.ReleaseDefinition>;
    /**
     * [Preview API] Get release definition of a given revision.
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Id of the release definition.
     * @param {number} revision - Revision number of the release definition.
     * @return IPromise<string>
     */
    getReleaseDefinitionRevision(project: string, definitionId: number, revision: number): IPromise<string>;
    /**
     * [Preview API] Delete a release definition.
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Id of the release definition.
     * @param {string} comment - Comment for deleting a release definition.
     * @param {boolean} forceDelete - 'true' to automatically cancel any in-progress release deployments and proceed with release definition deletion . Default is 'false'.
     * @return IPromise<void>
     */
    deleteReleaseDefinition(project: string, definitionId: number, comment?: string, forceDelete?: boolean): IPromise<void>;
    /**
     * [Preview API] Create a release definition
     *
     * @param {Contracts.ReleaseDefinition} releaseDefinition - release definition object to create.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ReleaseDefinition>
     */
    createReleaseDefinition(releaseDefinition: Contracts.ReleaseDefinition, project: string): IPromise<Contracts.ReleaseDefinition>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} baseReleaseId
     * @param {number} top
     * @return IPromise<Contracts.Change[]>
     */
    getReleaseChanges(project: string, releaseId: number, baseReleaseId?: number, top?: number): IPromise<Contracts.Change[]>;
    /**
     * [Preview API] Update status of an approval
     *
     * @param {Contracts.ReleaseApproval} approval - ReleaseApproval object having status, approver and comments.
     * @param {string} project - Project ID or project name
     * @param {number} approvalId - Id of the approval.
     * @return IPromise<Contracts.ReleaseApproval>
     */
    updateReleaseApproval(approval: Contracts.ReleaseApproval, project: string, approvalId: number): IPromise<Contracts.ReleaseApproval>;
    /**
     * [Preview API] Get an approval.
     *
     * @param {string} project - Project ID or project name
     * @param {number} approvalId - Id of the approval.
     * @param {boolean} includeHistory - 'true' to include history of the approval. Default is 'false'.
     * @return IPromise<Contracts.ReleaseApproval>
     */
    getApproval(project: string, approvalId: number, includeHistory?: boolean): IPromise<Contracts.ReleaseApproval>;
    /**
     * [Preview API] Get approval history.
     *
     * @param {string} project - Project ID or project name
     * @param {number} approvalStepId - Id of the approval.
     * @return IPromise<Contracts.ReleaseApproval>
     */
    getApprovalHistory(project: string, approvalStepId: number): IPromise<Contracts.ReleaseApproval>;
    /**
     * [Preview API] Get a list of approvals
     *
     * @param {string} project - Project ID or project name
     * @param {string} assignedToFilter - Approvals assigned to this user.
     * @param {Contracts.ApprovalStatus} statusFilter - Approvals with this status. Default is 'pending'.
     * @param {number[]} releaseIdsFilter - Approvals for release id(s) mentioned in the filter. Multiple releases can be mentioned by separating them with ',' e.g. releaseIdsFilter=1,2,3,4.
     * @param {Contracts.ApprovalType} typeFilter - Approval with this type.
     * @param {number} top - Number of approvals to get. Default is 50.
     * @param {number} continuationToken - Gets the approvals after the continuation token provided.
     * @param {Contracts.ReleaseQueryOrder} queryOrder - Gets the results in the defined order of created approvals. Default is 'descending'.
     * @param {boolean} includeMyGroupApprovals - 'true' to include my group approvals. Default is 'false'.
     * @return IPromise<Contracts.ReleaseApproval[]>
     */
    getApprovals(project: string, assignedToFilter?: string, statusFilter?: Contracts.ApprovalStatus, releaseIdsFilter?: number[], typeFilter?: Contracts.ApprovalType, top?: number, continuationToken?: number, queryOrder?: Contracts.ReleaseQueryOrder, includeMyGroupApprovals?: boolean): IPromise<Contracts.ReleaseApproval[]>;
}
export class CommonMethods3To5 extends CommonMethods2_2To5 {
    protected deploymentsApiVersion: string;
    protected logsApiVersion_17c91af7: string;
    protected logsApiVersion_2577e6c3: string;
    protected logsApiVersion_dec7ca5a: string;
    protected manualInterventionsApiVersion: string;
    protected releasesApiVersion: string;
    protected releasesettingsApiVersion: string;
    protected sourcebranchesApiVersion: string;
    protected tasksApiVersion_4259191d: string;
    protected tasksApiVersion_4259291d: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @param {number} attemptId
     * @param {string} timelineId
     * @return IPromise<Contracts.ReleaseTask[]>
     */
    getTasks2(project: string, releaseId: number, environmentId: number, attemptId: number, timelineId: string): IPromise<Contracts.ReleaseTask[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @param {number} releaseDeployPhaseId
     * @return IPromise<Contracts.ReleaseTask[]>
     */
    getTasksForTaskGroup(project: string, releaseId: number, environmentId: number, releaseDeployPhaseId: number): IPromise<Contracts.ReleaseTask[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @return IPromise<string[]>
     */
    getSourceBranches(project: string, definitionId: number): IPromise<string[]>;
    /**
     * [Preview API] Updates the release settings
     *
     * @param {Contracts.ReleaseSettings} releaseSettings
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ReleaseSettings>
     */
    updateReleaseSettings(releaseSettings: Contracts.ReleaseSettings, project: string): IPromise<Contracts.ReleaseSettings>;
    /**
     * [Preview API] Gets the release settings
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ReleaseSettings>
     */
    getReleaseSettings(project: string): IPromise<Contracts.ReleaseSettings>;
    /**
     * [Preview API] Undelete a soft deleted release.
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of release to be undeleted.
     * @param {string} comment - Any comment for undeleting.
     * @return IPromise<void>
     */
    undeleteRelease(project: string, releaseId: number, comment: string): IPromise<void>;
    /**
     * [Preview API] Get a Release
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {Contracts.ApprovalFilters} approvalFilters - A filter which would allow fetching approval steps selectively based on whether it is automated, or manual. This would also decide whether we should fetch pre and post approval snapshots. Assumes All by default
     * @param {string[]} propertyFilters - A comma-delimited list of extended properties to be retrieved. If set, the returned Release will contain values for the specified property Ids (if they exist). If not set, properties will not be included.
     * @param {Contracts.SingleReleaseExpands} expand - A property that should be expanded in the release.
     * @param {number} topGateRecords - Number of release gate records to get. Default is 5.
     * @return IPromise<Contracts.Release>
     */
    getRelease(project: string, releaseId: number, approvalFilters?: Contracts.ApprovalFilters, propertyFilters?: string[], expand?: Contracts.SingleReleaseExpands, topGateRecords?: number): IPromise<Contracts.Release>;
    /**
     * [Preview API] Update manual intervention.
     *
     * @param {Contracts.ManualInterventionUpdateMetadata} manualInterventionUpdateMetadata - Meta data to update manual intervention.
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {number} manualInterventionId - Id of the manual intervention.
     * @return IPromise<Contracts.ManualIntervention>
     */
    updateManualIntervention(manualInterventionUpdateMetadata: Contracts.ManualInterventionUpdateMetadata, project: string, releaseId: number, manualInterventionId: number): IPromise<Contracts.ManualIntervention>;
    /**
     * [Preview API] List all manual interventions for a given release.
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @return IPromise<Contracts.ManualIntervention[]>
     */
    getManualInterventions(project: string, releaseId: number): IPromise<Contracts.ManualIntervention[]>;
    /**
     * [Preview API] Get manual intervention for a given release and manual intervention id.
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {number} manualInterventionId - Id of the manual intervention.
     * @return IPromise<Contracts.ManualIntervention>
     */
    getManualIntervention(project: string, releaseId: number, manualInterventionId: number): IPromise<Contracts.ManualIntervention>;
    /**
     * [Preview API] Gets the task log of a release as a plain text file.
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {number} environmentId - Id of release environment.
     * @param {number} releaseDeployPhaseId - Release deploy phase Id.
     * @param {number} taskId - ReleaseTask Id for the log.
     * @param {number} startLine - Starting line number for logs
     * @param {number} endLine - Ending line number for logs
     * @return IPromise<string>
     */
    getTaskLog(project: string, releaseId: number, environmentId: number, releaseDeployPhaseId: number, taskId: number, startLine?: number, endLine?: number): IPromise<string>;
    /**
     * [Preview API] Gets the task log of a release as a plain text file.
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {number} environmentId - Id of release environment.
     * @param {number} attemptId
     * @param {string} timelineId
     * @param {number} taskId - ReleaseTask Id for the log.
     * @param {number} startLine - Starting line number for logs
     * @param {number} endLine - Ending line number for logs
     * @return IPromise<string>
     */
    getTaskLog2(project: string, releaseId: number, environmentId: number, attemptId: number, timelineId: string, taskId: number, startLine?: number, endLine?: number): IPromise<string>;
    /**
     * [Preview API] Gets gate logs
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {number} environmentId - Id of release environment.
     * @param {number} gateId - Id of the gate.
     * @param {number} taskId - ReleaseTask Id for the log.
     * @return IPromise<string>
     */
    getGateLog(project: string, releaseId: number, environmentId: number, gateId: number, taskId: number): IPromise<string>;
    /**
     * [Preview API]
     *
     * @param {Contracts.DeploymentQueryParameters} queryParameters
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.Deployment[]>
     */
    getDeploymentsForMultipleEnvironments(queryParameters: Contracts.DeploymentQueryParameters, project: string): IPromise<Contracts.Deployment[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param {number} definitionEnvironmentId
     * @param {string} createdBy
     * @param {Date} minModifiedTime
     * @param {Date} maxModifiedTime
     * @param {Contracts.DeploymentStatus} deploymentStatus
     * @param {Contracts.DeploymentOperationStatus} operationStatus
     * @param {boolean} latestAttemptsOnly
     * @param {Contracts.ReleaseQueryOrder} queryOrder
     * @param {number} top
     * @param {number} continuationToken
     * @param {string} createdFor
     * @param {Date} minStartedTime
     * @param {Date} maxStartedTime
     * @return IPromise<Contracts.Deployment[]>
     */
    getDeployments(project: string, definitionId?: number, definitionEnvironmentId?: number, createdBy?: string, minModifiedTime?: Date, maxModifiedTime?: Date, deploymentStatus?: Contracts.DeploymentStatus, operationStatus?: Contracts.DeploymentOperationStatus, latestAttemptsOnly?: boolean, queryOrder?: Contracts.ReleaseQueryOrder, top?: number, continuationToken?: number, createdFor?: string, minStartedTime?: Date, maxStartedTime?: Date): IPromise<Contracts.Deployment[]>;
}
export class CommonMethods3_1To5 extends CommonMethods3To5 {
    protected favoritesApiVersion: string;
    protected foldersApiVersion: string;
    protected metricsApiVersion: string;
    protected projectsApiVersion: string;
    protected releasesApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Get a list of releases
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Releases from this release definition Id.
     * @param {number} definitionEnvironmentId
     * @param {string} searchText - Releases with names containing searchText.
     * @param {string} createdBy - Releases created by this user.
     * @param {Contracts.ReleaseStatus} statusFilter - Releases that have this status.
     * @param {number} environmentStatusFilter
     * @param {Date} minCreatedTime - Releases that were created after this time.
     * @param {Date} maxCreatedTime - Releases that were created before this time.
     * @param {Contracts.ReleaseQueryOrder} queryOrder - Gets the results in the defined order of created date for releases. Default is descending.
     * @param {number} top - Number of releases to get. Default is 50.
     * @param {number} continuationToken - Gets the releases after the continuation token provided.
     * @param {Contracts.ReleaseExpands} expand - The property that should be expanded in the list of releases.
     * @param {string} artifactTypeId - Releases with given artifactTypeId will be returned. Values can be Build, Jenkins, GitHub, Nuget, Team Build (external), ExternalTFSBuild, Git, TFVC, ExternalTfsXamlBuild.
     * @param {string} sourceId - Unique identifier of the artifact used. e.g. For build it would be {projectGuid}:{BuildDefinitionId}, for Jenkins it would be {JenkinsConnectionId}:{JenkinsDefinitionId}, for TfsOnPrem it would be {TfsOnPremConnectionId}:{ProjectName}:{TfsOnPremDefinitionId}. For third-party artifacts e.g. TeamCity, BitBucket you may refer 'uniqueSourceIdentifier' inside vss-extension.json https://github.com/Microsoft/vsts-rm-extensions/blob/master/Extensions.
     * @param {string} artifactVersionId - Releases with given artifactVersionId will be returned. E.g. in case of Build artifactType, it is buildId.
     * @param {string} sourceBranchFilter - Releases with given sourceBranchFilter will be returned.
     * @param {boolean} isDeleted - Gets the soft deleted releases, if true.
     * @param {string[]} tagFilter - A comma-delimited list of tags. Only releases with these tags will be returned.
     * @param {string[]} propertyFilters - A comma-delimited list of extended properties to be retrieved. If set, the returned Releases will contain values for the specified property Ids (if they exist). If not set, properties will not be included. Note that this will not filter out any Release from results irrespective of whether it has property set or not.
     * @param {number[]} releaseIdFilter - A comma-delimited list of releases Ids. Only releases with these Ids will be returned.
     * @return IPromise<Contracts.Release[]>
     */
    getReleases(project?: string, definitionId?: number, definitionEnvironmentId?: number, searchText?: string, createdBy?: string, statusFilter?: Contracts.ReleaseStatus, environmentStatusFilter?: number, minCreatedTime?: Date, maxCreatedTime?: Date, queryOrder?: Contracts.ReleaseQueryOrder, top?: number, continuationToken?: number, expand?: Contracts.ReleaseExpands, artifactTypeId?: string, sourceId?: string, artifactVersionId?: string, sourceBranchFilter?: string, isDeleted?: boolean, tagFilter?: string[], propertyFilters?: string[], releaseIdFilter?: number[]): IPromise<Contracts.Release[]>;
    /**
     * [Preview API]
     *
     * @param {string} artifactType
     * @param {string} artifactSourceId
     * @return IPromise<Contracts.ProjectReference[]>
     */
    getReleaseProjects(artifactType: string, artifactSourceId: string): IPromise<Contracts.ProjectReference[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {Date} minMetricsTime
     * @return IPromise<Contracts.Metric[]>
     */
    getMetrics(project: string, minMetricsTime?: Date): IPromise<Contracts.Metric[]>;
    /**
     * [Preview API] Updates an existing folder at given  existing path
     *
     * @param {Contracts.Folder} folder
     * @param {string} project - Project ID or project name
     * @param {string} path
     * @return IPromise<Contracts.Folder>
     */
    updateFolder(folder: Contracts.Folder, project: string, path: string): IPromise<Contracts.Folder>;
    /**
     * [Preview API] Gets folders
     *
     * @param {string} project - Project ID or project name
     * @param {string} path
     * @param {Contracts.FolderPathQueryOrder} queryOrder
     * @return IPromise<Contracts.Folder[]>
     */
    getFolders(project: string, path?: string, queryOrder?: Contracts.FolderPathQueryOrder): IPromise<Contracts.Folder[]>;
    /**
     * [Preview API] Deletes a definition folder for given folder name and path and all it's existing definitions
     *
     * @param {string} project - Project ID or project name
     * @param {string} path
     * @return IPromise<void>
     */
    deleteFolder(project: string, path: string): IPromise<void>;
    /**
     * [Preview API] Creates a new folder
     *
     * @param {Contracts.Folder} folder
     * @param {string} project - Project ID or project name
     * @param {string} path
     * @return IPromise<Contracts.Folder>
     */
    createFolder(folder: Contracts.Folder, project: string, path: string): IPromise<Contracts.Folder>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} scope
     * @param {string} identityId
     * @return IPromise<Contracts.FavoriteItem[]>
     */
    getFavorites(project: string, scope: string, identityId?: string): IPromise<Contracts.FavoriteItem[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} scope
     * @param {string} identityId
     * @param {string} favoriteItemIds
     * @return IPromise<void>
     */
    deleteFavorites(project: string, scope: string, identityId?: string, favoriteItemIds?: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {Contracts.FavoriteItem[]} favoriteItems
     * @param {string} project - Project ID or project name
     * @param {string} scope
     * @param {string} identityId
     * @return IPromise<Contracts.FavoriteItem[]>
     */
    createFavorites(favoriteItems: Contracts.FavoriteItem[], project: string, scope: string, identityId?: string): IPromise<Contracts.FavoriteItem[]>;
}
export class CommonMethods3_2To5 extends CommonMethods3_1To5 {
    protected definitionEnvironmentsApiVersion: string;
    protected issuesApiVersion: string;
    protected tagsApiVersion: string;
    protected tagsApiVersion_3d21b4c8: string;
    protected tagsApiVersion_c5b602b6: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<string[]>
     */
    getTags(project: string): IPromise<string[]>;
    /**
     * [Preview API] Gets the tags for a release
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @return IPromise<string[]>
     */
    getReleaseTags(project: string, releaseId: number): IPromise<string[]>;
    /**
     * [Preview API] Deletes a tag from a release
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {string} tag
     * @return IPromise<string[]>
     */
    deleteReleaseTag(project: string, releaseId: number, tag: string): IPromise<string[]>;
    /**
     * [Preview API] Adds tag to a release
     *
     * @param {string[]} tags
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @return IPromise<string[]>
     */
    addReleaseTags(tags: string[], project: string, releaseId: number): IPromise<string[]>;
    /**
     * [Preview API] Adds a tag to a releaseId
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {string} tag
     * @return IPromise<string[]>
     */
    addReleaseTag(project: string, releaseId: number, tag: string): IPromise<string[]>;
    /**
     * [Preview API] Gets the tags for a definition
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseDefinitionId
     * @return IPromise<string[]>
     */
    getDefinitionTags(project: string, releaseDefinitionId: number): IPromise<string[]>;
    /**
     * [Preview API] Deletes a tag from a definition
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseDefinitionId
     * @param {string} tag
     * @return IPromise<string[]>
     */
    deleteDefinitionTag(project: string, releaseDefinitionId: number, tag: string): IPromise<string[]>;
    /**
     * [Preview API] Adds multiple tags to a definition
     *
     * @param {string[]} tags
     * @param {string} project - Project ID or project name
     * @param {number} releaseDefinitionId
     * @return IPromise<string[]>
     */
    addDefinitionTags(tags: string[], project: string, releaseDefinitionId: number): IPromise<string[]>;
    /**
     * [Preview API] Adds a tag to a definition
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseDefinitionId
     * @param {string} tag
     * @return IPromise<string[]>
     */
    addDefinitionTag(project: string, releaseDefinitionId: number, tag: string): IPromise<string[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} sourceId
     * @return IPromise<Contracts.AutoTriggerIssue[]>
     */
    getIssues(project: string, buildId: number, sourceId?: string): IPromise<Contracts.AutoTriggerIssue[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} taskGroupId
     * @param {string[]} propertyFilters
     * @return IPromise<Contracts.DefinitionEnvironmentReference[]>
     */
    getDefinitionEnvironments(project: string, taskGroupId?: string, propertyFilters?: string[]): IPromise<Contracts.DefinitionEnvironmentReference[]>;
}
export class CommonMethods4To5 extends CommonMethods3_2To5 {
    protected approvalsApiVersion_c957584a: string;
    protected autotriggerissuesApiVersion: string;
    protected definitionsApiVersion: string;
    protected environmenttemplatesApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Undelete a release definition environment template.
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId - Id of the definition environment template to be undeleted
     * @return IPromise<Contracts.ReleaseDefinitionEnvironmentTemplate>
     */
    undeleteReleaseDefinitionEnvironmentTemplate(project: string, templateId: string): IPromise<Contracts.ReleaseDefinitionEnvironmentTemplate>;
    /**
     * [Preview API] Undelete a release definition.
     *
     * @param {Contracts.ReleaseDefinitionUndeleteParameter} releaseDefinitionUndeleteParameter - Object for undelete release definition.
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Id of the release definition to be undeleted
     * @return IPromise<Contracts.ReleaseDefinition>
     */
    undeleteReleaseDefinition(releaseDefinitionUndeleteParameter: Contracts.ReleaseDefinitionUndeleteParameter, project: string, definitionId: number): IPromise<Contracts.ReleaseDefinition>;
    /**
     * [Preview API] Get a list of release definitions.
     *
     * @param {string} project - Project ID or project name
     * @param {string} searchText - Get release definitions with names containing searchText.
     * @param {Contracts.ReleaseDefinitionExpands} expand - The properties that should be expanded in the list of Release definitions.
     * @param {string} artifactType - Release definitions with given artifactType will be returned. Values can be Build, Jenkins, GitHub, Nuget, Team Build (external), ExternalTFSBuild, Git, TFVC, ExternalTfsXamlBuild.
     * @param {string} artifactSourceId - Release definitions with given artifactSourceId will be returned. e.g. For build it would be {projectGuid}:{BuildDefinitionId}, for Jenkins it would be {JenkinsConnectionId}:{JenkinsDefinitionId}, for TfsOnPrem it would be {TfsOnPremConnectionId}:{ProjectName}:{TfsOnPremDefinitionId}. For third-party artifacts e.g. TeamCity, BitBucket you may refer 'uniqueSourceIdentifier' inside vss-extension.json at https://github.com/Microsoft/vsts-rm-extensions/blob/master/Extensions.
     * @param {number} top - Number of release definitions to get.
     * @param {string} continuationToken - Gets the release definitions after the continuation token provided.
     * @param {Contracts.ReleaseDefinitionQueryOrder} queryOrder - Gets the results in the defined order. Default is 'IdAscending'.
     * @param {string} path - Gets the release definitions under the specified path.
     * @param {boolean} isExactNameMatch - 'true'to gets the release definitions with exact match as specified in searchText. Default is 'false'.
     * @param {string[]} tagFilter - A comma-delimited list of tags. Only release definitions with these tags will be returned.
     * @param {string[]} propertyFilters - A comma-delimited list of extended properties to be retrieved. If set, the returned Release Definitions will contain values for the specified property Ids (if they exist). If not set, properties will not be included. Note that this will not filter out any Release Definition from results irrespective of whether it has property set or not.
     * @param {string[]} definitionIdFilter - A comma-delimited list of release definitions to retrieve.
     * @param {boolean} isDeleted - 'true' to get release definitions that has been deleted. Default is 'false'
     * @return IPromise<Contracts.ReleaseDefinition[]>
     */
    getReleaseDefinitions(project: string, searchText?: string, expand?: Contracts.ReleaseDefinitionExpands, artifactType?: string, artifactSourceId?: string, top?: number, continuationToken?: string, queryOrder?: Contracts.ReleaseDefinitionQueryOrder, path?: string, isExactNameMatch?: boolean, tagFilter?: string[], propertyFilters?: string[], definitionIdFilter?: string[], isDeleted?: boolean): IPromise<Contracts.ReleaseDefinition[]>;
    /**
     * [Preview API] Get a release definition.
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Id of the release definition.
     * @param {string[]} propertyFilters - A comma-delimited list of extended properties to be retrieved. If set, the returned Release Definition will contain values for the specified property Ids (if they exist). If not set, properties will not be included.
     * @return IPromise<Contracts.ReleaseDefinition>
     */
    getReleaseDefinition(project: string, definitionId: number, propertyFilters?: string[]): IPromise<Contracts.ReleaseDefinition>;
    /**
     * [Preview API]
     *
     * @param {string} artifactType
     * @param {string} sourceId
     * @param {string} artifactVersionId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.AutoTriggerIssue[]>
     */
    getAutoTriggerIssues(artifactType: string, sourceId: string, artifactVersionId: string, project?: string): IPromise<Contracts.AutoTriggerIssue[]>;
    /**
     * [Preview API]
     *
     * @param {Contracts.ReleaseApproval[]} approvals
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ReleaseApproval[]>
     */
    updateReleaseApprovals(approvals: Contracts.ReleaseApproval[], project: string): IPromise<Contracts.ReleaseApproval[]>;
}
export class CommonMethods4_1To5 extends CommonMethods4To5 {
    protected attachmentsApiVersion: string;
    protected attachmentsApiVersion_c4071f6d: string;
    protected badgeApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Gets a badge that indicates the status of the most recent deployment for an environment.
     *
     * @param {string} projectId - The ID of the Project.
     * @param {number} releaseDefinitionId - The ID of the Release Definition.
     * @param {number} environmentId - The ID of the Environment.
     * @param {string} branchName - The name of the branch.
     * @return IPromise<string>
     */
    getDeploymentBadge(projectId: string, releaseDefinitionId: number, environmentId: number, branchName?: string): IPromise<string>;
    /**
     * [Obsolete - GetTaskAttachments API is deprecated. Use GetReleaseTaskAttachments API instead.]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @param {number} attemptId
     * @param {string} timelineId
     * @param {string} type
     * @return IPromise<Contracts.ReleaseTaskAttachment[]>
     */
    getTaskAttachments(project: string, releaseId: number, environmentId: number, attemptId: number, timelineId: string, type: string): IPromise<Contracts.ReleaseTaskAttachment[]>;
    /**
     * [Obsolete - GetTaskAttachmentContent API is deprecated. Use GetReleaseTaskAttachmentContent API instead.]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @param {number} attemptId
     * @param {string} timelineId
     * @param {string} recordId
     * @param {string} type
     * @param {string} name
     * @return IPromise<ArrayBuffer>
     */
    getTaskAttachmentContent(project: string, releaseId: number, environmentId: number, attemptId: number, timelineId: string, recordId: string, type: string, name: string): IPromise<ArrayBuffer>;
}
/**
 * @exemptedapi
 */
export class ReleaseHttpClient5 extends CommonMethods4_1To5 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @param {number} attemptId
     * @param {string} planId
     * @param {string} timelineId
     * @param {string} recordId
     * @param {string} type
     * @param {string} name
     * @return IPromise<ArrayBuffer>
     */
    getReleaseTaskAttachmentContent(project: string, releaseId: number, environmentId: number, attemptId: number, planId: string, timelineId: string, recordId: string, type: string, name: string): IPromise<ArrayBuffer>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @param {number} attemptId
     * @param {string} planId
     * @param {string} type
     * @return IPromise<Contracts.ReleaseTaskAttachment[]>
     */
    getReleaseTaskAttachments(project: string, releaseId: number, environmentId: number, attemptId: number, planId: string, type: string): IPromise<Contracts.ReleaseTaskAttachment[]>;
    /**
     * [Preview API] Updates the gate for a deployment.
     *
     * @param {Contracts.GateUpdateMetadata} gateUpdateMetadata - Metadata to patch the Release Gates.
     * @param {string} project - Project ID or project name
     * @param {number} gateStepId - Gate step Id.
     * @return IPromise<Contracts.ReleaseGates>
     */
    updateGates(gateUpdateMetadata: Contracts.GateUpdateMetadata, project: string, gateStepId: number): IPromise<Contracts.ReleaseGates>;
}
/**
 * @exemptedapi
 */
export class ReleaseHttpClient4_1 extends CommonMethods4_1To5 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class ReleaseHttpClient4 extends CommonMethods4To5 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class ReleaseHttpClient3_2 extends CommonMethods3_2To5 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Get a release definition.
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Id of the release definition.
     * @param {string[]} propertyFilters - A comma-delimited list of extended properties to retrieve.
     * @return IPromise<Contracts.ReleaseDefinition>
     */
    getReleaseDefinition(project: string, definitionId: number, propertyFilters?: string[]): IPromise<Contracts.ReleaseDefinition>;
    /**
     * [Preview API] Get a list of release definitions.
     *
     * @param {string} project - Project ID or project name
     * @param {string} searchText - Get release definitions with names containing searchText.
     * @param {Contracts.ReleaseDefinitionExpands} expand - The properties that should be expanded in the list of Release definitions.
     * @param {string} artifactType - Release definitions with given artifactType will be returned. Values can be Build, Jenkins, GitHub, Nuget, Team Build (external), ExternalTFSBuild, Git, TFVC, ExternalTfsXamlBuild.
     * @param {string} artifactSourceId - Release definitions with given artifactSourceId will be returned. e.g. For build it would be {projectGuid}:{BuildDefinitionId}, for Jenkins it would be {JenkinsConnectionId}:{JenkinsDefinitionId}, for TfsOnPrem it would be {TfsOnPremConnectionId}:{ProjectName}:{TfsOnPremDefinitionId}. For third-party artifacts e.g. TeamCity, BitBucket you may refer 'uniqueSourceIdentifier' inside vss-extension.json at https://github.com/Microsoft/vsts-rm-extensions/blob/master/Extensions.
     * @param {number} top - Number of release definitions to get.
     * @param {string} continuationToken - Gets the release definitions after the continuation token provided.
     * @param {Contracts.ReleaseDefinitionQueryOrder} queryOrder - Gets the results in the defined order. Default is 'IdAscending'.
     * @param {string} path - Gets the release definitions under the specified path.
     * @param {boolean} isExactNameMatch - 'true'to gets the release definitions with exact match as specified in searchText. Default is 'false'.
     * @param {string[]} tagFilter - A comma-delimited list of tags. Only release definitions with these tags will be returned.
     * @param {string[]} propertyFilters - A comma-delimited list of extended properties to retrieve.
     * @param {string[]} definitionIdFilter - A comma-delimited list of release definitions to retrieve.
     * @param {boolean} isDeleted - 'true' to get release definitions that has been deleted. Default is 'false'
     * @return IPromise<Contracts.ReleaseDefinition[]>
     */
    getReleaseDefinitions(project: string, searchText?: string, expand?: Contracts.ReleaseDefinitionExpands, artifactType?: string, artifactSourceId?: string, top?: number, continuationToken?: string, queryOrder?: Contracts.ReleaseDefinitionQueryOrder, path?: string, isExactNameMatch?: boolean, tagFilter?: string[], propertyFilters?: string[], definitionIdFilter?: string[], isDeleted?: boolean): IPromise<Contracts.ReleaseDefinition[]>;
}
/**
 * @exemptedapi
 */
export class ReleaseHttpClient3_1 extends CommonMethods3_1To5 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Get a release definition.
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Id of the release definition.
     * @param {string[]} propertyFilters - A comma-delimited list of extended properties to retrieve.
     * @return IPromise<Contracts.ReleaseDefinition>
     */
    getReleaseDefinition(project: string, definitionId: number, propertyFilters?: string[]): IPromise<Contracts.ReleaseDefinition>;
    /**
     * [Preview API] Get a list of release definitions.
     *
     * @param {string} project - Project ID or project name
     * @param {string} searchText - Get release definitions with names containing searchText.
     * @param {Contracts.ReleaseDefinitionExpands} expand - The properties that should be expanded in the list of Release definitions.
     * @param {string} artifactType - Release definitions with given artifactType will be returned. Values can be Build, Jenkins, GitHub, Nuget, Team Build (external), ExternalTFSBuild, Git, TFVC, ExternalTfsXamlBuild.
     * @param {string} artifactSourceId - Release definitions with given artifactSourceId will be returned. e.g. For build it would be {projectGuid}:{BuildDefinitionId}, for Jenkins it would be {JenkinsConnectionId}:{JenkinsDefinitionId}, for TfsOnPrem it would be {TfsOnPremConnectionId}:{ProjectName}:{TfsOnPremDefinitionId}. For third-party artifacts e.g. TeamCity, BitBucket you may refer 'uniqueSourceIdentifier' inside vss-extension.json at https://github.com/Microsoft/vsts-rm-extensions/blob/master/Extensions.
     * @param {number} top - Number of release definitions to get.
     * @param {string} continuationToken - Gets the release definitions after the continuation token provided.
     * @param {Contracts.ReleaseDefinitionQueryOrder} queryOrder - Gets the results in the defined order. Default is 'IdAscending'.
     * @param {string} path - Gets the release definitions under the specified path.
     * @param {boolean} isExactNameMatch - 'true'to gets the release definitions with exact match as specified in searchText. Default is 'false'.
     * @param {string[]} tagFilter - A comma-delimited list of tags. Only release definitions with these tags will be returned.
     * @param {string[]} propertyFilters - A comma-delimited list of extended properties to retrieve.
     * @param {string[]} definitionIdFilter - A comma-delimited list of release definitions to retrieve.
     * @param {boolean} isDeleted - 'true' to get release definitions that has been deleted. Default is 'false'
     * @return IPromise<Contracts.ReleaseDefinition[]>
     */
    getReleaseDefinitions(project: string, searchText?: string, expand?: Contracts.ReleaseDefinitionExpands, artifactType?: string, artifactSourceId?: string, top?: number, continuationToken?: string, queryOrder?: Contracts.ReleaseDefinitionQueryOrder, path?: string, isExactNameMatch?: boolean, tagFilter?: string[], propertyFilters?: string[], definitionIdFilter?: string[], isDeleted?: boolean): IPromise<Contracts.ReleaseDefinition[]>;
    /**
     * [Preview API] Returns throttled queue as per the task hub license of parallel releases
     *
     * @param {string} projectId
     * @param {number} releaseId
     * @return IPromise<Contracts.QueuedReleaseData[]>
     */
    getQueuedReleases(projectId?: string, releaseId?: number): IPromise<Contracts.QueuedReleaseData[]>;
}
/**
 * @exemptedapi
 */
export class ReleaseHttpClient3 extends CommonMethods3To5 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Get a release definition.
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Id of the release definition.
     * @param {string[]} propertyFilters - A comma-delimited list of extended properties to retrieve.
     * @return IPromise<Contracts.ReleaseDefinition>
     */
    getReleaseDefinition(project: string, definitionId: number, propertyFilters?: string[]): IPromise<Contracts.ReleaseDefinition>;
    /**
     * [Preview API] Get a list of release definitions.
     *
     * @param {string} project - Project ID or project name
     * @param {string} searchText - Get release definitions with names containing searchText.
     * @param {Contracts.ReleaseDefinitionExpands} expand - The properties that should be expanded in the list of Release definitions.
     * @param {string} artifactType - Release definitions with given artifactType will be returned. Values can be Build, Jenkins, GitHub, Nuget, Team Build (external), ExternalTFSBuild, Git, TFVC, ExternalTfsXamlBuild.
     * @param {string} artifactSourceId - Release definitions with given artifactSourceId will be returned. e.g. For build it would be {projectGuid}:{BuildDefinitionId}, for Jenkins it would be {JenkinsConnectionId}:{JenkinsDefinitionId}, for TfsOnPrem it would be {TfsOnPremConnectionId}:{ProjectName}:{TfsOnPremDefinitionId}. For third-party artifacts e.g. TeamCity, BitBucket you may refer 'uniqueSourceIdentifier' inside vss-extension.json at https://github.com/Microsoft/vsts-rm-extensions/blob/master/Extensions.
     * @param {number} top - Number of release definitions to get.
     * @param {string} continuationToken - Gets the release definitions after the continuation token provided.
     * @param {Contracts.ReleaseDefinitionQueryOrder} queryOrder - Gets the results in the defined order. Default is 'IdAscending'.
     * @param {string} path - Gets the release definitions under the specified path.
     * @param {boolean} isExactNameMatch - 'true'to gets the release definitions with exact match as specified in searchText. Default is 'false'.
     * @param {string[]} tagFilter - A comma-delimited list of tags. Only release definitions with these tags will be returned.
     * @param {string[]} propertyFilters - A comma-delimited list of extended properties to retrieve.
     * @param {string[]} definitionIdFilter - A comma-delimited list of release definitions to retrieve.
     * @param {boolean} isDeleted - 'true' to get release definitions that has been deleted. Default is 'false'
     * @return IPromise<Contracts.ReleaseDefinition[]>
     */
    getReleaseDefinitions(project: string, searchText?: string, expand?: Contracts.ReleaseDefinitionExpands, artifactType?: string, artifactSourceId?: string, top?: number, continuationToken?: string, queryOrder?: Contracts.ReleaseDefinitionQueryOrder, path?: string, isExactNameMatch?: boolean, tagFilter?: string[], propertyFilters?: string[], definitionIdFilter?: string[], isDeleted?: boolean): IPromise<Contracts.ReleaseDefinition[]>;
    /**
     * [Preview API] Get Releases
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Releases from this release definition Id.
     * @param {number} definitionEnvironmentId
     * @param {string} searchText - Releases with names containing searchText.
     * @param {string} createdBy - Releases created by this user.
     * @param {Contracts.ReleaseStatus} statusFilter - Releases that have this status.
     * @param {number} environmentStatusFilter
     * @param {Date} minCreatedTime - Releases that were created after this time.
     * @param {Date} maxCreatedTime - Releases that were created before this time.
     * @param {Contracts.ReleaseQueryOrder} queryOrder - Gets the results in the defined order of created date for releases. Default is descending.
     * @param {number} top - Number of releases to get. Default is 50.
     * @param {number} continuationToken - Gets the releases after the continuation token provided.
     * @param {Contracts.ReleaseExpands} expand - The property that should be expanded in the list of releases.
     * @param {string} artifactTypeId - Releases with given artifactTypeId will be returned. Values can be Build, Jenkins, GitHub, Nuget, Team Build (external), ExternalTFSBuild, Git, TFVC, ExternalTfsXamlBuild.
     * @param {string} sourceId - Unique identifier of the artifact used. e.g. For build it would be {projectGuid}:{BuildDefinitionId}, for Jenkins it would be {JenkinsConnectionId}:{JenkinsDefinitionId}, for TfsOnPrem it would be {TfsOnPremConnectionId}:{ProjectName}:{TfsOnPremDefinitionId}. For third-party artifacts e.g. TeamCity, BitBucket you may refer 'uniqueSourceIdentifier' inside vss-extension.json https://github.com/Microsoft/vsts-rm-extensions/blob/master/Extensions.
     * @param {string} artifactVersionId - Releases with given artifactVersionId will be returned. E.g. in case of Build artifactType, it is buildId.
     * @param {string} sourceBranchFilter - Releases with given sourceBranchFilter will be returned.
     * @param {boolean} isDeleted - Gets the soft deleted releases, if true.
     * @param {string[]} tagFilter - A comma-delimited list of tags. Only releases with these tags will be returned.
     * @param {string[]} propertyFilters - A comma-delimited list of extended properties to retrieve.
     * @param {number[]} releaseIdFilter - A comma-delimited list of releases Ids. Only releases with these Ids will be returned.
     * @return IPromise<Contracts.Release[]>
     */
    getReleases(project: string, definitionId?: number, definitionEnvironmentId?: number, searchText?: string, createdBy?: string, statusFilter?: Contracts.ReleaseStatus, environmentStatusFilter?: number, minCreatedTime?: Date, maxCreatedTime?: Date, queryOrder?: Contracts.ReleaseQueryOrder, top?: number, continuationToken?: number, expand?: Contracts.ReleaseExpands, artifactTypeId?: string, sourceId?: string, artifactVersionId?: string, sourceBranchFilter?: string, isDeleted?: boolean, tagFilter?: string[], propertyFilters?: string[], releaseIdFilter?: number[]): IPromise<Contracts.Release[]>;
    /**
     * [Preview API] Returns throttled queue as per the task hub license of parallel releases
     *
     * @param {string} projectId
     * @param {number} releaseId
     * @return IPromise<Contracts.QueuedReleaseData[]>
     */
    getQueuedReleases(projectId?: string, releaseId?: number): IPromise<Contracts.QueuedReleaseData[]>;
}
/**
 * @exemptedapi
 */
export class ReleaseHttpClient2_3 extends CommonMethods2_2To5 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Get a release definition.
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Id of the release definition.
     * @param {string[]} propertyFilters - A comma-delimited list of extended properties to retrieve.
     * @return IPromise<Contracts.ReleaseDefinition>
     */
    getReleaseDefinition(project: string, definitionId: number, propertyFilters?: string[]): IPromise<Contracts.ReleaseDefinition>;
    /**
     * [Preview API] Get a list of release definitions.
     *
     * @param {string} project - Project ID or project name
     * @param {string} searchText - Get release definitions with names containing searchText.
     * @param {Contracts.ReleaseDefinitionExpands} expand - The properties that should be expanded in the list of Release definitions.
     * @param {string} artifactType - Release definitions with given artifactType will be returned. Values can be Build, Jenkins, GitHub, Nuget, Team Build (external), ExternalTFSBuild, Git, TFVC, ExternalTfsXamlBuild.
     * @param {string} artifactSourceId - Release definitions with given artifactSourceId will be returned. e.g. For build it would be {projectGuid}:{BuildDefinitionId}, for Jenkins it would be {JenkinsConnectionId}:{JenkinsDefinitionId}, for TfsOnPrem it would be {TfsOnPremConnectionId}:{ProjectName}:{TfsOnPremDefinitionId}. For third-party artifacts e.g. TeamCity, BitBucket you may refer 'uniqueSourceIdentifier' inside vss-extension.json at https://github.com/Microsoft/vsts-rm-extensions/blob/master/Extensions.
     * @param {number} top - Number of release definitions to get.
     * @param {string} continuationToken - Gets the release definitions after the continuation token provided.
     * @param {Contracts.ReleaseDefinitionQueryOrder} queryOrder - Gets the results in the defined order. Default is 'IdAscending'.
     * @param {string} path - Gets the release definitions under the specified path.
     * @param {boolean} isExactNameMatch - 'true'to gets the release definitions with exact match as specified in searchText. Default is 'false'.
     * @param {string[]} tagFilter - A comma-delimited list of tags. Only release definitions with these tags will be returned.
     * @param {string[]} propertyFilters - A comma-delimited list of extended properties to retrieve.
     * @param {string[]} definitionIdFilter - A comma-delimited list of release definitions to retrieve.
     * @param {boolean} isDeleted - 'true' to get release definitions that has been deleted. Default is 'false'
     * @return IPromise<Contracts.ReleaseDefinition[]>
     */
    getReleaseDefinitions(project: string, searchText?: string, expand?: Contracts.ReleaseDefinitionExpands, artifactType?: string, artifactSourceId?: string, top?: number, continuationToken?: string, queryOrder?: Contracts.ReleaseDefinitionQueryOrder, path?: string, isExactNameMatch?: boolean, tagFilter?: string[], propertyFilters?: string[], definitionIdFilter?: string[], isDeleted?: boolean): IPromise<Contracts.ReleaseDefinition[]>;
    /**
     * [Preview API] Get A Release
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {Contracts.ApprovalFilters} approvalFilters - A filter which would allow fetching approval steps selectively based on whether it is automated, or manual. This would also decide whether we should fetch pre and post approval snapshots. Assumes All by default
     * @param {string[]} propertyFilters - A comma-delimited list of properties to include in the results.
     * @param {Contracts.SingleReleaseExpands} expand - A property that should be expanded in the release.
     * @param {number} topGateRecords
     * @return IPromise<Contracts.Release>
     */
    getRelease(project: string, releaseId: number, approvalFilters?: Contracts.ApprovalFilters, propertyFilters?: string[], expand?: Contracts.SingleReleaseExpands, topGateRecords?: number): IPromise<Contracts.Release>;
    /**
     * [Preview API] Get a list of releases
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Releases from this release definition Id.
     * @param {number} definitionEnvironmentId
     * @param {string} searchText - Releases with names containing searchText.
     * @param {string} createdBy - Releases created by this user.
     * @param {Contracts.ReleaseStatus} statusFilter - Releases that have this status.
     * @param {number} environmentStatusFilter
     * @param {Date} minCreatedTime - Releases that were created after this time.
     * @param {Date} maxCreatedTime - Releases that were created before this time.
     * @param {Contracts.ReleaseQueryOrder} queryOrder - Gets the results in the defined order of created date for releases. Default is descending.
     * @param {number} top - Number of releases to get. Default is 50.
     * @param {number} continuationToken - Gets the releases after the continuation token provided.
     * @param {Contracts.ReleaseExpands} expand - The property that should be expanded in the list of releases.
     * @param {string} artifactTypeId - Releases with given artifactTypeId will be returned. Values can be Build, Jenkins, GitHub, Nuget, Team Build (external), ExternalTFSBuild, Git, TFVC, ExternalTfsXamlBuild.
     * @param {string} sourceId - Unique identifier of the artifact used. e.g. For build it would be {projectGuid}:{BuildDefinitionId}, for Jenkins it would be {JenkinsConnectionId}:{JenkinsDefinitionId}, for TfsOnPrem it would be {TfsOnPremConnectionId}:{ProjectName}:{TfsOnPremDefinitionId}. For third-party artifacts e.g. TeamCity, BitBucket you may refer 'uniqueSourceIdentifier' inside vss-extension.json https://github.com/Microsoft/vsts-rm-extensions/blob/master/Extensions.
     * @param {string} artifactVersionId - Releases with given artifactVersionId will be returned. E.g. in case of Build artifactType, it is buildId.
     * @param {string} sourceBranchFilter - Releases with given sourceBranchFilter will be returned.
     * @param {boolean} isDeleted - Gets the soft deleted releases, if true.
     * @param {string[]} tagFilter - A comma-delimited list of tags. Only releases with these tags will be returned.
     * @param {string[]} propertyFilters - A comma-delimited list of extended properties to retrieve.
     * @param {number[]} releaseIdFilter - A comma-delimited list of releases Ids. Only releases with these Ids will be returned.
     * @return IPromise<Contracts.Release[]>
     */
    getReleases(project: string, definitionId?: number, definitionEnvironmentId?: number, searchText?: string, createdBy?: string, statusFilter?: Contracts.ReleaseStatus, environmentStatusFilter?: number, minCreatedTime?: Date, maxCreatedTime?: Date, queryOrder?: Contracts.ReleaseQueryOrder, top?: number, continuationToken?: number, expand?: Contracts.ReleaseExpands, artifactTypeId?: string, sourceId?: string, artifactVersionId?: string, sourceBranchFilter?: string, isDeleted?: boolean, tagFilter?: string[], propertyFilters?: string[], releaseIdFilter?: number[]): IPromise<Contracts.Release[]>;
}
/**
 * @exemptedapi
 */
export class ReleaseHttpClient2_2 extends CommonMethods2_2To5 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Get a release definition.
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Id of the release definition.
     * @param {string[]} propertyFilters - A comma-delimited list of extended properties to retrieve.
     * @return IPromise<Contracts.ReleaseDefinition>
     */
    getReleaseDefinition(project: string, definitionId: number, propertyFilters?: string[]): IPromise<Contracts.ReleaseDefinition>;
    /**
     * [Preview API] Get a list of release definitions.
     *
     * @param {string} project - Project ID or project name
     * @param {string} searchText - Get release definitions with names containing searchText.
     * @param {Contracts.ReleaseDefinitionExpands} expand - The properties that should be expanded in the list of Release definitions.
     * @param {string} artifactType - Release definitions with given artifactType will be returned. Values can be Build, Jenkins, GitHub, Nuget, Team Build (external), ExternalTFSBuild, Git, TFVC, ExternalTfsXamlBuild.
     * @param {string} artifactSourceId - Release definitions with given artifactSourceId will be returned. e.g. For build it would be {projectGuid}:{BuildDefinitionId}, for Jenkins it would be {JenkinsConnectionId}:{JenkinsDefinitionId}, for TfsOnPrem it would be {TfsOnPremConnectionId}:{ProjectName}:{TfsOnPremDefinitionId}. For third-party artifacts e.g. TeamCity, BitBucket you may refer 'uniqueSourceIdentifier' inside vss-extension.json at https://github.com/Microsoft/vsts-rm-extensions/blob/master/Extensions.
     * @param {number} top - Number of release definitions to get.
     * @param {string} continuationToken - Gets the release definitions after the continuation token provided.
     * @param {Contracts.ReleaseDefinitionQueryOrder} queryOrder - Gets the results in the defined order. Default is 'IdAscending'.
     * @param {string} path - Gets the release definitions under the specified path.
     * @param {boolean} isExactNameMatch - 'true'to gets the release definitions with exact match as specified in searchText. Default is 'false'.
     * @param {string[]} tagFilter - A comma-delimited list of tags. Only release definitions with these tags will be returned.
     * @param {string[]} propertyFilters - A comma-delimited list of extended properties to retrieve.
     * @param {string[]} definitionIdFilter - A comma-delimited list of release definitions to retrieve.
     * @param {boolean} isDeleted - 'true' to get release definitions that has been deleted. Default is 'false'
     * @return IPromise<Contracts.ReleaseDefinition[]>
     */
    getReleaseDefinitions(project: string, searchText?: string, expand?: Contracts.ReleaseDefinitionExpands, artifactType?: string, artifactSourceId?: string, top?: number, continuationToken?: string, queryOrder?: Contracts.ReleaseDefinitionQueryOrder, path?: string, isExactNameMatch?: boolean, tagFilter?: string[], propertyFilters?: string[], definitionIdFilter?: string[], isDeleted?: boolean): IPromise<Contracts.ReleaseDefinition[]>;
    /**
     * [Preview API] Get A Release
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {Contracts.ApprovalFilters} approvalFilters - A filter which would allow fetching approval steps selectively based on whether it is automated, or manual. This would also decide whether we should fetch pre and post approval snapshots. Assumes All by default
     * @param {string[]} propertyFilters - A comma-delimited list of properties to include in the results.
     * @param {Contracts.SingleReleaseExpands} expand - A property that should be expanded in the release.
     * @param {number} topGateRecords
     * @return IPromise<Contracts.Release>
     */
    getRelease(project: string, releaseId: number, approvalFilters?: Contracts.ApprovalFilters, propertyFilters?: string[], expand?: Contracts.SingleReleaseExpands, topGateRecords?: number): IPromise<Contracts.Release>;
    /**
     * [Preview API] Get a list of releases
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Releases from this release definition Id.
     * @param {number} definitionEnvironmentId
     * @param {string} searchText - Releases with names containing searchText.
     * @param {string} createdBy - Releases created by this user.
     * @param {Contracts.ReleaseStatus} statusFilter - Releases that have this status.
     * @param {number} environmentStatusFilter
     * @param {Date} minCreatedTime - Releases that were created after this time.
     * @param {Date} maxCreatedTime - Releases that were created before this time.
     * @param {Contracts.ReleaseQueryOrder} queryOrder - Gets the results in the defined order of created date for releases. Default is descending.
     * @param {number} top - Number of releases to get. Default is 50.
     * @param {number} continuationToken - Gets the releases after the continuation token provided.
     * @param {Contracts.ReleaseExpands} expand - The property that should be expanded in the list of releases.
     * @param {string} artifactTypeId - Releases with given artifactTypeId will be returned. Values can be Build, Jenkins, GitHub, Nuget, Team Build (external), ExternalTFSBuild, Git, TFVC, ExternalTfsXamlBuild.
     * @param {string} sourceId - Unique identifier of the artifact used. e.g. For build it would be {projectGuid}:{BuildDefinitionId}, for Jenkins it would be {JenkinsConnectionId}:{JenkinsDefinitionId}, for TfsOnPrem it would be {TfsOnPremConnectionId}:{ProjectName}:{TfsOnPremDefinitionId}. For third-party artifacts e.g. TeamCity, BitBucket you may refer 'uniqueSourceIdentifier' inside vss-extension.json https://github.com/Microsoft/vsts-rm-extensions/blob/master/Extensions.
     * @param {string} artifactVersionId - Releases with given artifactVersionId will be returned. E.g. in case of Build artifactType, it is buildId.
     * @param {string} sourceBranchFilter - Releases with given sourceBranchFilter will be returned.
     * @param {boolean} isDeleted - Gets the soft deleted releases, if true.
     * @param {string[]} tagFilter - A comma-delimited list of tags. Only releases with these tags will be returned.
     * @param {string[]} propertyFilters - A comma-delimited list of extended properties to retrieve.
     * @param {number[]} releaseIdFilter - A comma-delimited list of releases Ids. Only releases with these Ids will be returned.
     * @return IPromise<Contracts.Release[]>
     */
    getReleases(project: string, definitionId?: number, definitionEnvironmentId?: number, searchText?: string, createdBy?: string, statusFilter?: Contracts.ReleaseStatus, environmentStatusFilter?: number, minCreatedTime?: Date, maxCreatedTime?: Date, queryOrder?: Contracts.ReleaseQueryOrder, top?: number, continuationToken?: number, expand?: Contracts.ReleaseExpands, artifactTypeId?: string, sourceId?: string, artifactVersionId?: string, sourceBranchFilter?: string, isDeleted?: boolean, tagFilter?: string[], propertyFilters?: string[], releaseIdFilter?: number[]): IPromise<Contracts.Release[]>;
}
/**
 * @exemptedapi
 */
export class ReleaseHttpClient2_1 extends CommonMethods2To5 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class ReleaseHttpClient2 extends CommonMethods2To5 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
export class ReleaseHttpClient extends ReleaseHttpClient5 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return ReleaseHttpClient4_1
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): ReleaseHttpClient4_1;
}
declare module "ReleaseManagement/Core/Utils" {
import RMContracts = require("ReleaseManagement/Core/Contracts");
export class ReleaseEnvironmentStatusHelper {
    static isEnvironmentCompleted(environment: RMContracts.ReleaseEnvironment): boolean;
}
}
declare module "ReleaseManagement/Core/WebUIConstants" {
export namespace WebUIConstants {
    const CreateDefinitionSourceTest = "Test";
}
}
