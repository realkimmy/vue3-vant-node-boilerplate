__NUXT_JSONP__("/", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X){C.ariaLabel=j;C.href=D;C.size=o;M.ariaLabel=j;M.href="\u002Fgetting-started";M.size=o;return {data:[{page:{key:"content:en:index.md",generatedAt:new Date(1658586920990),mtime:new Date(1658586920963),slug:h,title:t,position:"999900000000",to:"\u002F",draft:k,page:u,language:"en",navigation:k,template:"Page",description:"Build your next application with Vue 3 and experience hybrid rendering, with an improved directory structure and new features Nuxt 3 is an open source framework making web development simple and powerful.",empty:k,excerpt:y,body:{raw:"---\nnavigation: false\ntemplate: Page\ntitle: A beautifully designed blog system.\ndescription: 'Build your next application with Vue 3 and experience hybrid rendering, with an improved directory structure and new features Nuxt 3 is an open source framework making web development simple and powerful.'\n---\n\n::HomeHero\n---\nprimary:\n  text: Star on GitHub\n  url: https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu\n  icon: IconGitHub\n---\n\n#title\nA beautifully designed blog system.\n\n#description\nBuild your next application with Vue 3 and experience hybrid rendering, powerful data fetching and new features.\nNuxt 3 is an open source framework making web development simple and powerful.\n\n#secondary-button\n:button-link[Get started]{ href=\"\u002Fgetting-started\u002Fquick-start\" size=\"medium\" aria-label=\"Get started\" }\n::\n\n::home-features{.dark:bg-secondary-darkest .bg-gray-50}\n---\ncategory: Discover\n---\n#title\nWith new features\n\n#description\nNuxt 3 has been re-architected with a smaller core and optimized for faster performance and better developer experience.\n\n#default\n  ::section-content-item\n  ---\n  title: Lighter\n  description: Up to 75x smaller server deployments and smaller client bundle targeting modern browsers.\n  image: IconFeather\n  imageClass: w-10 h-10\n  ---\n  ::\n  ::section-content-item\n  ---\n  title: Faster\n  description: 'Optimized cold start with dynamic server code-splitting, powered by nitro.'\n  image: IconRabbit\n  imageClass: w-10 h-10\n  ---\n  ::\n  ::section-content-item\n  ---\n  soon: true\n  title: Hybrid\n  description: 'Incremental Static Generation and other advanced modes are now possible.'\n  image: IconHybrid\n  imageClass: w-10 h-10\n  ---\n  ::\n  ::section-content-item\n  ---\n  title: Suspense\n  description: 'Fetch data in any component, before or after navigation.'\n  image: IconSuspense\n  imageClass: w-10 h-10\n  ---\n  ::\n  ::section-content-item\n  ---\n  title: Composition API\n  description: \"Use the Composition API and Nuxt 3's composables for true code re-usability.\"\n  image: IconCAPI\n  imageClass: w-10 h-10\n  ---\n  ::\n  ::section-content-item\n  ---\n  title: Nuxt CLI\n  description: 'A new zero-dependency experience for easy scaffolding and module integration.'\n  image: IconCLI\n  imageClass: w-10 h-10\n  ---\n  ::\n  ::section-content-item\n  ---\n  soon: true\n  title: Nuxt DevTools\n  description: 'Work faster with info and quick fixes right in the browser.'\n  image: IconDevtools\n  imageClass: w-10 h-10\n  ---\n  ::\n  ::section-content-item\n  ---\n  title: Nuxt Kit\n  description: 'Brand new module development with TypeScript and cross-version compatibility.'\n  image: IconKit\n  imageClass: w-10 h-10\n  ---\n  ::\n  ::section-content-item\n  ---\n  title: Webpack 5\n  description: 'Faster build time and smaller bundle size, with no configuration required.'\n  image: IconWebpack\n  imageClass: w-10 h-10\n  ---\n  ::\n  ::section-content-item\n  ---\n  title: Vite\n  description: 'Experience lightning fast HMR by using Vite as your bundler.'\n  image: IconVite\n  imageClass: w-10 h-10\n  ---\n  ::\n  ::section-content-item\n  ---\n  title: Vue 3\n  description: 'Vue 3 is a solid foundation for your next web app.'\n  image: IconVue\n  imageClass: w-10 h-10\n  ---\n  ::\n  ::section-content-item\n  ---\n  title: TypeScript\n  description: 'Built with native TypeScript and ESM - no extra steps required.'\n  image: IconTypeScript\n  imageClass: w-10 h-10\n  ---\n  ::\n#bottom\n  :button-link[Get started]{ href=\"\u002Fgetting-started\" size=\"medium\" aria-label=\"Get started\" }\n::\n\n::section{.py-20 .text-lg}\n  ::nuxt-container{.text-justify}\n    :icon-nuxt-nitro{.h-32}\n    :headline[Nitro Engine]\n\n    We worked for 9 months on Nuxt's new server engine for Nuxt: [**Nitro**](\u002Fguide\u002Fconcepts\u002Fserver-engine). It unlocks new **full-stack capabilities** to Nuxt server and beyond.\n\n    In development, it uses [Rollup](https:\u002F\u002Frollupjs.org\u002Fguide\u002Fen\u002F) and [Node.js workers](https:\u002F\u002Fnodejs.org\u002Fapi\u002Fworker_threads.html) for your server code and context isolation. It also **generates your server API** by reading files in [`server\u002Fapi\u002F`](\u002Fguide\u002Fdirectory-structure\u002Fserver#api-routes) and **server middleware** from [`server\u002Fmiddleware\u002F`](\u002Fguide\u002Fdirectory-structure\u002Fserver#server-middleware).\n\n    In production, it builds your app and server into one universal [`.output`](\u002Fguide\u002Fdirectory-structure\u002Foutput) directory. This **output is light**: minified and removed from any Node.js modules (except polyfills). You can deploy this output on any system supporting JavaScript, from Node.js, Serverless, Workers, Edge-side rendering or purely static.\n\n    The output is combined with both runtime code to run your Nuxt server in any environment (including experimental browser Service Workers!) and serve you static files, making it a **true hybrid framework** for the JAMStack. In addition, a native storage layer is implemented, supporting multi source, drivers and local assets.\n\n    The foundation of the Nitro server is rollup and [h3](https:\u002F\u002Fgithub.com\u002Funjs\u002Fh3): a minimal http framework built for high performance and portability.\n\n    :button-link[Learn more about Nitro]{ href=\"\u002Fguide\u002Fconcepts\u002Fserver-engine\" size=\"medium\" aria-label=\"Learn more about Nitro\" }\n  ::\n::\n\n::section{.dark:bg-secondary-darkest .bg-gray-50 .py-20 .text-justify}\n  ::nuxt-container{.text-justify}\n    :icon-nuxt-bridge{.h-32}\n    :headline[Nuxt Bridge]\n\n    We moved to [Vue 3](https:\u002F\u002Fvuejs.org\u002F) and re-wrote Nuxt after 4 years of development to make it a strong foundation for the future.\n\n    ### Smooth upgrade to Nuxt 3\n\n    We've worked to make the upgrade as easy as possible between Nuxt 2 and Nuxt 3.\n\n    ::list\n    - Legacy plugins and modules will keep working\n    - Nuxt 2 config is compatible\n    - Partial pages options API available\n    ::\n\n    ### Bringing Nuxt 3 experience to your existing Nuxt 2 project\n\n    As we've been working on new features for Nuxt 3, we've back-ported some of them to Nuxt 2.\n\n    ::list{.mb-8}\n    - Using [Nitro server](\u002Fguide\u002Fconcepts\u002Fserver-engine) with Nuxt 2\n    - Using Composition API (same as Nuxt 3) with Nuxt 2\n    - Using new CLI and DevTools with Nuxt 2\n    - Progressively upgrade to Nuxt 3\n    - Compatibility with Nuxt 2 module ecosystem\n    - Upgrade piece by piece (Nitro, Composition API, Nuxt Kit)\n    ::\n\n    :button-link[Get started with Nuxt Bridge]{ href=\"\u002Fbridge\" size=\"medium\" aria-label=\"Get started\" }\n  ::\n::\n",ast:{type:"root",children:[{type:b,tag:"home-hero",props:{":primary":"{\"text\":\"Star on GitHub\",\"url\":\"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu\",\"icon\":\"IconGitHub\"}"},children:[{type:b,tag:l,props:{"v-slot:title":h},children:[{type:b,tag:d,props:z,children:[{type:a,value:t}]}],content:[{type:b,tag:d,props:z,children:[{type:a,value:t}]}]},{type:b,tag:l,props:{"v-slot:description":h},children:[{type:b,tag:d,props:A,children:[{type:a,value:B}]}],content:[{type:b,tag:d,props:A,children:[{type:a,value:B}]}]},{type:b,tag:l,props:{"v-slot:secondary-button":h},children:[{type:b,tag:m,props:C,children:[{type:a,value:j}]}],content:[{type:b,tag:m,props:C,children:[{type:a,value:j}]}]}]},{type:a,value:c},{type:b,tag:"home-features",props:{category:"Discover",className:[E,F]},children:[{type:b,tag:l,props:{"v-slot:title":h},children:[{type:b,tag:d,props:G,children:[{type:a,value:H}]}],content:[{type:b,tag:d,props:G,children:[{type:a,value:H}]}]},{type:b,tag:l,props:{"v-slot:description":h},children:[{type:b,tag:d,props:I,children:[{type:a,value:J}]}],content:[{type:b,tag:d,props:I,children:[{type:a,value:J}]}]},{type:b,tag:e,props:{description:"Up to 75x smaller server deployments and smaller client bundle targeting modern browsers.",image:"IconFeather",imageClass:f,title:"Lighter"},children:[]},{type:b,tag:e,props:{description:"Optimized cold start with dynamic server code-splitting, powered by nitro.",image:"IconRabbit",imageClass:f,title:"Faster"},children:[]},{type:b,tag:e,props:{description:"Incremental Static Generation and other advanced modes are now possible.",image:"IconHybrid",imageClass:f,title:"Hybrid",":soon":K},children:[]},{type:b,tag:e,props:{description:"Fetch data in any component, before or after navigation.",image:"IconSuspense",imageClass:f,title:"Suspense"},children:[]},{type:b,tag:e,props:{description:"Use the Composition API and Nuxt 3's composables for true code re-usability.",image:"IconCAPI",imageClass:f,title:"Composition API"},children:[]},{type:b,tag:e,props:{description:"A new zero-dependency experience for easy scaffolding and module integration.",image:"IconCLI",imageClass:f,title:"Nuxt CLI"},children:[]},{type:b,tag:e,props:{description:"Work faster with info and quick fixes right in the browser.",image:"IconDevtools",imageClass:f,title:"Nuxt DevTools",":soon":K},children:[]},{type:b,tag:e,props:{description:"Brand new module development with TypeScript and cross-version compatibility.",image:"IconKit",imageClass:f,title:"Nuxt Kit"},children:[]},{type:b,tag:e,props:{description:"Faster build time and smaller bundle size, with no configuration required.",image:"IconWebpack",imageClass:f,title:"Webpack 5"},children:[]},{type:b,tag:e,props:{description:"Experience lightning fast HMR by using Vite as your bundler.",image:"IconVite",imageClass:f,title:"Vite"},children:[]},{type:b,tag:e,props:{description:"Vue 3 is a solid foundation for your next web app.",image:"IconVue",imageClass:f,title:L},children:[]},{type:b,tag:e,props:{description:"Built with native TypeScript and ESM - no extra steps required.",image:"IconTypeScript",imageClass:f,title:"TypeScript"},children:[]},{type:b,tag:l,props:{"v-slot:bottom":h},children:[{type:b,tag:m,props:M,children:[{type:a,value:j}]}],content:[{type:b,tag:m,props:M,children:[{type:a,value:j}]}]}]},{type:a,value:c},{type:b,tag:N,props:{className:[O,"text-lg"]},children:[{type:b,tag:P,props:{className:[v]},children:[{type:b,tag:"icon-nuxt-nitro",props:{className:[Q]},children:[]},{type:b,tag:R,props:{},children:[{type:a,value:"Nitro Engine"}]},{type:b,tag:d,props:{},children:[{type:a,value:"We worked for 9 months on Nuxt's new server engine for Nuxt: "},{type:b,tag:g,props:{href:w},children:[{type:b,tag:n,props:{},children:[{type:a,value:"Nitro"}]}]},{type:a,value:". It unlocks new "},{type:b,tag:n,props:{},children:[{type:a,value:"full-stack capabilities"}]},{type:a,value:" to Nuxt server and beyond."}]},{type:b,tag:d,props:{},children:[{type:a,value:"In development, it uses "},{type:b,tag:g,props:{href:"https:\u002F\u002Frollupjs.org\u002Fguide\u002Fen\u002F",rel:[p,q,r],target:s},children:[{type:a,value:"Rollup"}]},{type:a,value:S},{type:b,tag:g,props:{href:"https:\u002F\u002Fnodejs.org\u002Fapi\u002Fworker_threads.html",rel:[p,q,r],target:s},children:[{type:a,value:"Node.js workers"}]},{type:a,value:" for your server code and context isolation. It also "},{type:b,tag:n,props:{},children:[{type:a,value:"generates your server API"}]},{type:a,value:" by reading files in "},{type:b,tag:g,props:{href:"\u002Fguide\u002Fdirectory-structure\u002Fserver#api-routes"},children:[{type:b,tag:x,props:{},children:[{type:a,value:"server\u002Fapi\u002F"}]}]},{type:a,value:S},{type:b,tag:n,props:{},children:[{type:a,value:"server middleware"}]},{type:a,value:" from "},{type:b,tag:g,props:{href:"\u002Fguide\u002Fdirectory-structure\u002Fserver#server-middleware"},children:[{type:b,tag:x,props:{},children:[{type:a,value:"server\u002Fmiddleware\u002F"}]}]},{type:a,value:"."}]},{type:b,tag:d,props:{},children:[{type:a,value:"In production, it builds your app and server into one universal "},{type:b,tag:g,props:{href:"\u002Fguide\u002Fdirectory-structure\u002Foutput"},children:[{type:b,tag:x,props:{},children:[{type:a,value:".output"}]}]},{type:a,value:" directory. This "},{type:b,tag:n,props:{},children:[{type:a,value:"output is light"}]},{type:a,value:": minified and removed from any Node.js modules (except polyfills). You can deploy this output on any system supporting JavaScript, from Node.js, Serverless, Workers, Edge-side rendering or purely static."}]},{type:b,tag:d,props:{},children:[{type:a,value:"The output is combined with both runtime code to run your Nuxt server in any environment (including experimental browser Service Workers!) and serve you static files, making it a "},{type:b,tag:n,props:{},children:[{type:a,value:"true hybrid framework"}]},{type:a,value:" for the JAMStack. In addition, a native storage layer is implemented, supporting multi source, drivers and local assets."}]},{type:b,tag:d,props:{},children:[{type:a,value:"The foundation of the Nitro server is rollup and "},{type:b,tag:g,props:{href:"https:\u002F\u002Fgithub.com\u002Funjs\u002Fh3",rel:[p,q,r],target:s},children:[{type:a,value:"h3"}]},{type:a,value:": a minimal http framework built for high performance and portability."}]},{type:b,tag:m,props:{ariaLabel:T,href:w,size:o},children:[{type:a,value:T}]}]}]},{type:a,value:c},{type:b,tag:N,props:{className:[E,F,O,v]},children:[{type:b,tag:P,props:{className:[v]},children:[{type:b,tag:"icon-nuxt-bridge",props:{className:[Q]},children:[]},{type:b,tag:R,props:{},children:[{type:a,value:"Nuxt Bridge"}]},{type:b,tag:d,props:{},children:[{type:a,value:"We moved to "},{type:b,tag:g,props:{href:"https:\u002F\u002Fvuejs.org\u002F",rel:[p,q,r],target:s},children:[{type:a,value:L}]},{type:a,value:" and re-wrote Nuxt after 4 years of development to make it a strong foundation for the future."}]},{type:b,tag:U,props:{id:"smooth-upgrade-to-nuxt-3"},children:[{type:b,tag:g,props:{href:"#smooth-upgrade-to-nuxt-3"},children:[{type:a,value:"Smooth upgrade to Nuxt 3"}]}]},{type:b,tag:d,props:{},children:[{type:a,value:"We've worked to make the upgrade as easy as possible between Nuxt 2 and Nuxt 3."}]},{type:b,tag:V,props:{},children:[{type:b,tag:W,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:a,value:"Legacy plugins and modules will keep working"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:a,value:"Nuxt 2 config is compatible"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:a,value:"Partial pages options API available"},{type:a,value:c}]},{type:a,value:c}]}]},{type:b,tag:U,props:{id:"bringing-nuxt-3-experience-to-your-existing-nuxt-2-project"},children:[{type:b,tag:g,props:{href:"#bringing-nuxt-3-experience-to-your-existing-nuxt-2-project"},children:[{type:a,value:"Bringing Nuxt 3 experience to your existing Nuxt 2 project"}]}]},{type:b,tag:d,props:{},children:[{type:a,value:"As we've been working on new features for Nuxt 3, we've back-ported some of them to Nuxt 2."}]},{type:b,tag:V,props:{className:["mb-8"]},children:[{type:b,tag:W,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:a,value:"Using "},{type:b,tag:g,props:{href:w},children:[{type:a,value:"Nitro server"}]},{type:a,value:" with Nuxt 2"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:a,value:"Using Composition API (same as Nuxt 3) with Nuxt 2"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:a,value:"Using new CLI and DevTools with Nuxt 2"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:a,value:"Progressively upgrade to Nuxt 3"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:a,value:"Compatibility with Nuxt 2 module ecosystem"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:a,value:"Upgrade piece by piece (Nitro, Composition API, Nuxt Kit)"},{type:a,value:c}]},{type:a,value:c}]}]},{type:b,tag:m,props:{ariaLabel:j,href:"\u002Fbridge",size:o},children:[{type:a,value:"Get started with Nuxt Bridge"}]}]}]}]},toc:{title:h,searchDepth:X,depth:X,links:[]}}},templateOptions:{header:u,footer:u,aside:k,asideClass:h,fluid:k,banner:k},_img:{}}],fetch:{"0":{headerLinks:[{title:"Getting Started",to:D},{title:"Guide",to:"\u002Fguide\u002Fconcepts\u002Fintroduction"},{title:"API",to:"\u002Fapi\u002Fcomposables\u002Fuse-async-data"},{title:"Examples",to:"\u002Fexamples\u002Fessentials\u002Fhello-world"},{title:"Community",to:"\u002Fcommunity\u002Fgetting-help"}]},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List"])},mutations:y}}("text","element","\n","prose-paragraph","section-content-item","w-10 h-10","prose-a","","prose-li","Get started",false,"template","button-link","prose-strong","medium","nofollow","noopener","noreferrer","_blank","A beautifully designed blog system.",true,"text-justify","\u002Fguide\u002Fconcepts\u002Fserver-engine","prose-code-inline",void 0,{},{},"Build your next application with Vue 3 and experience hybrid rendering, powerful data fetching and new features.\nNuxt 3 is an open source framework making web development simple and powerful.",{},"\u002Fgetting-started\u002Fquick-start","dark:bg-secondary-darkest","bg-gray-50",{},"With new features",{},"Nuxt 3 has been re-architected with a smaller core and optimized for faster performance and better developer experience.","true","Vue 3",{},"section","py-20","nuxt-container","h-32","headline"," and ","Learn more about Nitro","prose-h3","list","prose-ul",2)));