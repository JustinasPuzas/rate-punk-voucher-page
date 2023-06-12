import { type NextPage } from "next";
import Head from "next/head";
import Main from "../components/Main";
import GetTheApp from "rplp/components/GetTheApp";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ratepunk</title>
        <meta name="description" content="RatePunk Vouchers" />
        <link rel="icon" href="/ratepunk.webp" />
      </Head>
      <Main />
      <GetTheApp />
    </>
  );
};

export default Home;
