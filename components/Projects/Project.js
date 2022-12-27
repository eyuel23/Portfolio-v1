import Link from "next/link";
import React, { useState } from "react";
import vogue from "../../public/vogue.webp";
import Image from "next/image";
import github from "../../public/github.svg";
import { motion } from "framer-motion";
import digitallife from "../../public/digitallife.png";
import coinpool from "../../public/coinpool.png";
import slack from "../../public/slackWorld.webp";
import { AnimatePresence } from "framer-motion";

export default function Project() {
  const [opacity, setOpacity] = useState("0");
  const [opacity1, setOpacity1] = useState("0");
  const [opacity2, setOpacity2] = useState("0");
  const [opacity3, setOpacity3] = useState("0");
  const showProject = (e) => {
    e.preventDefault();
    const value = e.target.closest("div div").id;
    console.log(value);
    if (value === "slack") {
      setOpacity1("1");
    } else if (value === "vogue") {
      setOpacity2("1");
    } else if (value === "digiallife") {
      setOpacity3("1");
    } else if (value === "coinpool") {
      setOpacity("1");
    }

    console.log(opacity3);
  };
  const hideProject = (e) => {
    e.preventDefault();
    setOpacity("0");
    setOpacity1("0");
    setOpacity2("0");
    setOpacity3("0");

    console.log(opacity3);
  };
  return (
    <>
      <div className="flex flex-col w-3/5 gap-10">
        <div
          className="border-2 border-black flex items-baseline gap-10 h-52 "
          id="coinpool"
          onMouseEnter={showProject}
          onMouseLeave={hideProject}
        >
          <div className="flex flex-col items-center gap-6 m-10" id="coinpool">
            <h1 className="text-6xl">CoinPool</h1>
            <h1 className="text-xl ">Next-js Tailwind Spline Figma Api</h1>
          </div>
          <div className="flex gap-10 items-end" id="coinpool">
            <p className="text-3xl text-center">
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
        </div>
        <div
          className="border-2 border-black flex items-baseline gap-8 h-52 "
          id="slack"
          onMouseEnter={showProject}
          onMouseLeave={hideProject}
        >
          <div className="flex flex-col items-center gap-6 m-10" id="slack">
            <h1 className="text-6xl">Slack</h1>
            <h1 className="text-xl ">Next-js Firebase Typescript</h1>
          </div>
          <div className="flex gap-12 items-end" id="slack">
            <p className="text-3xl text-center">
              a remake of Slack app using firebase
              <br /> with functionality.
            </p>
            <button className="bg-white shadow-lg text-xl text-black w-40 h-16">
              <Link href={"https://eyuel23.github.io/vogue-redesign/"}>
                slack.com
              </Link>
            </button>
            <div>
              <Link href={"https://github.com/eyuel23/slack-remake"}>
                <Image src={github} alt="github" />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="border-2 border-black flex items-baseline gap-9 h-52 "
          id="vogue"
          onMouseEnter={showProject}
          onMouseLeave={hideProject}
        >
          <div className="flex flex-col items-center gap-6 m-10" id="vogue">
            <h1 className="text-6xl">Vogue</h1>
            <h1 className="text-xl ">React Css-module Redux Figma </h1>
          </div>
          <div className="flex gap-16 items-end" id="vogue">
            <p className="text-3xl text-center">
              a ecommerce website inspired
              <br /> by vogue design
            </p>
            <button className="bg-white shadow-lg text-xl text-black w-40 h-16">
              <Link href={"https://eyuel23.github.io/vogue-redesign/"}>
                Vogue.com
              </Link>
            </button>
            <div>
              <Link href={"https://github.com/eyuel23/vogue-redesign"}>
                <Image src={github} alt="github" />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="border-2 border-black flex items-baseline gap-10 h-52 "
          onMouseEnter={showProject}
          onMouseLeave={hideProject}
          id="digiallife"
        >
          <div
            className="flex flex-col items-center gap-6 m-10"
            id="digiallife"
          >
            <h1 className="text-6xl">DigitalLife</h1>
            <h1 className="text-xl ">React Typescript Tailwind Figma </h1>
          </div>
          <div className="flex gap-14 items-end" id="digiallife">
            <p className="text-3xl text-center">
              a ecommerce website inspired
              <br /> by vogue design
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
        </div>
      </div>
      <div className=" relative w-2/5 h-full">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: opacity }}
            transition={{
              duration: 1,
            }}
            className="rounded-2xl overflow-hidden absolute left-32 top-5 "
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
          initial={{ opacity: 0 }}
          animate={{ opacity: opacity1 }}
          transition={{
            duration: 1,
          }}
          className="rounded-2xl overflow-hidden absolute left-32 top-5 "
        >
          <Image
            src={slack}
            alt="project"
            width={500}
            height={500}
            className="rounded-2xl overflow-hidden  "
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: opacity2 }}
          transition={{
            duration: 1,
          }}
          className="rounded-2xl overflow-hidden absolute left-32 top-5 "
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
          initial={{ opacity: 0 }}
          animate={{ opacity: opacity3 }}
          transition={{
            duration: 1,
          }}
          className="rounded-2xl overflow-hidden absolute left-32 top-5 "
        >
          <Image
            src={digitallife}
            alt="project"
            width={360}
            height={360}
            className="rounded-2xl overflow-hidden  "
          />
        </motion.div>
      </div>
    </>
  );
}
