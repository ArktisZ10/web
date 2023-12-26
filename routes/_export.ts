// Exports router modules for serverless env that doesn't support the dynamic import.
// This module will be updated automaticlly in develoment mode, do NOT edit it manually.
// deno-fmt-ignore-file
// deno-lint-ignore-file
// @ts-nocheck
var p=Object.defineProperty;var a=(t,e)=>{for(var d in e)p(t,d,{get:e[d],enumerable:!0})};import*as M from"./_app.tsx";import*as y from"./_404.tsx";import*as A from"./docs.tsx";import*as C from"./index.tsx";var r={};a(r,{default:()=>j});import{Fragment as u,jsx as n,jsxs as s}from"https://esm.sh/v135/react@18.2.0/jsx-runtime";import{useMDXComponents as m}from"https://esm.sh/v135/@mdx-js/react@2.3.0";import{Head as g}from"aleph/react";function c(t){let e=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",em:"em",code:"code"},m(),t.components);return s(u,{children:[n(g,{children:n("title",{children:"About - Docs"})}),`
`,n(e.h1,{id:"about-this-webpage",children:"About this webpage"}),`
`,n(e.h2,{id:"built-with-deno-and-alephjs",children:"Built with Deno and Aleph.js"}),`
`,s(e.p,{children:["Aleph.js is modern framework that doesn't need ",n(e.strong,{children:"webpack"}),` or other bundler
since it uses the [ES Module] syntax during development. Every module only needs
to be compiled once, when a module changes, Aleph.js just needs to re-compile
that single module. There is no time wasted `,n(e.em,{children:"re-bundling"}),` everytime a change is
made. This, along with Hot Module Replacement (`,n(e.strong,{children:"HMR"}),") and ",n(e.strong,{children:"Fast Refresh"}),`,
leads to instant updates in the browser.`]}),`
`,n(e.p,{children:`Aleph.js uses modern tools to build your app. It transpiles code using [swc] in
WASM with high performance, and bundles modules with [esbuild] at optimization
time extremely fast.`}),`
`,s(e.p,{children:["Aleph.js works on top of ",n(e.strong,{children:"Deno"}),", a ",n(e.em,{children:"simple"}),", ",n(e.em,{children:"modern"})," and ",n(e.em,{children:"secure"}),` runtime for
JavaScript and TypeScript. All dependencies are imported using URLs, and managed
by Deno cache system. No `,n(e.code,{children:"package.json"})," and ",n(e.code,{children:"node_modules"})," directory needed."]})]})}function f(t={}){let{wrapper:e}=Object.assign({},m(),t.components);return e?n(e,Object.assign({},t,{children:n(c,t)})):c(t)}var j=f;var i={};a(i,{default:()=>D});import{Fragment as _,jsx as o,jsxs as b}from"https://esm.sh/v135/react@18.2.0/jsx-runtime";import{useMDXComponents as h}from"https://esm.sh/v135/@mdx-js/react@2.3.0";import{Head as w}from"aleph/react";function l(t){let e=Object.assign({h1:"h1",p:"p"},h(),t.components);return b(_,{children:[o(w,{children:o("title",{children:"Test Page - Docs"})}),`
`,o(e.h1,{id:"test-page",children:"Test Page"}),`
`,o(e.p,{children:"This is a test page written with MDX"})]})}function x(t={}){let{wrapper:e}=Object.assign({},h(),t.components);return e?o(e,Object.assign({},t,{children:o(l,t)})):l(t)}var D=x;var R={"/_app":M,"/_404":y,"/docs":A,"/":C,"/docs/index":r,"/docs/test":i,depGraph:{"modules":[{"specifier":"./routes/docs/index.mdx"},{"specifier":"./routes/docs/test.mdx"}]}};export{R as default};
