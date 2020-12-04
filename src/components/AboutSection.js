import React from "react";
import home1 from "../img/home1.png";
// styled
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <hide>
            <h2>Make Your Next Ride</h2>
          </hide>
          <hide>
            <h2>
              Your <span>Best</span> One
            </h2>
          </hide>
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

// styled components
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const hide = styled.div`
    overflow: hidden;
`

export default AboutSection;
