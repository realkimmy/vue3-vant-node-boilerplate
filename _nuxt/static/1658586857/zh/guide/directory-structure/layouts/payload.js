__NUXT_JSONP__("/zh/guide/directory-structure/layouts", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN){return {data:[{page:{key:"content:zh:2.guide:3.directory-structure:7.layouts.md",generatedAt:new Date(1658586935925),mtime:new Date(1658586935900),slug:ai,title:ai,position:"000200030007",to:"\u002Fguide\u002Fdirectory-structure\u002Flayouts",draft:N,page:O,language:"zh",icon:"IconDirectory",head:{title:aj},empty:N,description:ak,excerpt:al,body:{raw:"---\nicon: IconDirectory\ntitle: 'layouts'\nhead.title: Layouts directory\n---\n\n# Layouts directory\n\nNuxt provides a customizable layouts framework you can use throughout your application, ideal for extracting common UI or code patterns into reusable layout components.\n\nLayouts are placed in the `layouts\u002F` directory and will be automatically loaded via asynchronous import when used. Layouts are used by adding `\u003CNuxtLayout\u003E` to your `app.vue`, and either setting a `layout` property as part of your page metadata (if you are using the `~\u002Fpages` integration), or by manually specifying it as a prop to `\u003CNuxtLayout\u003E`. (**Note**: The layout name is normalized to kebab-case, so `someLayout` becomes `some-layout`.)\n\nIf you only have a single layout in your application, we recommend using [app.vue](\u002Fguide\u002Fdirectory-structure\u002Fapp) instead.\n\n::alert{type=warning}\nUnlike other components, your layouts must have a single root element to allow Nuxt to apply transitions between layout changes - and this root element cannot be a `\u003Cslot \u002F\u003E`.\n::\n\n## Enabling the default layout\n\nAdd a `~\u002Flayouts\u002Fdefault.vue`:\n\n```vue [layouts\u002Fdefault.vue]\n\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    Some default layout shared across all pages\n    \u003Cslot \u002F\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n```\n\nIn a layout file, the content of the layout will be loaded in the `\u003Cslot \u002F\u003E`, rather than using a special component.\n\nIf you use a `app.vue` you will also need to add `\u003CNuxtLayout\u003E`:\n\n```vue [app.vue]\n\u003Ctemplate\u003E\n  \u003CNuxtLayout\u003E\n    some page content\n  \u003C\u002FNuxtLayout\u003E\n\u003C\u002Ftemplate\u003E\n```\n\n## Setting another layout\n\n```bash\n-| layouts\u002F\n---| default.vue\n---| custom.vue\n```\n\nYou can directly override the default layout like this:\n\n```vue{}[app.vue]\n\u003Ctemplate\u003E\n  \u003CNuxtLayout :name=\"layout\"\u003E\n    \u003CNuxtPage \u002F\u003E\n  \u003C\u002FNuxtLayout\u003E\n\u003C\u002Ftemplate\u003E\n\n\u003Cscript setup\u003E\n\u002F\u002F You might choose this based on an API call or logged-in status\nconst layout = \"custom\";\n\u003C\u002Fscript\u003E\n```\n\nAlternatively, you can override the default layout per-page like this:\n\n::code-group\n\n```vue{}[pages\u002Findex.vue]\n\u003Cscript\u003E\n\u002F\u002F This will also work in `\u003Cscript setup\u003E`\ndefinePageMeta({\n  layout: \"custom\",\n});\n\u003C\u002Fscript\u003E\n```\n\n```vue{}[app.vue]\n\u003Ctemplate\u003E\n  \u003CNuxtLayout\u003E\n    \u003CNuxtPage \u002F\u003E\n  \u003C\u002FNuxtLayout\u003E\n\u003C\u002Ftemplate\u003E\n```\n\n```vue [layouts\u002Fcustom.vue]\n\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    Some *custom* layout\n    \u003Cslot \u002F\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n```\n\n```vue [layouts\u002Fdefault.vue]\n\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    A *default* layout\n    \u003Cslot \u002F\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n```\n\n::\n\n::alert{type=info}\nLearn more about [defining page meta](\u002Fguide\u002Fdirectory-structure\u002Fpages#page-metadata).\n::\n\n## Changing the layout dynamically\n\nYou can also use a ref or computed property for your layout.\n\n```vue\n\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    \u003Cbutton @click=\"enableCustomLayout\"\u003EUpdate layout\u003C\u002Fbutton\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n\n\u003Cscript setup\u003E\nconst route = useRoute()\nfunction enableCustomLayout () {\n  route.meta.layout = \"custom\"\n}\ndefinePageMeta({\n  layout: false,\n});\n\u003C\u002Fscript\u003E\n```\n\n:LinkExample{link=\"\u002Fexamples\u002Frouting\u002Flayouts\"}\n\n## Overriding a layout on a per-page basis\n\nIf you are using the `~\u002Fpages` integration, you can take full control by setting `layout: false` and then using the `\u003CNuxtLayout\u003E` component within the page.\n\n::code-group\n\n```vue [pages\u002Findex.vue]\n\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    \u003CNuxtLayout name=\"custom\"\u003E\n      \u003Ctemplate #header\u003E Some header template content. \u003C\u002Ftemplate\u003E\n\n      The rest of the page\n    \u003C\u002FNuxtLayout\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n\n\u003Cscript setup\u003E\ndefinePageMeta({\n  layout: false,\n});\n\u003C\u002Fscript\u003E\n```\n\n```vue [layouts\u002Fcustom.vue]\n\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    \u003Cheader\u003E\n      \u003Cslot name=\"header\"\u003E\n        Default header content\n      \u003C\u002Fslot\u003E\n    \u003C\u002Fheader\u003E\n    \u003Cmain\u003E\n      \u003Cslot \u002F\u003E\n    \u003C\u002Fmain\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n```\n\n::\n\n::alert{type=warning}\nIf you use `\u003CNuxtLayout\u003E` within your pages, make sure it is not the root element (or disable layout\u002Fpage transitions).\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"layouts-directory"},children:[{type:a,value:aj}]},{type:a,value:g},{type:b,tag:o,props:{class:"d-heading-description"},children:[{type:a,value:ak}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"Layouts are placed in the "},{type:b,tag:m,props:{},children:[{type:a,value:"layouts\u002F"}]},{type:a,value:" directory and will be automatically loaded via asynchronous import when used. Layouts are used by adding "},{type:b,tag:m,props:{},children:[{type:a,value:J}]},{type:a,value:" to your "},{type:b,tag:m,props:{},children:[{type:a,value:D}]},{type:a,value:", and either setting a "},{type:b,tag:m,props:{},children:[{type:a,value:X}]},{type:a,value:" property as part of your page metadata (if you are using the "},{type:b,tag:m,props:{},children:[{type:a,value:am}]},{type:a,value:" integration), or by manually specifying it as a prop to "},{type:b,tag:m,props:{},children:[{type:a,value:J}]},{type:a,value:". ("},{type:b,tag:"prose-strong",props:{},children:[{type:a,value:"Note"}]},{type:a,value:": The layout name is normalized to kebab-case, so "},{type:b,tag:m,props:{},children:[{type:a,value:"someLayout"}]},{type:a,value:" becomes "},{type:b,tag:m,props:{},children:[{type:a,value:"some-layout"}]},{type:a,value:".)"}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"If you only have a single layout in your application, we recommend using "},{type:b,tag:E,props:{href:"\u002Fguide\u002Fdirectory-structure\u002Fapp"},children:[{type:a,value:D}]},{type:a,value:" instead."}]},{type:a,value:g},{type:b,tag:Y,props:{type:an},children:[{type:b,tag:o,props:{},children:[{type:a,value:"Unlike other components, your layouts must have a single root element to allow Nuxt to apply transitions between layout changes - and this root element cannot be a "},{type:b,tag:m,props:{},children:[{type:a,value:ao}]},{type:a,value:P}]}]},{type:a,value:g},{type:b,tag:Q,props:{id:ap},children:[{type:b,tag:E,props:{href:"#enabling-the-default-layout"},children:[{type:a,value:aq}]}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"Add a "},{type:b,tag:m,props:{},children:[{type:a,value:"~\u002Flayouts\u002Fdefault.vue"}]},{type:a,value:K}]},{type:a,value:g},{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[w]},children:[{type:a,value:ar}]},{type:b,tag:s,props:{className:[t,v]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:"\n    Some default layout shared across all pages\n    "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:F}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"In a layout file, the content of the layout will be loaded in the "},{type:b,tag:m,props:{},children:[{type:a,value:ao}]},{type:a,value:", rather than using a special component."}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"If you use a "},{type:b,tag:m,props:{},children:[{type:a,value:D}]},{type:a,value:" you will also need to add "},{type:b,tag:m,props:{},children:[{type:a,value:J}]},{type:a,value:K}]},{type:a,value:g},{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[w]},children:[{type:a,value:D}]},{type:b,tag:s,props:{className:[t,v]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:"\n    some page content\n  "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:Q,props:{id:as},children:[{type:b,tag:E,props:{href:"#setting-another-layout"},children:[{type:a,value:at}]}]},{type:a,value:g},{type:b,tag:r,props:{},children:[{type:b,tag:s,props:{className:[t,"language-bash"]},children:[{type:b,tag:u,props:{},children:[{type:a,value:"-"},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:Z}]},{type:a,value:" layouts\u002F\n---"},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:Z}]},{type:a,value:" default.vue\n---"},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:Z}]},{type:a,value:" custom.vue\n"}]}]}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"You can directly override the default layout like this:"}]},{type:a,value:g},{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[w]},children:[{type:a,value:D}]},{type:b,tag:s,props:{className:[t,v]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:y}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:":name"}]},{type:b,tag:c,props:{className:[d,R]},children:[{type:b,tag:c,props:{className:[d,e,S]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:au}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:q}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:g},{type:b,tag:c,props:{className:[d,av]},children:[{type:a,value:"\u002F\u002F You might choose this based on an API call or logged-in status"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:aw}]},{type:a,value:" layout "},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:C}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,ab]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"Alternatively, you can override the default layout per-page like this:"}]},{type:a,value:g},{type:b,tag:ax,props:{},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[w]},children:[{type:a,value:ay}]},{type:b,tag:s,props:{className:[t,v]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:g},{type:b,tag:c,props:{className:[d,av]},children:[{type:a,value:"\u002F\u002F This will also work in `\u003Cscript setup\u003E`"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:K}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,ab]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:af}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:g}]}]}]},{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[w]},children:[{type:a,value:D}]},{type:b,tag:s,props:{className:[t,v]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:au}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:g}]}]}]},{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[w]},children:[{type:a,value:az}]},{type:b,tag:s,props:{className:[t,v]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:"\n    Some *custom* layout\n    "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:F}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:g}]}]}]},{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[w]},children:[{type:a,value:ar}]},{type:b,tag:s,props:{className:[t,v]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:"\n    A *default* layout\n    "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:F}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:g}]}]}]}]},{type:a,value:g},{type:b,tag:Y,props:{type:"info"},children:[{type:b,tag:o,props:{},children:[{type:a,value:"Learn more about "},{type:b,tag:E,props:{href:"\u002Fguide\u002Fdirectory-structure\u002Fpages#page-metadata"},children:[{type:a,value:"defining page meta"}]},{type:a,value:P}]}]},{type:a,value:g},{type:b,tag:Q,props:{id:aA},children:[{type:b,tag:E,props:{href:"#changing-the-layout-dynamically"},children:[{type:a,value:aB}]}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"You can also use a ref or computed property for your layout."}]},{type:a,value:g},{type:b,tag:r,props:{},children:[{type:b,tag:s,props:{className:[t,v]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aC}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"@click"}]},{type:b,tag:c,props:{className:[d,R]},children:[{type:b,tag:c,props:{className:[d,e,S]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:aD},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:"Update layout"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:q}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:g},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:aw}]},{type:a,value:" route "},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:C}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"useRoute"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:H}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:aD}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:"\n  route"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,aE]},children:[{type:a,value:"meta"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,aE]},children:[{type:a,value:X}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:C}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,ab]},children:[{type:a,value:ac}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:K}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,aF]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:af}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:"link-example",props:{link:"\u002Fexamples\u002Frouting\u002Flayouts"},children:[]},{type:a,value:g},{type:b,tag:Q,props:{id:aH},children:[{type:b,tag:E,props:{href:"#overriding-a-layout-on-a-per-page-basis"},children:[{type:a,value:aI}]}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"If you are using the "},{type:b,tag:m,props:{},children:[{type:a,value:am}]},{type:a,value:" integration, you can take full control by setting "},{type:b,tag:m,props:{},children:[{type:a,value:"layout: false"}]},{type:a,value:" and then using the "},{type:b,tag:m,props:{},children:[{type:a,value:J}]},{type:a,value:" component within the page."}]},{type:a,value:g},{type:b,tag:ax,props:{},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[w]},children:[{type:a,value:ay}]},{type:b,tag:s,props:{className:[t,v]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:y}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{className:[d,R]},children:[{type:b,tag:c,props:{className:[d,e,S]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:"custom"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:l}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"#header"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:" Some header template content. "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:"\n\n      The rest of the page\n    "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:q}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:g},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:K}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,aF]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:af}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:g}]}]}]},{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[w]},children:[{type:a,value:az}]},{type:b,tag:s,props:{className:[t,v]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:F}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{className:[d,R]},children:[{type:b,tag:c,props:{className:[d,e,S]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:"\n        Default header content\n      "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:F}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:g}]}]}]}]},{type:a,value:g},{type:b,tag:Y,props:{type:an},children:[{type:b,tag:o,props:{},children:[{type:a,value:"If you use "},{type:b,tag:m,props:{},children:[{type:a,value:J}]},{type:a,value:" within your pages, make sure it is not the root element (or disable layout\u002Fpage transitions)."}]}]}]},toc:{title:aL,searchDepth:I,depth:I,links:[{id:ap,depth:I,text:aq},{id:as,depth:I,text:at},{id:aA,depth:I,text:aB},{id:aH,depth:I,text:aI}]}},template:"Docs"},templateOptions:{header:O,footer:O,aside:O,asideClass:aL,fluid:N,banner:N},_img:{}}],fetch:{"0":{headerLinks:[{title:"Getting Started",to:"\u002Fgetting-started\u002Fquick-start"},{title:"Guide",to:"\u002Fguide\u002Fconcepts\u002Fintroduction"},{title:"API",to:"\u002Fapi\u002Fcomposables\u002Fuse-async-data"},{title:"示例",to:"\u002Fexamples\u002Fessentials\u002Fhello-world"},{title:"社区",to:"\u002Fcommunity\u002Fgetting-help"}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:aM,to:"\u002Fguide\u002Fdirectory-structure\u002Fcontent",title:aM},next:{slug:aN,to:"\u002Fguide\u002Fdirectory-structure\u002Fmiddleware",title:aN}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseCode","Alert","CodeGroup","ProseEm","ReadMore","Sandbox","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseBlockquote","ProseImg","NeedContribution","LinkExample","ProseOl","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel"])},mutations:al}}("text","element","span","token","punctuation","tag","\n","\u003E","\u003C","\u003C\u002F"," ","template","prose-code-inline","\n  ","prose-paragraph","div","script","prose-code","pre","line-numbers","code","language-html","filename","operator","NuxtLayout","attr-name","\"","\n    ","=","app.vue","prose-a","slot","\u002F\u003E","function",2,"\u003CNuxtLayout\u003E",":","(",")",false,true,".","prose-h2","attr-value","attr-equals","language-javascript",";","{","}","layout","alert","|","\n\n","setup","keyword","string","\"custom\"","definePageMeta","\n  layout",",","\n      ","header","layouts","Layouts directory","Nuxt provides a customizable layouts framework you can use throughout your application, ideal for extracting common UI or code patterns into reusable layout components.",void 0,"~\u002Fpages","warning","\u003Cslot \u002F\u003E","enabling-the-default-layout","Enabling the default layout","layouts\u002Fdefault.vue","setting-another-layout","Setting another layout","NuxtPage","comment","const","code-group","pages\u002Findex.vue","layouts\u002Fcustom.vue","changing-the-layout-dynamically","Changing the layout dynamically","button","enableCustomLayout","property-access","boolean","false","overriding-a-layout-on-a-per-page-basis","Overriding a layout on a per-page basis","name","main","","content","middleware")));