"use client";

import React from "react";
import Image from "next/image";
import certificate from "@/data/certificates.json";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const Page = () => {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <div className="flex flex-wrap justify-center">
        {certificate.map((cert, idx) => (
          <CardContainer key={cert._id || idx} className="inter-var mx-4">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 lg:p-6 border">
              <CardItem translateZ="100" className="w-full ">
                <Image
                  src={cert.image}
                  height={1000}
                  width={1000}
                  className="h-68 w-full pt-3 object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={cert.name}
                />
              </CardItem>
              <div className="mt-4 w-full">
                <CardItem
                  as="h3"
                  translateZ="60"
                  className="text-neutral-500 text-base max-w-sm mt-2 dark:text-neutral-300 inline w-full"
                >
                  {cert.name} <span className="float-right">&nbsp;{cert.date}</span>
                </CardItem>
              </div>
              <div className="mt-4">
                <CardItem
                  as="h3"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 inline w-full"
                >
                  {cert.from}<span className="float-right">&nbsp;{cert.Grade}</span>
                </CardItem>
              </div>
              
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Page;
