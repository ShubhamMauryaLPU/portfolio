import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Me</h2>
          <p className="mb-4">
            I'am a skilled MERN stack developer hailing from Chandauli, a serene
            district near the historic city of Varanasi. With a strong
            foundation in web technologies like React, Node.js, MongoDB,
            and in building responsive and interactive applications.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <Link
                href={"/home"}
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/about/exprience"}
                className="hover:text-white transition-colors duration-300"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href={"/about/skills"}
                className="hover:text-white transition-colors duration-300"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href={"/about/project"}
                className="hover:text-white transition-colors duration-300"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                href={"/about/education"}
                className="hover:text-white transition-colors duration-300"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                href={"/about/certificates"}
                className="hover:text-white transition-colors duration-300"
              >
                Certificates
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Me</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Me</h2>
          <p>Punjab, India</p>
          <p>Jalandhar 144411</p>
          <p>Email: emailsshubham.com</p>
          <p>Phone: (+91) 8573823558</p>
        </div>
      </div>
      <p className="text-center text-sm pt-8">
        Be a good person always
      </p>
    </footer>
  );
};

export default Footer;
