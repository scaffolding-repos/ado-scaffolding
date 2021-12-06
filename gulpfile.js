const { series } = require("gulp");
const fs = require("fs");
const path = require("path");
const archiver = require("archiver");

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  // body omitted
  cb();
}

function build(cb) {
  var exec = require("child_process").exec;
  var cmd = "npm run build";
  exec(cmd, function (error, stdout, stderr) {
      if(error) {
        console.log(error);
      }
      if(stdout) {
        console.log(stdout);
      }
      if(stderr) {
        console.log(stderr);
      }
  });
  cb();
}

function zip(cb) {
  var folders = getFolders("scaffoldings");
  folders.forEach((folder) => {
    console.log(folder);
    var output = fs.createWriteStream("public/scaffolding/" + folder + ".zip");
    var archive = archiver("zip");

    output.on("close", function () {
      console.log(archive.pointer() + " total bytes");
      console.log(
        "archiver has been finalized and the output file descriptor has closed."
      );
    });

    archive.on("error", function (err) {
      throw err;
    });

    archive.pipe(output);

    // append files from a sub-directory, putting its contents at the root of archive
    archive.directory("scaffoldings/" + folder, false);

    archive.finalize();
  });
  cb();
}

function getFolders(dir) {
  return fs.readdirSync(dir).filter(function (file) {
    return fs.statSync(path.join(dir, file)).isDirectory();
  });
}

exports.build = build;
exports.default = series(clean, zip, build);
