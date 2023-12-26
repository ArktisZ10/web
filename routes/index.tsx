import { Head, Link } from "aleph/react";
import { useState } from "react";

const externalLinks = [
  ["Github", "https://github.com/ArktisZ10"],
];

export default function Index() {
  const [webDevText, setWebDevText] = useState("web")

  return (
    <div className="screen index">
      <Head>
        <title>Börne.se</title>
        <meta name="description" content="Erik Börne's slice of the web" />
      </Head>
      <p className="logo">
        <img src="./assets/bjorne.png" width="250" height="250" title="Chilla <3" style={{borderRadius: "25px"}} />
      </p>
      <h1>
        Warm welcome, my name is Erik Börne
      </h1>
      <p>
        But you can call me Bjørne. I am a 25 year old <span onMouseOver={() => setWebDevText("weeb")} onMouseOut={() => setWebDevText("web")}>{webDevText}</span> developer. 
      </p>
      <div className="external-links">
        {externalLinks.map(([text, href]) => (
          <a
            href={href}
            target="_blank"
            key={href}
          >
            {text}
          </a>
        ))}
      </div>
      <nav>
        <Link
          role="button"
          to="/docs"
        >
          Documentations
        </Link>
      </nav>
    </div>
  );
}
