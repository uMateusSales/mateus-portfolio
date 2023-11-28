import Image from "next/image";
import React from "react";
import { Tecnologia } from "@/app/projects/page";
interface TechLogoProps {
  tecnologia: Tecnologia[];
}

const TechLogos: React.FC<TechLogoProps> = ({ tecnologia }) => {
  return (
    <div className="flex  rounded gap-3 items-center justify-center">
      {tecnologia?.map((i) => (
        <div className="flex flex-col gap-1 shadow rounded-xl p-2 items-center">
          <Image alt="logo" width={32} height={32} src={i.logo} />
          <p className="text-xs font-semibold">{i.nome}</p>
        </div>
      ))}
    </div>
  );
};

export default TechLogos;
