(self.webpackChunkactividad_crud_router=self.webpackChunkactividad_crud_router||[]).push([[542],{542:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>p});var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row justify-content-center mb-5"},[r("div",{staticClass:"col-md-9"},[r("h3",{staticClass:"text-center mb-3"},[t._v("\n      Editar Articulo con ID: "+t._s(t.$route.params.id)+"\n    ")]),t._v(" "),r("div",{staticClass:"card card-body"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"nombre"}},[t._v("Nombre:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.article.name,expression:"article.name",modifiers:{trim:!0}}],staticClass:"form-control text-dark",attrs:{type:"text",id:"nombre",required:""},domProps:{value:t.article.name},on:{input:function(e){e.target.composing||t.$set(t.article,"name",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"descripcion"}},[t._v("Descripción:")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.article.description,expression:"article.description",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"descripcion",name:"descripcion",rows:"4"},domProps:{value:t.article.description},on:{input:function(e){e.target.composing||t.$set(t.article,"description",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"precio"}},[t._v("Preció:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.price,expression:"article.price"}],staticClass:"form-control",attrs:{type:"number",id:"precio",required:""},domProps:{value:t.article.price},on:{input:function(e){e.target.composing||t.$set(t.article,"price",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group mb-4"},[r("button",{staticClass:"btn btn-info btn-block",attrs:{disabled:t.disabledButton}},[t._v("\n            Actualizar\n            "),r("i",{staticClass:"bi bi-cursor-fill"})])])])])])])};i._withStripped=!0;var a=r(757),n=r.n(a),c=r(926),s=r.n(c),o=r(455),l=r.n(o),u="/api/articles";const d={name:"Edit",data:function(){return{id:this.$route.params.id,article:{name:"",description:"",price:null}}},methods:{fetchDataById:function(){var t=this;return s()(n().mark((function e(){var r,i;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"/").concat(t.id));case 3:return r=e.sent,e.next=6,r.json();case 6:i=e.sent,t.article=i[0],e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},submitForm:function(){var t=this;return s()(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"/").concat(t.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.article)});case 3:t.$router.push({name:"view"}),l().fire("Actualizado!","Articulo actualizado al stock","success"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},created:function(){this.fetchDataById()},computed:{disabledButton:function(){return""===this.article.name.trim()||""===this.article.description.trim()}}};var m=(0,r(900).Z)(d,i,[],!1,null,null,null);m.options.__file="src/Client/View/Edit.vue";const p=m.exports}}]);