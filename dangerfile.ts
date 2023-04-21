import { message, danger } from 'danger';

const modifiedMD = danger.git.modified_files.join('- ');
message(`<<<<====>>>>Changed Files in t
his PR: \n - ${modifiedMD}`);
console.log('danger', danger);

message(`<<<<====>>>>Changed Files in this PR: ===>>>>>>>`);
