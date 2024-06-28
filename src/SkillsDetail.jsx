import React, { useState } from "react";

export default function SkillsDetail({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="section-2-top-flexbox-VectorBox"
      style={{ backgroundColor: hovered ? "black" : "white" }}
    >
      <img className="section-2-img1" src={item.icon} alt="/" />
      <h5
        style={{ color: hovered ? "white" : "black" }}
        className="VectorBox-h5"
      >
        {item.title}
      </h5>
    </div>
  );
}
