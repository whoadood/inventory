import "../styles/globals.css";
import type { AppProps } from "next/app";
import Global from "../layout/Global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Global>
      <Component {...pageProps} />
    </Global>
  );
}

export default MyApp;
