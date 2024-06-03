import React from "react";
import Fbook from "./imgs/Button.jpg";
import Social from "./imgs/Button (1).jpg";
import Tweeter from "./imgs/twiter.png";
import SocilIcon from "./imgs/Button (3).jpg";
import Banner from "./imgs/Banner.png";

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
                <span className="section-1-left-span">Uzbek.</span>
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
              <div className="section-1-left-bottom">
                <img className="Fbook" src={Fbook} alt="/" />
                <img className="Social" src={Social} alt="/" />
                <img className="Tweeter" src={Tweeter} alt="/" />
                <img src={SocilIcon} alt="/" />
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
