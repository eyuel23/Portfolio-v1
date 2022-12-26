import React from "react";

export default function Heading(props) {
  return (
    <div className="self-start font-extralight text-black">
      <h1 className="text-7xl m-12">
        {props.span}
        <span className=" ml-5">{props.heading}</span>
      </h1>
    </div>
  );
}
