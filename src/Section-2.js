import React from "react";
import Vector from "./imgs/Vector.jpg";
import IconJs from "./imgs/icon-javscript.jpg";
import IconSass from "./imgs/icon-sass.jpg";
import IconNextjs from "./imgs/icon-nest.jpg";
import IconStory from "./imgs/icon-storybook.jpg";
import IconSocket from "./imgs/icon-socket.jpg";

export default function MySkills() {
  return (
    <div>
      <div className="container3">
        <h2 className="section-2-h2">
          My<span className="section-2-span">Skills</span>
        </h2>
        <div>
          <div className="section-2-top-flexbox d-flex ">
            <div className="section-2-top-flexbox-VectorBox">
              <img className="section-2-img1" src={Vector} alt="/" />
              <h5 className="VectorBox-h5">Git</h5>
            </div>
            <div className="section-2-top-flexbox-ScriptBox">
              <img src={IconJs} alt="/" />
              <h5 className="ScriptBox-h5">Javascript</h5>
            </div>
            <div className="section-2-top-flexbox-VectorBox">
              <img src={IconSass} alt="/" />
              <h5 className="VectorBox-h5">Sass/Scss</h5>
            </div>
            <div className="section-2-top-flexbox-VectorBox">
              <img src={IconNextjs} alt="/" />
              <h5 className="VectorBox-h5">Nest.Js</h5>
            </div>
            <div className="section-2-top-flexbox-VectorBox">
              <img src={IconStory} alt="/" />
              <h5 className="VectorBox-h5">Storybook</h5>
            </div>
          </div>
          <div className="section-2-bottom-flexbox d-flex">
            <div className="section-2-top-flexbox-VectorBox">
              <img src={IconNextjs} alt="/" />
              <h5 className="VectorBox-h5">Nest.Js</h5>
            </div>
            <div className="section-2-top-flexbox-VectorBox">
              <img src={Vector} alt="/" />
              <h5 className="VectorBox-h5">Git</h5>
            </div>
            <div className="section-2-top-flexbox-VectorBox">
              <img src={IconStory} alt="/" />
              <h5 className="VectorBox-h5">Storybook</h5>
            </div>
            <div className="section-2-top-flexbox-VectorBox">
              <img src={IconSocket} alt="/" />
              <h5 className="VectorBox-h5">Socket.io</h5>
            </div>
            <div className="section-2-top-flexbox-VectorBox">
              <img src={IconSass} alt="/" />
              <h5 className="VectorBox-h5">Sass/Scss</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
