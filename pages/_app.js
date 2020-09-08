import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import Layout from '@components/Layout';
import { wrapper } from '@redux/store';

const GlobalStyle = createGlobalStyle`
  body {
   margin:0;
   font-family: -apple-system, BlinkMacSystemFont,Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,Helvetica Neue,sans-serif;
   font-size: 14px;
   color: #333;
  }
  button{
      cursor: pointer;
  }
`;

function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

App.propTypes = {
    Component: PropTypes.any.isRequired,
    pageProps: PropTypes.objectOf(PropTypes.any).isRequired
};

export default wrapper.withRedux(App);
