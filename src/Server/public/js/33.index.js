(self.webpackChunkactividad_crud_router=self.webpackChunkactividad_crud_router||[]).push([[33],{33:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>d});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[t.loading?a("section",{staticClass:"d-flex justify-content-center text-center"},[t._m(0)]):t._e(),t._v(" "),t.articles.length?[a("table",{staticClass:"table table-hover"},[t._m(1),t._v(" "),a("tbody",t._l(t.articles,(function(e){var r=e.name,n=e.description,s=e.price,c=e.id;return a("tr",{key:c},[a("th",{attrs:{scope:"row"}},[t._v(t._s(c))]),t._v(" "),a("td",[t._v(t._s(r))]),t._v(" "),a("td",[t._v(t._s(n))]),t._v(" "),a("td",[t._v(t._s(s))]),t._v(" "),a("td",[a("router-link",{staticClass:"btn btn-info mb-1",attrs:{to:"/edit/"+c}},[a("svg",{staticClass:"bi bi-pencil-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"}})])]),t._v(" "),a("button",{staticClass:"btn btn-danger mb-1",on:{click:function(e){return t.handleDeleteArticle(c)}}},[a("svg",{staticClass:"bi bi-trash-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"}})])])],1)])})),0)])]:[a("h3",{staticClass:"text-center p-2 mt-3 text-capitalize"},[t._v("\n      El Inventario esta vació, empieza agregar\n    ")])]],2)};r._withStripped=!0;var n=a(757),s=a.n(n),c=a(926),i=a.n(c),l=a(455),o=a.n(l),u="/api/articles";const v={name:"List",data:function(){return{articles:[],loading:!1}},created:function(){this.fetchData()},methods:{handleDeleteArticle:function(t){var e=this;o().fire({title:"Eliminar",text:"¿Estas seguro en eliminar este artículo?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"Cancelar",confirmButtonText:"Si, eliminar!"}).then(function(){var a=i()(s().mark((function a(r){return s().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!r.isConfirmed){a.next=11;break}return o().fire("Eliminado!","Articulo eliminado del stock","success"),a.prev=2,a.next=5,fetch("".concat(u,"/").concat(t),{method:"DELETE"});case 5:e.articles=e.articles.filter((function(e){return e.id!==t})),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(2),console.error(a.t0);case 11:case"end":return a.stop()}}),a,null,[[2,8]])})));return function(t){return a.apply(this,arguments)}}())},fetchData:function(){var t=this;return i()(s().mark((function e(){var a,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,e.next=4,fetch(u);case 4:return a=e.sent,e.next=7,a.json();case 7:r=e.sent,t.articles=r,t.loading=!1,e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0),t.loading=!1;case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))()}}};var h=(0,a(900).Z)(v,r,[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spinner-border text-success",attrs:{role:"status"}},[a("span",{staticClass:"sr-only"},[t._v("Loading...")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"table-primary"},[a("th",{attrs:{scope:"col"}},[t._v("ID")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Nombre")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Descripción")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Preció")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Acciónes")])])])}],!1,null,null,null);h.options.__file="src/Client/View/List.vue";const d=h.exports}}]);