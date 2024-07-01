import { InternalLink } from "~/components/Link.tsx";

export default function E404() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-[calc(100vh-2*80px)] px-6">
      <h1 className="font-bold text-2xl">
        Nothing found besides dust and echoes!
      </h1>
      <p className="mt-1">
        <InternalLink to="/">
          Return to the homepage
        </InternalLink>
      </p>
    </div>
  );
}
