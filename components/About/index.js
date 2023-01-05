import Image from "next/image";
import Heading from "../Heading";
import design from "../../public/design.svg";
import code from "../../public/code.svg";
import light from "../../public/light.svg";
import icon from "../../public/icons1.svg";
import icon2 from "../../public/icons2.svg";
import icon3 from "../../public/icon3.svg";
import designMe from "../../public/designMemoji.png";
import codeMe from "../../public/codeMemoji.png";
import creativityMe from "../../public/creativeMemoji.png";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.5,
        duration: 0.7,
      }}
      id="about"
      className="bg-white min-h-screen  flex flex-col gap-60 relative py-32 overflow-hidden"
    >
      <div className="w-[100%] flex flex-col gap-8">
        <Heading span={"01."} heading={"About Me"} />
        <div className="text-black text-4xl text-center ">
          <p className=" leading-snug font-light ">
            I’m a Software engineer and UI/UX designer specializing in building
            and designing
            <br /> exceptional digital experiences.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row lg:gap-0 gap-80 sm:justify-around text-center pt-8">
        <div className="flex flex-col items-center gap-10">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: "10vw" }}
              whileInView={{ opacity: 1, y: "0vw" }}
              transition={{
                y: { duration: 1, delay: 1 },
                default: { ease: "linear" },
              }}
              className="absolute -top-96 -left-40  "
            >
              <Image src={designMe} alt="create" className="-rotate-12" />
            </motion.div>

            <div className="bg-primary rounded-full h-80 w-80 flex items-center justify-center shadow-xl relative z-10">
              <Image src={design} alt="design" width={120} height={120} />
            </div>
          </div>

          <div className="flex flex-col items-center text-black gap-8">
            <h1 className=" font-medium text-5xl border-b-2  border-gold">
              DESIGN
            </h1>
            <h1 className="text-3xl">
              I value simple content structure, clean <br /> design patterns,
              and thoughtful <br />
              interactions.
            </h1>
            <h1 className="text-2xl font-semibold text-gold">
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
            <motion.div
              initial={{ opacity: 0, y: "10vw" }}
              whileInView={{ opacity: 1, y: "0vw" }}
              transition={{
                y: { duration: 1, delay: 1 },
                default: { ease: "linear" },
              }}
              className="absolute -top-72 "
            >
              <Image src={codeMe} alt="create" />
            </motion.div>

            <div className="bg-primary rounded-full h-80 w-80 flex items-center justify-center shadow-xl relative z-10">
              <Image src={code} alt="design" width={120} height={120} />
            </div>
          </div>

          <div className="flex flex-col items-center text-black gap-8">
            <h1 className="font-medium text-5xl border-b-2 border-gold">
              ENGINEERING
            </h1>
            <h1 className="text-3xl">
              I like to code things from scratch, and <br /> enjoy bringing
              ideas to life in the
              <br />
              browser.
            </h1>
            <h1 className="text-2xl font-semibold text-gold">
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
            <motion.div
              initial={{ opacity: 0, y: "10vw" }}
              whileInView={{ opacity: 1, y: "0vw" }}
              transition={{
                y: { duration: 1, delay: 1 },
                default: { ease: "linear" },
              }}
              className="absolute -top-96 -right-40"
            >
              <Image src={creativityMe} alt="create" className="rotate-12" />
            </motion.div>

            <div className="bg-primary rounded-full h-80 w-80 flex items-center justify-center shadow-xl relative z-10">
              <Image src={light} alt="design" width={120} height={120} />
            </div>
          </div>

          <div className="flex flex-col items-center text-black gap-8">
            <h1 className="font-medium text-5xl border-b-2 border-gold ">
              CREATIVITY
            </h1>
            <h1 className="text-3xl">
              I have a knack for coming up with and <br /> innovative ideas.
              Whether I am working
              <br />
              on a personal or team.
            </h1>
            <h1 className="text-2xl font-semibold text-gold">
              Technologies I’ve been working with:
            </h1>
            <div className="flex font-normal text-2xl text-start">
              <ul className="flex flex-col gap-4 list-disc">
                <li>DRIBBLE</li>
                <li>FIGMA</li>
                <li>NOTION</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
