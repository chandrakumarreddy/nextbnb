import { Container, Input, Button as LoginButton } from "./styled.css";
import { useDispatch } from "react-redux";
import { updateModal } from "../../redux/actions/modal";

export default function Login() {
  const dispatch = useDispatch();
  const handleRegsiterClick = (e) => {
    e.preventDefault();
    dispatch(updateModal("register"));
  };
  return (
    <Container>
      <h2>LOGIN</h2>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <LoginButton type="submit">Login</LoginButton>
      <p>
        Not yet Registered?{" "}
        <a href="" onClick={handleRegsiterClick}>
          Register here
        </a>
      </p>
    </Container>
  );
}
