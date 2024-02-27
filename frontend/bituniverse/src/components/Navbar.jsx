import React from "react";
import "../css/navbar.css";
import logo from "../assests/logo.png";

const Navbar = () => {
  return (
    <div id="navbar">
      <div  id="logo">
        <img src={logo} alt="logo" width={"55.29px"} />
        <div>
          <p>Bitverse</p>
          <p id="finance">Finance</p>
        </div>
      </div>
          <div id="label">
              <p>About</p>
              <p>Our Products</p>
              <p>Token Utility</p>
              <p>Roadmap</p>
              <button>Connect Wallet</button>
      </div>

      </div>
  );
};

export default Navbar;
