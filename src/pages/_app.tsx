import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps | any) {
  const getLayout: any = Component.getLayout || ((page: JSX.Element) => page);
  return getLayout(<Component {...pageProps} />);
}
