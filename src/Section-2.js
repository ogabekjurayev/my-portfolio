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
    { id: 1, title: "Git", icon: Vector },
    { id: 2, title: "Javascript", icon: IconJs },
    { id: 3, title: "Sass/Scss", icon: IconSass },
    { id: 4, title: "Nest.Js", icon: IconNextjs },
    { id: 5, title: "Storybook", icon: IconStory },
    { id: 6, title: "Nest.Js", icon: IconNextjs },
    { id: 7, title: "Git", icon: Vector },
    { id: 8, title: "Storybook", icon: IconStory },
    { id: 9, title: "Socket.io", icon: IconSocket },
    { id: 10, title: "Sass/Scss", icon: IconSass },
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
              // gap: 50,
            }}
          >
            {mySkillsArray.map((item) => (
              <SkillsDetail key={item.id} item={item} />
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
