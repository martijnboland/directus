(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b1afec54"],{"32cb":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"interface-repeater"},[i("draggable",{staticClass:"row-container",class:{dragging:e.dragging},attrs:{handle:".drag-handle"},on:{start:function(t){e.dragging=!0},end:e.endDrag},model:{value:e.rows,callback:function(t){e.rows=t},expression:"rows"}},e._l(e.rows,(function(t,n){return i("repeater-row",{key:t.__key,attrs:{row:t,fields:e.repeaterFields,inline:e.inline,template:e.options.template,duplicable:e.options.duplicable,open:e.open===n,placeholder:e.options.placeholder},on:{open:function(t){return e.toggleOpen(n)},input:function(t){return e.updateRow(n,t)},remove:function(t){return e.removeRow(n)},duplicate:function(t){return e.duplicateRow(n)}}})})),1),e.addButtonVisible?i("div",{staticClass:"add-new",on:{click:e.addRow}},[i("v-icon",{attrs:{name:"add",color:"--input-icon-color"}}),e._v(" "+e._s(e.options.createItemText)+" ")],1):e._e()],1)},r=[],o=(i("a4d3"),i("99af"),i("a623"),i("4de4"),i("4160"),i("caad"),i("d81d"),i("a434"),i("e439"),i("dbb4"),i("b64b"),i("07ac"),i("159b"),i("2909")),l=i("ade3"),a=i("8db2"),s=i.n(a),u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-sheet",{ref:"interfaceRoot",staticClass:"repeater-row"},[i("div",{staticClass:"header"},[i("div",{staticClass:"drag-handle"},[i("v-icon",{attrs:{name:"drag_handle"}})],1),i("div",{staticClass:"content",class:{"two-up":e.inline&&2===e.fields.length}},[e.inline?e._l(e.fields,(function(t){return i("v-ext-input",{key:t.field,attrs:{id:t.interface||"text-input",name:t.field,required:t.required,readonly:t.readonly,options:t.options,type:t.type,datatype:t.datatype,value:e.row[t.field],fields:e.fields,values:e.row,length:t.length},on:{input:function(i){return e.$emit("input",{field:t.field,value:i})}}})})):i("button",{class:e.showPlaceholder?"placeholder":"preview",attrs:{type:"button"},on:{click:function(t){return e.$emit("open")}}},[e._v(" "+e._s(e.showPlaceholder?e.placeholder:e.displayValue)+" ")])],2),e.duplicable?i("v-contextual-menu",{staticClass:"more-options",attrs:{placement:"bottom-end",options:e.rowOptions},on:{click:e.rowOptionsClicked}}):i("button",{attrs:{type:"button"},on:{click:function(t){return e.$emit("remove")}}},[i("v-icon",{staticClass:"remove",attrs:{name:"delete_outline"}})],1)],1),!1===e.inline?i("div",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],staticClass:"body"},[i("v-form",{attrs:{"full-width":"",fields:e.fields,values:e.row},on:{"stage-value":function(t){return e.$emit("input",t)}}})],1):e._e()])},c=[],d=i("1581"),p={name:"RepeaterRow",props:{row:{type:Object,required:!0},fields:{type:Array,required:!0},inline:{type:Boolean,default:!1},template:{type:String,default:null},duplicable:{type:Boolean,default:!1},open:{type:Boolean,default:!1},placeholder:{type:String,required:!0}},computed:{displayValue:function(){if(!this.template)return this.row[this.fields[0].field];var e=this.$helpers.micromustache.render(this.template,this.row);return e},showPlaceholder:function(){var e=this,t=[this.fields[0].field];this.template&&(t=Object(d["a"])(this.template));var i=t.every((function(t){var i;return null!==e.row[t]&&(null===(i=e.row[t])||void 0===i?void 0:i.length)>0}));return!1===i},rowOptions:function(){return[{text:this.$t("delete"),icon:"delete_outline"},{text:this.$t("duplicate"),icon:"control_point_duplicate"}]}},methods:{rowOptionsClicked:function(e){switch(e){case 0:this.$emit("remove");break;case 1:this.$emit("duplicate");break;default:}}}},f=p,h=(i("e0c6"),i("2877")),w=Object(h["a"])(f,u,c,!1,null,"212cf982",null),v=w.exports,y=i("8dee"),b=i.n(y),m=i("2ef0");function g(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function O(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?g(Object(i),!0).forEach((function(t){Object(l["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var j={name:"Repeater",components:{RepeaterRow:v},mixins:[s.a],data:function(){return{rows:[],dragging:!1,open:null}},computed:{inline:function(){return!(this.repeaterFields.length>2)&&(1===this.repeaterFields.length||!1!==["full","fill"].includes(this.width)&&this.repeaterFields.every((function(e){return"half"===e.width})))},addButtonVisible:function(){return!this.options.limit||0===this.options.limit||this.rows.length<this.options.limit},repeaterFields:function(){var e=this;return Array.isArray(this.options.fields)?this.options.fields:Object.keys(this.options.fields).map((function(t){return O({},e.options.fields[t],{field:t})}))}},created:function(){this.setRows()},methods:{addRow:function(){this.rows=[].concat(Object(o["a"])(this.rows),[this.getNewRow()]),this.open=this.rows.length-1,this.emitValue()},updateRow:function(e,t){var i=t.field,n=t.value,r=Object(m["clone"])(this.rows),o=r[e],a=O({},o,Object(l["a"])({},i,n));r[e]=a,this.rows=r,this.emitValue()},removeRow:function(e){var t=Object(m["clone"])(this.rows);t.splice(e,1),this.rows=t,this.emitValue()},duplicateRow:function(e){var t=Object(m["clone"])(this.rows),i=Object(m["clone"])(this.rows[e]);t.splice(e+1,0,i),this.rows=t,this.emitValue()},emitValue:function(){var e=Object(m["clone"])(this.rows).map((function(e){return delete e.__key,e}));if(0===e.length)return this.$emit("input",null);"object"===this.options.structure?this.$emit("input",Object(m["keyBy"])(e,this.options.structure_key)):this.$emit("input",e)},getNewRow:function(){var e={__key:b.a.generate()};return this.repeaterFields.forEach((function(t){e[t.field]=t.default})),e},setRows:function(){if(null!==this.value)if(Array.isArray(this.value))this.rows=this.value;else if("string"===typeof this.value)try{this.rows=JSON.parse(this.value)}catch(e){console.warn("Invalid JSON passed to repeater")}else this.rows=Object.values(this.value);else this.rows=[]},endDrag:function(){this.dragging=!1,this.emitValue()},toggleOpen:function(e){this.open===e?this.open=null:this.open=e}}},_=j,k=(i("f6aa"),Object(h["a"])(_,n,r,!1,null,"7ae5557a",null));t["default"]=k.exports},8202:function(e,t,i){},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},primaryKey:{type:[Number,String],default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(e){return["half","half-left","half-right","full","fill"].includes(e)}}}}},a623:function(e,t,i){"use strict";var n=i("23e7"),r=i("b727").every,o=i("a640"),l=i("ae40"),a=o("every"),s=l("every");n({target:"Array",proto:!0,forced:!a||!s},{every:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},db88:function(e,t,i){},e0c6:function(e,t,i){"use strict";var n=i("8202"),r=i.n(n);r.a},f6aa:function(e,t,i){"use strict";var n=i("db88"),r=i.n(n);r.a}}]);
//# sourceMappingURL=chunk-b1afec54.d0512c4a.js.map