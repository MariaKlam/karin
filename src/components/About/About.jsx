import React from "react";
import "./About.css";
import images from "../../constants/images";
import Qualities from "../Qualities/Qualities";

const About = () => {
  return (
    <section className="about section-p bg-dark" id="about">
      <div className="container">
        <div className="about-content grid text-center">
          <div className="content-left">
            <img src={images.karin} alt="" />
          </div>
          <div className="content-right">
            <div className="section-t">
              <h3>Minust</h3>
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit qui eum at unde ipsa quibusdam sunt incidunt
              voluptates dicta ab provident doloremque perferendis ad voluptatem
              mollitia amet magnam, hic aliquam cupiditate blanditiis quas eos
              neque saepe? Quas expedita cupiditate et sint nesciunt, ipsum eos
              reiciendis cumque. At provident ab veritatis.
            </p>
            <p className="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              nobis laudantium nesciunt maxime tenetur illo.
            </p>
          </div>
        </div>
      </div>
      <Qualities />
    </section>
  );
};

export default About;
