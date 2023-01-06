import Image from "next/image";
import React from "react";
import line from "../../public/workLine.svg";
import Heading from "../Heading";
import wink from "../../public/winkMemoji.png";
import open from "../../public/openMemoji.png";
import finger from "../../public/fingerCross.png";

export default function Experience() {
  return (
    <section className="min-h-screen relative flex flex-col">
      <Heading span={"02"} heading={"Experience"} />
      <div className="flex justify-center pt-24">
        <div className="flex flex-col">
          <Image src={open} alt="" width={200} height={200} />
          <div className="flex flex-col">
            <h1 className="font-medium text-5xl">
              Software eng
              <span className="text-4xl text-gray-400">@abeyza</span>
            </h1>
            <h1 className="text-gray-400 text-xl">
              Oct 2021 - Present // Atlanta, GA
            </h1>
            <div className="text-2xl">
              <ul className=" list-disc">
                <li>
                  Write modern, performant, and robust code for an array of
                  client.
                </li>
                <li>
                  Communicate and collaborate with multi-disciplinary <br />
                  teams of engineers,designers, on a daily basis.{" "}
                </li>
                <li>
                  Developed and shipped highly interactive web application.
                </li>
              </ul>
            </div>
            <h1>
              <span>Skills:</span> Javascript, React-js, Next-js
            </h1>
          </div>
          <Image src={finger} alt="" width={200} height={200} />
        </div>
        <div className="">
          <Image src={line} alt="line" />
        </div>
        <div className="flex flex-col">
          {" "}
          <div>
            <h1>
              Software eng<span>@abeyza</span>
            </h1>
            <h1>Oct 2021 - Present // Atlanta, GA</h1>
            <div>
              <ul>
                <li>
                  Write modern, performant, and robust code for an array of
                  client.
                </li>
                <li>
                  Communicate and collaborate with multi-disciplinary teams of
                  engineers,designers, on a daily basis.{" "}
                </li>
                <li>
                  Developed and shipped highly interactive web application.
                </li>
              </ul>
            </div>
            <h1>
              <span>Skills:</span> Javascript, React-js, Next-js
            </h1>
          </div>
          <Image src={finger} alt="" width={200} height={200} />
          <div>
            <h1>
              Software eng<span>@abeyza</span>
            </h1>
            <h1>Oct 2021 - Present // Atlanta, GA</h1>
            <div>
              <ul>
                <li>
                  Write modern, performant, and robust code for an array of
                  client.
                </li>
                <li>
                  Communicate and collaborate with multi-disciplinary teams of
                  engineers,designers, on a daily basis.{" "}
                </li>
                <li>
                  Developed and shipped highly interactive web application.
                </li>
              </ul>
            </div>
            <h1>
              <span>Skills:</span> Javascript, React-js, Next-js
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
