import { message, warn, danger } from 'danger';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
export const getTimeDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / 1000);

console.log('danger----> env', JSON.stringify(process.env, null, 3));

const REPO = 'webmobile-pwa';
const STEP_THRESHOLD = 600;
const WORKFLOW_NAME = 'Continuous Integration';
const STEP_NAME = 'monitor step';

const test = async ({ workflow, step, repo }): Promise<any> => {
  // eslint-disable-next-line camelcase
  const { GITHUB_REPOSITORY_OWNER: owner, GITHUB_RUN_ID: run_id } = process.env;
  const workflowRun = await danger.github.api.actions.listJobsForWorkflowRun({
    owner,
    repo,
    run_id
  });
  const job = workflowRun.data.jobs.find(data => data?.workflow_name === workflow);
  // TODO: try to check for step id over name
  // eslint-disable-next-line camelcase
  const { started_at, completed_at } = job?.steps?.find(item => item?.name === step);
  const executionTime = getTimeDiff(new Date(started_at), new Date(completed_at));
  if (executionTime < STEP_THRESHOLD) {
    message(`Step XXXXX took ${executionTime} seconds to complete`);
  } else {
    warn('The step XXXXX took longer then the benchmark, please have a look.');
  }
};

test({ workflow: WORKFLOW_NAME, step: STEP_NAME, repo: REPO });
