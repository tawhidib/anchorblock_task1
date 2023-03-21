import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout: any = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
