"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

interface ProjeactCardProps {
  titulo: string;
  desc: string;
  fotos?: string[];
  link: string;
}

export const ProjectCard: React.FC<ProjeactCardProps> = ({
  titulo,
  desc,
  fotos,
  link,
}) => {
  return (
    <>
      {fotos?.map((i) => (
        <div className="flex min-h-[350px] sm:flex sm:flex-1 relative">
          {" "}
          <Image
            fill
            style={{ objectFit: "contain" }}
            alt="foto do projeto"
            src={i}
          />{" "}
        </div>
      ))}

      <div className="flex flex-col flex-1 justify-center items-center">
        <Link
          className="duration-200 hover:opacity-60 p-4 sm:p-6"
          href={link}
          target="_blank"
        >
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold">
            {titulo}
          </h2>
        </Link>
        <p className="text-xs sm:text-sm text-justify px-4 pb-4 sm:px-6 sm:pb-6">
          {desc}
        </p>
      </div>
    </>
  );
};
