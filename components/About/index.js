import Image from "next/image";
import React, { useState } from "react";
import Heading from "../heading";
import design from "../../public/design.svg";
import code from "../../public/code.svg";
import light from "../../public/light.svg";
import icon from "../../public/icons1.svg";
import icon2 from "../../public/icons2.svg";
import designMe from "../../public/designMemoji.png";
import codeMe from "../../public/codeMemoji.png";
import creativityMe from "../../public/creativeMemoji.png";
export default function About() {
  const [show, setShow] = useState(false);
  const memojiHandler = () => {
    setShow(true);
    console.log("here");
  };
  return (
    <section className="bg-white min-h-screen h-[95rem] flex flex-col gap-52 relative pt-20 overflow-hidden">
      <div className="w-[100%] flex flex-col gap-8">
        <Heading span={"01."} heading={"About Me"} />
        <div className="text-black text-4xl text-center ">
          <p className=" leading-snug font-light ">
            I’m a Frontend developer and UI/UX designer specializing in building
            and designing
            <br /> exceptional digital experiences.
          </p>
        </div>
      </div>
      <div className="flex justify-around text-center">
        <div className="flex flex-col items-center gap-10">
          <div className="relative">
            {show && (
              <div className="absolute -top-72 ">
                <Image src={designMe} alt="create" />
              </div>
            )}
            <div
              className="bg-primary rounded-full h-80 w-80 flex items-center justify-center shadow-xl relative z-10"
              onMouseEnter={memojiHandler}
            >
              <Image src={design} alt="design" width={120} height={120} />
            </div>
          </div>

          <div className="flex flex-col items-center text-black gap-8">
            <h1 className=" font-medium text-5xl border-b-2 w-40 border-black">
              DESIGN
            </h1>
            <h1 className="text-3xl">
              I value simple content structure, clean <br /> design patterns,
              and thoughtful <br />
              interactions.
            </h1>
            <h1 className="text-2xl font-semibold">
              Technologies I’ve been working with:
            </h1>
            <div className="flex font-normal text-2xl text-start">
              <ul className="flex flex-col gap-4 list-disc">
                <li>FIGMA</li>
                <li>PHOTOSHOP</li>
                <li>DESGIN SYSTEM</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10">
          <div className="relative">
            {show && (
              <div className="absolute -top-72 ">
                <Image src={codeMe} alt="create" />
              </div>
            )}
            <div
              className="bg-primary rounded-full h-80 w-80 flex items-center justify-center shadow-xl relative z-10"
              onMouseEnter={memojiHandler}
            >
              <Image src={code} alt="design" width={120} height={120} />
            </div>
          </div>

          <div className="flex flex-col items-center text-black gap-8">
            <h1 className="font-medium text-5xl border-b-2 w-72 border-black">
              ENGINEERING
            </h1>
            <h1 className="text-3xl">
              I like to code things from scratch, and <br /> enjoy bringing
              ideas to life in the
              <br />
              browser.
            </h1>
            <h1 className="text-2xl font-semibold">
              Technologies I’ve been working with:
            </h1>
            <div className="flex font-normal gap-16 text-2xl text-start">
              <ul className="flex flex-col gap-4 font-normal list-disc">
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>REACT</li>
                <li>REDUX</li>
              </ul>
              <ul className="flex flex-col gap-4 list-disc">
                <li>SASS</li>
                <li>TAILWIND</li>
                <li>HTML</li>
                <li>NEXT-JS</li>
                <li>NODE-JS</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10">
          <div className="relative">
            {show && (
              <div className="absolute -top-72 ">
                <Image src={creativityMe} alt="create" />
              </div>
            )}
            <div
              className="bg-primary rounded-full h-80 w-80 flex items-center justify-center shadow-xl relative z-10"
              onMouseEnter={memojiHandler}
            >
              <Image src={light} alt="design" width={120} height={120} />
            </div>
          </div>

          <div className="flex flex-col items-center text-black gap-8">
            <h1 className="font-medium text-5xl border-b-2 border-black w-60 inline-block">
              CREATIVITY
            </h1>
            <h1 className="text-3xl">
              I have a knack for coming up with and <br /> innovative ideas.
              Whether I am working
              <br />
              on a personal or team.
            </h1>
            <h1 className="text-2xl font-semibold">
              Technologies I’ve been working with:
            </h1>
            <div className="flex font-normal text-2xl text-start">
              <ul className="flex flex-col gap-4 list-disc">
                <li>FIGMA</li>
                <li>PHOTOSHOP</li>
                <li>DESGIN SYSTEM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Image
        className="absolute right-20 top-32 icon"
        src={icon}
        width={100}
        height={100}
        alt="icon"
      />
      <Image
        className="absolute left-3 top-80 icon"
        src={icon2}
        width={100}
        height={100}
        alt="icon"
      />
    </section>
  );
}
