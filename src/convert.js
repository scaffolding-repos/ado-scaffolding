/* eslint-disable no-useless-escape */
const doT = require("dot");
// const gitzip = require("./gitzip");

doT.templateSettings = {
  evaluate: /\{\%\{([\s\S]+?)\}\%\}/g,
  interpolate: /\{\%\{=([\s\S]+?)\}\%\}/g,
  encode: /\{\%\{!([\s\S]+?)\}\%\}/g,
  use: /\{\%\{#([\s\S]+?)\}\%\}/g,
  define: /\{\%\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\%\}/g,
  conditional: /\{\\%{\?(\?)?\s*([\s\S]*?)\s*\}\%\}/g,
  iterate:
    /\{\%\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\%\})/g,
  varname: "params",
  strip: false,
  append: true,
  selfcontained: false,
};


async function codeConvert(contents, variable) {
  return new Promise(function (resolve, reject) {
    (async () => {
      try {
        const newContents = {};


        const scaffoldingJSON = contents["scaffolding.json"];
        const scaffoldingSettings = JSON.parse(scaffoldingJSON);
        Object.keys(contents).forEach((path) => {
          let valid = true;
          if (
            scaffoldingSettings.rules &&
            scaffoldingSettings.rules[path] &&
            typeof scaffoldingSettings.rules[path] === "function"
          ) {
            valid = scaffoldingSettings.rules[path](
              scaffoldingSettings.variables
            );
          } else if (
            scaffoldingSettings.rules &&
            scaffoldingSettings.rules[path] &&
            Object.keys(scaffoldingSettings.rules).indexOf(path) != -1
          ) {
            if (variable) {
              valid = variable[scaffoldingSettings.rules[path]]
            } else {
              valid = false
            }
            
          }
          if (!variable) {
            variable = {};
            Object.keys(scaffoldingSettings.variables).forEach((key) => {
              variable[key] = scaffoldingSettings.variables[key].default;
            });
          }
          if (path != "scaffolding.json" && valid) {
            let resultText = contents[path];
            try {
              const tempFn = doT.template(resultText);
              resultText = tempFn(variable);
            } catch (err) {
              console.log(err);
            }
            newContents[path] = resultText;
          }

          resolve(newContents);
        });
      } catch (e) {
        reject(e);
      }
    })();
  });
}


module.exports = codeConvert;
