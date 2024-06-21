import React, { useState } from "react";

export default function ExperienceDetail({ item }) {
  const [actived, setActive] = useState(false);
  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="section-3-google"
      style={{ backgroundColor: actived ? "#27272A" : "black" }}
    >
      <div className="section-3-google-top">
        <img className="img" src={item.icon} alt="/" />
        <h3 className="section-3-google-top-h3">{item.title}</h3>
        <p className="section-3-google-top-p">{item.year}</p>
      </div>
      <div className="section-3-google-bottom">
        <p className="section-3-google-bottom-p">{item.page}</p>
      </div>
    </div>
  );
}
