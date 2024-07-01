import { PropsWithChildren, useRef, useState } from "react";
import { MDXProvider } from "@mdx-js/react";
import { Head, NavLink } from "aleph/react";
import { components } from "../components/Heading.tsx";
import { Close, Menu } from "~/assets/icons.tsx";

const nav = [
  ["About", "/docs"],
  ["Test page", "/docs/test"],
];

export default function Docs(props: PropsWithChildren) {
  const [showAside, setShowAside] = useState(false);

  return (
    <>
      <Head>
        <meta name="description" content="Projects" />
      </Head>
      <div className="flex w-[90%] md:gap-8 md:max-w-5xl mx-auto md:py-12">
        <div>
          <button className={`md:hidden transition ${showAside && 'rotate-90'} ease-in-out duration-300`}
                  onClick={() => setShowAside(!showAside)}
          >
            {showAside ? <Close className="w-6 h-6 fill-slate-800" /> : <Menu className="w-6 h-6 fill-slate-800" />} 
          </button>
          
          <aside className={`${showAside ? 'absolute' : 'hidden'} w-60 z-1 border-2 py-2 px-4 bg-white md:static md:block rounded-md md:border-0`}>
            <div className="w-full mb-1">
              <input placeholder="Search..." className="box-border leading-9 w-full h-9 border-2 rounded px-2 hover:border-slate-600" />
            </div>
            <nav className="mt-5">
              <ul>
                {nav.map(([title, href]) => (
                  <li key={href} className="list-disc list-inside mt-1">
                    <NavLink to={href} activeClassName="active" exact className="active:text-bold active:text-slate-700">{title}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
        <div className="markdown-body">
          <MDXProvider components={components}>
            {props.children}
          </MDXProvider>
        </div>
      </div>
    </>
  );
}
