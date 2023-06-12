import { type AppType } from "next/dist/shared/lib/utils";
import Footer from "rplp/components/Footer";
import Header from "rplp/components/Header";
import "rplp/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
