import React from "react";
import { Meteors } from "@/components/ui/meteors";

export default function Experience() {
  return (
    <div className="mt-40 w-[90%] mx-auto z-10">
      <h1 className="text-center text-3xl mb-4 font-bold text-slate-300">My Companies Journey</h1>
      <div className="relative">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-white mb-4 relative w-full block">
            MERN STACK DEVELOPER (Intern)<span className="float-right"> Jul&apos;24 - Dec&apos;24</span>
          </h1>
          <p className="font-normal text-base text-slate-400 mb-4 relative">
            <b>PHOECLOUD Jaipur, Rajasthan (Remote)</b>
          </p>
          <ul className="text-base text-slate-250 mb-4 relative list-disc pl-3">
            <li>Implemented UI/UX designs provided by the design team.</li>
            <li>Architected and developed API infrastructure for the backend.</li>
            <li>Developed robust web applications, leveraging the power of the MERN stack.</li>
            <li>Worked on various React projects for building single-page web applications.</li>
          </ul>
          <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
            <a href="https://phoetech.in/" target="_blank" rel="noopener noreferrer">Phoecloud</a>
          </button>
          <Meteors number={20} />
        </div>
        <div className="relative shadow-xl my-4 bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-white mb-4 relative w-full block">
            WEB DEVELOPMENT INTERN <span className="float-right"> Sep&apos;24 - Oct&apos;24</span>
          </h1>
          <p className="font-normal text-base text-slate-400 mb-4 relative">
            <b>PRODIGY INFOTECH (Remote)</b>
          </p>
          <ul className="text-base text-slate-250 mb-4 relative list-disc pl-3">
            <li>Implemented and learned about HTML and CSS to structure the content on web pages.</li>
            <li>Worked with JavaScript to add functionalities to web pages.</li>
            <li>Built web applications using pure React to make the code easy to understand and write.</li>
            <li>Created a weather application to display real-time updates using React JS.</li>
          </ul>
          <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
            <a href="https://prodigyinfotech.dev/" target="_blank" rel="noopener noreferrer">Prodigy Infotech</a>
          </button>
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
