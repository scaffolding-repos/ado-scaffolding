(function(e){function t(t){for(var a,i,c=t[0],o=t[1],u=t[2],f=0,m=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);l&&l(t);while(m.length)m.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=o;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"11da":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var a=n("b85c"),r=n("53ca"),s=(n("fb6a"),n("b64b"),function e(t){if("object"===Object(r["a"])(t)){if(t instanceof Date)return t.toISOString().slice(0,10);if(Array.isArray(t)){var n,s=[],i=Object(a["a"])(t);try{for(i.s();!(n=i.n()).done;){var c=n.value,o=e(c);void 0!==o&&s.push(o)}}catch(m){i.e(m)}finally{i.f()}if(s.length>0)return s}else{var u={};for(var l in t){var f=e(t[l]);void 0!==f&&(u[l]=f)}if(Object.keys(u).length>0)return u}}else if(void 0!==t&&""!==t)return t}),i=function e(t,n){if("object"===t.type){var a={};for(var r in t.properties)a[r]=e(t.properties[r],n);return a}return"array"===t.type?[e(t.items,n)]:void 0===n?n:n(t)};function c(e,t){return i(e,t)}function o(e){var t=s(e);return void 0===t?{}:t}},"2cfa":function(e,t,n){var a=n("c973").default;n("d3b7"),n("159b"),n("b64b"),n("96cf");var r=n("f7b3"),s=n("3686");function i(e,t){return c.apply(this,arguments)}function c(){return c=a(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,s){a(regeneratorRuntime.mark((function a(){var i,c,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:try{i={},c=t["scaffolding.json"],o=JSON.parse(c),Object.keys(t).forEach((function(a){var s=!0;if(o.rules[a]&&"function"===typeof o.rules[a]?s=o.rules[a](o.variables):o.rules[a]&&-1!=Object.keys(o.rules).indexOf(a)&&(s=o.rules[a]),n||(n={},Object.keys(o.variables).forEach((function(e){n[e]=o.variables[e].default}))),"scaffolding.json"!=a&&s){var c=t[a];try{var u=r.template(c);c=u(n)}catch(l){console.log(l)}i[a]=c}e(i)}))}catch(u){s(u)}case 1:case"end":return a.stop()}}),a)})))()})));case 1:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}r.templateSettings={evaluate:/\{\{([\s\S]+?)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"params",strip:!1,append:!0,selfcontained:!1},a(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s("scaffolding-repos","simple-nodejs","main");case 2:return t=e.sent,e.next=5,i(t);case 5:n=e.sent,console.log(n);case 7:case"end":return e.stop()}}),e)})))(),e.exports=i},3686:function(e,t,n){var a=n("c973").default;n("96cf"),n("d3b7"),n("5cc6"),n("907a"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("b64b"),n("99af");var r=n("c4e3");function s(e,t,n){return new Promise((function(e,s){var i={},c="scaffolding/simple-nodejs-main.zip";a(regeneratorRuntime.mark((function o(){var u;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:try{u=new XMLHttpRequest,u.open("GET",c,!0),u.responseType="arraybuffer",u.onload=function(){if(200==this.status){var s=new Uint8Array(this.response),c=new r;c.loadAsync(s).then(function(){var r=a(regeneratorRuntime.mark((function a(r){var s,c,o,u;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:s=Object.keys(r.files),c=0;case 2:if(!(c<s.length)){a.next=12;break}if(o=r.file(s[c]),!o||o.dir){a.next=9;break}return u=s[c].substring("".concat(t,"-").concat(n,"/").length),a.next=8,o.async("string");case 8:i[u]=a.sent;case 9:c++,a.next=2;break;case 12:e(i);case 13:case"end":return a.stop()}}),a)})));return function(e){return r.apply(this,arguments)}}())}},u.send()}catch(l){s(l)}case 1:case"end":return o.stop()}}),o)})))()}))}e.exports=s},"3ef3":function(e,t,n){"use strict";n("a67a")},5091:function(e,t,n){"use strict";n("6ec9")},5450:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{height:"100%"},attrs:{id:"app"}},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"columns",staticStyle:{height:"100%",overflow:"hidden"}},[n("div",{staticClass:"column is-half"},[n("form",{staticClass:"box"},[n("b-field",{attrs:{label:"Scaffolding"}},[n("b-select",{attrs:{placeholder:"Select Scaffolding",expanded:""},on:{input:e.onScaffoldingChanged},model:{value:e.scaffoldingsIdx,callback:function(t){e.scaffoldingsIdx=t},expression:"scaffoldingsIdx"}},e._l(e.scaffoldings,(function(t,a){return n("option",{key:t.account+"-"+t.repo+"-"+t.branch,domProps:{value:a}},[e._v(" "+e._s(t.repo)+" ")])})),0)],1),n("schema-form",{attrs:{schema:e.schema},on:{submit:function(t){return e.handleSubmit()},submit2:function(t){return e.previewCode()}},model:{value:e.variables,callback:function(t){e.variables=t},expression:"variables"}})],1),n("pre",[e._v("        "+e._s(JSON.stringify(e.variables,null,4))+"\n      ")])]),n("div",{staticClass:"column",staticStyle:{height:"100%",overflow:"auto"}},[n("h4",{staticClass:"title is-5"},[e._v("Preview")]),n("section",e._l(e.paths,(function(t){return n("b-collapse",{key:t,staticClass:"card",attrs:{animation:"slide","aria-id":"contentIdForA11y3",open:!1},scopedSlots:e._u([{key:"trigger",fn:function(a){return[n("div",{staticClass:"card-header",attrs:{role:"button","aria-controls":"contentIdForA11y3"}},[n("p",{staticClass:"card-header-title"},[e._v(" "+e._s(t)+" ")]),n("a",{staticClass:"card-header-icon"},[n("b-icon",{attrs:{icon:a.open?"menu-down":"menu-up"}})],1)])]}}],null,!0)},[n("div",{staticClass:"card-content"},[n("div",{staticClass:"content"},[n("pre",[e._v(e._s(e.loadCode(t))+"\n")])])])])})),1)])])},c=[],o=n("1da1"),u=(n("96cf"),n("b64b"),n("2a65")),l=n("3a1f"),f=n("a4fa"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[e._t("header",(function(){return[n("b-notification",{directives:[{name:"show",rawName:"v-show",value:e.activeErrorMessages.length,expression:"activeErrorMessages.length"}],attrs:{type:"is-danger",closable:!1,id:"error-messages"}},e._l(e.activeErrorMessages,(function(t,a){return n("div",{key:a},[n("div",[e._v(e._s(t))])])})),0)]}),{errorMessages:e.activeErrorMessages}),e._l(e.schema.properties,(function(t,a){return[e._t(a,(function(){return[n(e.element,{key:a,tag:"component",attrs:{schema:t,value:e.items[a]},on:{input:function(t){return e.updateValue(t,a)}}})]}),{item:{key:a,schema:t,value:e.items[a],update:e.updateValue}})]})),e._t("actions",(function(){return[n("div",{staticClass:"buttons"},[e._m(0),n("button",{staticClass:"button is-light",attrs:{type:"button"},on:{click:e.submit2}},[n("span",[e._v("Preview Code")])])])]}))],2)},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"button is-success",attrs:{type:"submit"}},[n("span",[e._v("Create Repository")])])}],d=(n("d81d"),n("99af"),n("783b")),h=n.n(d),v=n("dc2d"),b=n.n(v),g=n("f046"),y=n("11da"),_=new h.a({allErrors:!0,jsonPointers:!0,format:"full"}),x={name:"SchemaForm",components:{FormElement:g["default"]},props:{schema:{type:Object},value:{type:Object},element:{default:function(){return"form-element"}}},data:function(){return{items:void 0!==this.value?this.value:Object(y["b"])(this.schema),activeErrorMessages:[]}},watch:{schema:function(){this.items=Object(y["b"])(this.schema),_=new h.a({allErrors:!0,jsonPointers:!0,format:"full"})}},methods:{submit:function(){this.validate()?(this.activeErrorMessages=[],this.$emit("input",Object(y["a"])(this.items)),this.$emit("submit")):this.buildErrors()},submit2:function(){this.validate()?(this.activeErrorMessages=[],this.$emit("input",Object(y["a"])(this.items)),this.$emit("submit2")):this.buildErrors()},validate:function(){return _.validate(this.schema,Object(y["a"])(this.items))},buildErrors:function(){var e=this;this.activeErrorMessages=_.errors.map((function(t){if("required"===t.keyword){var n=0===t.dataPath.length?"/properties/".concat(t.params.missingProperty):t.schemaPath.substring(1,t.schemaPath.length-8)+"properties/".concat(t.params.missingProperty),a=b.a.get(e.schema,n);return a.title+" is required"}if("format"===t.keyword){var r=t.schemaPath.substring(1,t.schemaPath.length-7),s=b.a.get(e.schema,r);return"".concat(s.title," is not in the correct format. Eg: ").concat(s.example)}if("pattern"===t.keyword){var i=t.schemaPath.substring(1,t.schemaPath.length-8),c=b.a.get(e.schema,i);return"".concat(c.title," is not in the correct format. Eg: ").concat(c.example)}}))},updateValue:function(e,t){this.items[t]=e}}},w=x,O=n("2877"),j=Object(O["a"])(w,m,p,!1,null,null,null),k=j.exports,C=n("3686"),E=n("2cfa"),S={name:"HelloWorld",components:{SchemaForm:k},props:{msg:String},computed:{paths:function(){return Object.keys(this.convertedCode)}},data:function(){return{scaffoldings:[{account:"scaffolding-repos",repo:"simple-nodejs",branch:"main"}],scaffoldingsIdx:0,scaffoldingObj:{},convertedCode:{},variables:null,schema:{}}},methods:{handleSubmit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.variables),t.next=3,E(e.scaffoldingObj,e.variables);case 3:e.convertedCode=t.sent,console.log(e.convertedCode);case 5:case"end":return t.stop()}}),t)})))()},previewCode:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,E(e.scaffoldingObj,e.variables);case 2:e.convertedCode=t.sent;case 3:case"end":return t.stop()}}),t)})))()},loadCode:function(e){return this.convertedCode[e]},onScaffoldingChanged:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.scaffoldings[e.scaffoldingsIdx],t.next=3,C(n.account,n.repo,n.branch);case 3:e.scaffoldingObj=t.sent;case 4:case"end":return t.stop()}}),t)})))()},loadScafdoling:function(){return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},createRepo:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=Object(l["getClient"])(f["GitRestClient"]),n.next=3,a.createRepository({name:e},t);case 3:return r=n.sent,n.next=6,a.createPush({refUpdates:[{name:"refs/heads/main",oldObjectId:"c913f4b6f62dd4ea7c5260a5385173c7a95f5110"}],commits:[{comment:"Initial commit.",changes:[{changeType:"add",item:{path:"/readme3.md"},newContent:{content:"My third file!",contentType:"rawtext"}}]}]},r.id,t);case 6:case"end":return n.stop()}}),n)})))()}},mounted:function(){var e=this;Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u["init"]();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),console.log(t.t0);case 8:return n=e.scaffoldings[e.scaffoldingsIdx],t.next=11,C(n.account,n.repo,n.branch);case 11:return e.scaffoldingObj=t.sent,a=e.scaffoldingObj["scaffolding.json"],r=JSON.parse(a),e.schema={type:"object",properties:r.variables},t.next=17,E(e.scaffoldingObj,e.variables);case 17:e.convertedCode=t.sent;case 18:case"end":return t.stop()}}),t,null,[[0,5]])})))()}},$=S,R=Object(O["a"])($,i,c,!1,null,"766e881e",null),P=R.exports,M={name:"App",components:{HelloWorld:P}},V=M,I=(n("034f"),Object(O["a"])(V,r,s,!1,null,null,null)),F=I.exports,A=n("8a03"),T=n.n(A),N=n("7583");n("5abe");a["default"].use(T.a),a["default"].directive("autosize",{inserted:function(e){var t=e.querySelector("textarea");Object(N["a"])(t)}}),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(F)}}).$mount("#app")},"6ec9":function(e,t,n){},7791:function(e,t,n){},"77a3":function(e,t,n){},"7e41":function(e,t,n){"use strict";n("77a3")},"85ec":function(e,t,n){},a542:function(e,t,n){"use strict";n("7791")},a67a:function(e,t,n){},d31f:function(e,t,n){"use strict";n("5450")},f046:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.type,{tag:"component",attrs:{schema:e.schema,value:e.value},on:{input:function(t){return e.$emit("input",t)}}})},r=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fieldset",{staticClass:"field"},[e.schema.title?n("legend",[e._v(e._s(e.schema.title))]):e._e(),e.schema.description?n("div",{staticClass:"content"},[e._v(e._s(e.schema.description))]):e._e(),e._l(e.schema.properties,(function(t,a){return n("form-element",{key:a,attrs:{schema:t,value:e.internalValue[a]},on:{input:function(t){return e.updateValue(t,a)}}})}))],2)},i=[],c=(n("d3b7"),n("3ca3"),n("ddb0"),{name:"FormElementWrapper",components:{FormElement:function(){return Promise.resolve().then(n.bind(null,"f046"))}},props:["schema","value"],data:function(){return{internalValue:void 0!==this.value?this.value:{}}},watch:{value:function(e){this.internalValue=e}},methods:{updateValue:function(e,t){this.internalValue[t]=e,this.$emit("input",this.internalValue)}}}),o=c,u=(n("d31f"),n("2877")),l=Object(u["a"])(o,s,i,!1,null,"bc49ad20",null),f=l.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{attrs:{label:e.schema.title,message:e.schema.description}},[n("b-input",{attrs:{value:e.value,placeholder:e.schema.example},on:{input:function(t){return e.$emit("input",t)}}})],1)},p=[],d={name:"TextElement",props:["schema","value"]},h=d,v=Object(u["a"])(h,m,p,!1,null,null,null),b=v.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{attrs:{label:e.schema.title,message:e.schema.description}},[n("b-input",{attrs:{type:"textarea",minlength:e.schema.minLength,maxlength:e.schema.maxLength,value:e.value},on:{input:function(t){return e.$emit("input",t)}}})],1)},y=[],_={name:"TextareaElement",props:["schema","value"]},x=_,w=Object(u["a"])(x,g,y,!1,null,null,null),O=w.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{attrs:{label:e.schema.title,message:e.schema.description}},[n("b-input",{attrs:{type:"number",min:e.schema.minimum,max:e.schema.maximum,step:"number"===e.schema.type?"any":"1",value:e.value},on:{input:function(t){e.$emit("input",Number(t))}}})],1)},k=[],C={name:"NumberElement",props:["schema","value"]},E=C,S=Object(u["a"])(E,j,k,!1,null,null,null),$=S.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{attrs:{label:e.schema.title,message:e.schema.description}},[n("b-select",{attrs:{value:e.value,placeholder:e.schema.title},on:{input:function(t){return e.$emit("input",t)}}},e._l(e.schema.enum,(function(t){return n("option",{key:t,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0)],1)},P=[],M={name:"SelectElement",props:["schema","value"]},V=M,I=Object(u["a"])(V,R,P,!1,null,null,null),F=I.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field checkbox-field"},[n("b-checkbox",{attrs:{value:e.value},on:{input:function(t){return e.$emit("input",t)}}},[n("span",{staticClass:"checkbox-title"},[e._v(e._s(e.schema.title))]),e.schema.description?n("p",{staticClass:"help checkbox-desc"},[e._v(e._s(e.schema.description))]):e._e()])],1)},T=[],N={name:"CheckboxElement",props:["schema","value"]},J=N,W=(n("3ef3"),Object(u["a"])(J,A,T,!1,null,"71c273b0",null)),q=W.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field"},[e.schema.title?n("label",{staticClass:"label"},[e._v(e._s(e.schema.title))]):e._e(),e._l(e.schema.items.anyOf,(function(t,a){return n("div",{key:a,staticClass:"field checkbox-field"},[n("b-checkbox",{attrs:{value:-1!==e.items.indexOf(t.enum[0])},on:{input:function(t){return e.updateValue(t,a)}}},[n("span",{staticClass:"checkbox-title"},[e._v(e._s(t.title))]),t.description?n("p",{staticClass:"help checkbox-desc"},[e._v(e._s(t.description))]):e._e()])],1)}))],2)},D=[],G=(n("a434"),n("11da")),L={name:"CheckboxGroupElement",props:["schema","value"],data:function(){return{items:void 0!==this.value?this.value:Object(G["b"])(this.schema)}},methods:{updateValue:function(e,t){var n=this.items.indexOf(this.schema.items.anyOf[t].enum[0]);e&&-1===n?this.items.push(this.schema.items.anyOf[t].enum[0]):e||-1===n||this.items.splice(n,1),this.$emit("input",this.items)}}},z=L,U=(n("a542"),Object(u["a"])(z,H,D,!1,null,"6f617e2c",null)),B=U.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field"},e._l(e.schema.anyOf,(function(t,a){return n("div",{key:a,staticClass:"field radio-field"},[n("b-radio",{attrs:{value:e.value,"native-value":t.enum[0]},on:{input:function(t){return e.$emit("input",t)}}},[n("span",{staticClass:"radio-title"},[e._v(e._s(t.title))])])],1)})),0)},Y=[],K={name:"RadioButtonElement",props:["schema","value"]},Q=K,Z=(n("5091"),Object(u["a"])(Q,X,Y,!1,null,"4613c018",null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fieldset",{staticClass:"field"},[e.schema.title?n("legend",[e._v(e._s(e.schema.title))]):e._e(),e._l(e.items,(function(t,a){return n("div",{key:a,staticClass:"columns"},[n("div",{staticClass:"column"},[n("form-element",{attrs:{schema:e.schema.items,value:t},on:{input:function(t){return e.updateValue(t,a)}}})],1),n("div",{staticClass:"column is-narrow"},[e.items.length>0?n("button",{key:"remove-"+a,staticClass:"button is-danger",attrs:{type:"button"},on:{click:function(t){return e.items.splice(a,1)}}},[e._v("Remove")]):e._e()])])})),n("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(t){return e.addItem()}}},[e._v("Add Item")])],2)},ne=[],ae={name:"FormElementMultiple",components:{FormElement:function(){return Promise.resolve().then(n.bind(null,"f046"))}},props:["schema","value"],data:function(){return{items:void 0!==this.value?this.value:Object(G["b"])(this.schema)}},methods:{addItem:function(){this.items.push(Object(G["b"])(this.schema)[0])},updateValue:function(e,t){this.items.splice(t,1,e),this.$emit("input",this.items)}}},re=ae,se=(n("7e41"),Object(u["a"])(re,te,ne,!1,null,"58c46062",null)),ie=se.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{attrs:{label:e.schema.title,message:e.schema.description}},[n("b-datepicker",{attrs:{value:e.value,placeholder:"Click to select date"},on:{input:function(t){return e.$emit("input",t)}}})],1)},oe=[],ue={name:"DatePickerElement",props:["schema","value"]},le=ue,fe=Object(u["a"])(le,ce,oe,!1,null,null,null),me=fe.exports,pe={name:"FormElement",props:["schema","value"],computed:{type:function(){var e=b;return void 0!==this.schema.widget?"textarea"===this.schema.widget&&(e=O):void 0!==this.schema.anyOf?e=ee:void 0!==this.schema.enum?e=F:"boolean"===this.schema.type?e=q:"array"===this.schema.type?e=void 0===this.schema.items.anyOf?ie:B:"object"===this.schema.type?e=f:"integer"===this.schema.type||"number"===this.schema.type?e=$:"date"===this.schema.format&&(e=me),e}}},de=pe,he=Object(u["a"])(de,a,r,!1,null,null,null);t["default"]=he.exports}});
//# sourceMappingURL=app.9eeb8413.js.map