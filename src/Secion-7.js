import React from "react";
import Fbook from "./imgs/Button.jpg";
import Social from "./imgs/Button (1).jpg";
import Tweeter from "./imgs/twiter.png";
import SocilIcon from "./imgs/Button (3).jpg";

export default function Special() {
  return (
    <div className="container-8">
      <div className="section-7-all">
        <div className="section-7-left">
          <input
            className="section-7-left-input-1"
            type="text"
            placeholder="Your name"
          />
          <input
            className="section-7-left-input-2"
            type="email"
            placeholder="Email"
          />
          <input
            className="section-7-left-input-3"
            type="text"
            placeholder="Your website (if existis)"
          />
          <input
            className="section-7-left-input-4"
            type="text"
            placeholder="How can I help ?"
          />
          <div className="section-7-left-bottom">
            <button className="section-7-left-bottom-btn">Get In Touch</button>
            <img className="section-7-Fbook" src={Fbook} alt="/" />
            <img className="section-7-Social" src={Social} alt="/" />
            <img className="section-7-Tweeter" src={Tweeter} alt="/" />
            <img src={SocilIcon} alt="/" />
          </div>
        </div>

        <div className="section-7-right">
          <h2 className="section-7-right-h2">
            Let’s <span className="section-7-right-span">talk</span> for
            Something special
          </h2>
          <p className="section-7-right-p">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>
          <a className="section-7-right-a" href="#">
            Youremail@gmail.com
          </a>
          <p className="section-7-right-p1">1234567890</p>
        </div>
      </div>
    </div>
  );
}
