(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{211:function(t,o,n){},219:function(t,o,n){"use strict";var e=n(211);n.n(e).a},231:function(t,o,n){"use strict";n.r(o);var e={layout:"admin",middleware:["check-auth","auth"],computed:{loadedPosts:function(){return this.$store.getters.loadedPosts}},methods:{onLogout:function(){this.$store.getters.loadedPosts,this.$router.push("/admin/auth")}}},c=(n(219),n(2)),component=Object(c.a)(e,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"admin-page"},[n("section",{staticClass:"new-post"},[n("AppButton",{on:{click:function(o){return t.$router.push("/admin/new-post")}}},[t._v("Create Post")]),t._v(" "),n("AppButton",{staticStyle:{"margin-left":"10px"},on:{click:t.onLogout}},[t._v("Logout")])],1),t._v(" "),n("section",{staticClass:"existing-posts"},[n("h1",[t._v("Existing Posts")]),t._v(" "),n("PostList",{attrs:{isAdmin:!0,posts:t.loadedPosts}})],1)])}),[],!1,null,"357c3558",null);o.default=component.exports;installComponents(component,{AppButton:n(95).default,PostList:n(97).default})}}]);