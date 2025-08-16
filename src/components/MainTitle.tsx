"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Separator } from "@radix-ui/react-separator";

interface MainTitleProps {
  titulo: string;
  subtitulo: string;
  isAnimating?: boolean; // Adicionada a prop para controlar a animação
}

const MainTitle: React.FC<MainTitleProps> = ({
  titulo,
  subtitulo,
  isAnimating,
}) => {
  // Classes de animação condicionais
  const animationClasses = isAnimating
    ? "transform scale-75 opacity-0" // Estado inicial
    : "transform scale-100 opacity-100"; // Estado final

  // Classes de transição
  const transitionClasses = "transition-all duration-700 ease-in-out";

  return (
    <Card
      className={`flex flex-row justify-between ${transitionClasses} ${animationClasses}`}
    >
      <CardHeader>
        <CardTitle>{titulo}</CardTitle>
        <CardDescription>{subtitulo}</CardDescription>
        <CardDescription className="font-medium">
          <br></br>
          Possuo experiência com:
          <br></br>• ReactJS: React Hooks, gerenciamento de estados com
          ContextAPI, Redux e Zustand
          <br></br>• Node.js (Fastify & Express): Experiência em desenvolvimento
          backend, aproveitando os recursos do Node.js para construir soluções
          de servidores escaláveis e eficientes.
          <br></br>• Next.js: Minha ferramenta preferida para desenvolvimento
          fullstack. O utilizando para criar aplicativos de alto desempenho com
          SSR com recursos aprimorados de SEO.
        </CardDescription>
      </CardHeader>
      <Separator
        className="w-0.5 my-4 bg-neutral-600 rounded"
        orientation="vertical"
      />
      <CardContent>
        <div className="flex mt-2 self-center">
          <Image
            alt="minha foto"
            style={{ objectFit: "scale-down", borderRadius: 5 }}
            src="/ai-print.png"
            width={500}
            height={500}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default MainTitle;
