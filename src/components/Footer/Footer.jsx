import React from "react";
import "./Footer.css";

const Footer = () => {
  let date = new Date();

  return (
    <footer className="footer bg-black flex flex-center" id="footer">
      <div className="container flex flex-center w-100">
        <div className="grid footer-content text-center">
          <p className="text text-white">
            Kõik õigused kaitstud bla bla bla lorem ipsum
          </p>
          <span className="text text-white">
            &copy; {date.getFullYear().toString()}{" "}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
