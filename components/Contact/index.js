import React from "react";
import Github from "../../public/github2.svg";
import Twitter from "../../public/twitter.svg";
import Linkedin from "../../public/linkedin.svg";
import Image from "next/image";
import hey from "../../public/hey.png";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Contact() {
  const handleClick = () => {
    window.location.href = "mailto:eyuelmulugeta05@gmail.com";
  };
  return (
    <footer
      id="contact"
      className="flex flex-col items-center bg-primary text-white gap-10 py-20 relative overflow-hidden"
    >
      <h1 className="sm:text-8xl text-6xl font-medium">GET IN TOUCH</h1>
      <div className="border-2 border-white w-3/5 flex flex-col items-center sm:gap-20 gap-10 rounded-xl sm:h-96 justify-center py-5">
        <h1 className="sm:text-6xl text-4xl">Want to work together?</h1>
        <button
          onClick={handleClick}
          className="bg-black sm:text-4xl text-3xl sm:p-9 p-5 rounded-xl"
        >
          Say Hello 👋🏾
        </button>
      </div>
      <div className="flex gap-10">
        <Link href={"https://twitter.com/EyuelMulugeta21"}>
          <Image className="" src={Twitter} width={50} height={50} alt="icon" />
        </Link>
        <Link href={"https://github.com/eyuel23"}>
          <Image className="" src={Github} width={50} height={50} alt="icon" />
        </Link>
        <Link href={"https://www.linkedin.com/in/eyuelmuler/"}>
          <Image
            className=""
            src={Linkedin}
            width={50}
            height={50}
            alt="icon"
          />
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0, x: "-20vw" }}
        whileInView={{ opacity: 1, x: "0vw" }}
        transition={{
          x: { duration: 1, delay: 1 },
          default: { ease: "linear" },
        }}
        className="absolute  top-0 sm:-left-36 -left-24"
      >
        <Image
          src={hey}
          alt="hey"
          className="rotate-45 h-96 w-96 sm:w-[400px] sm:h-[400px]"
        />
      </motion.div>
    </footer>
  );
}
