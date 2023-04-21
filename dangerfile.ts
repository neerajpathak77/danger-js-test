import { message, danger } from 'danger';

const modifiedMD = danger.git.modified_files.join('- ');
message(`<<<<====>>>>Changed Files in t
his PR: \n - ${modifiedMD}`);
console.log('danger--1', danger.github.api.actions);
console.log('danger--2', danger.github.api.billing);


message(`<<<<====>>>>Changed Files in this PR: ===>>>>>>>`);
