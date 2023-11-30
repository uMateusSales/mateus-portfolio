import React from "react";
import { Separator } from "./ui/separator";

export default function DescriptionMap() {
  const links = [
    {
      name: "Email",
      content: "jamesmca@live.com",
      link: "https://www.google.com",
    },
    { name: "GitHub", content: "jamezmca", link: "https://www.google.com" },
    {
      name: "LinkedIn",
      content: "jamezmcarthur",
      link: "https://www.google.com",
    },
    { name: "YouTube", content: "smoljames", link: "https://www.google.com" },
  ];

  const skills = [
    {
      name: "Linguagens",
      content: ["Javascript", "Typescript"],
    },
    {
      name: "Front-end",
      content: [
        "React",
        "Nextjs 13",
        "React Hooks",
        "Redux toolkit e Zustand",

        ,
      ],
    },
    {
      name: "Back-end",
      content: ["Nodejs, Fastify, Express, Nestjs"],
    },
    {
      name: "Design",
      content: ["TailwindCSS", "Styled-components", "MaterialUI", "Figma"],
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      {skills.map((i, index) => {
        return (
          <div
            className="relative group overflow-hidden  flex items-center gap-1.5 flex-wrap text-xs sm:text-sm"
            key={i.name}
          >
            <Separator />
            <p>
              <b>{i.name}</b>
            </p>
            {i.content.map((i) => (
              <div key={i}>
                <p key={i}>{i}</p>
                <Separator />
              </div>
            ))}
            <div className="bg-purple-400 duration-500 group-hover:translate-x-full h-0.5 w-full absolute right-full bottom-0"></div>
          </div>
        );
      })}
    </div>
  );
}
