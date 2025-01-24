import Link from "next/link";
import Image from "next/image"; // Import Image component from next/image
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import "./HomeSection.css";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="w-full flex flex-col lg:flex-row items-center text-white justify-center align-middle px-4 p-4 relative z-10 pt-32">
        <div className="lg:w-2/3 w-full text-center lg:text-left lg:mb-0 lg:pl-12 lg:pt-20 md:pt-64 bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
          <h3 className="text-lg font-semibold">Hi</h3>
          <h2 className="text-2xl font-bold">
            I&apos;m <span className="text-red-600">Shubham Maurya</span>
          </h2>
          <h2 className="text-xl font-medium">a MERN stack developer</h2>
          <p className="mt-4">
            I am from <b>Chandauli</b>, a district located near <b>Varanasi</b>,
            one of the oldest and holiest cities in the world.
          </p>
          <p className="mt-2">
            Currently I am pursuing my &nbsp;
            <b>
              Master of Computer Application at Lovely Professional University.
            </b>
          </p>
          <div className="mt-4 my-6 ">
            <Link href={"CV.pdf"} download={"shubham.pdf"}>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Download CV &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/3 w-full flex justify-center sm:pt-10">
          <Image
            src="/image/myImg11.png"
            alt="Shubham Maurya"
            width={300}
            height={500}
            className="h-[28rem] rounded-lg rounded-b-3xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
