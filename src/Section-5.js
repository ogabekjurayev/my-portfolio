import React from "react";
import Crypto from "./imgs/crypto.png";
import Euphoria from "./imgs/Euphoria.png";
import Blog from "./imgs/Blog.png";
import GoIcon from "./icons/Downloadicon";

export default function MyProjects() {
  return (
    <div className="bg">
      <div className="container6">
        <h2 className="section-5-h2">
          My <span className="section-5-span">Projects</span>
        </h2>
        <div className="section-5-crypto ">
          <div className="section-5-crypto-left">
            <img className="section-5-crypto-img" src={Crypto} alt="/" />
          </div>
          <div className="section-5-crypto-right">
            <h2 className="section-5-crypto-right-h2">01</h2>
            <h3 className="section-5-crypto-right-h3">
              Crypto Screener Application
            </h3>
            <p className="section-5-crypto-right-p">
              I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to specimen book.
            </p>
            <GoIcon />
          </div>
        </div>
        <div className="section-5-euphoria">
          <div className="section-5-euphoria-left">
            <h2 className="section-5-euphoria-left-h2">02</h2>
            <h3 className="section-5-euphoria-left-h3">
              Euphoria - Ecommerce (Apparels) Website Template
            </h3>
            <p className="section-5-euphoria-left-p">
              I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to specimen book. when an
              unknown printer took a galley of type and scrambled it to specimen
              book.
            </p>
            <GoIcon />
          </div>
          <div className="section-5-euphoria-right">
            <img className="section-5-euphoria-img" src={Euphoria} alt="/" />
          </div>
        </div>
        <div className="section-5-crypto ">
          <div className="section-5-crypto-left">
            <img className="section-5-crypto-img" src={Blog} alt="/" />
          </div>
          <div className="section-5-crypto-right">
            <h2 className="section-5-crypto-right-h2">03</h2>
            <h3 className="section-5-crypto-right-h3">Blog Website Template</h3>
            <p className="section-5-crypto-right-p">
              I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to specimen book.
            </p>
            <GoIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
