"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";

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
      <Swiper
        className="flex min-h-[350px] max-w-full  sm:flex sm:flex-1 relative"
        modules={[Pagination, Autoplay]}
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
            <Image
              fill
              quality={100}
              style={{ objectFit: "contain" }}
              alt="foto do projeto"
              src={i}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNsrAcAAYcBArSMKU4AAAAASUVORK5CYII="
            />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
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
        <div>
          <h3>Tecnologias usadas:</h3>
        </div>
      </div>
    </>
  );
};
