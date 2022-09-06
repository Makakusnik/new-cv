import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../src/components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Box width="150px" height="250px" bgColor="red"></Box>
        <Box width="150px" height="250px" bgColor="red"></Box>
        <Box width="150px" height="250px" bgColor="red"></Box>
        <Box width="150px" height="250px" bgColor="red"></Box>
        <Box width="150px" height="250px" bgColor="red"></Box>
        <Box width="150px" height="250px" bgColor="red"></Box>
        <Box width="150px" height="250px" bgColor="red"></Box>
        <Box width="150px" height="250px" bgColor="red"></Box>
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
