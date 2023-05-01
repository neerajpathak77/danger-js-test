/* eslint-disable promise/catch-or-return */
import { message, danger } from 'danger';

export const getTimeDiff = (start: Date, end: Date): any => {
  const diffInSeconds = Math.floor((end.getTime() - start.getTime()) / 1000)
  if (diffInSeconds <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }
  return {
    days: Math.floor(diffInSeconds / 86400),
    hours: Math.floor((diffInSeconds / 3600) % 24),
    minutes: Math.floor((diffInSeconds / 60) % 60),
    seconds: Math.floor(diffInSeconds % 60),
  }
}

const modifiedMD = danger.git.modified_files.join('- ');
message(`<<<<====>>>>Changed Files in this PR: \n - ${modifiedMD}`);

danger.github.api.actions
  .listRepoWorkflows({
    owner: 'neerajpathak77',
    repo: 'danger-js-test'
  })
  .then(workflows => {
    console.log('danger----> 11111111', JSON.stringify(workflows, null, 3));

    const workflow = workflows?.data?.workflows?.find(op => op.name === '.github/workflows/danger.yml');
    console.log('danger----> 11111111', JSON.stringify(workflow, null, 3));

    console.log('danger----> AAAAAAAAAAAAAAAAAAAA', JSON.stringify(process.env, null, 3));

    danger.github.api.actions
      .listJobsForWorkflowRun({
        owner: 'neerajpathak77',
        repo: 'danger-js-test',
        run_id: process.env.GITHUB_RUN_ID
      })
      .then(uu => {
        console.log('danger----> INSIDE OF THE ACTION', JSON.stringify(uu, null, 3));

        const job = uu.data.jobs.find(data => data.workflow_name === '.github/workflows/danger.yml');

        const stepInfo = job?.steps?.find(step => step?.name === 'monitor step')

        console.log('danger----> INSIDE OF THE ACTION', JSON.stringify(stepInfo, null, 3));


        const start = stepInfo?.started_at
        const end = stepInfo?.completed_at


        const ttt = getTimeDiff(new Date(start), new Date(end))

        console.log('danger----> INSIDE OF THE ttt', ttt);

       });

    // danger.github.api.actions.getJobForWorkflowRun({
    //     owner: 'neerajpathak77',
    //     repo: 'danger-js-test',
    //     job_id: 'hello_world_job'
    //   }).then(uu => {

    //     console.log('danger----> innnnnnnddddeerrrrrrrr', JSON.stringify(uu, null, 3));
    //   });

    // danger.github.api.actions.getJobForWorkflowRun({
    //   owner: 'neerajpathak77',
    //   repo: 'danger-js-test',
    //   job_id: 'step____1'
    // });

    // danger.github.api.actions
    //   .getJobForWorkflowRun({
    //     owner: 'neerajpathak77',
    //     repo: 'danger-js-test',
    //     job_id: workflow.node_id
    //   })
    //   .then(d => message(`3333333 \n - ${JSON.stringify(d, null, 3)}`));
  });

//   danger.github.api.actions
//     .getJobForWorkflowRun({
//       owner: 'neerajpathak77',
//       repo: 'danger-js-test',
//       job_id: workflow.id
//     })
//     .then(d => message(`3333333 \n - ${JSON.stringify(d, null, 3)}`));

// console.log('danger--billing---> 1', danger.github.api.billing.getGithubActionsBillingOrg());
// console.log('danger--billing---> 2', danger.github);
// console.log(
//   'danger--billing---> 3',
//   danger.github.api.actions.getJobForWorkflowRun({
//     owner: 'neerajpathak77',
//     repo: 'danger-js-test',
//     job_id: 4786122599
//   })
// );

// console.log('danger--actions---> 6', danger.github.utils.fileLinks());

// console.log('danger--2', danger.github.api.billing);

message(`<<<<====>>>>Changed Files in this PR:- ===>>>>>>>`);

export const test = (): string => 'hello';
