__NUXT_JSONP__("/migration/server", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return {data:[{page:{key:"content:en:migration:11.server.md",generatedAt:new Date(1658586961641),mtime:new Date(1658586961636),slug:k,title:l,position:"999900110000",to:"\u002Fmigration\u002Fserver",draft:e,page:f,language:"en",head:{title:"Nuxt 2 to Nuxt 3: Server",titleTemplate:h},empty:e,description:m,excerpt:n,body:{raw:"---\nhead.title: 'Nuxt 2 to Nuxt 3: Server'\nhead.titleTemplate: ''\n---\n\n# Server\n\nIn a built Nuxt 3 application, there is no runtime Nuxt dependency. That means your site will be highly performant, and ultra-slim. But it also means you can no longer hook into runtime Nuxt server hooks.\n\n[Read more about the Nitro server engine](\u002Fguide\u002Fconcepts\u002Fserver-engine).\n\n## Steps\n\n1. Remove the `render` key in your `nuxt.config`.\n1. Any files in `~\u002Fserver\u002Fapi` and `~\u002Fserver\u002Fmiddleware` will be automatically registered; you can remove them from your `serverMiddleware` array.\n1. Update any other items in your `serverMiddleware` array to point to files or npm packages directly, rather than using inline functions.\n1. If you are adding any server hooks, such as `server:` or `vue-renderer:` you will need to remove these and wait for [nitropack](https:\u002F\u002Fgithub.com\u002Funjs\u002Fnitropack) support for runtime hooks and plugins.\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:k},children:[{type:a,value:l}]},{type:a,value:c},{type:b,tag:o,props:{class:"d-heading-description"},children:[{type:a,value:m}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:b,tag:i,props:{href:"\u002Fguide\u002Fconcepts\u002Fserver-engine"},children:[{type:a,value:"Read more about the Nitro server engine"}]},{type:a,value:p}]},{type:a,value:c},{type:b,tag:"prose-h2",props:{id:q},children:[{type:b,tag:i,props:{href:"#steps"},children:[{type:a,value:r}]}]},{type:a,value:c},{type:b,tag:"prose-ol",props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Remove the "},{type:b,tag:d,props:{},children:[{type:a,value:"render"}]},{type:a,value:" key in your "},{type:b,tag:d,props:{},children:[{type:a,value:"nuxt.config"}]},{type:a,value:p},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Any files in "},{type:b,tag:d,props:{},children:[{type:a,value:"~\u002Fserver\u002Fapi"}]},{type:a,value:" and "},{type:b,tag:d,props:{},children:[{type:a,value:"~\u002Fserver\u002Fmiddleware"}]},{type:a,value:" will be automatically registered; you can remove them from your "},{type:b,tag:d,props:{},children:[{type:a,value:s}]},{type:a,value:" array."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Update any other items in your "},{type:b,tag:d,props:{},children:[{type:a,value:s}]},{type:a,value:" array to point to files or npm packages directly, rather than using inline functions."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"If you are adding any server hooks, such as "},{type:b,tag:d,props:{},children:[{type:a,value:"server:"}]},{type:a,value:" or "},{type:b,tag:d,props:{},children:[{type:a,value:"vue-renderer:"}]},{type:a,value:" you will need to remove these and wait for "},{type:b,tag:i,props:{href:"https:\u002F\u002Fgithub.com\u002Funjs\u002Fnitropack",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"nitropack"}]},{type:a,value:" support for runtime hooks and plugins."},{type:a,value:c}]},{type:a,value:c}]}]},toc:{title:h,searchDepth:j,depth:j,links:[{id:q,depth:j,text:r}]}},template:"Docs"},templateOptions:{header:f,footer:f,aside:f,asideClass:h,fluid:e,banner:e},_img:{}}],fetch:{"0":{headerLinks:[{title:"Getting Started",to:"\u002Fgetting-started\u002Fquick-start"},{title:"Guide",to:"\u002Fguide\u002Fconcepts\u002Fintroduction"},{title:"API",to:"\u002Fapi\u002Fcomposables\u002Fuse-async-data"},{title:"Examples",to:"\u002Fexamples\u002Fessentials\u002Fhello-world"},{title:"Community",to:"\u002Fcommunity\u002Fgetting-help"}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"bundling",to:"\u002Fmigration\u002Fbundling",title:"Build Tooling"},next:{slug:"module-authors",to:"\u002Fmigration\u002Fmodule-authors",title:"Modules"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseCode","Alert","CodeGroup","ProseEm","ReadMore","Sandbox","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseBlockquote","ProseImg","NeedContribution","LinkExample","ProseOl","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel"])},mutations:n}}("text","element","\n","prose-code-inline",false,true,"prose-li","","prose-a",2,"server","Server","In a built Nuxt 3 application, there is no runtime Nuxt dependency. That means your site will be highly performant, and ultra-slim. But it also means you can no longer hook into runtime Nuxt server hooks.",void 0,"prose-paragraph",".","steps","Steps","serverMiddleware")));