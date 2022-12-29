import React from "react";

export default function index() {
  return (
    <div className="h-screen">
      <embed
        className="h-screen w-full"
        type="application/pdf"
        src={"/resume.pdf"}
      />
    </div>
  );
}
