import React from "react";
import home1 from "../img/home1.jpg";
// styled
import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>Make Your Next Ride</h2>
          </Hide>
          <Hide>
            <h2>
              Your <span>Best</span> One
            </h2>
          </Hide>
          <p>We're here for your next new or used bike.</p>
          <button>Contact Us</button>
        </div>
      </Description>
      <Image>
        <img src={home1} alt="camera dude" />
      </Image>
    </About>
  );
};

export default AboutSection;
