import React from 'react'
import "../css/product.css"
import cardimg from "../assests/4.png"

const Product = () => {
  return (
    <div>
      <p style={{ color: "white", fontSize: "56px", fontWeight: "600" }}>
        Our <span style={{ color: "#FECC00" }}>Products</span>
      </p>
      <div id="prod">
        <div className="animate__animated animate__fadeInUp animate__slow">
          <div className="card">
            <img src={cardimg} alt="" />
            <h1>Bitadex</h1>
            <hr />
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada Pellentesque habitant morbi tristique senectus et netus
              et malesuada{" "}
            </p>
          </div>
          <div className="card">
            <img src={cardimg} alt="" />
            <h1>Bitadex</h1>
            <hr />
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada Pellentesque habitant morbi tristique senectus et netus
              et malesuada{" "}
            </p>
          </div>{" "}
          <div className="card">
            <img src={cardimg} alt="" />
            <h1>Bitadex</h1>
            <hr />
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada Pellentesque habitant morbi tristique senectus et netus
              et malesuada{" "}
            </p>
          </div>
        </div>
        <div className="animate__animated animate__fadeInUp animate__slow">
          <div className="card">
            <img src={cardimg} alt="" />
            <h1>Bitadex</h1>
            <hr />
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada Pellentesque habitant morbi tristique senectus et netus
              et malesuada{" "}
            </p>
          </div>
          <div className="card">
            <img src={cardimg} alt="" />
            <h1>Bitadex</h1>
            <hr />
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada Pellentesque habitant morbi tristique senectus et netus
              et malesuada{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product
