import React from "react";
import img from "./imgs/Logo (2).png";
import Downloadicon from "./Downloadicon";

export default function Navbar() {
  return (
    <div className="container1">
      <nav class="navbar navbar-expand-lg  ">
        <div class="container-fluid ">
          <a class="navbar-brand" href="/">
            <img src={img} alt="/" />
          </a>
          <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link " aria-current="page" href="/">
                About Me
              </a>
              <a class="nav-link" href="/">
                Skills
              </a>
              <a class="nav-link" href="/">
                Project
              </a>
              <a class="nav-link" href="/">
                Contact me
              </a>
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
