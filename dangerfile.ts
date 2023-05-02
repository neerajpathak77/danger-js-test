import { message, warn, danger } from 'danger';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
export const getTimeDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / 1000);

console.log('danger----> env', JSON.stringify(process.env, null, 3));

const REPO = 'danger-js-test';
const STEP_THRESHOLD = 600;
const WORKFLOW_NAME = '.github/workflows/danger.yml';
const STEP_NAME = 'monitor step';

const getWorkflowStepExecutionTime = async ({ workflow, step, repo, runId }): Promise<any> => {
  // eslint-disable-next-line camelcase
  const { GITHUB_REPOSITORY_OWNER: owner, GITHUB_RUN_ID: run_id } = process.env;

  console.log('+++++++++++++++++++run_id+++++++++++++++++++++++++++');
  console.log(run_id);
  console.log('++++++++++++++++++++run_id++++++++++++++++++++++++++');

  const workflowRun = await danger.github.api.actions.listJobsForWorkflowRun({
    owner,
    repo: danger.github.pr.head.repo.name,
    run_id: runId || run_id
  });

  console.log('oooooooo---->>>', JSON.stringify(workflowRun, null, 3));
  const job = workflowRun.data.jobs.find(data => data?.workflow_name === workflow);
  // TODO: try to check for step id over name
  console.log('job---->>>', JSON.stringify(job, null, 3));
  // eslint-disable-next-line camelcase
  const { started_at, completed_at } = job?.steps?.find(item => item?.name === step);
  const executionTime = getTimeDiff(new Date(started_at), new Date(completed_at));
  if (executionTime < STEP_THRESHOLD) {
    message(`Step XXXXX took ${executionTime} seconds to complete`);
  } else {
    warn('The step XXXXX took longer then the benchmark, please have a look.');
  }
};

// const testTwo = async (): Promise<any> => {
//   // eslint-disable-next-line camelcase

//   console.log('aaaaaaooooooooaaaaaa---->>>', JSON.stringify(danger.github.pr, null, 3));

// };

// testTwo();

// getWorkflowStepExecutionTime({ workflow: WORKFLOW_NAME, step: STEP_NAME, repo: REPO });

const getWorkflowInfo = async (): Promise<any> => {
  // eslint-disable-next-line camelcase
  const { GITHUB_REPOSITORY_OWNER: owner, GITHUB_RUN_ID: run_id } = process.env;

  const workflowRun = await danger.github.api.actions.listWorkflowRuns({
    owner,
    // repo: danger.github.pr.head.repo.name,
    repo: danger.github.pr.head.repo.name,
    workflow_id: '.github/workflows/danger.yml',
    branch: 'test'
  });

  const targetWorkflow = workflowRun.data.workflow_runs.find(workflow => workflow.run_number === 106);

  console.log('+++++++++++++++++++run_id+++++++++++++++++++++++++++');
  console.log('joyyyyyyyyyy', JSON.stringify(workflowRun, null, 3));
  console.log('++++++++++++++++++++run_id++++++++++++++++++++++++++');

  getWorkflowStepExecutionTime({ workflow: WORKFLOW_NAME, step: STEP_NAME, repo: REPO, runId: targetWorkflow.id });
};

getWorkflowInfo();
