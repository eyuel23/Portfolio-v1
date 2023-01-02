import React from "react";
import Image from "next/image";
import github from "../../public/github.svg";
import linkIcon from "../../public/linkIcon.svg";
import folder from "../../public/folder.svg";

export default function MoreProjects() {
  return (
    <div className="flex flex-col self-center w-full items-center gap-20 mb-32">
      <h1 className="lg:text-6xl text-5xl">Other Noteworthy Projects</h1>
      <div className="flex justify-evenly w-[85%] flex-wrap gap-20">
        <div className="flex flex-col border-2 border-black text-center gap-5 pb-8 shadow-xl">
          <div className="flex justify-between p-2 ">
            <Image src={folder} alt="github" width={32} height={32} />
            <div className="flex gap-3">
              <Image src={github} alt="github" width={32} height={32} />
              <Image src={linkIcon} alt="github" width={32} height={32} />
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
        <div className="flex flex-col border-2 border-black text-center gap-5 pb-8  shadow-xl">
          <div className="flex justify-between p-2 ">
            <Image src={folder} alt="github" width={32} height={32} />
            <div className="flex gap-3">
              <Image src={github} alt="github" width={32} height={32} />
              <Image src={linkIcon} alt="github" width={32} height={32} />
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
        <div className="flex flex-col border-2 border-black text-center gap-5 pb-8 shadow-xl">
          <div className="flex justify-between p-2 ">
            <Image src={folder} alt="github" width={32} height={32} />
            <div className="flex gap-3">
              <Image src={github} alt="github" width={32} height={32} />
              <Image src={linkIcon} alt="github" width={32} height={32} />
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
        <div className="flex flex-col border-2 border-black text-center gap-5 pb-8 shadow-xl">
          <div className="flex justify-between p-2 ">
            <Image src={folder} alt="github" width={32} height={32} />
            <div className="flex gap-3">
              <Image src={github} alt="github" width={32} height={32} />
              <Image src={linkIcon} alt="github" width={32} height={32} />
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
        <div className="flex flex-col border-2 border-black text-center gap-5 pb-8 shadow-xl">
          <div className="flex justify-between p-2 ">
            <Image src={folder} alt="github" width={32} height={32} />
            <div className="flex gap-3">
              <Image src={github} alt="github" width={32} height={32} />
              <Image src={linkIcon} alt="github" width={32} height={32} />
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
        <div className="flex flex-col border-2 border-black text-center gap-5 pb-8 shadow-xl">
          <div className="flex justify-between p-2 ">
            <Image src={folder} alt="github" width={32} height={32} />
            <div className="flex gap-3">
              <Image src={github} alt="github" width={32} height={32} />
              <Image src={linkIcon} alt="github" width={32} height={32} />
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
    </div>
  );
}
