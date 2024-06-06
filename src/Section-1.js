import React from "react";
import Banner from "./imgs/Banner.png";
import Facebookicon from "./icons/Facebookicon";
import Robirt1icon from "./icons/Robirt1icon";
import Tweeter from "./icons/Tweeter";
import Robirt2icon from "./icons/Robirt2icon";

export default function Section() {
  return (
    <div>
      <div className="container2">
        <div className="section-1 d-flex">
          <div className="section-1-left-allBox">
            <div className="section-1-left">
              <h1 className="section-1-left-h1">
                Hello I’am{" "}
                <span className="section-1-left-span">
                  Jurayev Og'a. Frontent{" "}
                </span>{" "}
                <span id="Developer">Developer </span> Base In
                <span className="section-1-left-span"> Uzbek.</span>
              </h1>
            </div>
            <div className="section-1-left-center">
              {" "}
              <p className="section-1-left-p">
                I'm Jurayev Og'a Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to
                specimen book.
              </p>
              <div className="section-1-bottom-all">
                <div className="section-1-bottom-icon1 ">
                  <div className="icon1">
                    {" "}
                    <Facebookicon />
                  </div>
                </div>
                <div className="section-1-bottom-icon2 ">
                  <div className="icon1">
                    {" "}
                    <Robirt1icon />
                  </div>
                </div>
                <div className="section-1-bottom-icon3 ">
                  <div className="icon1">
                    {" "}
                    <Tweeter />
                  </div>
                </div>
                <div className="section-1-bottom-icon4 ">
                  <div className="icon1">
                    {" "}
                    <Robirt2icon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-1-right">
            <img className="section-1-right-img" src={Banner} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
}
