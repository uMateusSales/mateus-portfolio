import React from "react";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

interface DescriptionMapProps {
  isAnimating?: boolean;
}

export default function DescriptionMap({ isAnimating }: DescriptionMapProps) {
  const skills = [
    {
      name: "Linguagens",
      content: ["Javascript,", "Typescript", "Python"],
    },
    {
      name: "Front-end",
      content: [
        "React,",
        "Nextjs 13,",
        "React Hooks,",
        "Redux toolkit e Zustand",
      ],
    },
    {
      name: "Back-end",
      content: ["Nodejs, Fastify, Express, Nestjs"],
    },
    {
      name: "Bando de dados",
      content: ["MySQL, PostgreeSQL, MongoDB", "Prisma"],
    },
    {
      name: "Design",
      content: ["TailwindCSS,", "Styled-components,", "MaterialUI,", "Figma"],
    },
  ];

  const animationClasses = isAnimating
    ? "opacity-0 translate-y-10"
    : "opacity-100 translate-y-0";
  const transitionClasses = "transition-all duration-700 ease-out";

  return (
    <div
      className={cn("flex flex-col gap-3", animationClasses, transitionClasses)}
    >
      {skills.map((i, index) => {
        return (
          <div
            className="relative group overflow-hidden flex items-center gap-1.5 flex-wrap text-xs sm:text-sm"
            key={i.name}
          >
            <Separator />
            <p className="text-lg">
              <b>{i.name}</b>
            </p>
            {i.content.map((i) => (
              <div key={i}>
                <p className="font-medium text-base" key={i}>
                  {i}
                </p>
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
