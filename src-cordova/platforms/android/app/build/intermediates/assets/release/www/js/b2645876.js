(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["b2645876"],{"0a75":function(t,e,n){t.exports=n("454f")},"0d03":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"row justify-center",attrs:{padding:""}},[n("div",{staticStyle:{width:"700px","max-width":"90vw"}},[n("q-input",{attrs:{value:t.serial,"float-label":"ระบุ Serial Number",after:[{icon:"camera_alt",handler:function(){t.scanBarcode()}}]},on:{change:function(e){t.serial=e}}}),t._v("\n    "+t._s(this.serial)+"\n  ")],1)])},a=[];r._withStripped=!0;var o=n("5640"),i=n.n(o),c=n("3156"),s=n.n(c),u=n("2f62"),f=n("196b");function l(){var t=i()([""]);return l=function(){return t},t}var p={name:"create_serial",data:function(){return{serial:null}},watch:{serial:function(){this.submitForm()}},components:{InnerLoading:f["a"]},computed:s()({},Object(u["d"])("task",["task_id"])),methods:{scanBarcode:function(){var t=this;this.$isCordova?cordova.plugins.barcodeScanner.scan(function(e){t.form.serial=e.text,t.isScannerData=!0},function(t){alert("Scanning failed: "+t)},{preferFrontCamera:!1,showFlipCameraButton:!1,showTorchButton:!0,torchOn:!0,saveHistory:!0,prompt:"Place a barcode inside the scan area",resultDisplayDuration:1500,formats:"UPC_A,UPC_E,EAN_13,CODE_39,CODE_128",orientation:"portrait",disableAnimations:!0,disableSuccessBeep:!1}):this.$notify.create({type:"negative",message:"Run again using Android."})},submitForm:function(){var t=this;this.$store.commit("setLoading",!0,{root:!0}),this.$axiosInstance.post("/task/serial/",this.serial).then(function(e){t.$q.notify({type:"positive",message:e.message}),t.$store.commit("setLoading",!1,{root:!0}),t.promptDialog()}).catch(function(e){t.$store.commit("setLoading",!1,{root:!0}),t.$q.notify({type:"negative",message:e.response.data})})},promptDialog:function(){var t=this;this.$q.dialog({title:"ข้อมูลอุปกรณ์",message:"มีการติดตั้งอุปกรณ์หรือไม่?",ok:"มี",cancel:"ไม่มี"}).then(function(){t.$router.push("/task/create_serial")}).catch(function(){t.$store.commit("setLoading",!0,{root:!0}),t.$router.push("/task")(l())})}}},d=p,b=(n("e8da"),n("2877")),v=Object(b["a"])(d,r,a,!1,null,"9c352f4a",null);v.options.__file="create_serial.vue";e["default"]=v.exports},"196b":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{appear:"","enter-active-class":"fadeIn","leave-active-class":"fadeOut"}},[n("q-inner-loading",{attrs:{visible:t.loading}},[n("q-spinner-gears",{attrs:{size:"50px",color:"teal-4"}})],1)],1)},a=[];r._withStripped=!0;n("1070"),n("25cd");var o={props:["loading"],data:function(){return{}}},i=o,c=(n("da06"),n("2877")),s=Object(c["a"])(i,r,a,!1,null,null,null);s.options.__file="InnerLoading.vue";e["a"]=s.exports},1973:function(t,e,n){t.exports=n("5bba")},3156:function(t,e,n){var r=n("8f5a"),a=n("afdb"),o=n("895c"),i=n("9523");function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},c=o(n);"function"===typeof a&&(c=c.concat(a(n).filter(function(t){return r(n,t).enumerable}))),c.forEach(function(e){i(t,e,n[e])})}return t}t.exports=c},"32a6":function(t,e,n){var r=n("241e"),a=n("c3a1");n("ce7e")("keys",function(){return function(t){return a(r(t))}})},"454f":function(t,e,n){n("46a7");var r=n("584a").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},"46a7":function(t,e,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"494d":function(t,e,n){t.exports=n("e1b7")},"4b3a":function(t,e,n){var r=n("f66f");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("499e").default;a("533b3a97",r,!1,{sourceMap:!1})},"522e":function(t,e,n){var r=n("f772"),a=n("ebfd").onFreeze;n("ce7e")("freeze",function(t){return function(e){return t&&r(e)?t(a(e)):e}})},5640:function(t,e,n){var r=n("1973"),a=n("494d");function o(t,e){return e||(e=t.slice(0)),a(r(t,{raw:{value:a(e)}}))}t.exports=o},"5bba":function(t,e,n){n("9d98");var r=n("584a").Object;t.exports=function(t,e){return r.defineProperties(t,e)}},"817b":function(t,e,n){var r=n("cecc");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("499e").default;a("4df16b4d",r,!1,{sourceMap:!1})},"895c":function(t,e,n){t.exports=n("8aae")},"8aae":function(t,e,n){n("32a6"),t.exports=n("584a").Object.keys},"8f5a":function(t,e,n){t.exports=n("fde4")},9523:function(t,e,n){var r=n("0a75");function a(t,e,n){return e in t?r(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}t.exports=a},"9d98":function(t,e,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperties:n("7e90")})},afdb:function(t,e,n){t.exports=n("ed33")},bf90:function(t,e,n){var r=n("36c3"),a=n("bf0b").f;n("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return a(r(t),e)}})},ce7e:function(t,e,n){var r=n("63b6"),a=n("584a"),o=n("294c");t.exports=function(t,e){var n=(a.Object||{})[t]||Object[t],i={};i[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",i)}},cecc:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"",""])},da06:function(t,e,n){"use strict";var r=n("4b3a"),a=n.n(r);a.a},e1b7:function(t,e,n){n("522e"),t.exports=n("584a").Object.freeze},e8da:function(t,e,n){"use strict";var r=n("817b"),a=n.n(r);a.a},ed33:function(t,e,n){n("014b"),t.exports=n("584a").Object.getOwnPropertySymbols},f66f:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"",""])},fde4:function(t,e,n){n("bf90");var r=n("584a").Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}}}]);