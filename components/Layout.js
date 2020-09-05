import styled from "styled-components";
import Header from "@components/Header";

const Main = styled.main`
  position: relative;
  max-width: 56em;
  padding: 2em;
  margin: 0 auto;
`;

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
