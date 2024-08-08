import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log("error", error);
  return (
    <div>
      <h1 className="underline">Error Page</h1>
      <Link to={"/"}>Go back</Link>
    </div>
  );
};

export default Error;
