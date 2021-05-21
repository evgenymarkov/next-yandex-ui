import BaseDocument, { Html, Head, Main, NextScript } from 'next/document';
import { cnTheme } from '@yandex/ui/Theme'
import { theme } from '@yandex/ui/Theme/presets/default'

class Document extends BaseDocument {
  public render() {
    return (
      <Html>
        <Head />
        <body className={cnTheme(theme)}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
