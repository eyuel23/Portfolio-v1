import Link from "next/link";
import React, { useState } from "react";
import vogue from "../../public/vogue.webp";
import Image from "next/image";
import github from "../../public/github.svg";
import { motion } from "framer-motion";
import digitallife from "../../public/digitallife.jpg";
import coinpool from "../../public/coinpool.jpg";
import slack from "../../public/slack.jpg";
import { AnimatePresence } from "framer-motion";
import proMemoji from "../../public/projectsMemoji.png";

export default function Project() {
  const [opacity, setOpacity] = useState("0");
  const [opacity1, setOpacity1] = useState("0");
  const [opacity2, setOpacity2] = useState("0");
  const [opacity3, setOpacity3] = useState("0");
  const [opacity4, setOpacity4] = useState("1");
  const showProject = (e) => {
    e.preventDefault();
    const value = e.target.closest("div div").id;
    console.log(value);
    setOpacity4("0");
    if (value === "coinpool") {
      setOpacity("100%");
    } else if (value === "slack") {
      setOpacity1("100%");
    } else if (value === "vogue") {
      setOpacity2("100%");
    } else if (value === "digiallife") {
      setOpacity3("100%");
    }

    console.log(opacity3);
  };
  const hideProject = (e) => {
    e.preventDefault();
    setOpacity4("1");
    setOpacity("0");
    setOpacity1("0");
    setOpacity2("0");
    setOpacity3("0");

    console.log(opacity3);
  };
  return (
    <>
      <div className="flex flex-col w-full lg:w-3/5 gap-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.2 }}
          viewport={{ once: true }}
          className="border-2 border-black flex  items-center py-5 gap-5 h-52 relative"
          id="coinpool"
          onMouseEnter={showProject}
          onMouseLeave={hideProject}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: opacity }}
            transition={{ delay: 0.2, duration: 1 }}
            className="bg-brandColor -z-10 absolute h-full w-full"
            style={{ width: "100%" }}
          ></motion.div>
          <div
            className="flex flex-col items-center gap-6 w-1/2 sm:w-1/3 "
            id="coinpool"
          >
            <h1 className="text-6xl">CoinPool</h1>
            <h1 className="text-xl text-center ">
              Next-js Tailwind Spline Figma Api
            </h1>
          </div>
          <div
            className="flex gap-10 justify-evenly sm:justify-start items-center w-1/2 sm:w-2/3"
            id="coinpool"
          >
            <p className="text-3xl text-center hidden sm:block">
              a crypto currency site where you
              <br /> can buy and sell.
            </p>
            <button className="bg-white shadow-lg text-xl text-black w-40 h-16">
              <Link href={"https://coin-pool.vercel.app/"}>coinpool.com</Link>
            </button>
            <div>
              <Link href={"https://github.com/eyuel23/CoinPool"}>
                <Image src={github} alt="github" />
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.2 }}
          viewport={{ once: true }}
          className="border-2 border-black flex  items-center py-5 gap-5 h-52 relative"
          id="slack"
          onMouseEnter={showProject}
          onMouseLeave={hideProject}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: opacity1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="bg-brandColor -z-10 absolute h-full w-full"
            style={{ width: "100%" }}
          ></motion.div>
          <div
            className="flex flex-col items-center gap-6 w-1/2 sm:w-1/3 "
            id="slack"
          >
            <h1 className="text-6xl">Slack</h1>
            <h1 className="text-xl text-center ">
              Next-js Firebase Typescript Firestore
            </h1>
          </div>
          <div
            className="flex gap-10 justify-evenly sm:justify-start items-center w-1/2 sm:w-2/3"
            id="slack"
          >
            <p className="text-3xl text-center hidden sm:block">
              a remake of Slack using firebase
              <br /> with functionality.
            </p>
            <button className="bg-white shadow-lg text-xl text-black w-40 h-16">
              <Link href={"https://slack-remake.vercel.app/"}>slack.com</Link>
            </button>
            <div>
              <Link href={"https://github.com/eyuel23/slack-remake"}>
                <Image src={github} alt="github" />
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.2 }}
          viewport={{ once: true }}
          className="border-2 border-black flex  items-center py-5 gap-5 h-52 relative"
          id="vogue"
          onMouseEnter={showProject}
          onMouseLeave={hideProject}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: opacity2 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="bg-brandColor -z-10 absolute h-full w-full"
            style={{ width: "100%" }}
          ></motion.div>
          <div
            className="flex flex-col items-center gap-6 w-1/2 sm:w-1/3 "
            id="vogue"
          >
            <h1 className="text-6xl">Vogue</h1>
            <h1 className="text-xl text-center ">
              React Css-module Redux Figma{" "}
            </h1>
          </div>
          <div
            className="flex gap-10 justify-evenly sm:justify-start items-center w-1/2 sm:w-2/3"
            id="vogue"
          >
            <p className="text-3xl text-center hidden sm:block">
              a e-commerce website inspired
              <br /> by vogue design.
            </p>
            <button className="bg-white shadow-lg text-xl text-black w-40 h-16">
              <Link href={"https://vogue-redesign.vercel.app/"}>Vogue.com</Link>
            </button>
            <div>
              <Link href={"https://github.com/eyuel23/vogue-redesign"}>
                <Image src={github} alt="github" />
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.2 }}
          className="border-2 border-black flex  items-center py-5 gap-5 h-52 relative"
          onMouseEnter={showProject}
          onMouseLeave={hideProject}
          id="digiallife"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: opacity3 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="bg-brandColor -z-10 absolute h-full w-full"
            style={{ width: "100%" }}
          ></motion.div>
          <div
            className="flex flex-col items-center gap-6 w-1/2 sm:w-1/3 "
            id="digiallife"
          >
            <h1 className="text-6xl">DigitalLife</h1>
            <h1 className="text-xl text-center ">
              React Typescript Tailwind Figma{" "}
            </h1>
          </div>
          <div
            className="flex gap-10 justify-evenly sm:justify-start items-center w-1/2 sm:w-2/3"
            id="digiallife"
          >
            <p className="text-3xl text-center hidden sm:block">
              Get life quality of over 100 cities
              <br /> with a click.
            </p>
            <button className="bg-white shadow-lg text-xl text-black w-40 h-16">
              <Link href={"https://digitallife52.netlify.app"}>
                digital.com
              </Link>
            </button>
            <div id="digiallife">
              <Link href={"https://github.com/eyuel23/DigitalLife"}>
                <Image src={github} alt="github" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <div className=" relative w-2/5 h-full hidden lg:block ">
        <motion.div
          initial={{ opacity: opacity4 }}
          animate={{ opacity: opacity4 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          className="absolute left-32 top-0"
        >
          <div className=" overflow-hidden flex flex-col gap-10">
            <Image src={proMemoji} alt="memoji" />
            <div>
              <h1 className="text-5xl pb-3">Projects</h1>
              <p className="text-2xl">
                This is a showcase of my work in a variety of fields, from
                Graphic and Web Design to Product Design and Management.
              </p>
            </div>
          </div>
        </motion.div>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: opacity }}
            animate={{ opacity: opacity }}
            transition={{
              delay: 0.5,
              duration: 0.5,
            }}
            className="rounded-2xl overflow-hidden absolute left-32 top-10 shadow-xl"
          >
            <Image
              src={coinpool}
              alt="project"
              width={380}
              height={380}
              className="rounded-2xl overflow-hidden  "
            />
          </motion.div>
        </AnimatePresence>
        <motion.div
          initial={{ opacity: opacity1 }}
          animate={{ opacity: opacity1 }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          className="rounded-2xl overflow-hidden absolute left-32 top-5 shadow-xl"
        >
          <Image
            src={slack}
            alt="project"
            width={380}
            height={380}
            className="rounded-2xl overflow-hidden  "
          />
        </motion.div>
        <motion.div
          initial={{ opacity: opacity2 }}
          animate={{ opacity: opacity2 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          className="rounded-2xl overflow-hidden absolute left-32 top-5 shadow-xl "
        >
          <Image
            src={vogue}
            alt="project"
            width={380}
            height={380}
            className="rounded-2xl overflow-hidden  "
          />
        </motion.div>
        <motion.div
          initial={{ opacity: opacity3 }}
          animate={{ opacity: opacity3 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          className="rounded-2xl overflow-hidden absolute left-32 top-5 shadow-xl"
        >
          <Image
            src={digitallife}
            alt="project"
            className="rounded-2xl overflow-hidden  "
            width={380}
            height={380}
          />
        </motion.div>
      </div>
    </>
  );
}
