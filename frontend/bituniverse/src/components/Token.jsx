import React from 'react'
import bit from "../assests/bit.png"
import "../css/token.css"

const Token = () => {
  return (
    <div>
      <p style={{ color: "white", fontSize: "56px", fontWeight: "600" }}>
        Our <span style={{ color: "#FECC00" }}>Tokens</span>
      </p>
      <p
        style={{
          fontFamily: "Inter",
          fontSize: "20px",
          fontWeight: "400",
          letterSpacing: "0em",
          textAlign: "center",
          color: "white",
        }}
      >
        Pellentesque habitant morbi tristique senectus et netus et Pellentesque
        habitant morbi.
      </p>
      <div id="container">
        <div className="token">
          <img  src={bit} alt="bit" />
          <div>
            <div><p>Bitcoin</p></div>
            <div className="data">
              <p>Symbol</p>
              <p>BTC</p>
            </div>
            <div className="data">
              <p>Symbol</p>
              <p>BTC</p>
            </div>
            <div className="data">
              <p>Symbol</p>
              <p>BTC</p>
            </div>
            <div className="data">
              <p>Symbol</p>
              <p>BTC</p>
            </div>
          </div>
          <button>Details</button>
        </div>
        <div className="token">
          <img src={bit} alt="bit" />
          <div>
            <div>Bitcoin</div>
            <div className="data">
              <p>Symbol</p>
              <p>BTC</p>
            </div>
            <div className="data">
              <p>Symbol</p>
              <p>BTC</p>
            </div>
            <div className="data">
              <p>Symbol</p>
              <p>BTC</p>
            </div>
            <div className="data">
              <p>Symbol</p>
              <p>BTC</p>
            </div>
          </div>
          <button>Details</button>
        </div>
        <div className="token">
          <img src={bit} alt="bit" />
          <div>
            <div>Bitcoin</div>
            <div className="data">
              <p>Symbol</p>
              <p>BTC</p>
            </div>
            <div className="data">
              <p>Symbol</p>
              <p>BTC</p>
            </div>
            <div className="data">
              <p>Symbol</p>
              <p>BTC</p>
            </div>
            <div className="data">
              <p>Symbol</p>
              <p>BTC</p>
            </div>
          </div>
          <button>Details</button>
        </div>
      </div>
    </div>
  );
}

export default Token
