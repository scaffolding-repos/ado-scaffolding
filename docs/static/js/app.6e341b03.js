(function(e){function t(t){for(var a,i,o=t[0],c=t[1],u=t[2],f=0,m=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(m.length)m.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"11da":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var a=n("b85c"),r=n("53ca"),s=(n("fb6a"),n("b64b"),function e(t){if("object"===Object(r["a"])(t)){if(t instanceof Date)return t.toISOString().slice(0,10);if(Array.isArray(t)){var n,s=[],i=Object(a["a"])(t);try{for(i.s();!(n=i.n()).done;){var o=n.value,c=e(o);void 0!==c&&s.push(c)}}catch(m){i.e(m)}finally{i.f()}if(s.length>0)return s}else{var u={};for(var l in t){var f=e(t[l]);void 0!==f&&(u[l]=f)}if(Object.keys(u).length>0)return u}}else if(void 0!==t&&""!==t)return t}),i=function e(t,n){if("object"===t.type){var a={};for(var r in t.properties)a[r]=e(t.properties[r],n);return a}return"array"===t.type?[e(t.items,n)]:void 0===n?n:n(t)};function o(e,t){return i(e,t)}function c(e){var t=s(e);return void 0===t?{}:t}},"2cfa":function(e,t,n){var a=n("c973").default;n("96cf"),n("d3b7"),n("159b"),n("b64b");var r=n("f7b3");function s(e,t){return i.apply(this,arguments)}function i(){return i=a(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,s){a(regeneratorRuntime.mark((function a(){var i,o,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:try{i={},o=t["scaffolding.json"],c=JSON.parse(o),Object.keys(t).forEach((function(a){var s=!0;if(c.rules&&c.rules[a]&&"function"===typeof c.rules[a]?s=c.rules[a](c.variables):c.rules&&c.rules[a]&&-1!=Object.keys(c.rules).indexOf(a)&&(s=!!n&&n[c.rules[a]]),n||(n={},Object.keys(c.variables).forEach((function(e){n[e]=c.variables[e].default}))),"scaffolding.json"!=a&&s){var o=t[a];try{var u=r.template(o);o=u(n)}catch(l){console.log(l)}i[a]=o}e(i)}))}catch(u){s(u)}case 1:case"end":return a.stop()}}),a)})))()})));case 1:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}r.templateSettings={evaluate:/\{\{([\s\S]+?)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"params",strip:!1,append:!0,selfcontained:!1},e.exports=s},3686:function(e,t,n){var a=n("c973").default;n("96cf"),n("d3b7"),n("5cc6"),n("907a"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("b64b");var r=n("c4e3");function s(e){return new Promise((function(t,n){var s={},i="scaffolding/"+e+".zip";a(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{o=new XMLHttpRequest,o.open("GET",i,!0),o.responseType="arraybuffer",o.onload=function(){if(200==this.status){var e=new Uint8Array(this.response),n=new r;n.loadAsync(e).then(function(){var e=a(regeneratorRuntime.mark((function e(n){var a,r,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=Object.keys(n.files),r=0;case 2:if(!(r<a.length)){e.next=12;break}if(i=n.file(a[r]),!i||i.dir){e.next=9;break}return o=a[r],e.next=8,i.async("string");case 8:s[o]=e.sent;case 9:r++,e.next=2;break;case 12:t(s);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},o.send()}catch(c){n(c)}case 1:case"end":return e.stop()}}),e)})))()}))}e.exports=s},"3ef3":function(e,t,n){"use strict";n("a67a")},5091:function(e,t,n){"use strict";n("6ec9")},5450:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{height:"100%"},attrs:{id:"app"}},[n("MainPanel")],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"columns",staticStyle:{height:"100%",overflow:"hidden"}},[n("div",{staticClass:"column is-half"},[n("div",{staticClass:"card"},[e._m(0),n("form",{staticClass:"box"},[n("b-field",{attrs:{label:"Select scaffolding",labelPosition:"on-border"}},[n("b-select",{staticStyle:{"padding-bottom":"20px"},attrs:{placeholder:"Select Scaffolding",expanded:""},on:{input:e.onScaffoldingChanged},model:{value:e.scaffoldingsIdx,callback:function(t){e.scaffoldingsIdx=t},expression:"scaffoldingsIdx"}},e._l(e.scaffoldings,(function(t,a){return n("option",{key:t,domProps:{value:a}},[e._v(" "+e._s(t)+" ")])})),0)],1),e.adoProjects?[n("b-field",{attrs:{label:"Azure DevOps Project",labelPosition:"on-border"}},[n("b-select",{attrs:{placeholder:"Select Project",expanded:""},model:{value:e.adoProject,callback:function(t){e.adoProject=t},expression:"adoProject"}},e._l(e.adoProjects,(function(t){return n("option",{key:t.id,domProps:{value:t}},[e._v(" "+e._s(t.name)+" ")])})),0)],1),n("b-field",{attrs:{label:"Repository Name",labelPosition:"on-border"}},[n("b-input",{attrs:{expanded:""},model:{value:e.repoName,callback:function(t){e.repoName=t},expression:"repoName"}})],1)]:e._e(),n("schema-form",{attrs:{schema:e.schema,ado:e.adoProjects},on:{submit:function(t){return e.handleSubmit()},submit2:function(t){return e.previewCode()},submit3:function(t){return e.downloadCode()}},model:{value:e.variables,callback:function(t){e.variables=t},expression:"variables"}}),e.showNotification?n("b-notification",{staticStyle:{"margin-top":"10px"},attrs:{"aria-close-label":"Close notification"}},[e._v(" "+e._s(e.notificationMsg)+" ")]):e._e()],2)])]),n("div",{staticClass:"column",staticStyle:{height:"100%",overflow:"auto"}},[n("div",{staticClass:"card"},[e._m(1),n("section",e._l(e.paths,(function(t){return n("b-collapse",{key:t,staticClass:"card",attrs:{animation:"slide","aria-id":"contentIdForA11y3",open:!1},scopedSlots:e._u([{key:"trigger",fn:function(a){return[n("div",{staticClass:"card-header",attrs:{role:"button","aria-controls":"contentIdForA11y3"}},[n("p",{staticClass:"card-header-title"},[e._v(" "+e._s(t)+" ")]),n("a",{staticClass:"card-header-icon"},[n("b-icon",{attrs:{icon:a.open?"menu-down":"menu-up"}})],1)])]}}],null,!0)},[n("div",{staticClass:"card-content"},[n("div",{staticClass:"content"},[n("pre",[e._v(e._s(e.loadCode(t))+"\n")])])])])})),1)])])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title"},[e._v("Scaffolding Settings")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title"},[e._v("Code Preview")])])}],c=n("1da1"),u=(n("96cf"),n("b64b"),n("d3b7"),n("159b"),n("2a65")),l=n("3a1f"),f=n("19a4"),m=n("a4fa"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[e._t("header",(function(){return[n("b-notification",{directives:[{name:"show",rawName:"v-show",value:e.activeErrorMessages.length,expression:"activeErrorMessages.length"}],attrs:{type:"is-danger",closable:!1,id:"error-messages"}},e._l(e.activeErrorMessages,(function(t,a){return n("div",{key:a},[n("div",[e._v(e._s(t))])])})),0)]}),{errorMessages:e.activeErrorMessages}),e._l(e.schema.properties,(function(t,a){return[e._t(a,(function(){return[n(e.element,{key:a,tag:"component",staticStyle:{"padding-bottom":"20px"},attrs:{schema:t,value:e.items[a]},on:{input:function(t){return e.updateValue(t,a)}}})]}),{item:{key:a,schema:t,value:e.items[a],update:e.updateValue}})]})),e._t("actions",(function(){return[n("div",{staticClass:"buttons"},[e.ado?n("button",{staticClass:"button is-info",attrs:{type:"submit"}},[n("span",[e._v("Create Repository")])]):e._e(),n("button",{staticClass:"button is-info",attrs:{type:"button"},on:{click:e.submit3}},[n("span",[e._v("Download")])]),n("button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"button is-info",attrs:{type:"button"},on:{click:e.submit2}},[n("span",[e._v("Preview")])])])]}))],2)},p=[],h=(n("d81d"),n("99af"),n("783b")),v=n.n(h),b=n("dc2d"),g=n.n(b),y=n("f046"),_=n("11da"),w=new v.a({allErrors:!0,jsonPointers:!0,format:"full"}),x={name:"SchemaForm",components:{FormElement:y["default"]},props:{schema:{type:Object},value:{type:Object},element:{default:function(){return"form-element"}},ado:{type:Object}},data:function(){return{items:void 0!==this.value?this.value:Object(_["b"])(this.schema),activeErrorMessages:[]}},watch:{schema:function(){this.items=Object(_["b"])(this.schema),w=new v.a({allErrors:!0,jsonPointers:!0,format:"full"})}},methods:{submit:function(){this.validate()?(this.activeErrorMessages=[],this.$emit("input",Object(_["a"])(this.items)),this.$emit("submit")):this.buildErrors()},submit2:function(){this.validate()?(this.activeErrorMessages=[],this.$emit("input",Object(_["a"])(this.items)),this.$emit("submit2")):this.buildErrors()},submit3:function(){this.validate()?(this.activeErrorMessages=[],this.$emit("input",Object(_["a"])(this.items)),this.$emit("submit3")):this.buildErrors()},validate:function(){return w.validate(this.schema,Object(_["a"])(this.items))},buildErrors:function(){var e=this;this.activeErrorMessages=w.errors.map((function(t){if("required"===t.keyword){var n=0===t.dataPath.length?"/properties/".concat(t.params.missingProperty):t.schemaPath.substring(1,t.schemaPath.length-8)+"properties/".concat(t.params.missingProperty),a=g.a.get(e.schema,n);return a.title+" is required"}if("format"===t.keyword){var r=t.schemaPath.substring(1,t.schemaPath.length-7),s=g.a.get(e.schema,r);return"".concat(s.title," is not in the correct format. Eg: ").concat(s.example)}if("pattern"===t.keyword){var i=t.schemaPath.substring(1,t.schemaPath.length-8),o=g.a.get(e.schema,i);return"".concat(o.title," is not in the correct format. Eg: ").concat(o.example)}}))},updateValue:function(e,t){this.items[t]=e,this.submit2()}}},j=x,O=n("2877"),C=Object(O["a"])(j,d,p,!1,null,null,null),k=C.exports,P=n("8a03"),E=n.n(P),S=n("3686"),$=n("2cfa"),R=n("c4e3"),M=n("21a6"),N=n("f339"),V={name:"HelloWorld",components:{SchemaForm:k},props:{msg:String},computed:{paths:function(){return Object.keys(this.convertedCode)}},data:function(){return{adoProjects:null,adoProject:null,scaffoldings:N,repoName:"app-repo",scaffoldingsIdx:0,scaffoldingObj:{},convertedCode:{},variables:null,schema:{},showNotification:!1,notificationMsg:""}},methods:{handleSubmit:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$(e.scaffoldingObj,e.variables);case 2:e.convertedCode=t.sent,e.createRepo();case 4:case"end":return t.stop()}}),t)})))()},previewCode:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$(e.scaffoldingObj,e.variables);case 2:e.convertedCode=t.sent;case 3:case"end":return t.stop()}}),t)})))()},downloadCode:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e,a=new R,r=Object.keys(e.convertedCode),r.forEach((function(t){a.file(t,e.convertedCode[t])})),a.generateAsync({type:"blob"}).then((function(e){M.saveAs(e,n.repoName+".zip")})),e.showNotification=!0,e.notificationMsg="Start Downloading",setTimeout((function(){n.showNotification=!1}),5e3);case 8:case"end":return t.stop()}}),t)})))()},loadCode:function(e){return this.convertedCode[e]},onScaffoldingChanged:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loadScafdoling();case 1:case"end":return t.stop()}}),t)})))()},loadScafdoling:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.scaffoldings[e.scaffoldingsIdx],t.next=3,S(n);case 3:return e.scaffoldingObj=t.sent,a=e.scaffoldingObj["scaffolding.json"],r=JSON.parse(a),e.schema={type:"object",properties:r.variables},t.next=9,$(e.scaffoldingObj,e.variables);case 9:e.convertedCode=t.sent,e.$forceUpdate();case 11:case"end":return t.stop()}}),t)})))()},getProjects:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(l["getClient"])(f["CoreRestClient"]),t.next=3,n.getProjects();case 3:a=t.sent,e.adoProjects=a;case 5:case"end":return t.stop()}}),t)})))()},createRepo:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a,r,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,a=Object(l["getClient"])(m["GitRestClient"]),t.next=4,a.createRepository({name:e.repoName},e.adoProject.id);case 4:return r=t.sent,s=Object.keys(e.convertedCode),i=[],s.forEach((function(t){i.push({changeType:"add",item:{path:t},newContent:{content:e.convertedCode[t],contentType:"rawtext"}})})),t.next=10,a.createPush({refUpdates:[{name:"refs/heads/main",oldObjectId:"0000000000000000000000000000000000000000"}],commits:[{comment:"Initial commit.",changes:i}]},r.id,e.adoProject.id);case 10:e.showNotification=!0,e.notificationMsg="Create Repo Successfully",setTimeout((function(){n.showNotification=!1}),5e3);case 13:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u["init"]();case 3:return t.next=5,e.getProjects();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))(),Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loadScafdoling();case 1:case"end":return t.stop()}}),t)})))()}},I=V,A=Object(O["a"])(I,i,o,!1,null,"49331c24",null),T=A.exports,F={name:"App",components:{MainPanel:T}},D=F,J=(n("034f"),Object(O["a"])(D,r,s,!1,null,null,null)),q=J.exports,z=n("7583");n("5abe");a["default"].use(E.a),a["default"].directive("autosize",{inserted:function(e){var t=e.querySelector("textarea");Object(z["a"])(t)}}),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(q)}}).$mount("#app")},"6ec9":function(e,t,n){},7791:function(e,t,n){},"77a3":function(e,t,n){},"7e41":function(e,t,n){"use strict";n("77a3")},"85ec":function(e,t,n){},a542:function(e,t,n){"use strict";n("7791")},a67a:function(e,t,n){},d31f:function(e,t,n){"use strict";n("5450")},f046:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.type,{tag:"component",attrs:{schema:e.schema,value:e.value},on:{input:function(t){return e.$emit("input",t)}}})},r=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fieldset",{staticClass:"field"},[e.schema.title?n("legend",[e._v(e._s(e.schema.title))]):e._e(),e.schema.description?n("div",{staticClass:"content"},[e._v(e._s(e.schema.description))]):e._e(),e._l(e.schema.properties,(function(t,a){return n("form-element",{key:a,attrs:{schema:t,value:e.internalValue[a]},on:{input:function(t){return e.updateValue(t,a)}}})}))],2)},i=[],o=(n("d3b7"),n("3ca3"),n("ddb0"),{name:"FormElementWrapper",components:{FormElement:function(){return Promise.resolve().then(n.bind(null,"f046"))}},props:["schema","value"],data:function(){return{internalValue:void 0!==this.value?this.value:{}}},watch:{value:function(e){this.internalValue=e}},methods:{updateValue:function(e,t){this.internalValue[t]=e,this.$emit("input",this.internalValue)}}}),c=o,u=(n("d31f"),n("2877")),l=Object(u["a"])(c,s,i,!1,null,"bc49ad20",null),f=l.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{attrs:{label:e.schema.title,message:e.schema.description,labelPosition:"on-border"}},[n("b-input",{attrs:{value:e.value,placeholder:e.schema.example},on:{input:function(t){return e.$emit("input",t)}}})],1)},d=[],p={name:"TextElement",props:["schema","value"]},h=p,v=Object(u["a"])(h,m,d,!1,null,null,null),b=v.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{attrs:{label:e.schema.title,message:e.schema.description,labelPosition:"on-border"}},[n("b-input",{attrs:{type:"textarea",minlength:e.schema.minLength,maxlength:e.schema.maxLength,value:e.value},on:{input:function(t){return e.$emit("input",t)}}})],1)},y=[],_={name:"TextareaElement",props:["schema","value"]},w=_,x=Object(u["a"])(w,g,y,!1,null,null,null),j=x.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{attrs:{label:e.schema.title,message:e.schema.description,labelPosition:"on-border"}},[n("b-input",{attrs:{type:"number",min:e.schema.minimum,max:e.schema.maximum,step:"number"===e.schema.type?"any":"1",value:e.value},on:{input:function(t){e.$emit("input",Number(t))}}})],1)},C=[],k={name:"NumberElement",props:["schema","value"]},P=k,E=Object(u["a"])(P,O,C,!1,null,null,null),S=E.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{attrs:{label:e.schema.title,message:e.schema.description,labelPosition:"on-border"}},[n("b-select",{attrs:{value:e.value,placeholder:e.schema.title},on:{input:function(t){return e.$emit("input",t)}}},e._l(e.schema.enum,(function(t){return n("option",{key:t,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0)],1)},R=[],M={name:"SelectElement",props:["schema","value"]},N=M,V=Object(u["a"])(N,$,R,!1,null,null,null),I=V.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field checkbox-field"},[n("b-checkbox",{attrs:{value:e.value},on:{input:function(t){return e.$emit("input",t)}}},[n("span",{staticClass:"checkbox-title"},[e._v(e._s(e.schema.title))]),e.schema.description?n("p",{staticClass:"help checkbox-desc"},[e._v(e._s(e.schema.description))]):e._e()])],1)},T=[],F={name:"CheckboxElement",props:["schema","value"]},D=F,J=(n("3ef3"),Object(u["a"])(D,A,T,!1,null,"71c273b0",null)),q=J.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field"},[e.schema.title?n("label",{staticClass:"label"},[e._v(e._s(e.schema.title))]):e._e(),e._l(e.schema.items.anyOf,(function(t,a){return n("div",{key:a,staticClass:"field checkbox-field"},[n("b-checkbox",{attrs:{value:-1!==e.items.indexOf(t.enum[0])},on:{input:function(t){return e.updateValue(t,a)}}},[n("span",{staticClass:"checkbox-title"},[e._v(e._s(t.title))]),t.description?n("p",{staticClass:"help checkbox-desc"},[e._v(e._s(t.description))]):e._e()])],1)}))],2)},G=[],L=(n("a434"),n("11da")),U={name:"CheckboxGroupElement",props:["schema","value"],data:function(){return{items:void 0!==this.value?this.value:Object(L["b"])(this.schema)}},methods:{updateValue:function(e,t){var n=this.items.indexOf(this.schema.items.anyOf[t].enum[0]);e&&-1===n?this.items.push(this.schema.items.anyOf[t].enum[0]):e||-1===n||this.items.splice(n,1),this.$emit("input",this.items)}}},H=U,W=(n("a542"),Object(u["a"])(H,z,G,!1,null,"6f617e2c",null)),B=W.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field"},e._l(e.schema.anyOf,(function(t,a){return n("div",{key:a,staticClass:"field radio-field"},[n("b-radio",{attrs:{value:e.value,"native-value":t.enum[0]},on:{input:function(t){return e.$emit("input",t)}}},[n("span",{staticClass:"radio-title"},[e._v(e._s(t.title))])])],1)})),0)},K=[],Q={name:"RadioButtonElement",props:["schema","value"]},Y=Q,Z=(n("5091"),Object(u["a"])(Y,X,K,!1,null,"4613c018",null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fieldset",{staticClass:"field"},[e.schema.title?n("legend",[e._v(e._s(e.schema.title))]):e._e(),e._l(e.items,(function(t,a){return n("div",{key:a,staticClass:"columns"},[n("div",{staticClass:"column"},[n("form-element",{attrs:{schema:e.schema.items,value:t},on:{input:function(t){return e.updateValue(t,a)}}})],1),n("div",{staticClass:"column is-narrow"},[e.items.length>0?n("button",{key:"remove-"+a,staticClass:"button is-danger",attrs:{type:"button"},on:{click:function(t){return e.items.splice(a,1)}}},[e._v("Remove")]):e._e()])])})),n("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(t){return e.addItem()}}},[e._v("Add Item")])],2)},ne=[],ae={name:"FormElementMultiple",components:{FormElement:function(){return Promise.resolve().then(n.bind(null,"f046"))}},props:["schema","value"],data:function(){return{items:void 0!==this.value?this.value:Object(L["b"])(this.schema)}},methods:{addItem:function(){this.items.push(Object(L["b"])(this.schema)[0])},updateValue:function(e,t){this.items.splice(t,1,e),this.$emit("input",this.items)}}},re=ae,se=(n("7e41"),Object(u["a"])(re,te,ne,!1,null,"58c46062",null)),ie=se.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{attrs:{label:e.schema.title,message:e.schema.description,labelPosition:"on-border"}},[n("b-datepicker",{attrs:{value:e.value,placeholder:"Click to select date"},on:{input:function(t){return e.$emit("input",t)}}})],1)},ce=[],ue={name:"DatePickerElement",props:["schema","value"]},le=ue,fe=Object(u["a"])(le,oe,ce,!1,null,null,null),me=fe.exports,de={name:"FormElement",props:["schema","value"],computed:{type:function(){var e=b;return void 0!==this.schema.widget?"textarea"===this.schema.widget&&(e=j):void 0!==this.schema.anyOf?e=ee:void 0!==this.schema.enum?e=I:"boolean"===this.schema.type?e=q:"array"===this.schema.type?e=void 0===this.schema.items.anyOf?ie:B:"object"===this.schema.type?e=f:"integer"===this.schema.type||"number"===this.schema.type?e=S:"date"===this.schema.format&&(e=me),e}}},pe=de,he=Object(u["a"])(pe,a,r,!1,null,null,null);t["default"]=he.exports},f339:function(e){e.exports=JSON.parse('["simple-repo","simple-nodejs"]')}});
//# sourceMappingURL=app.6e341b03.js.map