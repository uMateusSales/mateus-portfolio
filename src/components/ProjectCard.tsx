"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import TechLogos from "./ui/TechLogos";
import { Tecnologia } from "@/app/projects/page";

interface ProjeactCardProps {
  titulo: string;
  desc?: string;
  fotos?: string[];
  link: string;
  tecnologias: Tecnologia[];
}

export const ProjectCard: React.FC<ProjeactCardProps> = ({
  titulo,
  desc,
  fotos,
  link,
  tecnologias,
}) => {
  return (
    <>
      <Swiper
        className=" min-h-[350px] max-w-full  flex-1 "
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        autoplay={true}
        slidesPerView={1}
        navigation
        pagination={true}
        loop={true}
        observer={true}
        observeSlideChildren={true}
      >
        {fotos?.map((i) => (
          <SwiperSlide key={i} className=" mr-0">
            <div className="flex relative min-w-[300px] min-h-[350px]">
              <Image
                priority={true}
                sizes={"(max-width: 640px) 100vw "}
                fill
                style={{ objectFit: "scale-down" }}
                alt={i}
                src={i}
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
      <div
        key={titulo}
        className="flex flex-col flex-1 justify-center items-center  "
      >
        <Link
          className="transition-opacity  ease-in duration-300 opacity-100 hover:opacity-60  p-4 sm:p-6"
          href={link}
          target="_blank"
        >
          <h2 className="text-center text-2xl p-1 sm:text-3xl hover:bg-neutral-100 hover:outline shadow rounded md:text-4xl font-semibold">
            {titulo}
          </h2>
        </Link>
        <p className="font-semibold text-xs sm:text-sm text-justify px-4 pb-4 sm:px-6 sm:pb-6">
          {desc}
        </p>
        <div>
          <h3>Tecnologias usadas:</h3>
          <TechLogos tecnologia={tecnologias} />
        </div>
      </div>
    </>
  );
};
