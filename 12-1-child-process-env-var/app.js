const { spawnSync } = require("child_process");
function main(myEnvVar) {
  // Tulis jawaban Anda di bawah ini
  const options = {
    env: {
      MY_ENV_VAR: myEnvVar,
    },
  };
  const childProcess = spawnSync(process.execPath, ["run-me.js"], options);
  return childProcess;
}
module.exports = main;
