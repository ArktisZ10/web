import { Head } from "aleph/react";
import { ExternalLink } from "~/components/Link.tsx";
import { NavButton } from "~/components/Button.tsx";

const externalLinks = [
  ["Github", "https://github.com/ArktisZ10"],
];

export default function Index() {
  const age = new Date(Date.now() - new Date('1998-12-12').valueOf()).getUTCFullYear() - 1970

  return (
    <div className="flex flex-col items-center justify-center w-screen h-[calc(100vh-2*80px)] px-6">
      <Head>
        <title>Börne.se</title>
        <meta name="description" content="Erik Börne's slice of the web" />
      </Head>
      <p className="transition ease-in duration-300 hover:-translate-y-2 hover:scale-110">
        <img src="./assets/bjorne.png" title="Chilla <3" className="w-60 rounded-[25px]" />
      </p>
      <h1 className="font-bold text-2xl">
        Warm welcome, my name is Erik Börne
      </h1>
      <p className="mt-1">
        But I usually go by either Bjørne or Arktis. I am a {age} year old web developer. 
      </p>
      {externalLinks.map(([text, href]) => (
        <ExternalLink href={href}>
          {text}
        </ExternalLink>
      ))}
      <div className="mt-2">
        <NavButton role="button" to="/docs">
          Projects
        </NavButton>
        <NavButton role="button" to="/404">
          Dust & Echoes
        </NavButton>
      </div>
    </div>
  );
}
