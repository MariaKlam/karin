import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header className="header flex flex-center flex-column">
      <div class="hero">
        <div class="hero-one"></div>
        <div class="hero-two">
          {" "}
          <h1 class="header-title">
            <span class="header-primary">
              Loon Sulle <span id="spin"></span>
            </span>
          </h1>
        </div>
      </div>

      {/*<div className="text-container">
        <div className="header-content text-center flex flex-column">
          <h1 className="text-uppercase header-title">
            Sisu, visuaal, turundus, reklaam
          </h1>
          <p className="text-lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            doloremque dolore quia omnis maxime corporis deserunt neque
            voluptatum.
          </p>
          <a href="/" className="btn header-btn btn-blue">
            <FaPaperPlane /> <span>get started</span>
          </a>
        </div>
  </div>*/}
    </header>
  );
};

export default Header;
