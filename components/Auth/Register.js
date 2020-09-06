import { Container, Input, Button as RegisterButton, ButtonLink } from './styled.css';
import { useDispatch } from 'react-redux';
import { updateModal } from '@redux/actions/modal';

export default function Register() {
    const dispatch = useDispatch();
    const handleRegisterClick = () => {
        dispatch(updateModal('login'));
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
                Already have an account?{' '}
                <ButtonLink onClick={handleRegisterClick}>Log in</ButtonLink>
            </p>
        </Container>
    );
}
