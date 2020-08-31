import { Container, Input, Button as RegisterButton } from "./styled.css";

export default function Register() {
  return (
    <Container>
      <h2>Regsiter </h2>
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
        Already have an account? <a href="#">Log in</a>
      </p>
    </Container>
  );
}
