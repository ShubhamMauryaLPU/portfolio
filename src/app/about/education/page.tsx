"use client";

import React from "react";
import Image from "next/image";
import education from "@/data/education.json";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const Page = () => {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <div className="flex flex-wrap justify-center">
        {education.map((degree, idx) => (
          <CardContainer key={degree._id || idx} className="inter-var mx-4">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 lg:p-6 border">
              <CardItem translateZ="100" className="w-full ">
                <Image
                  src={degree.collegeImage}
                  height={1000}
                  width={1000}
                  className="h-68 w-full pt-3 object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={degree.collegeName}
                />
              </CardItem>
              <div className="mt-4 w-full">
                <CardItem
                  as="h3"
                  translateZ="60"
                  className="text-neutral-500 text-base max-w-sm mt-2 dark:text-neutral-300 inline w-full"
                >
                  {degree.collegeName} <span className="float-right">&nbsp;{degree.year}</span>
                </CardItem>
              </div>
              <div className="mt-4">
                <CardItem
                  as="h3"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 inline w-full"
                >
                  {degree.place}<span className="float-right">&nbsp;{degree.CGPA ||degree.percentage}</span>
                </CardItem>
                {/* <CardItem
                  as="span"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 float-right"
                >
                {degree.Grade}
                </CardItem> */}
              </div>
              
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Page;
