/* eslint-disable no-debugger */
var JSZip = require("jszip");
// var JSZipUtils = require("jszip-utils");

function downloadGitZip(account, repo, branch) {
  return new Promise(function (resolve, reject) {
    const contents = {};
    // const url = `https://github.com/${account}/${repo}/archive/refs/heads/${branch}.zip`;
    // const url = `https://codeload.github.com/${account}/${repo}/zip/refs/heads/${branch}`;
    // const url = "https://www.google.com";
    const url = 'scaffolding/simple-nodejs-main.zip';
    (async () => {
      try {
        // const { body } = await got(url, {
        //   responseType: "buffer",
        // });
        // const file = await fetch(url, {mode: 'no-cors', redirect: 'follow'})
        // debugger;
        // const blob = await file.blob()
        // .then(response => response.blob())
        // .then(blob => {

          var xhr = new XMLHttpRequest();
          
          xhr.open('GET', url, true);
          xhr.responseType = 'arraybuffer';
          // xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest")
          // xhr.setRequestHeader('mode', 'no-cors')
          // xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
          // xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
          // xhr.setRequestHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization')

          xhr.onload = function() {
             if (this.status == 200) {
                 var blob = new Uint8Array(this.response); // Note:not xhr.responseText
          
                //  for (var i = 0, len = uInt8Array.length; i < len; ++i) {
                //      uInt8Array[i] = this.response[i];
                //  }
          
                //  var blob = uInt8Array[4]; // byte at offset 4
                //  console.log(blob);

                 var new_zip = new JSZip();
                 new_zip.loadAsync(blob).then(async function (zip) {
                   const paths = Object.keys(zip.files);
                   for (let i = 0; i < paths.length; i++) {
                     // console.log(paths[i]);
                     const file = zip.file(paths[i]);
                     if (file && !file.dir) {
                       const path = paths[i].substring(`${repo}-${branch}/`.length);
                       contents[path] = await file.async("string");
                     }
                   }
                   resolve(contents);
                 });
             }
          }
          
          xhr.send();


        // });


      } catch (e) {
        reject(e);
      }
    })();
  });
}

// (async () => {
//   const contents = await downloadGitZip("scaffolding-repos", "simple-nodejs", "main")
//   console.log(contents);
// })();

module.exports = downloadGitZip;
