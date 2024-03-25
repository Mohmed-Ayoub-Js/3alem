"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { Button } from "./ui/button";
const About = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#image",
      {
        y: 0,
      },
      {
        y: -15,
        duration: 1,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      },
    );
  }, []);
  return (
    <div>
      <div className="flex justify-center items-center md:flex-row flex-col-reverse">
        <div className="flex justify-start items-start flex-col">
          <h1 className="text-3xl font-bold">
            دورات لتعلم مختلف المجالات ، مجــانا
          </h1>
          <p className="text-gray-500">
            منصة تعلم العربية هي منصة تقدم دورات مجانية
          </p>
          <p className="text-gray-500">
            من منصة اليوتيوب ، تقدم هذه الدورة ميزة تنظيم الفيديوهات
          </p>
          <p className="text-gray-500">نزع كل مصادر التشتيت</p>
          <Button>البدأ الان</Button>
        </div>
        <Image
          src={"/learn.png"}
          alt="image"
          width={600}
          height={600}
          id="image"
        />
      </div>
    </div>
  );
};

export default About;
