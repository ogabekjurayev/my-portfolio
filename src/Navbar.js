import React from "react";
import img from "./imgs/Logo (2).png";
import Downloadicon from "./icons/Downloadicon";

export default function Navbar() {
  const onClick = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="container1">
      <nav class="navbar navbar-expand-lg  ">
        <div class="container-fluid ">
          <a class="navbar-brand" href="/">
            <img src={img} alt="/" />
          </a>
          <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <div
                class="nav-link"
                onClick={() => onClick("about-me")}
                aria-current="page"
              >
                About Me
              </div>

              <div class="nav-link" onClick={() => onClick("skills")}>
                Skills
              </div>

              <div class="nav-link" onClick={() => onClick("project")}>
                Project
              </div>

              <div class="nav-link" onClick={() => onClick("contactme")}>
                Contact me
              </div>
            </div>
            <div className="nav-button-all">
              {" "}
              <button type="button" class="nav-btn">
                Resume <Downloadicon />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
