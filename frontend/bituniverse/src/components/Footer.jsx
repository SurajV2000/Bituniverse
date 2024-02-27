import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa6";

import "../css/footer.css"

const Footer = () => {
    return (
      <div>
    <div id="footer">
      <div>
        <p>
          Join our <span style={{ color: "#FECC00" }}>Community</span>
        </p>
      </div>
      <div>
        <div className="social">
          <FaInstagram />
        </div>
        <div className="social">
          <FaTwitter />
        </div>
        <div className="social">
          <MdOutlineEmail />
        </div>
      </div>
    </div>
            <p style={{ color: "white",padding:"20px"}}>2023 All rights reserved</p>
            </div>
  );
}

export default Footer
