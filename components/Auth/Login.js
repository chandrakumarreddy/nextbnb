import { useDispatch } from 'react-redux';
import { Container, Input, Button as LoginButton, ButtonLink } from './styled.css';
import { updateModal } from '@redux/actions/modal';

export default function Login() {
    const dispatch = useDispatch();
    const handleLoginClick = (e) => {
        e.preventDefault();
        dispatch(updateModal('register'));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <Container>
            <h2>LOGIN</h2>
            <form onSubmit={handleSubmit}>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <LoginButton type="submit">Login</LoginButton>
            </form>
            <p>
                Not yet Registered?{' '}
                <ButtonLink onClick={handleLoginClick}>Register here</ButtonLink>
            </p>
        </Container>
    );
}
