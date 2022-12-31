import React, { useState } from "react";
import MoreButton from "./MoreButton";
import MoreProjects from "./MoreProjects";

export default function OtherProjects() {
  const [more, setMore] = useState(false);
  const showMoreProject = () => {
    setMore(true);
  };
  return (
    <>{more ? <MoreProjects /> : <MoreButton onMore={showMoreProject} />}</>
  );
}
