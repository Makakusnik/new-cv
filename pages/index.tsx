import { Header } from "@components/UI/Header";
import { PageNavigationBar } from "@components/UI/PageNavigationBar";
import { Section } from "@components/UI/Section";
import type { NextPage } from "next";
import Head from "next/head";

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
        <Section type="brown">
          <PageNavigationBar />
        </Section>
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
