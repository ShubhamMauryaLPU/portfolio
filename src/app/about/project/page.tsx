import React from "react";
import { Meteors } from "@/components/ui/meteors";

export default function Experience() {
  return (
    <div className="mt-40 w-[90%] mx-auto z-10">
      <h1 className="text-center text-3xl mb-4 font-bold text-slate-300">
        My Projects
      </h1>
      <div className="relative">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />

        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 pb-10 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-white mb-4 relative w-full block">
            Filmen | Movie Website Using Pure React{" "}
            <span className="float-right">22 Jul&apos;24</span>
          </h1>
          <p className="font-normal text-base text-slate-400 mb-4 relative">
            <b>
              Technologies Used: React, Redux, Bootstrap, Node.js, Express,
              MongoDB
            </b>
          </p>
          <ul className="text-base text-slate-250 mb-4 relative list-disc pl-3">
            <li>Led a team to develop a movie website using pure React.</li>
            <li>
              Implemented MongoDB for the database and Node.js for the backend.
            </li>
            <li>
              Delivered a user-friendly and responsive website, enhancing user
              engagement and satisfaction with intuitive design and
              functionality.
            </li>
          </ul>
          <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
            <a href="https://filmen2.onrender.com/">Filmen</a>
          </button>
          <Meteors number={20} />
        </div>
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 mt-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-white mb-4 relative w-full block">
            Stay In School | Web Application Using Pure React{" "}
            <span className="float-right">22 Jul&apos;24</span>
          </h1>
          <p className="font-normal text-base text-slate-400 mb-4 relative">
            <b>
              Technologies Used: React JS, tailwind, Node JS, Express JS,
              MongoDB
            </b>
          </p>
          <ul className="text-base text-slate-250 mb-4 relative list-disc pl-3">
            <li>Led a team to develop web application using React.</li>
            <li>
              Developed an early warning system to identify students at risk
              based on attendance, performance, and socio-economic factors.
            </li>
            <li>Created a community engagement platform to involve parents, teachers, and local organizations in student retention efforts.</li>
            <li>
              Delivered a user-friendly and responsive website, enhancing user
              engagement and satisfaction with intuitive design and
              functionality.
            </li>
          </ul>
          <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
            <a href="#">stayinschool</a>
          </button>
          <Meteors number={20} />
        </div>

        <div className="relative shadow-xl mt-4 bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-white mb-4 relative w-full block">
            Zerodha Clone | Commerce Website Using React{" "}
            <span className="float-right">5 Oct&apos;24</span>
          </h1>
          <p className="font-normal text-base text-slate-400 mb-4 relative">
            <b>
              Technologies Used: React, Redux, Bootstrap, Node.js, Express,
              MongoDB
            </b>
          </p>
          <ul className="text-base text-slate-250 mb-4 relative list-disc pl-3">
            <li>
              Developed a clone of Zerodha, an online trading platform, with a
              focus on replicating key features including user authentication,
              portfolio management, and real-time data updates.
            </li>
            <li>
              Implemented a responsive design using Bootstrap CSS to provide a
              seamless user experience across devices.
            </li>
            <li>
              Utilized Redux for state management to ensure efficient handling
              of application data.
            </li>
          </ul>
          <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
            <a href="#">Zerodha</a>
          </button>
          <Meteors number={20} />
        </div>

        <div className="relative shadow-xl mt-4 bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-white mb-4 relative w-full block">
            Portfolio | Website Using Next Js{" "}
            <span className="float-right">26 Dec&apos;24</span>
          </h1>
          <p className="font-normal text-base text-slate-400 mb-4 relative">
            <b>Technologies Used: HTML, CSS, Tailwind, JavaScript, Next.js</b>
          </p>
          <ul className="text-base text-slate-250 mb-4 relative list-disc pl-3">
            <li>
              Designed and developed a responsive and visually appealing
              personal portfolio website using React, HTML, CSS, and Bootstrap.
            </li>
            <li>
              Implemented Aceternity UI components with JavaScript to enhance
              user experience.
            </li>
            <li>
              Showcased professional projects, skills, and achievements in a
              clean and organized layout.
            </li>
            <li>
              Optimized the website for performance and compatibility across
              various devices and browsers.
            </li>
          </ul>
          <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
            <a href="https://myport-c6to.onrender.com/">Portfolio</a>
          </button>
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
