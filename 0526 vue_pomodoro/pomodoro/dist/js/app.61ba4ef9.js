(function(t){function e(e){for(var o,r,s=e[0],l=e[1],c=e[2],u=0,f=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);m&&m(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(o=!1)}o&&(a.splice(e--,1),t=l(l.s=n[0]))}return t}var o={},r={app:0},i={app:0},a=[];function s(t){return l.p+"js/"+({list:"list",notfound:"notfound",settings:"settings"}[t]||t)+"."+{list:"4468d40e",notfound:"ddd1885b",settings:"6fa466df"}[t]+".js"}function l(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={list:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({list:"list",notfound:"notfound",settings:"settings"}[t]||t)+"."+{list:"f598311c",notfound:"31d6cfe0",settings:"31d6cfe0"}[t]+".css",i=l.p+o,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var c=a[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===o||u===i))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],u=c.getAttribute("data-href");if(u===o||u===i)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var o=e&&e.target&&e.target.src||i,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[t],m.parentNode.removeChild(m),n(a)},m.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(m)})).then((function(){r[t]=0})));var o=i[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,n){o=i[t]=[e,n]}));e.push(o[2]=a);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var f=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(m);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}i[t]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=o,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(n,o,function(e){return t[e]}.bind(null,o));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var m=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var o=n("2b0e"),r=n("5f5b");n("ab8b"),n("2dd8");o["default"].use(r["a"]);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[n("font-awesome-icon",{attrs:{size:"lg",icon:["fas","clock"]}})],1),n("router-link",{attrs:{to:"/list"}},[n("font-awesome-icon",{attrs:{size:"lg",icon:["fas","clipboard-list"]}})],1),n("router-link",{attrs:{to:"/settings"}},[n("font-awesome-icon",{attrs:{size:"lg",icon:["fas","music"]}})],1)],1),n("keep-alive",[n("router-view")],1)],1)},a=[],s=n("2877"),l={},c=Object(s["a"])(l,i,a,!1,null,null,null),u=c.exports,f=n("9483");Object(f["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var m=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("h1",[t._v(t._s(t.currentText))]),n("div",{staticClass:"d-flex w-100 p-0 m-auto container flex-wrap",attrs:{id:"clock"}},[n("div",{staticClass:"d-flex col-12 col-lg-3 flex-lg-column justify-content-between",attrs:{id:"totaltimebreakadjust"}},[n("b-btn",{attrs:{variant:"none"}},[n("font-awesome-icon",{attrs:{color:"purple",icon:["fas","plus"]},on:{click:function(e){return t.timebreakadjust("plus")}}})],1),n("span",{staticClass:"text-success shadow-lg border rounded"},[t._v("Break:"+t._s(t.totaltimebreak/60)+"min")]),n("b-btn",{attrs:{variant:"none"},on:{click:function(e){return t.timebreakadjust("minus")}}},[n("font-awesome-icon",{attrs:{color:"purple",icon:["fas","minus"]}})],1)],1),t.isBreak?n("radial-progress-bar",{staticClass:"m-auto",attrs:{diameter:300,"completed-steps":t.timeleft,"total-steps":t.totaltimebreak,startColor:"#ccc",stopColor:"#c11",innerStrokeColor:"#333"}},[1!=t.status?n("b-btn",{attrs:{variant:"primary"},on:{click:t.start}},[n("font-awesome-icon",{attrs:{icon:["fas","play"]}})],1):t._e(),1==t.status?n("b-btn",{attrs:{variant:"danger"},on:{click:t.pause}},[n("font-awesome-icon",{attrs:{icon:["fas","pause"]}})],1):t._e(),t.current.length>0||t.todos.length>0?n("b-btn",{attrs:{variant:"success"},on:{click:function(e){return t.finish(!0)}}},[n("font-awesome-icon",{attrs:{icon:["fas","step-forward"]}})],1):t._e(),t._v(" "+t._s(t.timetext)+" ")],1):n("radial-progress-bar",{staticClass:"m-auto h-25  col-12 col-lg-4 p-0",attrs:{diameter:300,"completed-steps":t.timeleft,"total-steps":t.totaltime,startColor:"#eee",stopColor:"#e74",innerStrokeColor:"#444"}},[1!=t.status?n("b-btn",{attrs:{variant:"primary"},on:{click:t.start}},[n("font-awesome-icon",{attrs:{icon:["fas","play"]}})],1):t._e(),1==t.status?n("b-btn",{attrs:{variant:"danger"},on:{click:t.pause}},[n("font-awesome-icon",{attrs:{icon:["fas","pause"]}})],1):t._e(),t.current.length>0||t.todos.length>0?n("b-btn",{attrs:{variant:"success"},on:{click:function(e){return t.finish(!0)}}},[n("font-awesome-icon",{attrs:{icon:["fas","step-forward"]}})],1):t._e(),n("span",{staticClass:"bg-primary text-white shadow-lg border rounded"},[t._v(t._s(t.timetext))])],1),n("div",{staticClass:"d-flex col-12 col-lg-3 flex-lg-column justify-content-between",attrs:{id:"totaltimeadjust"}},[n("b-btn",{attrs:{variant:"none"}},[n("font-awesome-icon",{attrs:{color:"purple",icon:["fas","plus"]},on:{click:function(e){return t.timeadjust("plus")}}})],1),n("span",{staticClass:"text-success shadow-lg border rounded"},[t._v("Work:"+t._s(t.totaltime/60)+"min")]),n("b-btn",{attrs:{variant:"none"},on:{click:function(e){return t.timeadjust("minus")}}},[n("font-awesome-icon",{attrs:{color:"purple",icon:["fas","minus"]}})],1)],1)],1)])},p=[],h=(n("99af"),{data:function(){return{status:0,timebreakrange:this.$store.totaltimebreak}},computed:{currentText:function(){return this.current.length>0?this.current:this.todos.length>0?"點擊開始":"沒有事項"},timetext:function(){var t=Math.floor(this.timeleft/60),e=Math.floor(this.timeleft%60);return"".concat(t," min: ").concat(e," sec")},alarm:function(){return this.$store.getters.alarm},timeleft:function(){return this.$store.getters.timeleft},current:function(){return this.$store.getters.current},todos:function(){return this.$store.getters.todos},totaltime:function(){return this.$store.getters.totaltime},totaltimebreak:function(){return this.$store.getters.totaltimebreak},isBreak:function(){return this.$store.getters.isBreak}},methods:{start:function(){var t=this;2===this.status?(this.status=1,this.timer=setInterval((function(){t.$store.commit("countdown"),t.timeleft<0&&t.finish(!1)}),1e3)):this.todos.length>0&&(this.$store.commit("start"),this.status=1,this.timer=setInterval((function(){t.$store.commit("countdown"),t.timeleft<0&&t.finish(!1)}),1e3))},finish:function(t){if(clearInterval(this.timer),this.status=0,this.$store.commit("finish"),!t){var e=new Audio;e.src="./alarms/"+this.alarm,e.play()}this.todos.length>0?this.start():alert("結束")},pause:function(){clearInterval(this.timer),console.log(this.body),this.status=2},timeadjust:function(t){1!==this.status&&("minus"===t?this.$store.commit("timeminus"):this.$store.commit("timeplus"))},timebreakadjust:function(t){1!==this.status&&("minus"===t?this.$store.commit("timebreakminus"):this.$store.commit("timebreakplus"))}}}),b=h,g=Object(s["a"])(b,d,p,!1,null,null,null),v=g.exports;o["default"].use(m["a"]);var k=[{path:"/",name:"Home",component:v,meta:{title:"番茄鐘"}},{path:"/list",name:"List",component:function(){return n.e("list").then(n.bind(null,"1a33"))},meta:{title:"番茄鐘|清單"}},{path:"/settings",name:"Settings",component:function(){return n.e("settings").then(n.bind(null,"26d3"))},meta:{title:"番茄鐘|設定"}},{path:"*",name:"notfound",component:function(){return n.e("notfound").then(n.bind(null,"1f6b"))},meta:{title:"404 not found"}}],w=new m["a"]({routes:k});w.afterEach((function(t,e){document.title=t.meta.title}));var y=w,_=(n("a434"),n("b0c0"),n("2f62")),j=n("0e44");o["default"].use(_["a"]);var x=parseInt("1500"),C=parseInt("300"),$=new _["a"].Store({state:{todos:[],timeleft:x,alarm:"nofeel.mp3",current:"",isBreak:!1,src:"red",totaltime:x,totaltimebreak:C},getters:{alarm:function(t){return t.alarm},todos:function(t){return t.todos},timeleft:function(t){return t.timeleft},current:function(t){return t.current},isBreak:function(t){return t.isBreak},totaltime:function(t){return t.totaltime},totaltimebreak:function(t){return t.totaltimebreak}},mutations:{selectAlarm:function(t,e){t.alarm=e},addtodo:function(t,e){t.todos.push({name:e,edit:!1,model:e})},dragTodo:function(t,e){t.todos=e},delTodo:function(t,e){t.todos.splice(e,1)},editTodo:function(t,e){t.todos[e].edit=!t.todos[e].edit},cancelTodo:function(t,e){t.todos[e].edit=!1,t.todos[e].model=t.todos[e].name},saveTodo:function(t,e){t.todos[e].edit=!1,t.todos[e].name=t.todos[e].model},start:function(t){t.isBreak?t.current="休息一下":t.isBreak||(t.current=t.todos[0].name,t.todos.splice(0,1))},countdown:function(t){t.timeleft--},finish:function(t){return t.todos.length>0&&(t.isBreak=!t.isBreak),t.current="",t.isBreak?(t.timeleft=t.totaltimebreak,[t.timeleft,t.totaltimebreak]):(t.timeleft=t.totaltime,t.timeleft)},timeminus:function(t){if(!t.isBreak)return t.totaltime>x/25?(t.totaltime-=x/25,t.timeleft=t.totaltime,[t.totaltime,t.timeleft]):[t.totaltime,t.timeleft]},timeplus:function(t){if(!t.isBreak)return t.totaltime<1.2*x?(t.totaltime+=x/25,t.timeleft=t.totaltime,[t.totaltime,t.timeleft]):[t.totaltime,t.timeleft]},timebreakminus:function(t){return t.totaltimebreak>C/5?(t.totaltimebreak-=C/5,t.totaltimebreak):t.totaltimebreak},timebreakplus:function(t){return t.totaltimebreak<1.2*C?(t.totaltimebreak+=C/5,t.totaltimebreak):t.totaltimebreak},change:function(t,e){return t.alarm=e,t.alarm}},actions:{},modules:{},plugins:[Object(j["a"])()]}),B=n("ecee"),O=n("ad3d"),T=n("c074"),S=n("531a"),E=n.n(S),A=n("310e"),P=n.n(A),N=(n("1a8f"),n("df2d"),n("a584"));o["default"].use(N["a"],{config:{id:"UA-168189069-1"}}),B["c"].add(T["e"],T["b"],T["c"],T["a"],T["g"],T["l"],T["m"],T["j"],T["h"],T["f"],T["k"],T["i"],T["d"]),o["default"].component("font-awesome-icon",O["a"]),o["default"].component("radial-progress-bar",E.a),o["default"].component("draggable",P.a),o["default"].config.productionTip=!1,new o["default"]({router:y,store:$,render:function(t){return t(u)}}).$mount("#app")},df2d:function(t,e,n){}});
//# sourceMappingURL=app.61ba4ef9.js.map