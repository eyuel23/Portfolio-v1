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

export default function Project() {
  const [opacity, setOpacity] = useState("1");
  const [opacity1, setOpacity1] = useState("0");
  const [opacity2, setOpacity2] = useState("0");
  const [opacity3, setOpacity3] = useState("0");
  const showProject = (e) => {
    e.preventDefault();
    const value = e.target.closest("div div").id;
    console.log(value);
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
    setOpacity("0");
    setOpacity1("0");
    setOpacity2("0");
    setOpacity3("0");

    console.log(opacity3);
  };
  return (
    <>
      <div className="flex flex-col w-full lg:w-3/5 gap-10">
        <div
          className="border-2 border-black flex items-baseline gap-10 h-52 relative"
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
          <div className="flex flex-col items-center gap-6 m-10 " id="coinpool">
            <h1 className="text-6xl">CoinPool</h1>
            <h1 className="text-xl ">Next-js Tailwind Spline Figma Api</h1>
          </div>
          <div className="flex gap-10 items-end" id="coinpool">
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
        </div>
        <div
          className="border-2 border-black flex justify-between sm:justify-start items-baseline gap-10 h-52 relative"
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
          <div className="flex flex-col items-center gap-6 m-10" id="slack">
            <h1 className="text-6xl">Slack</h1>
            <h1 className="text-xl ">Next-js Firebase Typescript</h1>
          </div>
          <div className="flex gap-12 items-end" id="slack">
            <p className="text-3xl text-center hidden sm:block">
              a remake of Slack app using firebase
              <br /> with functionality.
            </p>
            <button className="bg-white shadow-lg text-xl text-black w-40 h-16">
              <Link href={"https://github.com/eyuel23/slack-remake"}>
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
          className="border-2 border-black flex items-baseline gap-9 h-52 relative"
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
          <div className="flex flex-col items-center gap-6 m-10" id="vogue">
            <h1 className="text-6xl">Vogue</h1>
            <h1 className="text-xl ">React Css-module Redux Figma </h1>
          </div>
          <div className="flex gap-16 items-end" id="vogue">
            <p className="text-3xl text-center hidden sm:block">
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
          className="border-2 border-black flex items-baseline gap-10 h-52 relative"
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
            className="flex flex-col items-center gap-6 m-10"
            id="digiallife"
          >
            <h1 className="text-6xl">DigitalLife</h1>
            <h1 className="text-xl ">React Typescript Tailwind Figma </h1>
          </div>
          <div className="flex gap-14 items-end" id="digiallife">
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
        </div>
      </div>
      <div className=" relative w-2/5 h-full hidden lg:block">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: opacity }}
            animate={{ opacity: opacity }}
            transition={{
              delay: 0.5,
              duration: 0.5,
            }}
            className="rounded-2xl overflow-hidden absolute left-32 top-5 shadow-xl"
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
