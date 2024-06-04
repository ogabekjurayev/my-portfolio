import React from "react";

import imgs from "./imgs/footer.png";

export default function Footer() {
  return (
    <div className="bg">
      <div className="container-9">
        <div className="footer-all">
          <a class="footer-a" href="/">
            <img src={imgs} alt="/" />
          </a>
          <div className="footer-right">
            <p className="footer-p1">@ 2019-2023 Personal</p>
            <p className="footer-p2">Made In Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
}
