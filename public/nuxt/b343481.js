(window.webpackJsonp=window.webpackJsonp||[]).push([[9,16],{377:function(t,o,e){var content=e(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(18).default)("689f090d",content,!0,{sourceMap:!1})},379:function(t,o,e){"use strict";e(377)},380:function(t,o,e){var r=e(17)(!1);r.push([t.i,".button-add[data-v-5ca7899c]{background:#cc053e;border:none;color:#fff;font-size:1rem;border-radius:999px;padding:10px 20px;cursor:pointer}",""]),t.exports=r},381:function(t,o,e){"use strict";e.r(o);var r={name:"ButtonAdd",methods:{onClick:function(){this.$emit("click")}}},c=(e(379),e(3)),component=Object(c.a)(r,(function(){var t=this;return(0,t._self._c)("button",{staticClass:"button-add",on:{click:t.onClick}},[t._t("default")],2)}),[],!1,null,"5ca7899c",null);o.default=component.exports},408:function(t,o,e){var content=e(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(18).default)("7c4250f2",content,!0,{sourceMap:!1})},434:function(t,o,e){"use strict";e(408)},435:function(t,o,e){var r=e(17)(!1);r.push([t.i,'.product[data-v-5546157a]{display:flex;flex-direction:column;justify-content:center;align-items:center;border:1px solid #ecf7f9;border-radius:5px;max-width:30%}.product[data-v-5546157a],.product__image[data-v-5546157a]{position:relative;width:100%}.product__image[data-v-5546157a]{height:100%;cursor:pointer}.product__image img[data-v-5546157a]{-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;height:100%;width:100%;min-height:140px;min-width:120px}.product__image[data-v-5546157a]:hover:before{position:absolute;content:"";background:#fff;width:100%;height:100%;opacity:1%}.product__text-wrapper[data-v-5546157a]{display:flex;flex-direction:column;align-items:center;justify-content:center}.product__title[data-v-5546157a]{font-size:1.1rem;font-weight:400;text-align:center;margin:10px;cursor:pointer;transition:.3s}.product__title[data-v-5546157a]:hover{color:#000}.product__price[data-v-5546157a]{text-align:center;margin:10px}.product__button[data-v-5546157a]{position:absolute;bottom:0}',""]),t.exports=r},448:function(t,o,e){"use strict";e.r(o);var r={name:"ProductDetails",components:{ButtonAdd:e(381).default},props:{product:{type:Object,require:!0}},data:function(){return{hover:!1}},methods:{onMouseOver:function(){this.hover=!0},onMouseLeave:function(){this.hover=!1},onAddProduct:function(){this.$emit("addProduct",this.product)}}},c=(e(434),e(3)),component=Object(c.a)(r,(function(){var t,o,e,r,c,n,d=this,l=d._self._c;return l("div",{staticClass:"product-details"},[l("div",{staticClass:"product",on:{mouseover:d.onMouseOver,mouseleave:d.onMouseLeave}},[l("div",{staticClass:"product__image"},[l("img",{attrs:{src:null===(t=d.product.attributes)||void 0===t||null===(o=t.image)||void 0===o||null===(e=o.data)||void 0===e||null===(r=e.attributes)||void 0===r?void 0:r.url,alt:""}})]),d._v(" "),l("div",{staticClass:"product__text-wrapper"},[l("p",{staticClass:"product__title"},[d._v(d._s(null===(c=d.product.attributes)||void 0===c?void 0:c.title))])])]),d._v(" "),l("div",{staticClass:"product__text-block"},[l("p",{staticClass:"product__price"},[d._v(d._s(null===(n=d.product.attributes)||void 0===n?void 0:n.price)+" грн")]),d._v(" "),d.hover?l("ButtonAdd",{staticClass:"product__button",on:{click:d.onAddProduct}},[d._v("Додати в кошик\n    ")]):d._e()],1)])}),[],!1,null,"5546157a",null);o.default=component.exports}}]);