import BaseDocument, { Html, Head, Main, NextScript } from 'next/document';

class Document extends BaseDocument {
  public render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
