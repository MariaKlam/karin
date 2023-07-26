import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import "./Services.css";

const SingleService = ({ service }) => {
  return (
    <div
      className="item bg-dark translate-effect"
      key={service.id}
      style={{
        background: `url(${service.image})`,
      }}>
      <span className="item-icon">{service.icon}</span>
      <h4 className="item-title fs-25">{service.title}</h4>
      <p className="fs-19 text">{service.text}</p>
      <a href="/" className="item-link text-grey">
        <BsArrowRightCircle size={30} />
      </a>
    </div>
  );
};

export default SingleService;
