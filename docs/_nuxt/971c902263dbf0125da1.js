(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{179:function(n,t,i){var a=i(186);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,i(17).default)("e9180412",a,!0,{sourceMap:!1})},180:function(n,t,i){var a=i(188);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,i(17).default)("2bf30763",a,!0,{sourceMap:!1})},185:function(n,t,i){"use strict";var a=i(179);i.n(a).a},186:function(n,t,i){(n.exports=i(16)(!1)).push([n.i,'\n.link[data-v-0cf5bf24]{display:flex;align-items:flex-end;text-decoration:none\n}\n@media (min-width:0px) and (max-width:640px){\n.link[data-v-0cf5bf24]{margin:0 0 20px\n}\n}\n@media (min-width:641px) and (max-width:1024px){\n.link[data-v-0cf5bf24]{margin:0 0 30px\n}\n}\n.main-link[data-v-0cf5bf24]{color:rgba(0,0,0,.8);display:block;font-size:1.6rem;font-weight:400;line-height:1.8rem;text-decoration:none\n}\n@media (min-width:0px) and (max-width:640px){\n.main-link[data-v-0cf5bf24]{margin:0\n}\n}\n@media (min-width:641px) and (max-width:1024px){\n.main-link[data-v-0cf5bf24]{margin:0 10px 0 0\n}\n}\n@media (min-width:0px) and (max-width:640px){\n.sub-links[data-v-0cf5bf24]{display:block;margin:3px 0 0\n}\n}\n@media (min-width:641px) and (max-width:1024px){\n.sub-links[data-v-0cf5bf24]:before{color:rgba(0,0,0,.3);content:"/ "\n}\n}\n.sub-link[data-v-0cf5bf24]{color:rgba(0,0,0,.4);font-size:1.1rem;font-weight:400;text-decoration:none;text-transform:lowercase\n}\n.sub-link[data-v-0cf5bf24]:not(:last-child):after{content:","\n}\n@media (min-width:0px) and (max-width:640px){\n.sub-link[data-v-0cf5bf24]{display:block;margin:3px 0 0\n}\n}\n@media (min-width:641px) and (max-width:1024px){\n.sub-link[data-v-0cf5bf24]{display:inline;margin:0 8px 0 0\n}\n}',""])},187:function(n,t,i){"use strict";var a=i(180);i.n(a).a},188:function(n,t,i){(n.exports=i(16)(!1)).push([n.i,"\n.wrapper[data-v-6b804707]{height:100%;position:absolute;width:100%;z-index:0\n}\n.content[data-v-6b804707],.wrapper[data-v-6b804707]{display:flex;flex-direction:column\n}\n.content[data-v-6b804707]{align-items:center;flex-grow:1;justify-content:center;max-width:1340px;padding:0 220px\n}\n@media (min-width:0px) and (max-width:640px){\n.content[data-v-6b804707]{padding:0 60px\n}\n}\n@media (min-width:641px) and (max-width:1024px){\n.content[data-v-6b804707]{padding:0 100px\n}\n}\n.heading[data-v-6b804707]{font-size:6rem;font-weight:700;line-height:6rem;margin:0 0 25px\n}\n.sub-heading[data-v-6b804707]{font-size:2.2rem;font-weight:400;line-height:2.6rem;margin:0 0 25px\n}\n@media (min-width:0px) and (max-width:640px){\n.sub-heading[data-v-6b804707]{font-size:5.2vw;line-height:5.2vw\n}\n}\n.paragraph[data-v-6b804707]{font-size:1.3rem;font-weight:400;line-height:2.2rem;margin:0 0 10px;text-align:justify\n}\n@media (min-width:0px) and (max-width:640px){\n.paragraph[data-v-6b804707]{font-size:1.3rem;line-height:2rem\n}\n}\n@media (min-width:641px) and (max-width:1024px){\n.paragraph[data-v-6b804707]{font-size:1.3rem;line-height:2.2rem\n}\n}\n.section[data-v-6b804707]{margin:0 0 40px\n}",""])},190:function(n,t,i){"use strict";i.r(t);i(26);var a=i(2),e=i.n(a),s=i(95),r={name:"ListItem",props:{to:{required:!0,type:String},tags:{default:function(){return[]},type:Array},title:{required:!0,type:String}}},d=(i(185),i(5)),o=Object(d.a)(r,function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("nuxt-link",{staticClass:"link",attrs:{to:n.to}},[i("span",{staticClass:"main-link"},[n._v(n._s(n.title))]),n._v(" "),i("span",{staticClass:"sub-links"},n._l(n.tags,function(t){return i("span",{key:t._id,staticClass:"sub-link"},[n._v(n._s(t.title))])}))])},[],!1,null,"0cf5bf24",null);o.options.__file="ListItem.vue";var p,c=o.exports,m={asyncData:(p=e()(regeneratorRuntime.mark(function n(t){var i;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t.params,i=t.store,n.abrupt("return",{home:i.state.home,site:i.state.site});case 2:case"end":return n.stop()}},n,this)})),function(n){return p.apply(this,arguments)}),components:{AppHeader:s.a,ListItem:c},head:function(){return{title:"".concat(this.site.meta.title," - ").concat(this.home.meta.title),meta:[{hid:"description",name:"description",content:this.home.meta.description},{hid:"og:description",name:"og:description",content:this.home.meta.description},{hid:"og:title",name:"og:title",content:"".concat(this.site.meta.title," - ").concat(this.home.meta.title)}]}},transition:{mode:"in-out"}},l=(i(187),Object(d.a)(m,function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"wrapper"},[i("app-header"),n._v(" "),i("div",{staticClass:"content"},[i("section",{staticClass:"section"},[i("h1",{staticClass:"heading"},[n._v(n._s(n.home.title))]),n._v(" "),i("p",{staticClass:"paragraph"},[n._v(n._s(n.home.description))])])])],1)},[],!1,null,"6b804707",null));l.options.__file="index.vue";t.default=l.exports}}]);