import React from "react";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-end p-8 text-brandColor mx-8">
      <h1 className="text-6xl font-bold font-didot ">EG</h1>
      <ul className="flex gap-9 text-xl">
        <li>ABOUT</li>
        <li>PROJECTS</li>
        <li>CONTACT</li>
      </ul>
      <button className="bg-black p-5 rounded-lg shadow-lg text-xl">
        Resume
      </button>
    </nav>
  );
}
