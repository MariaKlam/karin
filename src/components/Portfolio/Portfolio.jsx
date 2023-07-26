import React from "react";
import "./Portfolio.css";
import sections from "../../constants/data";
import { InstagramEmbed } from "react-social-media-embed";

const Portfolio = () => {
  return (
    <section className="portfolio section-p bg-dark" id="portfolio">
      <div className="container">
        <div className="portfolio-content">
          <div className="section-t text-center">
            <h3>Tehtud tööd</h3>
            <p className="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              corrupti laboriosam fugit expedita inventore temporibus!
            </p>
          </div>

          <div className="item-list text-center text-white grid">
            {sections.portfolio.map((portfolio) => {
              return (
                <div
                  className="item flex flex-center flex-column translate-effect"
                  key={portfolio.id}
                  style={{
                    background: `url(${portfolio.image})`,
                  }}>
                  <div className="item-title fs-25 fw-6">{portfolio.title}</div>
                  <div className="text text-white">{portfolio.text}</div>
                </div>
              );
            })}
          </div>
          <div>
            <h3>Sotsiaalmeedia</h3>
            <div
              className="item-list text-center text-white grid"
              style={{ display: "flex", justifyContent: "center" }}>
              <InstagramEmbed
                url="https://www.instagram.com/reel/Cp5oL11tccg/?utm_source=ig_embed&ig_rid=b4a24470-1e96-4a67-9c2e-939d2bca3927"
                width={350}
                height={500}
              />
              <InstagramEmbed
                url="https://www.instagram.com/p/CqGNV57gP-I/"
                width={350}
                height={500}
              />
              <InstagramEmbed
                url="https://www.instagram.com/p/CoUhZuEPOTT/"
                width={350}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
