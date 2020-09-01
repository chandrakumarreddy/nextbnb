import { Container, Input, Button as RegisterButton } from "./styled.css";
import { useDispatch } from "react-redux";
import { updateModal } from "../../redux/actions/modal";

export default function Register() {
  const dispatch = useDispatch();
  const handleLoginClick = (e) => {
    e.preventDefault();
    dispatch(updateModal("login"));
  };
  return (
    <Container>
      <h2>Register </h2>
      <form>
        <Input id="email" type="email" placeholder="Email address" />
        <Input id="password" type="password" placeholder="Password" />
        <Input
          id="passwordconfirmation"
          type="password"
          placeholder="Enter password again"
        />
        <RegisterButton>Sign up</RegisterButton>
      </form>
      <p>
        Already have an account?{" "}
        <a href="" onClick={handleLoginClick}>
          Log in
        </a>
      </p>
    </Container>
  );
}
