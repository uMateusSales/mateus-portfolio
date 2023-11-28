"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
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
        className="flex min-h-[350px] max-w-full  sm:flex sm:flex-1 relative"
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        pagination={true}
        loop={true}
      >
        {fotos?.map((i) => (
          <SwiperSlide className="min-h-[350px] mr-0 ">
            <div className="flex">
              <Image
                fill
                quality={95}
                style={{ objectFit: "scale-down" }}
                alt={i}
                src={i}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNsrAcAAYcBArSMKU4AAAAASUVORK5CYII="
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
