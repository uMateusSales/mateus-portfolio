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
}

const MainTitle: React.FC<MainTitleProps> = ({ titulo, subtitulo }) => {
  return (
    <Card className="flex flex-row justify-between">
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
            alt="notebook"
            style={{ objectFit: "contain", borderRadius: 5 }}
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
