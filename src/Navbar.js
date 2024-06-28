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
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-burber">
            <a className="navbar-brand" href="/">
              <img src={img} alt="/" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <div
                className="nav-link"
                onClick={() => onClick("about-me")}
                aria-current="page"
              >
                About Me
              </div>

              <div className="nav-link" onClick={() => onClick("skills")}>
                Skills
              </div>

              <div className="nav-link" onClick={() => onClick("project")}>
                Project
              </div>

              <div
                id="navlinki"
                className="nav-link"
                onClick={() => onClick("contactme")}
              >
                Contact me
              </div>
            </div>
            <div className="nav-button-all">
              {" "}
              <button type="button" className="nav-btn">
                Resume <Downloadicon />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
    // <nav class="navbar navbar-expand-lg bg-body-tertiary">
    //   <div class="container-fluid">
    //     <a class="navbar-brand" href="#">
    //       Navbar
    //     </a>
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNavAltMarkup"
    //       aria-controls="navbarNavAltMarkup"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    //       <div class="navbar-nav">
    //         <a class="nav-link active" aria-current="page" href="#">
    //           Home
    //         </a>
    //         <a class="nav-link" href="#">
    //           Features
    //         </a>
    //         <a class="nav-link" href="#">
    //           Pricing
    //         </a>
    //         <a class="nav-link disabled" aria-disabled="true">
    //           Disabled
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
}
