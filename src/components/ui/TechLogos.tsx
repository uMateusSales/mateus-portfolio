import Image from "next/image";
import React from "react";
import { Tecnologia } from "@/app/projects/page";
interface TechLogoProps {
  tecnologia: Tecnologia[];
}

const TechLogos: React.FC<TechLogoProps> = ({ tecnologia }) => {
  return (
    <div className="flex max-w-fit  rounded gap-3 items-center justify-center">
      {tecnologia?.map((i) => (
        <div
          key={i.nome}
          className="flex flex-col gap-1 shadow rounded-xl p-2 items-center"
        >
          <Image alt={i.nome} width={32} height={32} src={i.logo} />
          <p className="text-xs font-semibold text-center">{i.nome}</p>
        </div>
      ))}
    </div>
  );
};

export default TechLogos;
