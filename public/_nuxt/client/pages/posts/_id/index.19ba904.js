(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{216:function(t,e,o){},224:function(t,e,o){"use strict";var n=o(216);o.n(n).a},232:function(t,e,o){"use strict";o.r(e);var n=o(41),c=o.n(n),d={asyncData:function(t){return c.a.get("https://nuxt-blog-9ce7f.firebaseio.com/posts/"+t.params.id+".json").then((function(t){return{loadedPost:t.data}})).catch((function(t){return CanvasRenderingContext2D.error(t)}))}},l=(o(224),o(2)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"single-post-page"},[o("section",[o("h1",{staticClass:"post-title"},[t._v(t._s(t.loadedPost.title))]),t._v(" "),o("div",{staticClass:"post-details"},[o("div",{staticClass:"post-detail"},[t._v("Last updated on "+t._s(t._f("date")(t.loadedPost.updatedDate)))]),t._v(" "),o("div",{staticClass:"post-detail"},[t._v("Written by "+t._s(t.loadedPost.author))])]),t._v(" "),o("p",[t._v(t._s(t.loadedPost.content))])]),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"post-feedback"},[e("p",[this._v("Let me know what you think about the post,send mail to"),e("a",{attrs:{href:"mailto:feedback@someemail.com"}},[this._v("feedback@someemail.com")])])])}],!1,null,"5cc8270c",null);e.default=component.exports}}]);