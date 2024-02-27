import React from 'react'
import PauseOnHover from './PauseOnHover'

const Slider = () => {
    return (
      <div>
        <p style={{ color: "white", fontSize: "56px", fontWeight: "600", paddingTop:"30px" }}>
          Our <span style={{ color: "#FECC00" }}>Roadmap</span>
        </p>

        <div style={{ width: "80%", margin: "auto", paddingTop: "20px" }}>
          <PauseOnHover />
        </div>
      </div>
    );
}

export default Slider
