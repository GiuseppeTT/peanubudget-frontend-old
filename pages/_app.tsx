import Layout from "@/components/Layout";
import { Roboto_Flex as RobotoFlex } from "@next/font/google";
import type { AppProps } from "next/app";

const robotoFlex = RobotoFlex({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={robotoFlex.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
