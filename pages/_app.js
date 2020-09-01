import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import store from "../redux/store";

const GlobalStyle = createGlobalStyle`
  body {
   margin:0;
   font-family: Roboto, -apple-system, BlinkMacSystemFont,Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,Helvetica Neue,sans-serif;
   font-size: 14px;
   color: #333;
  }
  button{
      cursor: pointer;
  }
`;

function App({ Component, pageProps, store }) {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

App.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component?.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps };
};

export default withRedux(store)(App);
