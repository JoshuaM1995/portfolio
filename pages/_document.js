import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossorigin href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
          onload="this.onload=null;this.rel='stylesheet'"
          rel="stylesheet preload prefetch"
        />
        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap"
          onload="this.onload=null;this.rel='stylesheet'"
          rel="stylesheet preload prefetch"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Joshua McNabb" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta content="black" name="theme-color" />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
