__NUXT_JSONP__("/guide/directory-structure/composables", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an){return {data:[{page:{key:"content:en:2.guide:3.directory-structure:5.composables.md",generatedAt:new Date(1658586926569),mtime:new Date(1658586926561),slug:P,title:P,position:"000200030005",to:"\u002Fguide\u002Fdirectory-structure\u002Fcomposables",draft:x,page:y,language:"en",icon:"IconDirectory",head:{title:Q},empty:x,description:"Nuxt 3 supports composables\u002F directory to automatically import your Vue composables into your application using auto-imports!",excerpt:R,body:{raw:"---\nicon: IconDirectory\ntitle: 'composables'\nhead.title: Composables directory\n---\n\n# Composables directory\n\nNuxt 3 supports `composables\u002F` directory to automatically import your Vue composables into your application using [auto-imports](\u002Fguide\u002Fconcepts\u002Fauto-imports)!\n\n## How files are scanned\n\nNuxt only scans files at the top level of the `composables\u002F` directory (or index files within any subdirectories) for composables.\n\nFor example:\n\n```bash\ncomposables\n | - useFoo.ts \u002F\u002F scanned\n | - useBar\n | --- supportingFile.ts \u002F\u002F not scanned\n | --- index.ts \u002F\u002F scanned\n```\n\nOnly `useFoo.ts` and `useBar\u002Findex.ts` would be searched for imports - and if the latter is a default export, it would be registered as `useBar` rather than `index`.\n\nTo get auto imports for `useBar\u002FsupportingFile.ts`, you have to re-export the composables you need from the `useBar\u002Findex.ts` file.\n\n```js [composables\u002FuseBar\u002Findex.ts]\nexport const useBar = () =\u003E {\n}\n\n\u002F\u002F Enables auto import for this export\nexport { useBaz } from '.\u002FsupportingFile'\n```\n\n::alert{type=warning}\nAuto import generating doesn't work with `export * from '.\u002FsupportingFile.ts'`, you must use named exports or a default export.\n::\n\nUnder the hood, Nuxt auto generates the file `.nuxt\u002Fauto-imports.d.ts` to declare the types.\n\nBe aware that you have to run `nuxi prepare`, `nuxi dev` or `nuxi build` in order to let Nuxt generates the types. If you create a composable without having the dev server running, typescript will throw an error `Cannot find name 'useBar'.`\n\n## Example: (using named export)\n\n```js [composables\u002FuseFoo.ts]\nexport const useFoo = () =\u003E {\n  return useState('foo', () =\u003E 'bar')\n}\n```\n\n## Example: (using default export)\n\n```js [composables\u002Fuse-foo.ts or composables\u002FuseFoo.ts]\n\u002F\u002F It will be available as useFoo() (camelCase of file name without extension)\nexport default function () {\n  return useState('foo', () =\u003E 'bar')\n}\n```\n\nYou can now auto-import it:\n\n```vue [app.vue]\n\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    {{ foo }}\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n\n\u003Cscript setup\u003E\nconst foo = useFoo()\n\u003C\u002Fscript\u003E\n```\n\n:LinkExample{link=\"\u002Fexamples\u002Fauto-imports\u002Fcomposables\"}\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"composables-directory"},children:[{type:a,value:Q}]},{type:a,value:f},{type:b,tag:l,props:{class:"d-heading-description"},children:[{type:a,value:"Nuxt 3 supports "},{type:b,tag:h,props:{},children:[{type:a,value:S}]},{type:a,value:" directory to automatically import your Vue composables into your application using "},{type:b,tag:z,props:{href:"\u002Fguide\u002Fconcepts\u002Fauto-imports"},children:[{type:a,value:"auto-imports"}]},{type:a,value:"!"}]},{type:a,value:f},{type:b,tag:H,props:{id:T},children:[{type:b,tag:z,props:{href:"#how-files-are-scanned"},children:[{type:a,value:U}]}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"Nuxt only scans files at the top level of the "},{type:b,tag:h,props:{},children:[{type:a,value:S}]},{type:a,value:" directory (or index files within any subdirectories) for composables."}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"For example:"}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:s,props:{className:[t,"language-bash"]},children:[{type:b,tag:u,props:{},children:[{type:a,value:"composables\n "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:a,value:" - useFoo.ts \u002F\u002F scanned\n "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:a,value:" - useBar\n "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:a,value:" --- supportingFile.ts \u002F\u002F not scanned\n "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:a,value:" --- index.ts \u002F\u002F scanned\n"}]}]}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"Only "},{type:b,tag:h,props:{},children:[{type:a,value:"useFoo.ts"}]},{type:a,value:" and "},{type:b,tag:h,props:{},children:[{type:a,value:V}]},{type:a,value:" would be searched for imports - and if the latter is a default export, it would be registered as "},{type:b,tag:h,props:{},children:[{type:a,value:W}]},{type:a,value:" rather than "},{type:b,tag:h,props:{},children:[{type:a,value:"index"}]},{type:a,value:"."}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"To get auto imports for "},{type:b,tag:h,props:{},children:[{type:a,value:"useBar\u002FsupportingFile.ts"}]},{type:a,value:", you have to re-export the composables you need from the "},{type:b,tag:h,props:{},children:[{type:a,value:V}]},{type:a,value:" file."}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[B]},children:[{type:a,value:"composables\u002FuseBar\u002Findex.ts"}]},{type:b,tag:s,props:{className:[t,I]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,i,o]},children:[{type:a,value:C}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,X,p]},children:[{type:a,value:W}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:K}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,D,k]},children:[{type:a,value:E}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:"\u002F\u002F Enables auto import for this export"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i,o]},children:[{type:a,value:C}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"exports"]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:" useBaz "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,o]},children:[{type:a,value:"from"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"'.\u002FsupportingFile'"}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:"alert",props:{type:"warning"},children:[{type:b,tag:l,props:{},children:[{type:a,value:"Auto import generating doesn't work with "},{type:b,tag:h,props:{},children:[{type:a,value:"export * from '.\u002FsupportingFile.ts'"}]},{type:a,value:", you must use named exports or a default export."}]}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"Under the hood, Nuxt auto generates the file "},{type:b,tag:h,props:{},children:[{type:a,value:".nuxt\u002Fauto-imports.d.ts"}]},{type:a,value:" to declare the types."}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"Be aware that you have to run "},{type:b,tag:h,props:{},children:[{type:a,value:"nuxi prepare"}]},{type:a,value:", "},{type:b,tag:h,props:{},children:[{type:a,value:"nuxi dev"}]},{type:a,value:" or "},{type:b,tag:h,props:{},children:[{type:a,value:"nuxi build"}]},{type:a,value:" in order to let Nuxt generates the types. If you create a composable without having the dev server running, typescript will throw an error "},{type:b,tag:h,props:{},children:[{type:a,value:"Cannot find name 'useBar'."}]}]},{type:a,value:f},{type:b,tag:H,props:{id:_},children:[{type:b,tag:z,props:{href:"#example-using-named-export"},children:[{type:a,value:$}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[B]},children:[{type:a,value:"composables\u002FuseFoo.ts"}]},{type:b,tag:s,props:{className:[t,I]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,i,o]},children:[{type:a,value:C}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,X,p]},children:[{type:a,value:aa}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:K}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,D,k]},children:[{type:a,value:E}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,i,ab]},children:[{type:a,value:ac}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:af}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,D,k]},children:[{type:a,value:E}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:H,props:{id:ah},children:[{type:b,tag:z,props:{href:"#example-using-default-export"},children:[{type:a,value:ai}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[B]},children:[{type:a,value:"composables\u002Fuse-foo.ts or composables\u002FuseFoo.ts"}]},{type:b,tag:s,props:{className:[t,I]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:"\u002F\u002F It will be available as useFoo() (camelCase of file name without extension)"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i,o]},children:[{type:a,value:C}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,o]},children:[{type:a,value:"default"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,i,ab]},children:[{type:a,value:ac}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:af}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,D,k]},children:[{type:a,value:E}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"You can now auto-import it:"}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[B]},children:[{type:a,value:"app.vue"}]},{type:b,tag:s,props:{className:[t,"language-html"]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:"\n    {{ foo }}\n  "},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:O}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"attr-name"]},children:[{type:a,value:"setup"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:b,tag:c,props:{className:[d,O]},children:[{type:b,tag:c,props:{className:[d,"language-javascript"]},children:[{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:J}]},{type:a,value:" foo "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:K}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:"link-example",props:{link:"\u002Fexamples\u002Fauto-imports\u002Fcomposables"},children:[]}]},toc:{title:al,searchDepth:w,depth:w,links:[{id:T,depth:w,text:U},{id:_,depth:w,text:$},{id:ah,depth:w,text:ai}]}},template:"Docs"},templateOptions:{header:y,footer:y,aside:y,asideClass:al,fluid:x,banner:x},_img:{}}],fetch:{"0":{headerLinks:[{title:"Getting Started",to:"\u002Fgetting-started\u002Fquick-start"},{title:"Guide",to:"\u002Fguide\u002Fconcepts\u002Fintroduction"},{title:"API",to:"\u002Fapi\u002Fcomposables\u002Fuse-async-data"},{title:"Examples",to:"\u002Fexamples\u002Fessentials\u002Fhello-world"},{title:"Community",to:"\u002Fcommunity\u002Fgetting-help"}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:am,to:"\u002Fguide\u002Fdirectory-structure\u002Fcomponents",title:am},next:{slug:an,to:"\u002Fguide\u002Fdirectory-structure\u002Fcontent",title:an}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseCode","Alert","CodeGroup","ProseEm","ReadMore","Sandbox","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseBlockquote","ProseImg","NeedContribution","LinkExample","ProseOl","ProseH4"])},mutations:R}}("text","element","span","token","punctuation","\n"," ","prose-code-inline","keyword","tag","operator","prose-paragraph","(",")","module","function","\u003E","prose-code","pre","line-numbers","code","string",2,false,true,"prose-a","|","filename","export","arrow","=\u003E","{","}","prose-h2","language-js","const","=","\n  ","\u003C","\u003C\u002F","script","composables","Composables directory",void 0,"composables\u002F","how-files-are-scanned","How files are scanned","useBar\u002Findex.ts","useBar","function-variable","\n\n","comment","example-using-named-export","Example: (using named export)","useFoo","control-flow","return","useState","'foo'",",","'bar'","example-using-default-export","Example: (using default export)","template","div","","components","content")));