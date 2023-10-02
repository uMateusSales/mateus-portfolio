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
        <CardDescription>
          Pequeno resumo de bla bla bla de minha formação e trabalhos
        </CardDescription>
      </CardHeader>
      <Separator
        className="w-0.5 my-4 bg-neutral-600 rounded"
        orientation="vertical"
      />
      <CardContent>
        <div className="flex mt-2">
          <Image
            alt="notebook"
            style={{ objectFit: "contain", borderRadius: 5 }}
            src="/971.jpg"
            width={500}
            height={500}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default MainTitle;
