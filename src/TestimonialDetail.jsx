import React, { useState } from "react";

export default function TestimonialDetail({ item }) {
  const [active, setActive] = useState(false);
  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="section-6-leftBox"
      style={{ backgroundColor: active ? "black" : "white" }}
    >
      <img className="section-6-leftBox-img" src={item.icon} alt="/" />
      <p
        style={{ color: active ? "white" : "black" }}
        className="section-6-leftBox-p1"
      >
        {item.title}
      </p>
      <div
        style={{ background: active ? "white" : "black" }}
        className="section-6-leftBox-div"
      ></div>
      <h3
        style={{ color: active ? "white" : "black" }}
        className="section-6-leftBox-h3"
      >
        {item.page}
      </h3>
      <p
        style={{ color: active ? "white" : "black" }}
        className="section-6-leftBox-p2"
      >
        {item.paragraph}
      </p>
    </div>
  );
}
