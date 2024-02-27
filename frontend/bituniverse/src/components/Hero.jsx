import React from 'react'
import "../css/hero.css"
import gate from "../assests/gate.png"
import bitcoin from "../assests/bitcoin.png";
import "animate.css";


const Hero = () => {
  return (
    <div>
      <div id="hero">
        <div>
          <img
            className="animate__animated animate__backInLeft"
            src={gate}
            alt=""
          />
          <p className="animate__animated animate__backInRight">
            DEFI ON BITCOIN
          </p>
          <img
            className="animate__animated animate__backInUp"
            id="bitcoin"
            src={bitcoin}
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div id="herotext">
        <p
          className="animate__animated animate__fadeInUp animate__slow"
          style={{ color: "white" }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ipsa
          voluptatibus sint praesentium dicta autem velit laudantium recusandae
          laboriosam quis. Doloremque vel fuga debitis repellat nulla ullam,
          veritatis labore enim?
        </p>
        <button className="animate__animated animate__fadeInUp animate__slow">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero
