import React from "react";
import Google from "./imgs/google.png";
import Youtube from "./imgs/youtube.png";
import Apple from "./imgs/apple.png";

export default function MyExperience() {
  return (
    <div className="bg">
      <div className="container4">
        <h2 className="section-3-h2">
          My <span className="section-3-span">Experience</span>
        </h2>
        <div className="section-3-all">
          <div className="section-3-google">
            <div className="section-3-google-top">
              <img className="img" src={Google} alt="/" />
              <h3 className="section-3-google-top-h3">
                Lead Software Engineer at Google
              </h3>
              <p className="section-3-google-top-p">Nov 2024 - Present</p>
            </div>
            <div className="section-3-google-bottom">
              <p className="section-3-google-bottom-p">
                As a Senior Software Engineer at Google, I played a pivotal role
                in developing innovative solutions for Google's core search
                algorithms. Collaborating with a dynamic team of engineers, I
                contributed to the enhancement of search accuracy and
                efficiency, optimizing user experiences for millions of users
                worldwide.
              </p>
            </div>
          </div>
          <div className="section-3-Youtube">
            <div className="section-3-Youtube-top">
              <img className="img" src={Youtube} alt="/" />
              <h3 className="section-3-Youtube-top-h3">
                Software Engineer at Youtube
              </h3>
              <p className="section-3-Youtube-top-p">Jan 2024 - Oct 2024</p>
            </div>
            <div className="section-3-Youtube-bottom">
              <p className="section-3-Youtube-bottom-p">
                At Youtube, I served as a Software Engineer, focusing on the
                design and implementation of backend systems for the social
                media giant's dynamic platform. Working on projects that
                involved large-scale data processing and user engagement
                features, I leveraged my expertise to ensure seamless
                functionality and scalability.
              </p>
            </div>
          </div>
          <div className="section-3-Apple">
            <div className="section-3-Apple-top">
              <img className="img" src={Apple} alt="/" />
              <h3 className="section-3-Apple-top-h3">
                Junior Software Engineer at Apple
              </h3>
              <p className="section-3-Apple-top-p">Jan 2024-Dec 2024</p>
            </div>
            <div className="section-3-Apple-bottom">
              <p className="section-3-Apple-bottom-p">
                During my tenure at Apple, I held the role of Software
                Architect, where I played a key role in shaping the architecture
                of mission-critical software projects. Responsible for designing
                scalable and efficient systems, I provided technical leadership
                to a cross-functional team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
