import React from "react";
import Image from "next/image";
import github from "../../public/github.svg";

export default function MoreProjects() {
  return (
    <div className="flex flex-col">
      <h1>Other Noteworthy Projects</h1>
      <div>
        <div>
          <div>
            <Image src={github} alt="github" />
            <div>
              <Image src={github} alt="github" />
              <Image src={github} alt="github" />
            </div>
          </div>
          <h1>CoinPool</h1>
          <p>a ecommerce website inspired by vogue design</p>{" "}
          <h1>React Css-module Redux Figma</h1>
        </div>
      </div>
    </div>
  );
}
