const fs = require("fs");

function readDirAndWriteFile() {
  fs.readdir("./", (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    // Filter hanya folder
    const folders = files.filter((file) => fs.statSync(file).isDirectory());

    // Urutkan nama folder secara ascending (A-Z)
    folders.sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }));

    // Gabungkan nama folder dengan koma
    const foldersString = folders.join(",");

    // Tulis ke dalam file out.txt
    fs.writeFile("out.txt", foldersString, (err) => {
      if (err) {
        console.error("Error writing to file:", err);
        return;
      }
      console.log("Names of folders have been written to out.txt");
    });
  });
}

readDirAndWriteFile();
