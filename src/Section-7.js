import React from "react";
import Facebookicon from "./icons/Facebookicon";
import Robirt1icon from "./icons/Robirt1icon";
import Tweeter from "./icons/Tweeter";
import Robirt2icon from "./icons/Robirt2icon";

export default function Special() {
  return (
    <div className="container-8" id="contactme">
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
          <textarea
            className="section-7-left-input-4"
            type="text"
            placeholder="How can I help ?"
          />
          <div className="section-7-bottom-all d-flex">
            {" "}
            <div className="section-7-left-bottom">
              <button className="nav-btn">Get In Touch</button>
            </div>
            <div className="section-7-boxchala d-flex">
              <a href="https://www.facebook.com">
                <div className="section-1-bottom-icon1 pd">
                  <div className="icon1">
                    {" "}
                    <Facebookicon />
                  </div>
                </div>
              </a>
              <a href="https://www.reddit.com">
                <div className="section-1-bottom-icon2 pd ">
                  {" "}
                  <div className="icon1">
                    {" "}
                    <Robirt1icon />
                  </div>
                </div>
              </a>
              <a href="https://twitter.com">
                <div className="section-1-bottom-icon3 pd ">
                  {" "}
                  <div className="icon1">
                    {" "}
                    <Tweeter />
                  </div>
                </div>
              </a>
              <a href="https://discord.com">
                <div className="section-1-bottom-icon4 pd ">
                  {" "}
                  <div className="icon1">
                    {" "}
                    <Robirt2icon />
                  </div>
                </div>
              </a>
            </div>
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
