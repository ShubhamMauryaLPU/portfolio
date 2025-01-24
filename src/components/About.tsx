"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
const About = () => {
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Hello!
          </p>
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            I'm creative MERN stack developer
          </h2>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          <div className="flex justify-center">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow w-[350px]">
                <img
                  src="./image/myImg3.png"
                  alt=""
                  className="rounded-lg h-96"
                />
              </div>
            </BackgroundGradient>
          </div>

          <div className="flex justify-center">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center  flex-grow">
                <p className="text-lg sm:text-xl text-black mt-4 text-center dark:text-neutral-200">
                  Detail
                </p>
                <p className=" text-neutral-600 dark:text-neutral-400 flex-grow text-base">
                  <div>
                    <b>Name: </b>Shubham Kumar Maurya
                  </div>
                  <div>
                    <b>Age: </b>23 Years
                  </div>
                  <div>
                    <b>Location: </b>GT Road Chandauli Uttar Pradesh, 232104
                  </div>
                  <div className="lg:pt-7">
                    <b>Skills: </b>
                  </div>
                  <p className="pl-2">
                    <div>
                      <b>Langueage: </b>c , c++, java, javascript, php, sql
                    </div>
                    <div>
                      <b>Framework: </b>express js, Bootstrap, Laravel, Tailwind
                    </div>
                    <div>
                      <b>Library/ Tool: </b> html, css, react js
                    </div>
                    <div>
                      <b>Databases: </b> Mysql ,Mongo db
                    </div>
                    <div>
                      <b>Plateform:</b> Windows, Linux, VS code
                    </div>
                  </p>
                </p>
              </div>
            </BackgroundGradient>
          </div>
          <div className="flex justify-center">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  About Me
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                  I am a versatile web developer, beginning my career as a
                  fresher with a strong skill set in both frontend and backend
                  development. I have the good knowledge of databases like SQL
                  and Mongo DB.
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                  I have a strong command of frontend technologies, including
                  HTML, CSS, JavaScript, and the React.js library. On the
                  backend, I am proficient in Node.js along with the Express.js
                  framework. Additionally, I have experience working with PHP
                  and the Laravel framework to build robust and scalable web
                  applications.
                </p>
              </div>
            </BackgroundGradient>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
