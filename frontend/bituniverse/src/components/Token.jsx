import React, { useEffect, useState } from "react";
import bit from "../assests/bit.png";
import "../css/token.css";

const Token = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      let tok = await fetch("https://backend-bituniverse.onrender.com/token");
      let token = await tok.json();
      setData(token);
      // console.log(token);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <p id="head" style={{ color: "white", fontSize: "56px", fontWeight: "600" }}>
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
        {data?.map((el,id) => {
          return (
            <div className="token">
              <img src={el.img} alt="bit" />
              <div>
                <div>
                  <p>{el.tokenName}</p>
                </div>
                <div className="data">
                  <p>Symbol</p>
                  <p>{el.symbol}</p>
                </div>
                <div className="data">
                  <p>Decimal</p>
                  <p>{el.decimals}</p>
                </div>
                <div className="data">
                  <p>MarketCap</p>
                  <p>{el.marketcap}</p>
                </div>
                <div className="data">
                  <p>Chain</p>
                  <p>{el.chain}</p>
                </div>
              </div>
              <button>Details</button>
            </div>
          );
        })}
        

      </div>
    </div>
  );
};

export default Token;
