const { spawn } = require("child_process");

function main(command, args) {
  // Menjalankan child process dengan command dan args yang diberikan
  const childProcess = spawn(command, args, {
    stdio: ["ignore", process.stdout, process.stderr], // Tidak menggunakan STDIN, menggunakan STDOUT parent process, dan mengekspos STDERR sendiri
  });

  // Mengembalikan child process yang telah dibuat
  return childProcess;
}
