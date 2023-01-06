import Image from "next/image";
import React from "react";
import line from "../../public/workLine.svg";

export default function Experience() {
  return (
    <section className="min-h-screen relative">
      <div className="content-center">
        <Image src={line} alt="line" className="shadow-xl " />
      </div>
    </section>
  );
}
