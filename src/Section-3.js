import React from "react";
import Google from "./imgs/google.png";
import Youtube from "./imgs/youtube.png";
import Apple from "./imgs/apple.png";
import ExperienceDetail from "./ExperienceDetail";

export default function MyExperience() {
  const ExperiencesArray = [
    {
      icon: Google,
      title: "Lead Software Engineer at Google",
      year: "Nov 2024 - Present",
      page: "  As a Senior Software Engineer at Google, I played a pivotal role  in developing innovative solutions for Google's core search  algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and   efficiency, optimizing user experiences for millions of users worldwide.",
    },
    {
      icon: Youtube,
      title: "Software Engineer at Youtube",
      year: "Nov 2024 - Present",
      page: " At Youtube, I served as a Software Engineer, focusing on the  design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless  functionality and scalability.",
    },
    {
      icon: Apple,
      title: "Junior Software Engineer at Apple",
      year: "Nov 2024 - Present",
      page: "   During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership            to a cross-functional team.",
    },
  ];

  return (
    <div className="bg">
      <div className="container4">
        <h2 className="section-3-h2">
          My <span className="section-3-span">Experience</span>
        </h2>
        <div className="section-3-all">
          {ExperiencesArray.map((item) => (
            <ExperienceDetail key={item.title} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
