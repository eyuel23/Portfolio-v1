import React from "react";
import Image from "next/image";
import github from "../../public/github.svg";
import linkIcon from "../../public/linkIcon.svg";
import folder from "../../public/folder.svg";
import Link from "next/link";

export default function OtherProjectCard({ project }) {
  return (
    <div className="flex flex-col border-2 border-black text-center gap-10 pb-8 shadow-xl w-[40rem] h-[26rem] hover:scale-105 hover:shadow-light hover:bg-brandColor">
      <div className="flex justify-between p-2 ">
        <Image src={folder} alt="folder" width={32} height={32} />
        <div className="flex gap-3">
          <Link href={project.githubUrl}>
            <Image src={github} alt="github" width={32} height={32} />
          </Link>
          {project.liveUrl && (
            <Link href={project.liveUrl}>
              <Image src={linkIcon} alt="live link" width={32} height={32} />
            </Link>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-6 pb-9 px-16 ">
        <h1 className="text-6xl">{project.name}</h1>
        <p className="text-2xl">
          {project.descriptionLine1}
          <br />
          {project.descriptionLine2}
        </p>
      </div>
      <h1 className="text-xl">{project.techStack}</h1>
    </div>
  );
}
