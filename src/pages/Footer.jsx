import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer-ion-icon">
        <span>
          <a href="https://www.facebook.com/profile.php?id=100004602798462">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a href="https://www.linkedin.com/in/shubhamkrmaurya/">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <ion-icon name="mail-outline"></ion-icon>
          <a href="https://x.com/Skmaurya08">
            <ion-icon name="logo-xing"></ion-icon>
          </a>
          <a href="https://www.instagram.com/iamshubhammaurya/">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </span>
        <span>
          <Link to={"/"} className="footer-link">
            Home
          </Link>
          <Link to={"/About"} className="footer-link">
            About me
          </Link>
          <Link to={"/Education"} className="footer-link">
            Education
          </Link>
          <Link to={"/Projects"} className="footer-link">
            Projects
          </Link>
          <Link to={"/Experience"} className="footer-link">
            Experience
          </Link>
          <Link to={"/contact"} className="footer-link">
            Contact me
          </Link>
        </span>
        <p>Be a good person always</p>
      </div>
    </>
  );
};

export default Footer;
