import Link from "next/link";
import React from "react";
import Heading from "../heading";
import vogue from "../../public/vogue.webp";
import Image from "next/image";
import github from "../../public/github.svg";
export default function Project() {
  return (
    <section className="flex flex-col h-[90rem] min-h-screen bg-brandColor gap-24 pt-20">
      <Heading span={"02"} heading={"WORK"} />
      <div className=" w-[95%] flex self-center items-center  justify-between">
        <div className="flex flex-col w-3/5 gap-10">
          <div className="border-2 border-black flex items-baseline gap-10 h-52 ">
            <div className="flex flex-col items-center gap-6 m-10">
              <h1 className="text-6xl">CoinPool</h1>
              <h1 className="text-xl ">Next-js Tailwind Spline Figma Api</h1>
            </div>
            <div className="flex gap-10 items-end">
              <p className="text-3xl text-center">
                a crypto currency site where you
                <br /> can buy and sell.
              </p>
              <button className="bg-white shadow-lg text-xl text-black w-40 h-16">
                <Link href={"https://coin-pool.vercel.app/"}>coinpool.com</Link>
              </button>
              <div>
                <Link href={"https://eyuel23.github.io/vogue-redesign/"}>
                  <Image src={github} alt="github" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-2 border-black flex items-baseline gap-9 h-52 ">
            <div className="flex flex-col items-center gap-6 m-10">
              <h1 className="text-6xl">Slack</h1>
              <h1 className="text-xl ">Next-js Tailwind Firebase</h1>
            </div>
            <div className="flex gap-14 items-end">
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
                <Link href={"https://eyuel23.github.io/vogue-redesign/"}>
                  <Image src={github} alt="github" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-2 border-black flex items-baseline gap-9 h-52 ">
            <div className="flex flex-col items-center gap-6 m-10">
              <h1 className="text-6xl">Vogue</h1>
              <h1 className="text-xl ">React Css-module Redux Figma </h1>
            </div>
            <div className="flex gap-16 items-end">
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
                <Link href={"https://eyuel23.github.io/vogue-redesign/"}>
                  <Image src={github} alt="github" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-2 border-black flex items-baseline gap-10 h-52 ">
            <div className="flex flex-col items-center gap-6 m-10">
              <h1 className="text-6xl">DigitalLife</h1>
              <h1 className="text-xl ">React Typescript Tailwind Figma </h1>
            </div>
            <div className="flex gap-14 items-end">
              <p className="text-3xl text-center">
                a ecommerce website inspired
                <br /> by vogue design
              </p>
              <button className="bg-white shadow-lg text-xl text-black w-40 h-16">
                <Link href={"https://eyuel23.github.io/vogue-redesign/"}>
                  digital.com
                </Link>
              </button>
              <div>
                <Link href={"https://eyuel23.github.io/vogue-redesign/"}>
                  <Image src={github} alt="github" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mr-20">
          <Image
            src={vogue}
            alt="project"
            width={380}
            height={380}
            className="rounded-2xl overflow-hidden"
          />
        </div>
      </div>
    </section>
  );
}
