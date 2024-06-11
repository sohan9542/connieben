import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/rs/logo.png" />
        <meta
          name="description"
          content="The #1 Trading Journal software in the world. Get in-depth analysis of your trading to manage risk, setups, entries, exits, and more!"
        />
        <title>Holafly | International eSIM plans for travel abroad</title>
        <Script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        ></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
