import type { NextPage } from "next";
import Head from "next/head";
import { BsWordpress } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { HStack, VStack } from "@chakra-ui/react";
import Image from "next/image";

import { Header } from "@components/UI/Header";
import { SectionHeading } from "@components/UI/Section/SectionHeading";
import { PageNavigationBar } from "@components/UI/PageNavigationBar";
import { Section, SectionContent } from "@components/UI/Section";
import { BraintItIcon } from "@assets/BraintITIcon";
import { JobContainer, JobDetails, JobImage, JobTitle } from "@components/UI/JobShowcase";
import { SkillCompononent } from "@components/UI/SkillShowcase";
import { IoLogoVue } from "react-icons/io5";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main style={{ fontFamily: "Poppins" }}>
        <Section type="brown">
          <PageNavigationBar />
          <SectionHeading as="h2" color="brown" id="me" fontWeight={600}>
            me
          </SectionHeading>
          <SectionContent>
            I'm 24 years old, self-taught junior full-stack developer. Currently I live in Bratislava where I work as full stack developer
            at Automobilove Opravarne MV SR.
            <br></br>
            <br></br>
            In near future, I want to start with freelance work as a side hustle, while working full-time. My target audience will be small
            local businesess
          </SectionContent>
          <SectionHeading as="h3" color="brown" id="webDevelopmentPath" fontWeight={600}>
            web development path
          </SectionHeading>
          <SectionContent>
            I discovered path of web development in november 2020 when I started learning basics of HTML, CSS and javascript. Later I
            discovered mongodb, node.js, express.js and react.js a.k.a. MERN stack in which I'm planning to get more experience.
          </SectionContent>
        </Section>
        <Section type="blue">
          <SectionHeading as="h2" color="brown" id="workexperience" fontWeight={600}>
            work
          </SectionHeading>
          <SectionContent>
            <VStack spacing="24px">
              <JobContainer>
                <JobTitle workDuration="3 months">Brain-IT</JobTitle>
                <JobDetails positionName="Junior frontend developer">
                  <BsWordpress title="wordpress" />
                  <AiFillHtml5 title="html5" />
                  <IoLogoCss3 title="css3" />
                  <SiJavascript title="javascript" />
                </JobDetails>
                <JobImage padding="8px" backgroundColor="gray">
                  <BraintItIcon color="white" width="155px" height="15px" />
                </JobImage>
              </JobContainer>
              <JobContainer>
                <JobTitle workDuration="3.10.2022 - now">Automobilove Opravarne MV SK</JobTitle>
                <JobDetails positionName="Junior fullstack developer">
                  <AiFillHtml5 title="Html 5" />
                  <IoLogoCss3 title="Css 3" />
                  <SiJavascript title="Javascript" />
                  <SiTypescript title="Typescript" />
                  <SiReact title="React" />
                  <SiExpress title="Express" />
                  <SiMongodb title="MongoDB" />
                  <SiNodedotjs title="NodeJS" />
                </JobDetails>
                <JobImage padding="8px">
                  <Image
                    src="/aomvsr.png"
                    alt="Automobilove opravarne ministerstva vnutra slovenskej republiky."
                    layout="fixed"
                    height="45px"
                    width="150px"
                  />
                </JobImage>
              </JobContainer>
            </VStack>
          </SectionContent>
        </Section>
        <Section type="brown">
          <SectionHeading as="h2" color="brown" id="skills" fontWeight={600}>
            skills
          </SectionHeading>
          <SectionHeading as="h3" color="brown" fontWeight={600}>
            frontend
          </SectionHeading>
          <SectionContent>
            <HStack spacing="16px">
              <SkillCompononent experience={4} title="HTML 5">
                <AiFillHtml5 size="30px" />
              </SkillCompononent>
              <SkillCompononent experience={4} title="CSS 3">
                <IoLogoCss3 size="30px" />
              </SkillCompononent>
              <SkillCompononent experience={3} title="JavaScript">
                <SiJavascript size="30px" />
              </SkillCompononent>
              <SkillCompononent experience={3} title="TypeScript">
                <SiTypescript size="30px" />
              </SkillCompononent>
              <SkillCompononent experience={4} title="React">
                <SiReact size="30px" />
              </SkillCompononent>
              <SkillCompononent experience={2} title="Nextjs">
                <SiNextdotjs size="30px" />
              </SkillCompononent>
              <SkillCompononent experience={2} title="Redux TK">
                <SiRedux size="30px" />
              </SkillCompononent>
              <SkillCompononent experience={4} title="ChakraUI">
                <SiChakraui size="30px" />
              </SkillCompononent>
              <SkillCompononent experience={1} title="Vue">
                <IoLogoVue size="30px" />
              </SkillCompononent>
            </HStack>
          </SectionContent>
          <SectionHeading as="h3" color="brown" fontWeight={600}>
            backend
          </SectionHeading>
          <SectionContent>
            <HStack>
              <SkillCompononent experience={2} title="Express.js">
                <SiExpress size="30px" />
              </SkillCompononent>
              <SkillCompononent experience={2} title="MongoDB">
                <SiMongodb size="30px" />
              </SkillCompononent>
              <SkillCompononent experience={2} title="NodeJS">
                <SiNodedotjs size="30px" />
              </SkillCompononent>
            </HStack>
          </SectionContent>
          <SectionHeading as="h3" color="brown" fontWeight={600}>
            devops
          </SectionHeading>
          <SectionContent>
            <HStack>
              <SkillCompononent experience={1} title="Docker">
                <SiDocker size="30px" />
              </SkillCompononent>
              <SkillCompononent experience={2} title="Git">
                <SiGit size="30px" />
              </SkillCompononent>
              <SkillCompononent experience={3} title="GitHub">
                <SiGithub size="30px" />
              </SkillCompononent>
            </HStack>
          </SectionContent>
          <SectionHeading as="h3" color="brown" fontWeight={600}>
            others
          </SectionHeading>
          <SectionContent>
            <HStack>
              <SkillCompononent experience={2} title="Linux">
                <SiLinux size="30px" />
              </SkillCompononent>
              <SkillCompononent experience={1} title="Nginx">
                <SiNginx size="30px" />
              </SkillCompononent>
            </HStack>
          </SectionContent>
        </Section>
        <Section type="blue">
          <SectionHeading as="h2" color="brown" id="me" fontWeight={600}>
            projects
          </SectionHeading>
        </Section>
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
