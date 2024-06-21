import React from "react";
import Boy from "./imgs/boy.png";
import Girl from "./imgs/girl.png";
import TestimonialDetail from "./TestimonialDetail";

export default function MyTestimonial() {
  const myTestimonialArray = [
    {
      icon: Boy,
      title:
        "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
      page: "Evren Shah",
      paragraph: "Designer",
    },
    {
      icon: Girl,
      title:
        "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
      page: "Flora sheen",
      paragraph: "Designer",
    },
    {
      icon: Boy,
      title:
        "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
      page: "Evren Shah",
      paragraph: "Designer",
    },
  ];

  return (
    <div className="container-7">
      <h2 className="section-6-h2">
        My <span className="section-6-span">Testimonial</span>
      </h2>
      <div className="section-6 d-flex  justify-content-center gap-5 pt-5">
        {myTestimonialArray.map((item) => (
          <TestimonialDetail item={item} />
        ))}
        {/* <div className="section-6-leftBox">
          <img className="section-6-leftBox-img" src={Boy} alt="/" />
          <p className="section-6-leftBox-p1">
            I recently had to jump on 10+ different calls across eight different
            countries to find the right owner.
          </p>
          <div className="section-6-leftBox-div"></div>
          <h3 className="section-6-leftBox-h3">Evren Shah</h3>
          <p className="section-6-leftBox-p2">Designer</p>
        </div>
        <div className="section-6-leftBox">
          <img className="section-6-leftBox-img" src={Girl} alt="/" />
          <p className="section-6-leftBox-p1">
            I recently had to jump on 10+ different calls across eight different
            countries to find the right owner.
          </p>
          <div className="section-6-leftBox-div"></div>
          <h3 className="section-6-leftBox-h3">Flora sheen</h3>
          <p className="section-6-leftBox-p2">Designer</p>
        </div>
        <div className="section-6-leftBox">
          <img className="section-6-leftBox-img" src={Boy} alt="/" />
          <p className="section-6-leftBox-p1">
            I recently had to jump on 10+ different calls across eight different
            countries to find the right owner.
          </p>
          <div className="section-6-leftBox-div"></div>
          <h3 className="section-6-leftBox-h3">Evren Shah</h3>
          <p className="section-6-leftBox-p2">Designer</p>
        </div> */}
      </div>
    </div>
  );
}
