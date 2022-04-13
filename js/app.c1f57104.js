(function(){"use strict";var e={9576:function(e,t,a){var n=a(8935),r=a(5822),o=a.n(r),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("HeaderComponent",{attrs:{user:e.user}}),a("MainComponent",{attrs:{user:e.user,beer:e.beer,changingBeerVarietyApp:e.changingBeerVarietyApp,onClickBeerData:e.onClickBeerData}}),!0===e.openBeerDataPopup?[a("BeerDataPopup",{attrs:{beer:e.beer,onCloseBeerPopup:e.onCloseBeerPopup}})]:e._e()],2)},s=[],u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"header"},[a("NavRouter"),a("AvatarBlock",{attrs:{user:e.user,name:e.name}})],1)},c=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("md-avatar",{staticClass:"md-primary avatar",class:e.name},[a("img",{staticClass:"avatar-img",attrs:{src:e.user.avatar,alt:"Avatar"}})])},p=[],d={name:"AvatarBlock",props:{user:{type:Object,default:()=>({})},name:String}},m=d,f=a(1001),A=(0,f.Z)(m,l,p,!1,null,"b66e69ba",null),b=A.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("md-tabs",[a("md-tab",{attrs:{id:"tab-personal-account","md-label":"Личный кабинет"}})],1)},h=[],B={name:"NavRouter"},v=B,y=(0,f.Z)(v,g,h,!1,null,null,null),C=y.exports,_={name:"HeaderComponent",components:{AvatarBlock:b,NavRouter:C},props:{user:{type:Object,default:()=>({})}},data:()=>({name:"header-avatar"})},D=_,k=(0,f.Z)(D,u,c,!1,null,"c37ba254",null),E=k.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"main"},[a("PersonalAccount",{attrs:{user:e.user,beer:e.beer,onClickBeerData:e.onClickBeerData,changingBeerVarietyApp:e.changingBeerVarietyApp}})],1)},O=[],P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"personal-account"},[a("div",{staticClass:"personal-account__container"},[a("AvatarBlock",{attrs:{user:e.user,name:e.name}}),a("RecommendedBeer",{attrs:{beer:e.beer,changingBeerVarietyApp:e.changingBeerVarietyApp,onClickBeerData:e.onClickBeerData}})],1),a("AboutUser",{attrs:{user:e.user}})],1)},x=[],j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"beer-container"},[n("h2",{staticClass:"title"},[e._v("Рекомендованное пиво:")]),n("div",{staticClass:"about-beer"},[n("p",[e._v(e._s(e.beer.name))]),n("md-button",{staticClass:"md-fab md-mini md-primary button-beer_about",on:{click:e.openBeerPopup}},[n("img",{attrs:{src:a(4707),alt:"Menu"}})])],1),n("md-button",{staticClass:"md-raised md-primary button-beer",on:{click:e.onClickButtonBeer}},[e._v(" Выбрать еще раз "),n("img",{attrs:{src:a(358),alt:"Menu"}})])],1)},V=[],I={name:"RecommendedBeer",props:{changingBeerVarietyApp:Function,onClickBeerData:Function,beer:{type:Object,default:()=>({})}},methods:{onClickButtonBeer(){this.changingBeerVarietyApp()},openBeerPopup(){this.onClickBeerData()}}},S=I,Q=(0,f.Z)(S,j,V,!1,null,"2cc76138",null),R=Q.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-data__box"},[a("InputData",{attrs:{name:"Имя",data:e.fullName,id:"name"}}),a("InputData",{attrs:{name:"Количество полных лет",data:e.fullYears(),id:"age"}}),a("InputData",{attrs:{name:"Должность",data:e.checkingEmployment,id:"employment"}})],1)},F=[],Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("md-field",[a("label",{attrs:{for:e.id+"_input"}},[e._v(e._s(e.name)+" "),a("md-input",{attrs:{type:"text",id:e.id+"_input",readonly:""},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}})],1)])},N=[],Y={name:"InputData",props:{name:String,data:[String,Number],id:String}},J=Y,T=(0,f.Z)(J,Z,N,!1,null,null,null),$=T.exports,K={name:"AboutUser",props:{user:{type:Object,default:()=>({})}},components:{InputData:$},data:()=>({name:"main-avatar"}),methods:{fullYears(){const e=new Date;if(void 0!==this.user.date_of_birth){const t=this.user.date_of_birth.slice(0,4),a=this.user.date_of_birth.slice(5,7),n=this.user.date_of_birth.slice(8,10);let r=e.getFullYear()-t;const o=e.getMonth()-a+1,i=e.getDate()-n;return o<0&&(r-=1),0===o?(i<0&&(r-=1),r):r}return""}},computed:{fullName(){return`${this.user.first_name||""} ${this.user.last_name||""}`},checkingEmployment(){return this.user.employment?this.user.employment.title:""}}},M=K,W=(0,f.Z)(M,U,F,!1,null,"1cfc3f8d",null),z=W.exports,L={name:"PersonalAccount",components:{AvatarBlock:b,RecommendedBeer:R,AboutUser:z},props:{changingBeerVarietyApp:Function,onClickBeerData:Function,user:{type:Object,default:()=>({})},beer:{type:Object,default:()=>({})}},data:()=>({name:"main-avatar"})},H=L,G=(0,f.Z)(H,P,x,!1,null,"795693e2",null),q=G.exports,X={name:"MainComponent",components:{PersonalAccount:q},props:{changingBeerVarietyApp:Function,onClickBeerData:Function,user:{type:Object,default:()=>({})},beer:{type:Object,default:()=>({})}}},ee=X,te=(0,f.Z)(ee,w,O,!1,null,"49e417cf",null),ae=te.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"popup-background"},[n("div",{staticClass:"popup-container"},[n("md-button",{staticClass:"md-fab md-mini md-primary button-close",on:{click:e.closePopup}},[n("img",{attrs:{src:a(9913),alt:"Close-icon"}})]),n("InputData",{attrs:{name:"Алкоголь",data:e.beer.alcohol,id:"alcohol"}}),n("InputData",{attrs:{name:"Blg",data:e.beer.blg,id:"blg"}}),n("InputData",{attrs:{name:"Бренд",data:e.beer.brand,id:"brand"}}),n("InputData",{attrs:{name:"Солод",data:e.beer.malts,id:"malts"}}),n("InputData",{attrs:{name:"Стиль",data:e.beer.style,id:"style"}}),n("InputData",{attrs:{name:"Дрожжи",data:e.beer.yeast,id:"yeast"}})],1)])},re=[],oe={name:"BeerDataPopup",components:{InputData:$},props:{beer:Object,onCloseBeerPopup:Function},methods:{closePopup(){this.onCloseBeerPopup()}}},ie=oe,se=(0,f.Z)(ie,ne,re,!1,null,"97613fd2",null),ue=se.exports;const ce={USER:"https://random-data-api.com/api/users/random_user",BEER:"https://random-data-api.com/api/beer/random_beer"};async function le(){let e={};try{e=(await fetch(ce.USER)).json()}catch(t){console.log(t)}return e}async function pe(){let e={};try{e=(await fetch(ce.BEER)).json()}catch(t){console.log(t)}return e}var de={name:"App",components:{HeaderComponent:E,MainComponent:ae,BeerDataPopup:ue},data:()=>({user:{},beer:{},openBeerDataPopup:!1}),methods:{async changingBeerVarietyApp(){this.beer=await pe()},onClickBeerData(){this.openBeerDataPopup=!0},onCloseBeerPopup(){this.openBeerDataPopup=!1}},async mounted(){this.user=await le(),this.beer=await pe()}},me=de,fe=(0,f.Z)(me,i,s,!1,null,null,null),Ae=fe.exports;n["default"].config.productionTip=!1,n["default"].use(o()),new n["default"]({render:e=>e(Ae)}).$mount("#app")},358:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAW0lEQVQ4y2NgGLTAg+Exw3888DFQBQp4hFc5CD5C1fCfCIhFQyUDDxAjK0IWwaKBF8jiRdGALEING0j2Awz+ZVgMhH+J17AYLLaYhhpIdtIIiTiSkzfJGWgQAQBAgRyk/fNDVwAAAABJRU5ErkJggg=="},9913:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAVUlEQVQ4y+WSuREAIAgEtwm6sP+MKixIAwPfUS6WEHZn+ODzSDi2ZQ0nnQWnkBfFyBT8LLTiqOyZq/LEZyiEj0oQ70oYlwWxJXFoca3y4eTXkJ/vm6g9L0LBODY4BgAAAABJRU5ErkJggg=="},4707:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAZ0lEQVQ4jc3TwQnAIBQD0IziHh3AdqqOKugatVYEwUJCtSCYXP+DeBBYNhYBifRUwNFzp8lFgdEkUgBNKthyWyCJBoKoSS3pAJyX3HTSDDA8ad4b0l/QPWkY+M9z/waH+EC1ATtWzQPDIBW1RxCPBAAAAABJRU5ErkJggg=="}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,r,o){if(!n){var i=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],o=e[l][2];for(var s=!0,u=0;u<n.length;u++)(!1&o||i>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[u])}))?n.splice(u--,1):(s=!1,o<i&&(i=o));if(s){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,r,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,i=n[0],s=n[1],u=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(u)var l=u(a)}for(t&&t(n);c<i.length;c++)o=i[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(l)},n=self["webpackChunkbeer_service"]=self["webpackChunkbeer_service"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(9576)}));n=a.O(n)})();
//# sourceMappingURL=app.c1f57104.js.map