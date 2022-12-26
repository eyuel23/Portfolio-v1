import React from "react";

export default function Heading(props) {
  return (
    <div className="self-start font-thin">
      <h1 className="text-white text-7xl m-12">
        {props.span}
        <span className="text-white ml-5">{props.heading}</span>
      </h1>
    </div>
  );
}
