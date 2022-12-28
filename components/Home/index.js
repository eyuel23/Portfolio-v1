import Image from "next/image";
import React from "react";
import Navigation from "../Navigation";
import memoji from "../../public/header.png";

export default function Hero() {
  return (
    <header className="text-montserrat header min-h-screen bg-primary text-brandColor flex flex-col justify-between gap-9 overflow-hidden">
      <Navigation />
      <div className="flex items-center justify-center gap-10 sm:gap-40 self-center flex-col-reverse sm:flex-row ">
        <div className="flex flex-col items-center sm:block">
          <h1 className="text-5xl font-medium intro">
            <span className=" ">Hello, I am</span>

            <br />
            <span className="sm:text-[130px] text-[100px] font-bold">
              Eyuel
            </span>
          </h1>
          <h1 className="sm:text-5xl text-[3rem] font-thin sm:mt-5 mt-14 text-center">
            a Frontend developer, UI/UX designer
          </h1>
        </div>
        <Image src={memoji} width={600} height={600} alt="memoji" />
      </div>

      <button className="border-2 border-brandColor w-16 h-32 self-center rounded-3xl mb-8 flex justify-center items-center animate-bounce m-10">
        <svg
          width="25"
          height="48"
          viewBox="0 0 31 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.0858 58.5544C14.8668 59.3354 16.1332 59.3354 16.9142 58.5544L29.6421 45.8265C30.4232 45.0454 30.4232 43.7791 29.6421 42.998C28.8611 42.217 27.5948 42.217 26.8137 42.998L15.5 54.3117L4.18629 42.998C3.40524 42.217 2.13891 42.217 1.35786 42.998C0.576816 43.7791 0.576816 45.0454 1.35786 45.8265L14.0858 58.5544ZM17.5 57.1402L17.5 -1.14441e-05H13.5L13.5 57.1402H17.5Z"
            fill="#FEFCF3"
          />
        </svg>
      </button>
    </header>
  );
}
