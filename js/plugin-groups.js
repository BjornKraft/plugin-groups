!function(e){var t={};function n(c){if(t[c])return t[c].exports;var a=t[c]={i:c,l:!1,exports:{}};return e[c].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(c,a,function(t){return e[t]}.bind(null,a));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.React},function(e,t,n){"use strict";n.r(t)},function(e,t){e.exports=window.ReactDOM},function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(0),l=n(3),r=n.n(l),o=n(5),i=n.n(o),u=n(1);function d(e){const{loadURL:t,setConfig:n,restNonce:c,navTab:a}=e;return Object(s.createElement)("select",{onChange:e=>{(e=>{const{id:t,loadURL:n,setConfig:c,restNonce:a,navTab:s}=e;window.localStorage.getItem("_plgUnsaved")&&!confirm(Object(u.__)("Changes that you made may not be saved.",e.slug))||(s(0),fetch(n+"?siteID="+t,{method:"GET",headers:{"X-WP-Nonce":a}}).then(e=>e.json()).then(e=>{c(e),window.localStorage.removeItem("_plgUnsaved"),s(1)}))})({id:e.target.value,loadURL:t,setConfig:n,restNonce:c,navTab:a})}},e.sites.map(t=>{const n=parseInt(t.blog_id);return Object(s.createElement)("option",{value:n,selected:n===e.siteID},t.domain)}))}function p(e){const{navTab:t,tab:n,pluginName:c,version:a,handleSave:l,handleExport:r,handleImport:o,saving:i,sites:p}=e;return Object(s.createElement)(s.Fragment,null,Object(s.createElement)("header",{className:"ui-header"},Object(s.createElement)("span",null,Object(s.createElement)("h2",null,c)),Object(s.createElement)("span",{className:"ui-header-version"},a),0===n&&Object(s.createElement)("span",{className:"ui-header-multisite"},Object(u.__)("Loading site config.",e.slug)),0!==n&&Object(s.createElement)(s.Fragment,null,p&&Object(s.createElement)("span",{className:"ui-header-multisite"},Object(s.createElement)(d,e)),Object(s.createElement)("button",{className:"button button-primary",type:"button",onClick:l,disabled:i},Object(u.__)("Save Settings",e.slug)),Object(s.createElement)("button",{className:"button button-primary",type:"button",onClick:r},"Export"),Object(s.createElement)("label",{className:"button button-primary",type:"button",onClick:""},"Import",Object(s.createElement)("input",{className:"importer-input",type:"file",onChange:o})))),0!==n&&Object(s.createElement)("ul",{className:"ui-navigation"},Object(s.createElement)("li",{className:1===n?"ui-navigation-link active":"ui-navigation-link",onClick:()=>t(1)},Object(u.__)("Groups Management",e.slug)),p&&e.mainSite===e.siteID&&Object(s.createElement)("li",{className:3===n?"ui-navigation-link active":"ui-navigation-link",onClick:()=>t(3)},Object(u.__)("Multisite",e.slug)),Object(s.createElement)("li",{className:2===n?"ui-navigation-link active":"ui-navigation-link",onClick:()=>t(2)},Object(u.__)("Settings",e.slug))))}function m(e){const{name:t,id:n,changeName:c,editGroup:a,temp:l,focus:r}=e;return Object(s.createElement)("input",{className:"ui-body-edit-title",autoFocus:r,onFocus:e=>{e.target.select()},value:t,onInput:e=>{c(n,e.target.value)},onBlur:e=>{e.target.value.length?e.target.value.length&&"/"!==e.target.value&&a(n):e.target.focus()},type:"text","data-edit":n})}function g(e){const{title:t,collapse:n,height:c}=e,[a,l]=r.a.useState(n||"open"),o="open"===a?"dashicons-arrow-up-alt2":"dashicons-arrow-down-alt2",i=n?"collapsible":"";return Object(s.createElement)("div",{className:"ui-panel"},Object(s.createElement)("div",{className:"ui-panel-header "+i,onClick:()=>{n&&l("open"===a?"closed":"open")}},Object(s.createElement)("h3",{className:"ui-panel-header-title"},t),n&&Object(s.createElement)("span",{className:"dashicons "+o})),"open"===a&&Object(s.createElement)("div",{className:"ui-panel-body "+a},e.children))}function b(e){const{name:t,version:n,id:c,callback:a,checked:l,bold:r,subname:o,className:i,disabled:u}=e,d=i||"";return Object(s.createElement)("div",{className:"ui-body-sidebar-list-item "+d},Object(s.createElement)("label",null,Object(s.createElement)("input",{type:"checkbox",checked:l,value:c,onChange:a,disabled:u}),Object(s.createElement)("span",null,r?Object(s.createElement)("strong",null,t):Object(s.createElement)("span",null,t),o&&Object(s.createElement)("div",null,o))),Object(s.createElement)("span",{className:"children"},n&&Object(s.createElement)("span",{className:"version"},n),e.children))}function O(e){const{group:t,plugins:n,removePlugins:c,removePlugin:a}=e,[l,o]=r.a.useState([]),i=0<t.plugins.length,d=e=>{const t=[...l];e.target.checked?t.push(e.target.value):t.splice(t.indexOf(e.target.value),1),o(t)};return Object(s.createElement)(g,{title:Object(u.__)("Grouped plugins",e.slug)},i&&Object(s.createElement)(s.Fragment,null,Object(s.createElement)(b,{name:Object(u.__)("Select All",e.slug),className:"list-control",callback:e=>{e.target.checked?o(t.plugins):o([])},checked:l.length===t.plugins.length},Object(s.createElement)("button",{disabled:!l.length,type:"button",className:"button",onClick:e=>{c(t.id,[...l])}},Object(u.__)("Remove selected",e.slug))),Object(s.createElement)("div",{className:"ui-body-edit-plugins"},t.plugins.map((e,c)=>{const r=n[e];return Object(s.createElement)(b,{name:r.Name,version:r.Version,checked:-1<l.indexOf(e),id:e,callback:d},Object(s.createElement)("label",{className:"dashicons dashicons-no-alt",onClick:()=>a(t.id,e)}))}))),!i&&Object(s.createElement)("div",{className:"ui-body-edit-plugins"},Object(s.createElement)("span",{className:"ui-body-edit-plugins-item"},Object(u.__)("No plugins selected",e.slug))))}function j({group:e,removeKeyword:t}){const{id:n,keywords:c}=e;return c.map(e=>Object(s.createElement)("span",{className:"ui-keyword"},e,Object(s.createElement)("label",{className:"dashicons dashicons-no-alt",onClick:()=>t(n,e)})))}function E(e){const{group:t,addKeyword:n,removeKeyword:c}=e;return Object(s.createElement)("div",{className:"ui-body-sidebar-list-item-section"},Object(s.createElement)(g,{title:Object(u.__)("Keywords",e.slug)},Object(s.createElement)(j,{group:t,removeKeyword:c,addKeyword:n}),Object(s.createElement)("hr",null),Object(s.createElement)("input",{className:"regular-text keywords-input",type:"text",placeholder:Object(u.__)("Add keyword"),"data-keywords":!0,onKeyDown:e=>{const c=e.target.value.trim();"Enter"!==e.key&&","!==e.key||(e.preventDefault(),e.stopPropagation(),e.target.dataset.keywords&&0<c.length&&(n(t.id,c),e.target.value=""))}})))}function h(e){const{group:t}=e;return Object(s.createElement)("div",{className:"ui-body-sidebar-list-item-edit"},Object(s.createElement)(O,e),Object(s.createElement)(E,e))}function f(e){const{selectGroup:t,openGroup:n,group:c,changeName:l,editGroup:r,index:o}=e,{temp:i,name:u,id:d,plugins:p,selected:g,open:b,edit:O,focus:j}=c,E=g?"active":"";return Object(s.createElement)(s.Fragment,null,Object(s.createElement)("div",{className:"ui-body-sidebar-list-item "+E},!O&&Object(s.createElement)(s.Fragment,null,Object(s.createElement)("span",null,Object(s.createElement)("input",{type:"checkbox",checked:g,onClick:e=>t(d)}),Object(s.createElement)("span",{className:"ui-body-sidebar-list-item-title",onClick:e=>n(d)},u)),Object(s.createElement)("span",{className:"ui-body-sidebar-list-item-icons"},Object(s.createElement)("span",{className:"dashicons dashicons-edit",onClick:()=>r(d)}),p.length)),O&&Object(s.createElement)(m,{temp:i,name:u,id:d,changeName:l,editGroup:r,focus:j})),!i&&b&&Object(s.createElement)(h,a()({group:c},e)))}function v(e){const{groups:t,getList:n,edit:c}=e;return n().map((n,l)=>{const r=t[n];return Object(s.createElement)(f,a()({index:l,group:r,editing:n===c},e))})}function y(e){const{getList:t,createGroup:n,deleteGroups:c,selectGroups:a,getSelected:l}=e,r=l().length===Object.keys(e.groups).length;return Object(s.createElement)("div",{className:"ui-body-sidebar wide"},Object(s.createElement)(g,{title:Object(u.__)("Groups")},Object(s.createElement)("div",{className:"ui-body-sidebar-list"},0!==t().length&&Object(s.createElement)(s.Fragment,null,Object(s.createElement)(b,{name:Object(u.__)("Select All"),bold:!0,callback:t=>{a(Object.keys(e.groups),t.target.checked)},checked:r,className:"list-control"},Object(s.createElement)("button",{disabled:!l().length,type:"button",className:"button",onClick:()=>{c(l(),!0)}},Object(s.createElement)("span",{className:"text"}," ",Object(u.__)("Delete selected",e.slug)," "),Object(s.createElement)("span",{className:"dashicons dashicons-trash"}))),Object(s.createElement)(v,e)),0===t().length&&Object(s.createElement)("div",{className:"description"},Object(s.createElement)("span",{className:"ui-body-edit-plugins-item"},Object(u.__)("No groups created",e.slug))))),Object(s.createElement)("button",{type:"button",className:"button",onClick:()=>n("",!0)},Object(u.__)("Create new group",e.slug)))}function k(e){const{plugins:t,addPlugins:n}=e,[c,a]=r.a.useState({checkedAll:!1,search:"",checked:[]}),l=Object.keys(t),o=e=>{a({...c,...e})},i=e=>{const n={checked:[]};e&&l.forEach(e=>{const c=t[e];p(c.Name)&&n.checked.push(e)}),n.checkedAll=n.checked.length,o(n)},d=e=>{const t={...c},n=t.checked.indexOf(e.target.value);e.target.checked&&-1===n?t.checked.push(e.target.value):!e.target.checked&&-1<n&&t.checked.splice(n,1),t.checked.length!==t.checkedAll&&(t.checkedAll=0),t.checked.length===l.length?i(!0):o(t)},p=e=>!c.search||-1<e.toLowerCase().indexOf(c.search.toLowerCase()),m=c.checked.length&&(()=>{for(const t in e.groups)if(e.groups[t].selected)return!0;return!1})();return Object(s.createElement)("div",{className:"ui-body-sidebar"},Object(s.createElement)(g,{title:Object(u.__)("Plugins",e.slug)},Object(s.createElement)("input",{className:"regular-text search",placeholder:Object(u.__)("Search",e.slug),type:"search",onInput:e=>{o({search:e.target.value})},value:c.search}),Object(s.createElement)(b,{name:Object(u.__)("Select all",e.slug),id:"all",callback:e=>i(e.target.checked),checked:c.checkedAll,bold:!0,className:"list-control"},Object(s.createElement)("button",{className:"button",type:"button",onClick:()=>{Object.keys(e.groups).forEach(t=>{e.groups[t].selected&&n(t,c.checked)}),i(!1)},disabled:!m},Object(s.createElement)("span",{className:"text"},Object(u.__)("Send to Selected Groups")),Object(s.createElement)("span",{className:"dashicons dashicons-arrow-right-alt2"}))),Object(s.createElement)("div",{className:"plugins-list"},Object(s.createElement)("div",{className:"ui-body-sidebar-list"},l.map((e,n)=>{const a=t[e],l=p(a.Name),r=-1<c.checked.indexOf(e)&&p(a.Name);return Object(s.createElement)(s.Fragment,null,l&&Object(s.createElement)(b,{name:a.Name,id:e,version:a.Version,checked:r,callback:d}))})))))}function N(e){const{togglePreset:t,selectedPresets:n,presets:c,slug:a}=e;return Object(s.createElement)("div",{className:"ui-body-sidebar narrow"},Object(s.createElement)(g,{title:Object(u.__)("Presets",a)},c.map(e=>Object(s.createElement)(b,{name:e,id:e,checked:-1<n.indexOf(e),callback:()=>t(e)}))))}function w(e){const{presets:t,getList:n}=e;return Object(s.createElement)("div",null,Object(s.createElement)("select",null,t.map((e,t)=>{if(!(5<t))return Object(s.createElement)("option",null,e," (",t+1,")")})))}function _(e){const{presets:t,className:n,setParam:c,params:a,styleName:l}=e,r=a.navStyle&&n===a.navStyle?" selected":"";return Object(s.createElement)("div",{className:"plugin-groups nav-settings"+r,onClick:()=>{c("navStyle",n)}},Object(s.createElement)("label",null,l),"groups-dropdown"===n&&Object(s.createElement)(w,e),"groups-dropdown"!==n&&Object(s.createElement)("ul",{className:n},t.map((e,t)=>{if(!(5<t))return Object(s.createElement)(s.Fragment,null,Object(s.createElement)("li",null,Object(s.createElement)("a",{className:0===t?"current":""},e,Object(s.createElement)("span",{className:"count"}," (",t+1,")"))))})))}function x(e){const{params:t,setParam:n}=e;return Object(s.createElement)("div",{className:"ui-body"},Object(s.createElement)("div",{className:"ui-body-sidebar"},Object(s.createElement)(g,{title:"Settings"},Object(s.createElement)(b,{name:Object(u.__)("Use Legacy status based grouping",e.slug),checked:t.legacyGrouping,callback:e=>n("legacyGrouping",e.target.checked)}),Object(s.createElement)(b,{name:Object(u.__)("Enable admin menu",e.slug),checked:t.menuGroups,callback:e=>n("menuGroups",e.target.checked)}))),!t.legacyGrouping&&Object(s.createElement)("div",{className:"ui-body-sidebar full"},Object(s.createElement)(g,{title:Object(u.__)("Navigation style",e.slug)},Object(s.createElement)(_,a()({styleName:Object(u.__)("Legacy",e.slug),className:"subsubsub"},e)),Object(s.createElement)(_,a()({styleName:Object(u.__)("Modern",e.slug),className:"groups-modern"},e)),Object(s.createElement)(_,a()({styleName:Object(u.__)("Dropdown",e.slug),className:"groups-dropdown"},e)))))}function S(e){const{params:t,setSiteAccess:n}=e,c=e.sites.map(e=>parseInt(e.blog_id));return Object(s.createElement)("div",{className:"ui-body"},Object(s.createElement)("div",{className:"ui-body-sidebar"},Object(s.createElement)(g,{title:"Sites with full access"},Object(s.createElement)(b,{name:Object(u.__)("Select All"),bold:!0,callback:e=>n(c,e.target.checked),className:"list-control",checked:e.sites.length===e.sitesEnabled.length}),e.sites.map(t=>{const c=parseInt(t.blog_id);return Object(s.createElement)(b,{name:t.domain,checked:e.mainSite===c||-1<e.sitesEnabled.indexOf(c),disabled:e.mainSite===c,callback:e=>n([c],e.target.checked)},e.mainSite===c&&Object(s.createElement)("span",null,Object(u.__)("Main Site",e.slug)))}))))}function P(e){const[t,n]=r.a.useState(e),[c,l]=r.a.useState(1),o=e=>{window.localStorage.setItem("_plgUnsaved",!0),e.groups&&e.groups.constructor===Array&&(e.groups={...e.groups}),n(e)},i=()=>({...t}),d=e=>{o({...t,...e})},m=e=>{g([e])},g=(e,t)=>{const n=i();e.forEach(e=>{if(null===e)return;const c=void 0!==t?!t:n.groups[e].selected;n.groups[e].selected=!c,c&&(delete n.groups[e].open,delete n.groups[e].edit,delete n.groups[e].focus),n.activeGroup=e}),o(n)},b=(e,t)=>{const n=i();e.forEach(e=>{n.groups[e].open=t}),d(n)},O=(e,t,n)=>{const c=i();n||c.groups[e].prevName?n&&(t=c.groups[e].prevName?c.groups[e].prevName:c.groups[e].name,delete c.groups[e].prevName,delete c.groups[e].edit,delete c.groups[e].selected,delete c.groups[e].open):c.groups[e].prevName=c.groups[e].name,c.groups[e].name=t,o(c)},j=(e,n)=>{const c=i();n&&!confirm(Object(u._n)("Delete the selected group?","Delete the selected groups",e.length,t.slug))||(e.forEach(e=>{delete c.groups[e]}),o(c))},E=e=>{j([e])},h=e=>{const t="pgxxxxx".replace(/x/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})),n={id:t,name:e,plugins:[],keywords:[],temp:!0,selected:!0,edit:!0,focus:!0},c=i();c.groups||(c.groups={}),c.groups[t]=n,o(c)},f=(e,n)=>{const c=i();n.map(n=>{const a=t.groups[e].plugins.indexOf(n);-1<a&&c.groups[e].plugins.splice(a,1)}),o(c)},v=()=>{const e=i(),{groups:n,selectedPresets:c,params:a,sitesEnabled:s,siteID:l}=e,r=JSON.stringify({groups:n,selectedPresets:c,params:a,sitesEnabled:s,siteID:l});e.saving=!0,fetch(t.saveURL,{method:"POST",headers:{"Content-Type":"application/json","X-WP-Nonce":t.restNonce},body:r}).then(e=>e.json()).then(n=>{e.saving=!1,o(t),window.localStorage.removeItem("_plgUnsaved")}),o(e)},w=e=>{const n=i();let c=!1;e.forEach(e=>{n.groups[e].edit&&(e=>0<t.groups[e].name.replace(/ /g,"").length)(e)?(delete n.groups[e].edit,n.groups[e].open||delete n.groups[e].selected,delete n.groups[e].focus,delete n.groups[e].temp,delete n.groups[e].prevName):(n.groups[e].edit=!0,c||(n.groups[e].focus=!0,c=!0))}),o(n),P()},_=e=>{w([e])},P=()=>{const e=I();if(e.length){const t=document.querySelector("[data-edit="+e.shift()+"]");t&&t.focus()}},G=(e,t)=>{const n=A(),c=n.indexOf(e),a="n"===t?c+1:c-1;let s=null;return n[a]&&(s=n[a]),s!==e?s:null},C=e=>{const n=[];return Object.keys(t.groups).forEach(c=>{t.groups[c][e]&&n.push(c)}),n},D=()=>C("selected"),I=()=>C("edit"),L=e=>{if("ArrowRight"===e.key)b(D(),!0);else if("ArrowLeft"===e.key)b(D(),!1);else if("ArrowUp"===e.key)e.preventDefault(),e.shiftKey||g(A(),!1),m(G(t.activeGroup,"p"));else if("ArrowDown"===e.key)e.preventDefault(),e.shiftKey||g(A(),!1),m(G(t.activeGroup,"n"));else if("Enter"===e.key&&e.target.dataset.edit)_(e.target.dataset.edit);else if("Enter"===e.key)e.stopPropagation(),e.preventDefault(),w(D());else if("/"===e.key)e.preventDefault(),e.stopPropagation(),h("");else if("Escape"===e.key){const n=e.path[0].dataset.edit;t.groups[n]&&((e=>!!t.groups[e].temp)(n)?E(n):(O(n,"",!0),P()))}else if("Delete"===e.key){const e=D();e.length&&j(e,!0)}else"s"===e.key&&e.metaKey&&(e.preventDefault(),v())},A=()=>t.groups?Object.keys(t.groups):[];r.a.useEffect(()=>(window.addEventListener("keydown",L),()=>{window.removeEventListener("keydown",L)}));const F={setConfig:o,selectGroup:m,createGroup:h,deleteGroup:E,deleteGroups:j,changeName:O,handleSave:v,editGroup:_,getList:A,addPlugins:(e,n)=>{if(t.groups[e]){const c=i();n.forEach(n=>{-1===t.groups[e].plugins.indexOf(n)&&c.groups[e].plugins.push(n)}),o(c)}},addKeyword:(e,t)=>{const n=i();n.groups[e].keywords.push(t),o(n)},removeKeyword:(e,t)=>{const n=i(),c=n.groups[e].keywords.indexOf(t);n.groups[e].keywords.splice(c,1),o(n)},removePlugin:(e,t)=>{f(e,[t])},openGroup:e=>{if(t.groups[e]){const t=i();t.groups[e].open=!t.groups[e].open,t.groups[e].selected=!0,t.activeGroup=e,d(t)}},selectGroups:g,getSelected:D,handleExport:()=>{const e=JSON.stringify(new Date).replace(/"/g,"-").replace(/:/g,"-").split(".")[0],n=new Blob([JSON.stringify(t.groups)],{type:"application/json"}),c=URL.createObjectURL(n),a=document.createElement("a");a.href=c,a.download="plugin-groups-export"+e+".json",a.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))},handleImport:e=>{const t=new FileReader;t.addEventListener("loadend",e=>{let t=JSON.parse(e.target.result);if(t){t["plugin-groups-setup"]&&(t=(e=>{const t={};return Object.keys(e.group).map(n=>{const c=e.group[n];t[n]={id:n,name:c.config.group_name,plugins:c.config.plugins?c.config.plugins:[],keywords:c.config.keywords.length?c.config.keywords.split(" "):[]}}),t})(t));const e=i();e.groups=t,o(e)}}),t.readAsText(e.target.files[0])},togglePreset:e=>{const t=i();t.selectedPresets||(t.selectedPresets=[]);const n=t.selectedPresets.indexOf(e);-1===n?t.selectedPresets.push(e):t.selectedPresets.splice(n,1),o(t)},removePlugins:f,navTab:e=>{l(e)},tab:c,setParam:(e,t)=>{const n=i();n.params[e]||(n.params[e]=null),n.params[e]=t,o(n)},setSiteAccess:(e,c)=>{const a=i();e.map(e=>{const n=t.sitesEnabled.indexOf(e);e!==t.mainSite&&(!0===c&&-1===n?a.sitesEnabled.push(e):!1===c&&-1<n&&a.sitesEnabled.splice(n,1))}),n(a)}};return Object(s.createElement)("div",{className:t.slug},1===c&&Object(s.createElement)(s.Fragment,null,Object(s.createElement)(p,a()({},F,t)),Object(s.createElement)("div",{className:"ui-body"},Object(s.createElement)(k,a()({},t,F)),Object(s.createElement)(y,a()({},t,F)),Object(s.createElement)(N,a()({},t,F)))),2===c&&Object(s.createElement)(s.Fragment,null,Object(s.createElement)(p,a()({},F,t)),Object(s.createElement)(x,a()({},F,t))),3===c&&Object(s.createElement)(s.Fragment,null,Object(s.createElement)(p,a()({},F,t)),Object(s.createElement)(S,a()({},F,t))),0===c&&Object(s.createElement)(s.Fragment,null,Object(s.createElement)(p,a()({},F,t))))}var G={init(e){i.a.render(Object(s.createElement)(P,e),document.getElementById("plg-app"))}};n(4);const C={init(){window.localStorage.removeItem("_plgUnsaved"),plgData.groups||(plgData.groups={}),plgData.selectedPresets||(plgData.selectedPresets=[]),plgData.activeGroup=!1,G.init(plgData)}};window.addEventListener("load",()=>C.init()),window.onbeforeunload=()=>{if(window.localStorage.getItem("_plgUnsaved"))return!1}}]);