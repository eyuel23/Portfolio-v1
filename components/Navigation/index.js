import React from "react";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-end p-6 text-brandColor mx-8">
      <h1 className="text-6xl font-bold font-didot logo ">EG</h1>
      <ul className="flex gap-9 text-lg">
        <li>ABOUT</li>
        <li>PROJECTS</li>
        <li>CONTACT</li>
      </ul>
      <button className="text-black p-3 w-40 rounded-lg shadow-lg text-xl resume">
        Resume
      </button>
    </nav>
  );
}
