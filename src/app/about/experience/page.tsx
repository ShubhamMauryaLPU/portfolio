import React from "react";
import { Meteors } from "@/components/ui/meteors";

export default function Experience() {
  return (
    <div className="mt-40 w-[90%] mx-auto z-10">
      <h1 className="text-center text-3xl mb-4 font-bold text-slate-300">My Companies Journey</h1>
      <div className="  relative">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-white mb-4 relative w-full block">
          MERN STACK DEVELOPER (Intern)<span className=" float-right"> Jul'24 - Dec'24</span>
          </h1>
          <p className="font-normal text-base text-slate-400 mb-4 relative ">
            <b>PHOECLOUD jaipur , rajasthan (Remote)</b>
          </p>
          <ul className="text-base text-slate-250 mb-4 relative list-disc pl-3">
            <li>Implemented UI/UX designs provided by the design team.</li>
            <li>Architected and developing API infrastructure for the backend.</li>
            <li>Developed robust web applications, leveraged the power of MERN stack.</li>
            <li>Worked on Various React Projects for building the single page web application.</li>
          </ul>
          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            <a href="https://phoetech.in/">Phoecloud</a>
          </button>
          <Meteors number={20} />
        </div>
        <div className="relative shadow-xl my-4 bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-white mb-4 relative  w-full block">
          WEB DEVELOPMENT INTERN <span className=" float-right"> Sep'24 - Oct'24</span>
          </h1>
          <p className="font-normal text-base text-slate-400 mb-4 relative ">
            <b>PRODIGY INFOTECH (Remote)</b>
          </p>
          <ul className="text-base text-slate-250 mb-4 relative  list-disc pl-3">
            <li>Implemented and learn about HTML and CSS to structure the content on the web page.</li>
            <li>Worked with JAVASCRIPT to add the functionalities in the web page.</li>
            <li>Built web applications using the pure React to make code easy to understand and to write.</li>
            <li>Made weather-application to know real time upadates using React JS.</li>
          </ul>
          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            <a href="https://prodigyinfotech.dev/">Prodigy Infotech</a>
          </button>
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
