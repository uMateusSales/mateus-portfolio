import React from "react";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

// Adicionamos uma interface para tipar a prop
interface DescriptionMapProps {
  isAnimating?: boolean;
}

// O componente agora recebe a prop 'isAnimating'
export default function DescriptionMap({ isAnimating }: DescriptionMapProps) {
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
      content: ["Javascript,", "Typescript"],
    },
    {
      name: "Front-end",
      content: [
        "React,",
        "Nextjs 13,",
        "React Hooks,",
        "Redux toolkit e Zustand",
        "",
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

  // Classes de animação condicionais
  const animationClasses = isAnimating
    ? "opacity-0 translate-y-5" // Começa invisível e 5px para baixo
    : "opacity-100 translate-y-0"; // Fica visível e retorna para a posição original

  // Classes de transição
  const transitionClasses = "transition-all duration-700 ease-out";

  return (
    // Adicionamos as classes de animação e transição ao container principal
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
