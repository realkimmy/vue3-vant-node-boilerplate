__NUXT_JSONP__("/zh/migration/configuration", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC){return {data:[{page:{key:"content:zh:migration:2.configuration.md",generatedAt:new Date(1658586961928),mtime:new Date(1658586961905),slug:Z,title:_,position:"999900020000",to:"\u002Fmigration\u002Fconfiguration",draft:C,page:D,language:"zh",head:{title:"Nuxt 2 to Nuxt 3: Configuration",titleTemplate:E},empty:C,description:E,excerpt:$,body:{raw:"---\nhead.title: 'Nuxt 2 to Nuxt 3: Configuration'\nhead.titleTemplate: ''\n---\n\n# Configuration\n\n## `nuxt.config`\n\nThe starting point for your Nuxt app remains your `nuxt.config` file.\n\n::alert{icon=📦}\nNuxt configuration will be loaded using [`unjs\u002Fjiti`](https:\u002F\u002Fgithub.com\u002Funjs\u002Fjiti) and [`unjs\u002Fc12`](https:\u002F\u002Fgithub.com\u002Funjs\u002Fc12).\n::\n\n### Migration\n\n1. You should migrate to the new `defineNuxtConfig` function that provides a typed configuration schema.\n\n   ::code-group\n\n   ```ts [Nuxt 2]\n   export default {\n     \u002F\u002F ...\n   }\n   ```\n\n   ```ts [Nuxt 3]\n   import { defineNuxtConfig } from 'nuxt'\n\n   export default defineNuxtConfig({\n     \u002F\u002F ...\n   })\n   ```\n\n   ::\n\n1. If you were using `router.extendRoutes` you can migrate to the new `pages:extend` hook:\n\n   ::code-group\n\n   ```ts [Nuxt 2]\n   export default {\n     router: {\n       extendRoutes (routes) {\n         \u002F\u002F\n       }\n     }\n   }\n   ```\n\n   ```ts [Nuxt 3]\n   import { defineNuxtConfig } from 'nuxt'\n\n   export default defineNuxtConfig({\n     hooks: {\n       'pages:extend' (routes) {\n         \u002F\u002F\n       }\n     }\n   })\n   ```\n\n   ::\n\n#### ESM Syntax\n\nNuxt 3 is an [ESM native framework](\u002Fguide\u002Fgoing-further\u002Fesm). Although [`unjs\u002Fjiti`](https:\u002F\u002Fgithub.com\u002Funjs\u002Fjiti) provides semi compatibility when loading `nuxt.config` file, avoid any usage of `require` and `module.exports` in this file.\n\n1. Change `module.exports` to `export default`\n1. Change `const lib = require('lib')` to `import lib from 'lib'`\n\n#### Async Configuration\n\nIn order to make Nuxt loading behavior more predictable, async config syntax is deprecated. Consider using Nuxt hooks for async operations.\n\n#### Dotenv\n\nNuxt has built-in support for loading `.env` files. Avoid directly importing it from `nuxt.config`.\n\n## Modules\n\nNuxt and Nuxt Modules are now build-time-only.\n\n### Migration\n\n1. Move all your `buildModules` into `modules`.\n2. Check for Nuxt 3 compatibility of modules.\n\n::alert\nIf you are a module author, you can check out [more information about module compatibility](\u002Fmigration\u002Fmodule-authors) and [our module author guide](\u002Fguide\u002Fgoing-further\u002Fmodules).\n::\n\n## TypeScript\n\nIt will be much easier to migrate your application if you use Nuxt's TypeScript integration. This does not mean you need to write your application in TypeScript, just that Nuxt will provide automatic type hints for your editor.\n\nYou can read more about Nuxt's TypeScript support [in the docs](\u002Fguide\u002Fconcepts\u002Ftypescript).\n\n::alert{icon=📦}\nNuxt can type-check your app using [`vue-tsc`](https:\u002F\u002Fgithub.com\u002Fjohnsoncodehk\u002Fvolar\u002Ftree\u002Fmaster\u002Fpackages\u002Fvue-tsc) with `nuxi typecheck` command.\n::\n\n### Migration\n\n1. Create a `tsconfig.json` with the following content:\n\n   ```json\n   {\n     \"extends\": \".\u002F.nuxt\u002Ftsconfig.json\"\n   }\n   ```\n\n1. Run `npx nuxi prepare` to generate `.nuxt\u002Ftsconfig.json`.\n1. Install Volar following the instructions in the [docs](\u002Fgetting-started\u002Fquick-start#prerequisites).\n\n## Vue changes\n\nThere are a number of changes to what is recommended Vue best practice, as well as a number of breaking changes between Vue 2 and 3.\n\nIt is recommended to read the [Vue 3 migration guide](https:\u002F\u002Fv3-migration.vuejs.org\u002F) and in particular the [breaking changes list](https:\u002F\u002Fv3-migration.vuejs.org\u002Fbreaking-changes\u002F).\n\nIt is not currently possible to use the Vue 3 migration build with Nuxt 3 RC.\n\n## Vuex\n\nNuxt no longer provides a Vuex integration. Instead, the official Vue recommendation is to use `pinia`, which has built-in Nuxt support via a Nuxt module. [Find out more about pinia here](https:\u002F\u002Fpinia.vuejs.org\u002F).\n\nIf you want to keep using Vuex, you can manually migrate to Vuex 4 following [these steps](https:\u002F\u002Fvuex.vuejs.org\u002Fguide\u002Fmigrating-to-4-0-from-3-x.html).\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:Z},children:[{type:a,value:_}]},{type:a,value:c},{type:b,tag:v,props:{id:aa},children:[{type:b,tag:h,props:{href:"#nuxtconfig"},children:[{type:b,tag:g,props:{},children:[{type:a,value:w}]}]}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"The starting point for your Nuxt app remains your "},{type:b,tag:g,props:{},children:[{type:a,value:w}]},{type:a,value:" file."}]},{type:a,value:c},{type:b,tag:P,props:{icon:ab},children:[{type:b,tag:j,props:{},children:[{type:a,value:"Nuxt configuration will be loaded using "},{type:b,tag:h,props:{href:ac,rel:[p,q,r],target:s},children:[{type:b,tag:g,props:{},children:[{type:a,value:ad}]}]},{type:a,value:Q},{type:b,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002Funjs\u002Fc12",rel:[p,q,r],target:s},children:[{type:b,tag:g,props:{},children:[{type:a,value:"unjs\u002Fc12"}]}]},{type:a,value:n}]}]},{type:a,value:c},{type:b,tag:R,props:{id:ae},children:[{type:b,tag:h,props:{href:"#migration"},children:[{type:a,value:u}]}]},{type:a,value:c},{type:b,tag:F,props:{},children:[{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:a,value:"You should migrate to the new "},{type:b,tag:g,props:{},children:[{type:a,value:S}]},{type:a,value:" function that provides a typed configuration schema."},{type:a,value:c},{type:b,tag:af,props:{},children:[{type:b,tag:x,props:{},children:[{type:b,tag:d,props:{className:[G]},children:[{type:a,value:ag}]},{type:b,tag:y,props:{className:[z,H]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:I}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:J}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:l}]},{type:a,value:B},{type:b,tag:d,props:{className:[e,K]},children:[{type:a,value:ah}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:m}]},{type:a,value:c}]}]}]},{type:b,tag:x,props:{},children:[{type:b,tag:d,props:{className:[G]},children:[{type:a,value:ai}]},{type:b,tag:y,props:{className:[z,H]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:aj}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:l}]},{type:a,value:ak},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:m}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:al}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,L]},children:[{type:a,value:am}]},{type:a,value:an},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:I}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:J}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,T]},children:[{type:a,value:S}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:M}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:l}]},{type:a,value:B},{type:b,tag:d,props:{className:[e,K]},children:[{type:a,value:ah}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:m}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:N}]},{type:a,value:c}]}]}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:a,value:"If you were using "},{type:b,tag:g,props:{},children:[{type:a,value:"router.extendRoutes"}]},{type:a,value:" you can migrate to the new "},{type:b,tag:g,props:{},children:[{type:a,value:"pages:extend"}]},{type:a,value:" hook:"},{type:a,value:c},{type:b,tag:af,props:{},children:[{type:b,tag:x,props:{},children:[{type:b,tag:d,props:{className:[G]},children:[{type:a,value:ag}]},{type:b,tag:y,props:{className:[z,H]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:I}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:J}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:l}]},{type:a,value:"\n  router"},{type:b,tag:d,props:{className:[e,U]},children:[{type:a,value:V}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:l}]},{type:a,value:O},{type:b,tag:d,props:{className:[e,T]},children:[{type:a,value:"extendRoutes"}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:M}]},{type:a,value:ao},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:N}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:l}]},{type:a,value:ap},{type:b,tag:d,props:{className:[e,K]},children:[{type:a,value:aq}]},{type:a,value:O},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:m}]},{type:a,value:B},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:m}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:m}]},{type:a,value:c}]}]}]},{type:b,tag:x,props:{},children:[{type:b,tag:d,props:{className:[G]},children:[{type:a,value:ai}]},{type:b,tag:y,props:{className:[z,H]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:aj}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:l}]},{type:a,value:ak},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:m}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:al}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,L]},children:[{type:a,value:am}]},{type:a,value:an},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:I}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:J}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,T]},children:[{type:a,value:S}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:M}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:l}]},{type:a,value:"\n  hooks"},{type:b,tag:d,props:{className:[e,U]},children:[{type:a,value:V}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:l}]},{type:a,value:O},{type:b,tag:d,props:{className:[e,L]},children:[{type:a,value:"'pages:extend'"}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:M}]},{type:a,value:ao},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:N}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:l}]},{type:a,value:ap},{type:b,tag:d,props:{className:[e,K]},children:[{type:a,value:aq}]},{type:a,value:O},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:m}]},{type:a,value:B},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:m}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:m}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:N}]},{type:a,value:c}]}]}]}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:W,props:{id:"esm-syntax"},children:[{type:b,tag:h,props:{href:"#esm-syntax"},children:[{type:a,value:"ESM Syntax"}]}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Nuxt 3 is an "},{type:b,tag:h,props:{href:"\u002Fguide\u002Fgoing-further\u002Fesm"},children:[{type:a,value:"ESM native framework"}]},{type:a,value:". Although "},{type:b,tag:h,props:{href:ac,rel:[p,q,r],target:s},children:[{type:b,tag:g,props:{},children:[{type:a,value:ad}]}]},{type:a,value:" provides semi compatibility when loading "},{type:b,tag:g,props:{},children:[{type:a,value:w}]},{type:a,value:" file, avoid any usage of "},{type:b,tag:g,props:{},children:[{type:a,value:"require"}]},{type:a,value:Q},{type:b,tag:g,props:{},children:[{type:a,value:ar}]},{type:a,value:" in this file."}]},{type:a,value:c},{type:b,tag:F,props:{},children:[{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:a,value:as},{type:b,tag:g,props:{},children:[{type:a,value:ar}]},{type:a,value:at},{type:b,tag:g,props:{},children:[{type:a,value:"export default"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:a,value:as},{type:b,tag:g,props:{},children:[{type:a,value:"const lib = require('lib')"}]},{type:a,value:at},{type:b,tag:g,props:{},children:[{type:a,value:"import lib from 'lib'"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:W,props:{id:"async-configuration"},children:[{type:b,tag:h,props:{href:"#async-configuration"},children:[{type:a,value:"Async Configuration"}]}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"In order to make Nuxt loading behavior more predictable, async config syntax is deprecated. Consider using Nuxt hooks for async operations."}]},{type:a,value:c},{type:b,tag:W,props:{id:"dotenv"},children:[{type:b,tag:h,props:{href:"#dotenv"},children:[{type:a,value:"Dotenv"}]}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Nuxt has built-in support for loading "},{type:b,tag:g,props:{},children:[{type:a,value:".env"}]},{type:a,value:" files. Avoid directly importing it from "},{type:b,tag:g,props:{},children:[{type:a,value:w}]},{type:a,value:n}]},{type:a,value:c},{type:b,tag:v,props:{id:X},children:[{type:b,tag:h,props:{href:"#modules"},children:[{type:a,value:au}]}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Nuxt and Nuxt Modules are now build-time-only."}]},{type:a,value:c},{type:b,tag:R,props:{id:av},children:[{type:b,tag:h,props:{href:"#migration-1"},children:[{type:a,value:u}]}]},{type:a,value:c},{type:b,tag:F,props:{},children:[{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:a,value:"Move all your "},{type:b,tag:g,props:{},children:[{type:a,value:"buildModules"}]},{type:a,value:" into "},{type:b,tag:g,props:{},children:[{type:a,value:X}]},{type:a,value:n},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:a,value:"Check for Nuxt 3 compatibility of modules."},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:P,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:"If you are a module author, you can check out "},{type:b,tag:h,props:{href:"\u002Fmigration\u002Fmodule-authors"},children:[{type:a,value:"more information about module compatibility"}]},{type:a,value:Q},{type:b,tag:h,props:{href:"\u002Fguide\u002Fgoing-further\u002Fmodules"},children:[{type:a,value:"our module author guide"}]},{type:a,value:n}]}]},{type:a,value:c},{type:b,tag:v,props:{id:aw},children:[{type:b,tag:h,props:{href:"#typescript"},children:[{type:a,value:ax}]}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"It will be much easier to migrate your application if you use Nuxt's TypeScript integration. This does not mean you need to write your application in TypeScript, just that Nuxt will provide automatic type hints for your editor."}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"You can read more about Nuxt's TypeScript support "},{type:b,tag:h,props:{href:"\u002Fguide\u002Fconcepts\u002Ftypescript"},children:[{type:a,value:"in the docs"}]},{type:a,value:n}]},{type:a,value:c},{type:b,tag:P,props:{icon:ab},children:[{type:b,tag:j,props:{},children:[{type:a,value:"Nuxt can type-check your app using "},{type:b,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002Fjohnsoncodehk\u002Fvolar\u002Ftree\u002Fmaster\u002Fpackages\u002Fvue-tsc",rel:[p,q,r],target:s},children:[{type:b,tag:g,props:{},children:[{type:a,value:"vue-tsc"}]}]},{type:a,value:" with "},{type:b,tag:g,props:{},children:[{type:a,value:"nuxi typecheck"}]},{type:a,value:" command."}]}]},{type:a,value:c},{type:b,tag:R,props:{id:ay},children:[{type:b,tag:h,props:{href:"#migration-2"},children:[{type:a,value:u}]}]},{type:a,value:c},{type:b,tag:F,props:{},children:[{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:a,value:"Create a "},{type:b,tag:g,props:{},children:[{type:a,value:"tsconfig.json"}]},{type:a,value:" with the following content:"},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:b,tag:y,props:{className:[z,"language-json"]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:l}]},{type:a,value:B},{type:b,tag:d,props:{className:[e,"property"]},children:[{type:a,value:"\"extends\""}]},{type:b,tag:d,props:{className:[e,U]},children:[{type:a,value:V}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,L]},children:[{type:a,value:"\".\u002F.nuxt\u002Ftsconfig.json\""}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:m}]},{type:a,value:c}]}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:a,value:"Run "},{type:b,tag:g,props:{},children:[{type:a,value:"npx nuxi prepare"}]},{type:a,value:" to generate "},{type:b,tag:g,props:{},children:[{type:a,value:".nuxt\u002Ftsconfig.json"}]},{type:a,value:n},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:a,value:"Install Volar following the instructions in the "},{type:b,tag:h,props:{href:"\u002Fgetting-started\u002Fquick-start#prerequisites"},children:[{type:a,value:"docs"}]},{type:a,value:n},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:v,props:{id:az},children:[{type:b,tag:h,props:{href:"#vue-changes"},children:[{type:a,value:aA}]}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"There are a number of changes to what is recommended Vue best practice, as well as a number of breaking changes between Vue 2 and 3."}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"It is recommended to read the "},{type:b,tag:h,props:{href:"https:\u002F\u002Fv3-migration.vuejs.org\u002F",rel:[p,q,r],target:s},children:[{type:a,value:"Vue 3 migration guide"}]},{type:a,value:" and in particular the "},{type:b,tag:h,props:{href:"https:\u002F\u002Fv3-migration.vuejs.org\u002Fbreaking-changes\u002F",rel:[p,q,r],target:s},children:[{type:a,value:"breaking changes list"}]},{type:a,value:n}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"It is not currently possible to use the Vue 3 migration build with Nuxt 3 RC."}]},{type:a,value:c},{type:b,tag:v,props:{id:aB},children:[{type:b,tag:h,props:{href:"#vuex"},children:[{type:a,value:aC}]}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Nuxt no longer provides a Vuex integration. Instead, the official Vue recommendation is to use "},{type:b,tag:g,props:{},children:[{type:a,value:"pinia"}]},{type:a,value:", which has built-in Nuxt support via a Nuxt module. "},{type:b,tag:h,props:{href:"https:\u002F\u002Fpinia.vuejs.org\u002F",rel:[p,q,r],target:s},children:[{type:a,value:"Find out more about pinia here"}]},{type:a,value:n}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"If you want to keep using Vuex, you can manually migrate to Vuex 4 following "},{type:b,tag:h,props:{href:"https:\u002F\u002Fvuex.vuejs.org\u002Fguide\u002Fmigrating-to-4-0-from-3-x.html",rel:[p,q,r],target:s},children:[{type:a,value:"these steps"}]},{type:a,value:n}]}]},toc:{title:E,searchDepth:t,depth:t,links:[{id:aa,depth:t,text:w,children:[{id:ae,depth:Y,text:u}]},{id:X,depth:t,text:au,children:[{id:av,depth:Y,text:u}]},{id:aw,depth:t,text:ax,children:[{id:ay,depth:Y,text:u}]},{id:az,depth:t,text:aA},{id:aB,depth:t,text:aC}]}},template:"Docs"},templateOptions:{header:D,footer:D,aside:D,asideClass:E,fluid:C,banner:C},_img:{}}],fetch:{"0":{headerLinks:[{title:"Getting Started",to:"\u002Fgetting-started\u002Fquick-start"},{title:"Guide",to:"\u002Fguide\u002Fconcepts\u002Fintroduction"},{title:"API",to:"\u002Fapi\u002Fcomposables\u002Fuse-async-data"},{title:"示例",to:"\u002Fexamples\u002Fessentials\u002Fhello-world"},{title:"社区",to:"\u002Fcommunity\u002Fgetting-help"}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"bridge-composition-api",to:"\u002Fbridge\u002Fbridge-composition-api",title:"Composition API"},next:{slug:"auto-imports",to:"\u002Fmigration\u002Fauto-imports",title:"Auto Imports"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseCode","Alert","CodeGroup","ProseEm","ReadMore","Sandbox","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseBlockquote","ProseImg","NeedContribution","LinkExample","ProseOl","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel"])},mutations:$}}("text","element","\n","span","token","punctuation","prose-code-inline","prose-a"," ","prose-paragraph","keyword","{","}",".","prose-li","nofollow","noopener","noreferrer","_blank",2,"Migration","prose-h2","nuxt.config","prose-code","pre","line-numbers","code","\n  ",false,true,"","prose-ol","filename","language-ts","export","default","comment","string","(",")","\n    ","alert"," and ","prose-h3","defineNuxtConfig","function","operator",":","prose-h4","modules",3,"configuration","Configuration",void 0,"nuxtconfig","📦","https:\u002F\u002Fgithub.com\u002Funjs\u002Fjiti","unjs\u002Fjiti","migration","code-group","Nuxt 2","\u002F\u002F ...","Nuxt 3","import"," defineNuxtConfig ","from","'nuxt'","\n\n","routes","\n      ","\u002F\u002F","module.exports","Change "," to ","Modules","migration-1","typescript","TypeScript","migration-2","vue-changes","Vue changes","vuex","Vuex")));