import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { Container, Input, Button as LoginButton } from "./styled.css";
import { updateModal } from "../../redux/actions/modal";

export default function Login() {
  const dispatch = useDispatch();
  const handleLoginClick = (e) => {
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
        <a href="#" onClick={handleLoginClick}>
          Register here
        </a>
      </p>
    </Container>
  );
}
