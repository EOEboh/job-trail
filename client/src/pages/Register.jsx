import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "../components/Logo";
import { FormRow } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue={"john"} />
        <FormRow
          type="text"
          name="lastName"
          labelText={"last name"}
          defaultValue={"Doe"}
        />
        <FormRow type="text" name="location" defaultValue={"New York"} />
        <FormRow type="email" name="email" defaultValue={"john@mail.com"} />
        <FormRow type="password" name="password" defaultValue={"secret123"} />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
