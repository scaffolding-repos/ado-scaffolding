var JSZip = require("jszip");


function downloadGitZip(scaffolding) {
  return new Promise(function (resolve, reject) {
    const contents = {};

    const url = 'scaffolding/'+scaffolding+'.zip';
    (async () => {
      try {

          var xhr = new XMLHttpRequest();
          
          xhr.open('GET', url, true);
          xhr.responseType = 'arraybuffer';

          xhr.onload = function() {
             if (this.status == 200) {
                 var blob = new Uint8Array(this.response); // Note:not xhr.responseText
                 var new_zip = new JSZip();
                 new_zip.loadAsync(blob).then(async function (zip) {
                   const paths = Object.keys(zip.files);
                   for (let i = 0; i < paths.length; i++) {
                     const file = zip.file(paths[i]);
                     if (file && !file.dir) {
                       const path = paths[i]///.substring(`${scaffolding}/`.length);
                       contents[path] = await file.async("string");
                     }
                   }
                   resolve(contents);
                 });
             }
          }
          
          xhr.send();

      } catch (e) {
        reject(e);
      }
    })();
  });
}


module.exports = downloadGitZip;
