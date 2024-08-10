import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";

const Error = () => {
  const error = useRouteError();
  console.log("error", error);

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Page not found</h3>
          <p>we can&apos;t seem to find the page you are looking for</p>
          <Link to={"/dashboard"}>Go Back</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <div>
      <h1 className="underline">Something went wrong!</h1>
      <Link to={"/dashboard"}>Go back</Link>
    </div>
  );
};

export default Error;
