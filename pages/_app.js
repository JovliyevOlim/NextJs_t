import { SessionProvider } from "next-auth/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import "styles/globals.css";
import "styles/layout.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import "../components/Navbar.css";
const theme = {
  colors: {
    primary: "#355C7D",
  },
};

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <SessionProvider session={session}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>Codevolution</title>
            <meta name="description" content="Awesome Youtube channel" />
          </Head>
          <Header />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
