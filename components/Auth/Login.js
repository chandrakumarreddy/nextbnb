import { Container, Input, Button as LoginButton } from "./styled.css";

export default function Login() {
  return (
    <Container>
      <h2>LOGIN</h2>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <LoginButton type="submit">Login</LoginButton>
      <p>
        Not yet Registered? <a href="#">Register here</a>
      </p>
    </Container>
  );
}
