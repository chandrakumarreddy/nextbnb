import { Container, Input, Button as RegisterButton } from "./styled.css";
import { useDispatch } from "react-redux";
import { updateModal } from "@redux/actions/modal";

export default function Register() {
  const dispatch = useDispatch();
  const handleRegisterClick = (e) => {
    e.preventDefault();
    dispatch(updateModal("login"));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <Input id="email" type="email" placeholder="Email address" />
        <Input id="password" type="password" placeholder="Password" />
        <Input
          id="passwordconfirmation"
          type="password"
          placeholder="Enter password again"
        />
        <RegisterButton type="submit">Sign up</RegisterButton>
      </form>
      <p>
        Already have an account?{" "}
        <a href="" onClick={handleRegisterClick}>
          Log in
        </a>
      </p>
    </Container>
  );
}
