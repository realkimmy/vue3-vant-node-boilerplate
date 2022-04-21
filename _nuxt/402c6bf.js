(window.webpackJsonp=window.webpackJsonp||[]).push([[199,36],{514:function(t,e,n){"use strict";n.r(e);n(48);var r=n(0),o=Object(r.defineComponent)({props:{title:{type:String,default:""},description:{type:String,default:""},image:{type:String,default:""},href:{type:String,default:""},tags:{type:Array,default:function(){return[]}},category:{type:String,default:""}},setup:function(t){return{navigateToUrl:function(t){t.startsWith("/")&&!1===t.startsWith("//")?this.$router.push(this.localePath(t)):window.open(t,"_blank")},imgUrl:Object(r.computed)((function(){return t.image||"https://source.unsplash.com/random"}))}}}),l=n(2),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"\n    flex flex-col\n    shadow\n    rounded-lg\n    overflow-hidden\n    hover:bg-gray-50\n    dark:hover:bg-secondary-darker\n    cursor-pointer\n    dark:bg-secondary-darkest\n  ",on:{click:function(e){return t.navigateToUrl(t.href)}}},[n("div",{staticClass:"aspect-h-9 bg-gray-100 dark:bg-secondary-darker mb-4"},[n("NuxtImg",{attrs:{src:t.imgUrl,width:"864",height:"378",alt:t.title,loading:"lazy"}})],1),t._v(" "),t.tags.length?n("div",{staticClass:"px-4 mb-1"},t._l(t.tags,(function(e,i){return n("span",{key:e,staticClass:"text-gray-500 dark:text-cloud-light font-medium text-sm"},[n("span",[t._v(t._s(e))]),t._v(" "),0===i&&t.tags.length>1||i!==t.tags.length-1?n("span",[t._v(" – ")]):t._e()])})),0):t.category?n("div",{staticClass:"px-4 mb-1"},[n("span",{staticClass:"text-gray-500 dark:text-cloud-light font-medium text-sm"},[t._v("\n      "+t._s(t.category)+"\n    ")])]):t._e(),t._v(" "),n("h1",{staticClass:"font-bold text-body-xl mb-2 px-4"},[n("AppLink",{attrs:{to:t.href}},[t._v("\n      "+t._s(t.title)+"\n    ")])],1),t._v(" "),n("p",{staticClass:"pb-8 px-4 text-gray-500 dark:text-cloud-lighter truncate sm:whitespace-normal"},[t._v("\n    "+t._s(t.description)+"\n  ")]),t._v(" "),n("div",{staticClass:"px-4 mt-auto mb-4"},[n("Markdown",{attrs:{use:"footer",unwrap:"p"}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppLink:n(85).default,Markdown:n(271).default})},975:function(t,e,n){"use strict";n.r(e);var r=n(0),o=Object(r.defineComponent)({props:{videoCourses:{type:Object,default:function(){}}}}),l=n(2),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-6 mb-8 pt-12"},[n("div",{staticClass:"flex flex-wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"},t._l(t.videoCourses,(function(e,r){var title=e.title,o=e.description,image=e.image,l=e.tier,link=e.link;return n("ContentCardTemplate",{key:r,attrs:{title:title,description:o,image:image,tags:[l],href:link}},[n("div",{staticClass:"-mb-2 sm:mb-0",attrs:{slot:"footer"},slot:"footer"},[n("AppButton",{attrs:{href:link}},[t._v("\n          "+t._s(t.$t("resources.themes.video_course"))+"\n        ")])],1)])})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppButton:n(101).default,ContentCardTemplate:n(514).default})}}]);