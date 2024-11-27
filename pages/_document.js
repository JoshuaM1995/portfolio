import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
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

          <meta content="Joshua McNabb - Software Engineer" name="title" />
          <meta content="joshuamcnabb, joshuamcnabb website" name="keywords" />
          <meta
            content="Software Engineer based in Canada."
            name="description"
          />

          <meta property="og:url" content="https://joshuamcnabb.ca" />
          <meta property="og:type" content="website" />

          {/* Facebook meta tags */}
          <meta
            property="og:title"
            content="Joshua McNabb - Software Engineer"
          />
          <meta
            property="og:description"
            content="Software Engineer based in Canada."
          />
          <meta
            property="og:image"
            content="https://vdzkeywzwfa1l5hg.public.blob.vercel-storage.com/social.png"
          />

          {/* Twitter meta tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="joshuamcnabb.ca" />
          <meta property="twitter:url" content="https://joshuamcnabb.ca" />
          <meta
            name="twitter:title"
            content="Joshua McNabb - Software Engineer"
          />
          <meta
            name="twitter:description"
            content="Software Engineer based in Canada."
          />
          <meta
            name="twitter:image"
            content="https://vdzkeywzwfa1l5hg.public.blob.vercel-storage.com/social.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
