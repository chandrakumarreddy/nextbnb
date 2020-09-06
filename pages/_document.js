import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    render() {
        return (
            <html lang="en">
                <Head>{this.props.styleTags}</Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
                    rel="stylesheet"
                />
                <body>
                    <Main />
                    <div id="modal-root" />
                    <NextScript />
                </body>
            </html>
        );
    }
}
