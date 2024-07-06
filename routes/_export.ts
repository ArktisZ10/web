// Exports router modules for serverless env that doesn't support the dynamic import.
// This module will be updated automaticlly in develoment mode, do NOT edit it manually.
// deno-fmt-ignore-file
// deno-lint-ignore-file
// @ts-nocheck
var l=Object.defineProperty;var d=(t,e)=>{for(var s in e)l(t,s,{get:e[s],enumerable:!0})};import*as u from"./_app.tsx";import*as g from"./_404.tsx";import*as f from"./index.tsx";import*as b from"./docs.tsx";var r={};d(r,{default:()=>m});import{Fragment as h,jsx as n,jsxs as o}from"https://esm.sh/v135/react@18.2.0/jsx-runtime";import{useMDXComponents as a}from"https://esm.sh/v135/@mdx-js/react@2.3.0";import{Head as c}from"aleph/react";function i(t){let e=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",em:"em",blockquote:"blockquote",strong:"strong"},a(),t.components);return o(h,{children:[n(c,{children:n("title",{children:"About - Projects"})}),`
`,n(e.h1,{id:"about-this-website",children:"About this website"}),`
`,n(e.h2,{id:"still-under-construction",children:"Still under construction"}),`
`,o(e.p,{children:["This website is a slow work in-progress. The layout and design is based on ",n(e.a,{href:""})]}),`
`,n(e.h2,{id:"alephjs-as-framework",children:"Aleph.js as framework"}),`
`,n(e.p,{children:o(e.em,{children:["From the ",n(e.a,{href:"https://alephjs.org/docs",children:"Aleph.js"})," documentation:"]})}),`
`,o(e.blockquote,{children:[`
`,o(e.p,{children:[n(e.strong,{children:"Aleph.js"})," (or ",n(e.strong,{children:"Aleph"})," or** \u05D0 ",n(e.strong,{children:"or"}),` \u963F\u83B1\u592B, \u02C8\u0251\u02D0l\u025Bf) is a fullstack framework
in `,n(e.a,{href:"https://deno.com/",children:"Deno"}),". Inspired by ",n(e.a,{href:"https://nextjs.org/",children:"Next.js"}),`,
`,n(e.a,{href:"https://remix.run/",children:"Remix"})," and ",n(e.a,{href:"https://vitejs.dev/",children:"Vite"}),"."]}),`
`,o(e.blockquote,{children:[`
`,o(e.p,{children:[`The name is taken from the book
`,n(e.a,{href:"http://phinnweb.org/links/literature/borges/aleph.html",children:"The Aleph"})," by ",n(e.strong,{children:`Jorge
Luis Borges.`})]}),`
`]}),`
`,n(e.p,{children:`Aleph.js is modern framework that doesn't need webpack or other bundler since it
uses the ES Module syntax during development. Every module only needs to be
compiled once, when a module changes, Aleph.js just needs to re-compile that
single module. There is no time wasted re-bundling everytime a change is made.
This, along with Hot Module Replacement (HMR) and Fast Refresh, leads to instant
updates in the browser.`}),`
`,n(e.p,{children:`Aleph.js uses modern tools to build your app. It transpiles code using swc in WASM
with high performance, and bundles modules with esbuild at optimization time
extremely fast.`}),`
`,n(e.p,{children:`Aleph.js works on top of Deno, a simple, modern and secure runtime for JavaScript
and TypeScript. All dependencies are imported using URLs, and managed by Deno cache
system. No package.json and node_modules directory needed.`}),`
`]}),`
`,n(e.h2,{id:"unocss-as-styling-engine",children:"UnoCSS as styling engine"}),`
`,n(e.p,{children:`UnoCSS is an atomic CSS engine that attempts to translate CSS classes according to
predefined rules in order to generatet the CSS for a given node. Its standard
preset is fully compatible with Tailwind, while still being highly flexible and
extendable.`})]})}function p(t={}){let{wrapper:e}=Object.assign({},a(),t.components);return e?n(e,Object.assign({},t,{children:n(i,t)})):i(t)}var m=p;var x={"/_app":u,"/_404":g,"/":f,"/docs":b,"/docs/index":r,depGraph:{"modules":[{"specifier":"./routes/docs/index.mdx"}]}};export{x as default};
