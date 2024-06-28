import React from "react";
import Boy from "./imgs/boy.png";
import Girl from "./imgs/girl.png";
import TestimonialDetail from "./TestimonialDetail";

export default function MyTestimonial() {
  const myTestimonialArray = [
    {
      id: 1,
      icon: Boy,
      title:
        "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
      page: "Evren Shah",
      paragraph: "Designer",
    },
    {
      id: 2,
      icon: Girl,
      title:
        "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
      page: "Flora sheen",
      paragraph: "Designer",
    },
    {
      id: 3,
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
      <div className="section-6 d-flex  justify-content-center gap-5 ">
        {myTestimonialArray.map((item) => (
          <TestimonialDetail key={item.id} item={item} />
        ))}
      </div>
      <h1>Salom </h1>
    </div>
  );
}
