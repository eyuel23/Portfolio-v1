import React from "react";
import Image from "next/image";
import github from "../../public/github.svg";
import linkIcon from "../../public/linkIcon.svg";
import folder from "../../public/folder.svg";
import Link from "next/link";
import { motion } from "framer-motion";
export default function MoreProjects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex flex-col self-center w-full items-center gap-20 mb-32"
    >
      <h1 className="lg:text-6xl text-5xl">Other Noteworthy Projects</h1>
      <div className="flex justify-evenly w-[85%] flex-wrap gap-20">
        <div className="flex flex-col border-2 border-black text-center gap-5 pb-8 shadow-xl w-[34rem] h-[24rem]">
          <div className="flex justify-between p-2  ">
            <Image src={folder} alt="github" width={32} height={32} />
            <div className="flex gap-3">
              <Link href={"https://github.com/eyuel23/Forkify"}>
                <Image src={github} alt="github" width={32} height={32} />
              </Link>
              <Link href={"https://forkifyreactv1.netlify.app/"}>
                <Image src={linkIcon} alt="github" width={32} height={32} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 pb-9 px-16 ">
            <h1 className="text-6xl">Forkify</h1>
            <p className="text-2xl">
              a recipe website built with react
              <br /> and Forkify Api
            </p>{" "}
          </div>
          <h1 className="text-xl">React Css-module Redux </h1>
        </div>
        <div className="flex flex-col border-2 border-black text-center gap-5 pb-8  shadow-xl w-[34rem] h-[24rem]">
          <div className="flex justify-between p-2 ">
            <Image src={folder} alt="github" width={32} height={32} />
            <div className="flex gap-3">
              <Link href={"https://github.com/eyuel23/mapty"}>
                <Image src={github} alt="github" width={32} height={32} />
              </Link>
              {/* <Link href={"https://github.com/eyuel23/mapty"}>
                <Image src={linkIcon} alt="github" width={32} height={32} />
              </Link> */}
            </div>
          </div>
          <div className="flex flex-col gap-6 pb-9 px-16 ">
            <h1 className="text-6xl">Mapty</h1>
            <p className="text-2xl">
              work out tracker with leaflet
              <br /> map.
            </p>{" "}
          </div>
          <h1 className="text-xl">React Redux Leaflet library</h1>
        </div>
        <div className="flex flex-col border-2 border-black text-center gap-5 pb-8 shadow-xl w-[34rem] h-[24rem]">
          <div className="flex justify-between p-2 ">
            <Image src={folder} alt="github" width={32} height={32} />
            <div className="flex gap-3">
              <Link href={"https://github.com/eyuel23/Random-Music-Generator"}>
                <Image src={github} alt="github" width={32} height={32} />
              </Link>
              <Link href={"https://eyuel23.github.io/Random-Music-Generator/"}>
                <Image src={linkIcon} alt="github" width={32} height={32} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 pb-9 px-16 ">
            <h1 className="text-6xl">RMD</h1>
            <p className="text-2xl">
              recommends random music from
              <br /> genius api
            </p>{" "}
          </div>
          <h1 className="text-xl">HTML CSS JAVASCRIPT</h1>
        </div>
        <div className="flex flex-col border-2 border-black text-center gap-5 pb-8 shadow-xl w-[34rem] h-[24rem]">
          <div className="flex justify-between p-2 ">
            <Image src={folder} alt="github" width={32} height={32} />
            <div className="flex gap-3">
              <Link href={"https://github.com/eyuel23/Pig-game"}>
                <Image src={github} alt="github" width={32} height={32} />
              </Link>
              <Link href={"https://eyuel23.github.io/Pig-game/"}>
                <Image src={linkIcon} alt="github" width={32} height={32} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 pb-9 px-16 ">
            <h1 className="text-6xl">Pig-Game</h1>
            <p className="text-2xl">
              a interactive 2 player game built
              <br /> by javascript.
            </p>{" "}
          </div>
          <h1 className="text-xl">HTML CSS JAVASCRIPT</h1>
        </div>
        <div className="flex flex-col border-2 border-black text-center gap-5 pb-8 shadow-xl w-[34rem] h-[24rem]">
          <div className="flex justify-between p-2 ">
            <Image src={folder} alt="github" width={32} height={32} />
            <div className="flex gap-3">
              <Link href={"https://github.com/eyuel23/Tigray-Hotel"}>
                <Image src={github} alt="github" width={32} height={32} />
              </Link>
              <Link href={"https://eyuel23.github.io/Tigray-Hotel/"}>
                <Image src={linkIcon} alt="github" width={32} height={32} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 pb-9 px-16 ">
            <h1 className="text-6xl">T-HOTEL</h1>
            <p className="text-2xl">
              a hotel booking site inspired by
              <br /> Tigray
            </p>{" "}
          </div>
          <h1 className="text-xl">HTML CSS</h1>
        </div>
        <div className="flex flex-col border-2 border-black text-center gap-5 pb-8 shadow-xl w-[34rem] h-[24rem]">
          <div className="flex justify-between p-2 ">
            <Image src={folder} alt="github" width={32} height={32} />
            <div className="flex gap-3">
              <Link href={""}>
                <Image src={github} alt="github" width={32} height={32} />
              </Link>
              <Link href={""}>
                <Image src={linkIcon} alt="github" width={32} height={32} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 pb-9 px-16 ">
            <h1 className="text-6xl">CoinPool</h1>
            <p className="text-2xl">
              a ecommerce website inspired by
              <br /> vogue design
            </p>{" "}
          </div>
          <h1 className="text-xl">React Css-module Redux Figma</h1>
        </div>
      </div>
    </motion.div>
  );
}
