import Layout from "@/components/Layout";
import { Roboto_Flex } from "@next/font/google";
import type { AppProps } from "next/app";

const roboto_flex = Roboto_Flex({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto_flex.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
