/* eslint-disable promise/catch-or-return */
import { message, danger } from 'danger';

const modifiedMD = danger.git.modified_files.join('- ');
message(`<<<<====>>>>Changed Files in this PR: \n - ${modifiedMD}`);
// console.log('danger--actions---> 1', danger.github.api.actions);
// console.log('danger--actions---> 2', danger.github.api.actions.getJobForWorkflowRun('hello'));
// console.log('danger--actions---> 3', danger.github.api.actions.getWorkflow());
// console.log('danger--actions---> 4', danger.github.api.actions.getWorkflowRunUsage());
// console.log('danger--actions---> 5', danger.github.api.actions.getWorkflowUsage());
// console.log('danger--actions---> 6', danger.github.api.actions.listJobsForWorkflowRun());
// eslint-disable-next-line promise/catch-or-return

// console.log('danger-gvar---> 1', danger.github.thisPR.owner)
// console.log('danger-gvar---> 2', danger.github.thisPR.repo)
// console.log('danger-gvar---> 3', danger.github.pr.user)

const args = process.argv;
console.log('====>>>', args);

danger.github.api.actions
  .getActionsCacheList({
    owner: 'neerajpathak77',
    repo: 'danger-js-test'
  })
  .then(d => message(`9999999999999999 \n - ${JSON.stringify(d, null, 3)}`));

// danger.github.api.actions
//   .getJobForWorkflowRun({
//     owner: 'neerajpathak77',
//     repo: 'danger-js-test',
//     job_id: 4843773123
//   })
//   .then(d => message(`9999999999999999 \n - ${JSON.stringify(d, null, 3)}`));

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
