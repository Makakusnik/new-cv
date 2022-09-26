import { Box } from "@chakra-ui/react";
import { Header } from "@components/UI/Header";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main></main>
      <footer></footer>
    </>
  );
};

export default Home;
