var JSZip = require("jszip");

function importzip() {
  return new Promise(function (resolve, reject) {
    (async () => {
      try {
        const readFile = async function (e) {
          var file = e.target.files[0];
          if (!file) {
            return;
          }
          const contents = {};
          const jszip = new JSZip();
          await jszip.loadAsync(e.target.files[0] /* = file blob */).then(
            async function (zip) {
              const paths = Object.keys(zip.files);
              for (let i = 0; i < paths.length; i++) {
                const file = zip.file(paths[i]);
                if (file && !file.dir) {
                  const path = paths[i]; ///.substring(`${scaffolding}/`.length);
                  contents[path] = await file.async("string");
                }
              }
              resolve(contents);
            },
            function () {
              alert("Not a valid zip file");
            }
          );
        };
        const id = "loadzip_" + new Date().getTime();
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.style.display = "none";
        fileInput.onchange = readFile;
        fileInput.id = id;
        document.body.appendChild(fileInput);
        document.getElementById(id).click();
      } catch (e) {
        reject(e);
      }
    })();
  });
}

module.exports = importzip;
