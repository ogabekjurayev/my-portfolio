import React from "react";
import Vector from "./imgs/Vector.jpg";
import IconJs from "./imgs/icon-javscript.jpg";
import IconSass from "./imgs/icon-sass.jpg";
import IconNextjs from "./imgs/icon-nest.jpg";
import IconStory from "./imgs/icon-storybook.jpg";
import IconSocket from "./imgs/icon-socket.jpg";
import SkillsDetail from "./SkillsDetail";

export default function MySkills() {
  const mySkillsArray = [
    { title: "Git", icon: Vector },
    { title: "Javascript", icon: IconJs },
    { title: "Sass/Scss", icon: IconSass },
    { title: "Nest.Js", icon: IconNextjs },
    { title: "Storybook", icon: IconStory },
    { title: "Nest.Js", icon: IconNextjs },
    { title: "Git", icon: Vector },
    { title: "Storybook", icon: IconStory },
    { title: "Socket.io", icon: IconSocket },
    { title: "Sass/Scss", icon: IconSass },
  ];

  return (
    <div id="skills">
      <div className="container3">
        <h2 className="section-2-h2">
          My<span className="section-2-span">Skills</span>
        </h2>
        <div>
          <div
            className="section-2-top-flexbox d-flex"
            style={{
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: 50,
            }}
          >
            {mySkillsArray.map((item) => (
              <SkillsDetail item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// TODO
// 1. array ociw -> [{title: 'Git,...', icon: <IconJs /> }, {...}, {}, {}, {title: 'Javascript'}]
// 2. arrayni map qiliw {array.map((item) => <div>{item}</div>)}
// 3. otdelniy komponent ociw
// 4. kodingni uwa kompanentga utkaziw: div, state, onMouse, ...
