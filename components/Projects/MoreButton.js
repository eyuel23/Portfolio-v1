import React from "react";

export default function MoreButton(props) {
  return (
    <button
      className="border-2 border-black self-center w-1/5 py-6 text-3xl"
      onClick={props.onMore}
    >
      Show more
    </button>
  );
}
