import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />;
}
