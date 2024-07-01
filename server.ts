/** @format */

import { serve } from "aleph/server";
import denoDeploy from "aleph/plugins/deploy";
import react from "aleph/plugins/react";
import mdx from "aleph/plugins/mdx";
import modules from "./routes/_export.ts";
import unocss from "aleph/plugins/unocss";
import config from "./uno.config.ts";

// check https://mdxjs.com/docs/extending-mdx
import rehypeHighlight from "rehype/highlight";
import rehypeSlug from "rehype/slug";
import remarkFrontmatter from "remark/frontmatter";
import remarkGFM from "remark/gfm";


serve({
  plugins: [
    denoDeploy({ modules }),
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkGFM],
      rehypePlugins: [rehypeHighlight, rehypeSlug],
      providerImportSource: "@mdx-js/react",
    }),
    react({ ssr: true }),
    unocss(config),
  ],
});
