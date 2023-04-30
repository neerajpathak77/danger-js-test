/* eslint-disable promise/catch-or-return */
import { message, danger } from 'danger';

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

    console.log('danger----> github.jobJOBJON', danger.github.job);


    
    

 

    danger.github.api.actions.getJobForWorkflowRun({
        owner: 'neerajpathak77',
        repo: 'danger-js-test',
        job_id: 'hello_world_job'
      }).then(uu => {

        console.log('danger----> innnnnnnddddeerrrrrrrr', JSON.stringify(uu, null, 3));
      });

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
