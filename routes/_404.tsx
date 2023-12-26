import { Link } from "aleph/react";

export default function E404() {
  return (
    <div className="screen e404">
      <h2>
        Nothing found besides dust and echoes!
      </h2>
      <p>
        <Link to="/">
          Return to the homepage
        </Link>
      </p>
    </div>
  );
}
