import Link from 'next/link';
import styled from 'styled-components';

const NavContainer = styled.div`
    border-bottom: 1px solid #eee;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.a`
    width: 50px;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
`;

const StyledUL = styled.ul`
    list-style-type: none;
    margin: 0;
    display: flex;
`;
const StyledLI = styled.li`
    display: block;
`;

const StyledA = styled.a`
    text-decoration: none;
    margin-right: 15px;
    padding: 1em 0.5em;
    box-sizing: border-box;
    color: #333;
    cursor: pointer;
`;

export default function Header() {
    return (
        <NavContainer>
            <Link href="/">
                <Logo>
                    <img src="/static/img/logo.webp" alt="nextbnb" width="100%" height="100%" />
                </Logo>
            </Link>
            <nav>
                <StyledUL>
                    <StyledLI>
                        <Link href="/register">
                            <StyledA>Sign up</StyledA>
                        </Link>
                    </StyledLI>
                    <StyledLI>
                        <Link href="/login">
                            <StyledA>Log in</StyledA>
                        </Link>
                    </StyledLI>
                </StyledUL>
            </nav>
        </NavContainer>
    );
}
