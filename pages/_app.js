import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import Layout from "@components/Layout";
import { useStore } from "@redux/store";

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

function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

App.getInitialProps = ({ Component, ctx }) => {
  return {
    pageProps: Component?.getInitialProps?.(ctx) ?? {},
  };
};

export default App;
