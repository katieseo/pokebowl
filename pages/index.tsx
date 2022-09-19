import type { NextPage } from "next";
import { motion } from "framer-motion";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Featured from "../components/Featured";
import Menu from "../components/Menu";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Poke Bowl</title>
        <meta name="description" content="Fresh and Healthy Poke Bowl" />
        <link rel="icon" href="/pokebowl.ico" />
      </Head>
      <main>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          <Featured />
        </motion.div>
        <About />
        <Menu />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
