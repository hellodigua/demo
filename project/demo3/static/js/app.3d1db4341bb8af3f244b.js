webpackJsonp([0,2],[,,function(t,e,s){"use strict";var a=s(1),i=s.n(a),n=s(15),o=s.n(n),r=s(10),c=s.n(r),m=s(11),l=s.n(m);i.a.use(o.a),e.a=new o.a({routes:[{path:"/",name:"Hello",component:c.a},{path:"/about",name:"bye",component:l.a}]})},function(t,e,s){s(9);var a=s(0)(s(4),s(14),null,null);t.exports=a.exports},function(t,e,s){"use strict";function a(){setTimeout(function(){var t=document.getElementById("content");t.scrollTop=t.scrollHeight},0)}function i(){var t=document.getElementById("dragToggle");t.onmousedown=n}function n(t){var e=t.target.nodeName,s=document.getElementById("qqchat"),a=t.clientX-s.offsetLeft,i=t.clientY-s.offsetTop;document.onmousemove=function(t){o(t,a,i)},"INPUT"!==e&&"IMG"!==e&&"A"!==e&&"BUTTON"!==e||(document.onmousemove=null,document.onmouseup=null),document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null}}function o(t,e,s){var a=document.getElementById("qqchat"),i=t.clientX-e,n=t.clientY-s,o=document.documentElement.clientWidth,r=document.documentElement.clientHeight,c=o-a.offsetWidth,m=r-a.offsetHeight;t.stopPropagation(),i<0?i=0:i>c&&(i=c),n<0?n=0:n>m&&(n=m),a.style.left=i+"px",a.style.top=n+"px"}Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{msgYou:"msgYou",msgMe:"msgMe",you:{name:"陶俊",state:"今天医生给放了半天假，真开心",imgUrl:"static/images/avatar_4.png",msg:""},me:{imgUrl:"static/images/avatar_1.png",msg:""},items:[{msgText:"王医生，在不？",sendType:!1},{msgText:"在啊，怎么了？",sendType:!0},{msgText:"王医生，我的病还有救没？",sendType:!1},{msgText:"你的病情已经到了智障晚期，恐怕……",sendType:!0},{msgText:"卧槽，王医生，我还不想这么早就蠢死啊",sendType:!1},{msgText:"王医生，快救救我啊！",sendType:!1},{msgText:"唉，以你现在的症状，恐怕只能自宫了……",sendType:!0},{msgText:"自宫的话，我的智障还有救吗？",sendType:!1},{msgText:"嗯嗯，还有一定希望治愈",sendType:!0},{msgText:"好，你等等，我这就找菜刀去",sendType:!1},{msgText:"等等，我骗你的",sendType:!0}]}},watch:{items:{handler:function(){a()},deep:!0}},methods:{sendMeMsg:function(){this.items.push({msgText:this.me.msg,sendType:!0}),this.me.msg=""},sendYouMsg:function(){this.items.push({msgText:this.you.msg,sendType:!1}),this.you.msg=""},close:function(){}}},window.onload=function(){i(),a()}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"bye",data:function(){return{msg:"bye"}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e,s){s(7);var a=s(0)(s(5),s(12),"data-v-188a39bc",null);t.exports=a.exports},function(t,e,s){s(8);var a=s(0)(s(6),s(13),"data-v-1a374678",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[t._v("Gitter Chat")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bye"},[s("h1",[t._v(t._s(t.msg))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"qqchat"}},[s("div",{staticClass:"info",attrs:{id:"dragToggle"}},[s("div",{staticClass:"infoPanel"},[s("div",{staticClass:"infoAvatar"},[s("img",{attrs:{src:t.you.imgUrl,draggable:"false"}}),t._v(" "),s("p",{staticClass:"infoName"},[t._v(t._s(t.you.name))]),t._v(" "),s("p",{staticClass:"infoState"},[t._v(t._s(t.you.state))])])]),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),s("div",{attrs:{id:"content"}},[s("div",{staticClass:"container"},[t._m(2),t._v(" "),t._l(t.items,function(e){return s("div",{staticClass:"msgPanel",class:e.sendType?"msgYou":"msgMe"},[e.sendType?s("div",{staticClass:"msgAvatar"},[s("img",{attrs:{src:t.me.imgUrl}})]):s("div",{staticClass:"msgAvatar"},[s("img",{attrs:{src:t.you.imgUrl}})]),t._v(" "),s("div",{staticClass:"msgText",class:e.sendType?"msgYou":"msgMe"},[s("p",[t._v(t._s(e.msgText))])])])})],2)]),t._v(" "),s("div",{staticClass:"textArea"},[t._m(3),t._v(" "),s("div",{staticClass:"inputPanel"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.me.msg,expression:"me.msg"}],attrs:{id:"inputArea"},domProps:{value:t._s(t.me.msg)},on:{input:function(e){e.target.composing||(t.me.msg=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"buttonPanel"},[s("button",{staticClass:"btn",on:{clicl:function(e){t.close()}}},[t._v("关闭("),s("span",[t._v("C")]),t._v(")")]),t._v(" "),s("button",{staticClass:"btn",on:{click:function(e){t.sendMeMsg()}}},[t._v("发送("),s("span",[t._v("S")]),t._v(")")])])])]),t._v(" "),s("div",{attrs:{id:"config"}},[t._m(4),t._v(" "),t._m(5),t._v(" "),s("div",{staticClass:"selection"},[s("div",{staticClass:"item"},[s("label",[t._v("名字")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.you.name,expression:"you.name"}],domProps:{value:t._s(t.you.name)},on:{input:function(e){e.target.composing||(t.you.name=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"item"},[s("label",[t._v("签名")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.you.state,expression:"you.state"}],domProps:{value:t._s(t.you.state)},on:{input:function(e){e.target.composing||(t.you.state=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"item"},[s("label",[t._v("头像")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.you.imgUrl,expression:"you.imgUrl"}],domProps:{value:t._s(t.you.imgUrl)},on:{input:function(e){e.target.composing||(t.you.imgUrl=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"item"},[s("label",[t._v("消息")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.you.msg,expression:"you.msg"}],domProps:{value:t._s(t.you.msg)},on:{input:function(e){e.target.composing||(t.you.msg=e.target.value)}}}),t._v(" "),s("button",{on:{click:function(e){t.sendYouMsg()}}},[t._v("send")])])]),t._v(" "),t._m(6),t._v(" "),s("div",{staticClass:"selection"},[s("div",{staticClass:"item"},[s("label",[t._v("头像")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.me.imgUrl,expression:"me.imgUrl"}],domProps:{value:t._s(t.me.imgUrl)},on:{input:function(e){e.target.composing||(t.me.imgUrl=e.target.value)}}})])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"execute"},[s("div",{staticClass:"item close"},[s("img",{attrs:{src:"static/images/e_close.png"}})]),t._v(" "),s("div",{staticClass:"item"},[s("img",{attrs:{src:"static/images/e_max.png"}})]),t._v(" "),s("div",{staticClass:"item"},[s("img",{attrs:{src:"static/images/e_min.png"}})]),t._v(" "),s("div",{staticClass:"item"},[s("img",{attrs:{src:"static/images/e_set.png"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chatTools"},[s("div",{staticClass:"item"},[s("img",{attrs:{src:"static/images/tbr_add.png"}})]),t._v(" "),s("div",{staticClass:"item"},[s("img",{attrs:{src:"static/images/tbr_app.png"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"msgMore"},[s("p",[t._v("查看更多消息")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"textAreaTop"},[s("div",{staticClass:"textTools"},[s("div",{staticClass:"item"},[s("img",{staticClass:"aio",attrs:{src:"static/images/aio_font.png"}})]),t._v(" "),s("div",{staticClass:"item"},[s("img",{staticClass:"aio",attrs:{src:"static/images/aio_face.png"}})]),t._v(" "),s("div",{staticClass:"item"},[s("img",{staticClass:"aio",attrs:{src:"static/images/aio_sendpic.png"}}),s("img",{staticClass:"aioArrow",attrs:{src:"static/images/aio_arrow.png"}})]),t._v(" "),s("div",{staticClass:"item"},[s("img",{staticClass:"aio",attrs:{src:"static/images/aio_cut.png"}}),s("img",{staticClass:"aioArrow",attrs:{src:"static/images/aio_arrow.png"}})])]),t._v(" "),s("div",{staticClass:"msgMore"},[s("div",{staticClass:"item"},[s("img",{staticClass:"aio",attrs:{src:"static/images/aio_msgmore.png"}})]),t._v(" "),s("div",{staticClass:"item"},[s("span",[t._v("消息记录")])]),t._v(" "),s("div",{staticClass:"item"},[s("img",{staticClass:"aioArrow",attrs:{src:"static/images/aio_arrow.png"}})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("h2",[t._v("配置项")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("h2",[t._v("对方")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("h2",[t._v("自己")])])}]}},,,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(1),i=s.n(a),n=s(3),o=s.n(n),r=s(2);new i.a({el:"#app",router:r.a,template:"<App/>",components:{App:o.a}})}],[18]);