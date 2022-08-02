(()=>{"use strict";var e,n,t,r={5496:(e,n,t)=>{var r={};t.r(r),t.d(r,{checkUserIsConnected:()=>q,default:()=>X,disconnectUser:()=>Y,fetchUserInfoDataIfNeeded:()=>$,logUserIfNeeded:()=>K});var o=t(5893),i=t(3935),a=t(523),s=t.n(a),c=t(1260),l=t(7294),u=t(3727),d=t(5977),f=t(7974),p=t(4910),h=t(7779),v=t(8500),g=t(7531),y=t(3386),b=t(6734),m=t(3894),w=t(4500),j=t(9669),x=t.n(j),S=t(232);const k=Object.freeze({DEV_MODE:!0,api:{fakeEndPoint:"api/somewhere",users:"api/someusersapi"},sw:{path:"public/assets/sw.js"}}),O=JSON.parse('{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkZW1vIiwiaWF0IjoxNTAyMzA3MzU0LCJleHAiOjE3MjMyMzIxNTQsImF1ZCI6ImRlbW8tZGVtbyIsInN1YiI6ImRlbW8iLCJHaXZlbk5hbWUiOiJKb2huIiwiU3VybmFtZSI6IkRvZSIsIkVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJSb2xlIjpbIlN1cGVyIGNvb2wgZGV2IiwibWFnaWMgbWFrZXIiXX0.6FjgLCypaqmRp4tDjg_idVKIzQw16e-z_rjA3R94IqQ","user":{"id":111,"login":"john.doe@fake.mail","firstname":"John","lastname":"Doe","isAdmin":true}}');t(9575);var I=function(){return window.location.origin?window.location.origin:"".concat(window.location.protocol,"//").concat(window.location.hostname).concat(window.location.port?":"+window.location.port:"")},A=t(6489),E=t.n(A),T=t(2699),M="token",_="userInfo",C=["localStorage","sessionStorage"],P=JSON.parse,D=JSON.stringify,N={getToken:function(e,n){return void 0===e&&(e=C[0]),void 0===n&&(n=M),e===C[0]?localStorage&&localStorage.getItem(n)||null:e===C[1]&&sessionStorage&&sessionStorage.getItem(n)||null},setToken:function(e,n,t){void 0===e&&(e=""),void 0===n&&(n=C[0]),void 0===t&&(t=M),!e||e.length<=0||(n===C[0]&&localStorage?localStorage.setItem(t,e):n===C[1]&&sessionStorage&&sessionStorage.setItem(t,e))},isAuthenticated:function(e,n){return void 0===e&&(e=C[0]),void 0===n&&(n=M),e===C[0]?!(!localStorage||!localStorage.getItem(n)):e===C[1]&&!(!sessionStorage||!sessionStorage.getItem(n))},clearToken:function(e,n){return void 0===e&&(e=C[0]),void 0===n&&(n=M),localStorage&&localStorage[n]?(localStorage.removeItem(n),!0):!(!sessionStorage||!sessionStorage[n])&&(sessionStorage.removeItem(n),!0)},getTokenExpirationDate:function(e){if(!e)return new Date(0);var n=E()(e);return n.exp?new Date(1e3*n.exp):new Date(0)},isExpiredToken:function(e){var n=this.getTokenExpirationDate(e),t=new Date;return(0,T.Z)(t,n)},getUserInfo:function(e,n){if(void 0===e&&(e=C[0]),void 0===n&&(n=_),e===C[0])try{return window&&localStorage&&P(localStorage.getItem(n)||"")||null}catch(e){return null}if(e===C[1])try{return window&&sessionStorage&&P(sessionStorage.getItem(n)||"")||null}catch(e){return null}return null},setUserInfo:function(e,n,t){void 0===e&&(e=""),void 0===n&&(n=C[0]),void 0===t&&(t=_),!e||e.length<=0||(n===C[0]&&localStorage?localStorage.setItem(t,D(e)):n===C[1]&&sessionStorage&&sessionStorage.setItem(t,D(e)))},clearUserInfo:function(e){void 0===e&&(e=_),localStorage&&localStorage[e]?localStorage.removeItem(e):sessionStorage&&sessionStorage[e]&&sessionStorage.removeItem(e)},clearAllAppStorage:function(){localStorage?localStorage.clear():sessionStorage&&sessionStorage.clear()}};const Z=N;var R=function(){return R=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},R.apply(this,arguments)},F=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}c((r=r.apply(e,n||[])).next())}))},L=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},U="REQUEST_USER_INFOS_DATA",H="RECEIVED_USER_INFOS_DATA",W="ERROR_USER_INFOS_DATA",J="REQUEST_LOG_USER",z="RECEIVED_LOG_USER",V="ERROR_LOG_USER",B="CHECK_IF_USER_IS_AUTHENTICATED",G={isFetching:!1,actionTime:"",isLogging:!1,id:"",login:"",firstname:"",lastname:"",token:"",isAuthenticated:!1};function X(e,n){var t,r,o,i;switch(void 0===e&&(e=G),n.type){case B:var a=n.isAuthenticated,s=void 0!==a&&a,c=n.token,l=void 0===c?"":c,u=n.user,d=void 0===u?{}:u;return R(R({},e),{isAuthenticated:s,token:l,id:null!==(t=null==d?void 0:d.id)&&void 0!==t?t:"",login:null!==(r=null==d?void 0:d.login)&&void 0!==r?r:"",firstname:null!==(o=null==d?void 0:d.firstname)&&void 0!==o?o:"",lastname:null!==(i=null==d?void 0:d.lastname)&&void 0!==i?i:""});case"DISCONNECT_USER":return R(R({},e),{isAuthenticated:!1,token:G.token,id:G.id,login:G.login,firstname:G.firstname,lastname:G.lastname});case J:return R(R({},e),{isLogging:!0});case z:var f=n.data,p=f.token,h=(l=void 0===p?"":p,f.id),v=void 0===h?"":h,g=f.login,y=void 0===g?"":g,b=f.firstname,m=void 0===b?"":b,w=f.lastname,j=void 0===w?"":w;return R(R({},e),{isAuthenticated:!0,token:l,id:v,login:y,firstname:m,lastname:j,isLogging:!1});case V:return R(R({},e),{isAuthenticated:!1,isLogging:!1});case U:return R(R({},e),{isFetching:!0});case H:var x=n.payload.data.userInfos,S=void 0===x?{id:"",login:"",firstname:"",lastname:""}:x;return R(R({},e),{isFetching:!1,id:S.id,login:S.login,firstname:S.firstname,lastname:S.lastname});case W:return R(R({},e),{isFetching:!1});default:return e}}function Y(){return Z.clearAllAppStorage(),{type:"DISCONNECT_USER"}}function q(){return function(e){var n,t=Z.getToken(),r=Z.getUserInfo(),o=Z.isExpiredToken(t),i=!(!t||(n=r,!(null==n?void 0:n.id)))&&!o,a=(0,S.Z)(new Date,"dd/MM/yyyy HH:MM");return e(R(R({type:B,actionTime:a,token:t},r),{isAuthenticated:i})),R(R({token:t},r),{isAuthenticated:i})}}function Q(){var e=O;return Promise.resolve(e)}function K(e,n){return function(t,r){var o=r();if(function(e,n){var t=e.userAuth,r=t.isLogging,o=t.login;if(!o||o!==n)return!0;return!r}(o,e))return t(function(e,n){var t=this;return function(r){return F(t,void 0,void 0,(function(){var t,o,i,a,s;return L(this,(function(c){switch(c.label){case 0:return c.trys.push([0,4,,5]),a=(0,S.Z)(new Date,"dd/MM/yyyy HH:MM"),r({type:J,actionTime:a,login:e,password:n}),a=(0,S.Z)(new Date,"dd/MM/yyyy HH:MM"),k.DEV_MODE?[4,Q()]:[3,2];case 1:return t=c.sent().user,r({type:z,actionTime:a,data:t}),[2,t];case 2:return[4,x().request({method:"post",url:"".concat(I(),"/").concat(e),withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json","Acces-Control-Allow-Origin":"*"},data:{login:e,password:n}})];case 3:return o=c.sent().data,a=(0,S.Z)(new Date,"dd/MM/yyyy HH:MM"),r({type:z,actionTime:a,data:o}),[2,o];case 4:return i=c.sent(),a=(0,S.Z)(new Date,"dd/MM/yyyy HH:MM"),r({type:V,actionTime:a,error:null!==(s=null==i?void 0:i.message)&&void 0!==s?s:"undefined error, no luck bro"}),[3,5];case 5:return[2]}}))}))}}(e,n));var i,a,s,c,l,u,d,f=(i=o.userAuth,a=i.id,s=i.login,c=i.firstname,l=i.lastname,u=i.token,d=i.isAuthenticated,{id:a,login:s,firstname:c,lastname:l,token:u,isAuthenticated:d});return Promise.resolve(R({},f))}}function $(e){return void 0===e&&(e=""),function(n,t){var r=t();return r.userAuth.isFetching?Promise.resolve(null):n(function(e){var n=this;return void 0===e&&(e=""),function(t){return F(n,void 0,void 0,(function(){var n,r,o,i;return L(this,(function(a){switch(a.label){case 0:return a.trys.push([0,4,,5]),i=(0,S.Z)(new Date,"dd/MM/yyyy HH:MM"),t({type:U,actionTime:i}),i=(0,S.Z)(new Date,"dd/MM/yyyy HH:MM"),k.DEV_MODE?[4,Q()]:[3,2];case 1:return n=a.sent().user,t({type:H,actionTime:i,data:n}),[2,n];case 2:return[4,x().request({method:"get",url:"".concat(I(),"/users/").concat(e),withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json","Acces-Control-Allow-Origin":"*",authorization:"Bearer ".concat(Z.getToken()||"")}})];case 3:return r=a.sent().data,i=(0,S.Z)(new Date,"dd/MM/yyyy HH:MM"),t({type:H,actionTime:i,data:r}),[2,r];case 4:return o=a.sent(),i=(0,S.Z)(new Date,"dd/MM/yyyy HH:MM"),t({type:W,actionTime:i,error:o}),[3,5];case 5:return[2]}}))}))}}(e))}}var ee=function(){return ee=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},ee.apply(this,arguments)},ne={userAuth:X};const te=(0,h.UY)(ee({},ne));(0,g.lX)(),(0,w.createLogger)({level:"info",collapsed:!0});var re=(0,v.Uo)((0,h.md)(m.Z)),oe={key:"root",storage:b.Z,blacklist:["router"]},ie=(0,y.OJ)(oe,te);function ae(e){var n=e.children;return function(e){var n=(0,l.useRef)(null);(0,l.useEffect)((function(){n.current=e}),[e]),(0,l.useEffect)((function(){n.current!==e&&(window&&window.scrollTo(0,0),n.current=e)}),[e])}((0,d.TH)()),(0,o.jsx)(l.Fragment,{children:n},void 0)}ae.displayName="ScrollToTop";const se=ae;var ce=(0,c.ZP)((function(){return Promise.all([t.e(216),t.e(923)]).then(t.bind(t,5923))}),{modules:["home"]}),le=(0,c.ZP)((function(){return Promise.all([t.e(216),t.e(249),t.e(624)]).then(t.bind(t,6624))}),{modules:["engineering"]}),ue=(0,c.ZP)((function(){return Promise.all([t.e(216),t.e(89)]).then(t.bind(t,6089))}),{modules:["research"]}),de=(0,c.ZP)((function(){return Promise.all([t.e(216),t.e(937)]).then(t.bind(t,3937))}),{modules:["pageNotFound"]}),fe=(0,c.ZP)((function(){return t.e(380).then(t.bind(t,9380))}),{modules:["art"]}),pe=(0,c.ZP)((function(){return Promise.all([t.e(249),t.e(360)]).then(t.bind(t,9360))}),{modules:["resume"]}),he=function(){return he=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},he.apply(this,arguments)};const ve=function(){return(0,o.jsxs)(d.rs,{children:[(0,o.jsx)(d.AW,he({exact:!0,path:"/jessica-shi"},{children:(0,o.jsx)(ce,{},void 0)}),void 0),(0,o.jsx)(d.AW,he({path:"/jessica-shi/engineering"},{children:(0,o.jsx)(le,{},void 0)}),void 0),(0,o.jsx)(d.AW,he({path:"/jessica-shi/research"},{children:(0,o.jsx)(ue,{},void 0)}),void 0),(0,o.jsx)(d.AW,he({path:"/jessica-shi/resume"},{children:(0,o.jsx)(pe,{},void 0)}),void 0),(0,o.jsx)(d.AW,he({path:"/jessica-shi/art"},{children:(0,o.jsx)(fe,{},void 0)}),void 0),(0,o.jsx)(d.AW,he({path:"*"},{children:(0,o.jsx)(de,{},void 0)}),void 0)]},void 0)};var ge=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};const ye=(0,p.vJ)(be||(be=ge(["\n  html, body {\n    margin: 0;\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"],["\n  html, body {\n    margin: 0;\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"])));var be,me=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}c((r=r.apply(e,n||[])).next())}))},we=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},je=k.sw.path;const xe=function(){var e=this;void 0!==typeof window&&"serviceWorker"in navigator&&window.addEventListener("load",(function(){return me(e,void 0,void 0,(function(){var e,n;return we(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,navigator.serviceWorker.register(je)];case 1:return e=t.sent(),console.log("SW registered: ",e),[3,3];case 2:return n=t.sent(),console.log("SW registration failed: ",n),[3,3];case 3:return[2]}}))}))}))};var Se=t(9544),ke=t(6992),Oe=t(4726),Ie=t(5614),Ae=t(627),Ee=t(7243),Te=t(3999),Me=t(8008),_e=function(){return _e=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},_e.apply(this,arguments)},Ce=t(7276);function Pe(e){e.brand;var n=e.navModel.rightLinks,t=(e.isAuthenticated,e.history),r=(e.disconnectUser,(0,l.useState)(!1)),i=r[0],a=r[1],s=function(e){return void 0===e&&(e="/"),function(n){null==n||n.preventDefault(),t.push(e)}};return(0,o.jsxs)(Se.Z,_e({color:"light",light:!0,expand:"lg"},{children:[(0,o.jsx)(ke.Z,_e({href:"/jessica-shi"},{children:(0,o.jsx)(Oe.Z,{src:Ce,style:{width:"100px"}},void 0)}),void 0),(0,o.jsx)(Ie.Z,{onClick:function(e){null==e||e.preventDefault(),a(!i)}},void 0),(0,o.jsx)(Ae.Z,_e({isOpen:i,navbar:!0},{children:(0,o.jsx)(Ee.Z,_e({className:"ml-auto",navbar:!0},{children:n.map((function(e,n){var t=e.label,r=e.link;return(0,o.jsx)(Te.Z,{children:(0,o.jsx)(Me.Z,_e({href:"#",onClick:s(r)},{children:t}),void 0)},"".concat(n))}))}),void 0)}),void 0)]}),void 0)}Pe.displayName="NavigationBar";const De=Pe;var Ne=t(573),Ze=function(e){return e.userAuth};var Re=function(){return Re=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},Re.apply(this,arguments)},Fe=(0,Ne.P1)(Ze,(function(e){return e.isAuthenticated})),Le=(0,Ne.P1)(Ze,(function(e){return e.token}));const Ue=(0,h.qC)((0,f.$j)((function(e){return{token:Le(e),isAuthenticated:Fe(e)}}),(function(e){return(0,h.DE)(Re({},r),e)})),d.EN)(De);var He=t(4184),We=t.n(He),Je=function(){return Je=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},Je.apply(this,arguments)},ze=function(e){var n=e.color,t=void 0===n?"#F1F1F1":n;return(0,o.jsx)("svg",Je({width:"24px",height:"24px",viewBox:"0 0 512 512",fill:"".concat(t)},{children:(0,o.jsx)("path",{d:"M256,213.7L256,213.7L256,213.7l174.2,167.2c4.3,4.2,11.4,4.1,15.8-0.2l30.6-29.9c4.4-4.3,4.5-11.3,0.2-15.5L264.1,131.1\n      c-2.2-2.2-5.2-3.2-8.1-3c-3-0.1-5.9,0.9-8.1,3L35.2,335.3c-4.3,4.2-4.2,11.2,0.2,15.5L66,380.7c4.4,4.3,11.5,4.4,15.8,0.2L256,213.7z"},void 0)}),void 0)};ze.displayName="UpIcon";const Ve=ze;var Be=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};const Ge=p.ZP.div(Xe||(Xe=Be(["\n  margin-right: 10px;\n"],["\n  margin-right: 10px;\n"])));var Xe,Ye=function(){return Ye=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},Ye.apply(this,arguments)},qe="-10px",Qe={position:"fixed",right:qe,left:"",bottom:"40px",width:"100px",zIndex:10,opacity:.5,backgroundColor:"#4A4A4A"};var Ke=function(e){var n=e.onClick,t=e.position,r=void 0===t?"bottom-right":t,i=e.children,a=e.motionStyle,s=function(e,n){void 0===e&&(e="bottom-right"),void 0===n&&(n=Qe);var t=Ye({},n);switch(e){case"bottom-right":return t.right=qe,t.left="",t;case"bottom-left":return t.right="",t.left=qe,t;default:return n}}(r,Ye(Ye({},a),Qe));return(0,o.jsxs)("button",Ye({style:s,className:We()({btn:!0}),onClick:n},{children:[!i&&(0,o.jsx)(Ge,{children:(0,o.jsx)(Ve,{color:"#F1F1F1"},void 0)},void 0),!!i&&i]}),void 0)};Ke.displayName="BackToTopButton";const $e=Ke;var en=t(7727),nn=function(){return nn=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},nn.apply(this,arguments)};function tn(e){var n=e.minScrollY,t=void 0===n?120:n,r=e.onScrollDone,i=(0,l.useState)(!1),a=i[0],s=i[1],c=(0,l.useState)(0),u=c[0],d=c[1],f=(0,l.useState)(!1),p=f[0],h=f[1],v=function(){if(window){var e=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;p||window.requestAnimationFrame((function(){if(u!==e){var n=e>=t;d(e),s(n)}h(!1)})),h(!0)}},g=function(e){e&&e.preventDefault(),window&&u&&u>t&&(window.scroll({top:0,left:0,behavior:"smooth"}),"function"==typeof r&&r())};return(0,l.useEffect)((function(){return"undefined"!=typeof window&&window.addEventListener("scroll",v),function(){"undefined"!=typeof window&&window.removeEventListener("scroll",v)}})),(0,o.jsx)(en.y_,nn({style:{x:(0,en.ST)(a?0:120,en.um.stiff)}},{children:function(e){var n=e.x;return(0,o.jsx)($e,{position:"bottom-right",onClick:g,motionStyle:{WebkitTransform:"translate3d(".concat(n,"px, 0, 0)"),transform:"translate3d(".concat(n,"px, 0, 0)")}},void 0)}}),void 0)}tn.displayName="BackToTop";const rn=tn;const on=Object.freeze({brand:"Jessica Shi",leftLinks:[],rightLinks:[{label:"Home",link:"/jessica-shi"},{label:"Resume",link:"/jessica-shi/resume",view:"resume",isRouteBtn:!0},{label:"Engineering",link:"/jessica-shi/engineering",view:"engineering",isRouteBtn:!0},{label:"Research",link:"/jessica-shi/research",view:"research",isRouteBtn:!0},{label:"Art",link:"/jessica-shi/art",view:"art",isRouteBtn:!0}]});var an=function(){return an=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},an.apply(this,arguments)};const sn=(0,d.EN)((function(e){var n=e.children;(0,l.useEffect)((function(){void 0!==typeof window&&xe()}),[]);var t=(0,l.useCallback)((function(){}),[]),r=(0,l.useCallback)((function(){}),[]);return(0,o.jsx)(l.Fragment,{children:(0,o.jsxs)("div",an({id:"appContainer"},{children:[(0,o.jsx)(Ue,{brand:on.brand,navModel:on,leftNavItemClick:t,rightNavItemClick:r},void 0),(0,o.jsx)("div",an({className:"container-fluid"},{children:n}),void 0),(0,o.jsx)(rn,{minScrollY:40,scrollTo:"appContainer"},void 0)]}),void 0)},void 0)}));var cn,ln=(cn=function(e,n){return cn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},cn(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}cn(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),un=function(){return un=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},un.apply(this,arguments)},dn=function(e){void 0===e&&(e={});var n=(0,h.MT)(ie,e,re);return{store:n,persistor:(0,y.p5)(n)}}({}).store;const fn=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return ln(n,e),n.prototype.componentDidMount=function(){xe()},n.prototype.componentDidCatch=function(e,n){console.log("App error: ",e),console.log("App error info: ",n)},n.prototype.render=function(){return(0,o.jsx)(l.StrictMode,{children:(0,o.jsx)(f.zt,un({store:dn},{children:(0,o.jsx)(p.f6,un({theme:{}},{children:(0,o.jsxs)(u.VK,{children:[(0,o.jsx)(se,{children:(0,o.jsx)(l.Fragment,{children:(0,o.jsx)(d.rs,{children:(0,o.jsx)(d.AW,un({path:"*"},{children:(0,o.jsx)(sn,{children:(0,o.jsx)(ve,{},void 0)},void 0)}),void 0)},void 0)},void 0)},void 0),(0,o.jsx)(ye,{},void 0)]},void 0)}),void 0)}),void 0)},void 0)},n}(l.Component);var pn,hn=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}c((r=r.apply(e,n||[])).next())}))},vn=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},gn=document.getElementById("root");s().polyfill(),window.__forceSmoothScrollPolyfill__=!0,window.snapSaveState=function(){return(0,c.y0)()},hn(void 0,void 0,void 0,(function(){return vn(this,(function(e){return console.log('You have async support if you read this instead of "ReferenceError: regeneratorRuntime is not defined" error.'),[2]}))})),pn=fn,gn&&gn.hasChildNodes()?(0,c.P9)().then((function(){return(0,i.hydrate)((0,o.jsx)(pn,{},void 0),gn)})):(0,i.render)((0,o.jsx)(pn,{},void 0),gn)},7276:(e,n,t)=>{e.exports=t.p+"assets/9cfc65f09d61da6dc656.png"}},o={};function i(e){var n=o[e];if(void 0!==n)return n.exports;var t=o[e]={exports:{}};return r[e].call(t.exports,t,t.exports,i),t.exports}i.m=r,e=[],i.O=(n,t,r,o)=>{if(!t){var a=1/0;for(u=0;u<e.length;u++){for(var[t,r,o]=e[u],s=!0,c=0;c<t.length;c++)(!1&o||a>=o)&&Object.keys(i.O).every((e=>i.O[e](t[c])))?t.splice(c--,1):(s=!1,o<a&&(a=o));if(s){e.splice(u--,1);var l=r();void 0!==l&&(n=l)}}return n}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[t,r,o]},i.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return i.d(n,{a:n}),n},i.d=(e,n)=>{for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((n,t)=>(i.f[t](e,n),n)),[])),i.u=e=>e+"."+{89:"c7a3955930009990cc92",249:"5952cacb8433a1e4a5cf",360:"7b4b725684a63fcd2189",380:"d18249c78de4e11bba07",624:"0d0ec4528f7bd06d5e10",923:"025606ed535a8ab3f6f2",937:"b672007c04b4bf8ddb6d"}[e]+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),n={},t="react-redux-bootstrap-webpack-starter-front:",i.l=(e,r,o,a)=>{if(n[e])n[e].push(r);else{var s,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==t+o){s=d;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",t+o),s.src=e),n[e]=[r];var f=(t,r)=>{s.onerror=s.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/jessica-shi/assets/",(()=>{var e={143:0};i.f.j=(n,t)=>{var r=i.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(((t,o)=>r=e[n]=[t,o]));t.push(r[2]=o);var a=i.p+i.u(n),s=new Error;i.l(a,(t=>{if(i.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+n+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,r[1](s)}}),"chunk-"+n,n)}},i.O.j=n=>0===e[n];var n=(n,t)=>{var r,o,[a,s,c]=t,l=0;if(a.some((n=>0!==e[n]))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(c)var u=c(i)}for(n&&n(t);l<a.length;l++)o=a[l],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(u)},t=self.webpackChunkreact_redux_bootstrap_webpack_starter_front=self.webpackChunkreact_redux_bootstrap_webpack_starter_front||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var a=i.O(void 0,[216],(()=>i(5496)));a=i.O(a)})();