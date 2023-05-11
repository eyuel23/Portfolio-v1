import Image from "next/image";
import React from "react";
import line from "../../public/workLine.svg";
import Heading from "../Heading";
import wink from "../../public/winkMemoji.png";
import open from "../../public/openMemoji.png";
import finger from "../../public/fingerCross.png";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen relative flex flex-col gap-10"
    >
      <Heading span={"02"} heading={"Experience"} />
      <div className="text-4xl text-center leading-snug font-light sm:px-0 px-7">
        These are all of the places that I have had the opportunity to learn,
        contribute and grow at.
        <br />{" "}
      </div>
      <div className="flex justify-center py-20 gap-3 sm:gap-20 ">
        <div className="flex flex-col items-end gap-40">
          <Image src={open} alt="" width={200} height={200} />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="flex flex-col gap-5 self-start sm:ml-0 ml-14"
          >
            <div>
              <h1 className="font-medium text-5xl ">
                Software eng
                <span className="text-4xl text-gray-400"> @abeyza</span>
              </h1>
              <h1 className="text-gray-400 text-xl">
                Oct 2021 - Present // Atlanta, GA
              </h1>
            </div>
            <div className="text-2xl">
              <ul className=" list-disc flex flex-col gap-2">
                <li>
                  Wrote modern, performant, and robust code
                  <br /> for an array of client.
                </li>
                <li>
                  Communicated and collaborated with multi-disciplinary <br />
                  teams of engineers,designers, on a daily basis.{" "}
                </li>
                <li>
                  Developed and shipped highly interactive
                  <br /> web application.
                </li>
              </ul>
            </div>
            <h1 className=" text-3xl">
              <span className="font-medium text-3xl">Skills: </span> Javascript,
              React-js, Next-js
            </h1>
          </motion.div>

          <Image src={finger} alt="" width={200} height={200} />
        </div>
        <div className="hidden sm:block">
          <Image src={line} alt="line" />
        </div>
        <div className="flex flex-col items-start gap-60">
          {" "}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="flex flex-col gap-5"
          >
            <div>
              <h1 className="font-medium text-5xl">
                Intern
                <span className="text-4xl text-gray-400"> @FidelLabs</span>
              </h1>
              <h1 className="text-gray-400 text-xl">
                Feb - July 2021 // addis-ababa, Ethiopia
              </h1>
            </div>
            <div className="text-2xl">
              <ul className=" list-disc flex flex-col gap-2">
                <li>Built online courses for clients using articulate 360</li>
                <li>
                  Designed custom graphics and created design layouts for
                  courses
                </li>
                <li>Learned the basics of programming using python.</li>
              </ul>
            </div>
            <h1 className=" text-3xl">
              <span className="font-medium text-3xl">Skills: </span> python,
              javascript, articulate 360
            </h1>
          </motion.div>
          <Image
            src={wink}
            alt=""
            width={200}
            height={200}
            className="self-end sm:self-start"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="flex flex-col gap-5 sm:pt-10 pt-40"
          >
            <div>
              <h1 className="font-medium text-5xl">Open for Work</h1>
              <h1 className="text-gray-400 text-xl">
                Present // Philadelphia,PA(Remote)
              </h1>
            </div>
            <h1 className="text-2xl">
              I’m currently looking for a new journey to embark on.
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
