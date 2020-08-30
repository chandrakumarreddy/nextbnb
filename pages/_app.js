import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
   margin:0;
   font-family: Roboto, -apple-system, BlinkMacSystemFont,Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,Helvetica Neue,sans-serif;
   font-size: 14px;
   color: #333;
}
`;

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
