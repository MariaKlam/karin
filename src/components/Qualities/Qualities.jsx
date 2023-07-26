import React from "react";
import sections from "../../constants/data";
import images from "../../constants/images";
import "./Qualities.css";

const Qualities = () => {
  return (
    <section className="qualities section-p" id="qualities">
      <div className="container">
        <div className="qualities-content grid">
          <div className="content-left">
            <div className="section-t text-center">
              <h3>Suur kogemustepagas</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                voluptates deserunt, molestiae soluta cumque eum.
              </p>
            </div>

            <div className="item-list grid text-robin-blue">
              {sections.qualities.map((quality) => {
                return (
                  <div className="item flex" key={quality.id}>
                    <div className="item-icon flex flex-center">
                      {quality.icon}
                    </div>
                    <div className="item-text">
                      <h3 className="item-title fs-25">{quality.title}</h3>
                      <p className="text">{quality.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="content-right">
            <img src={images.about_main_img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualities;
