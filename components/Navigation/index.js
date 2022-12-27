import Link from "next/link";
import React from "react";

export default function Navigation() {
  const handleClickScroll = (e) => {
    e.preventDefault();
    const value = e.target.id;
    console.log(value);
    const element = document.getElementById(value);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="flex justify-between items-end p-6 text-brandColor mx-8">
      <h1 className="text-6xl font-bold font-didot logo ">EG</h1>
      <ul className="flex gap-9 text-lg">
        <li id="about" onClick={handleClickScroll}>
          ABOUT
        </li>
        <li id="projects" onClick={handleClickScroll}>
          PROJECTS
        </li>
        <li id="contact" onClick={handleClickScroll}>
          CONTACT
        </li>
      </ul>
      <button className="text-black p-3 w-40 rounded-lg shadow-lg text-xl resume">
        Resume
      </button>
    </nav>
  );
}
