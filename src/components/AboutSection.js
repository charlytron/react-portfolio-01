import React from 'react';
import home1 from '../img/home1.png';

const AboutSection = () => {
    return(
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We'll make Your Next Ride</h2>
                    </div>
                    <div className="hide">
                        <h2>Your <span>Best</span> One</h2>
                    </div>
                    <div>
                        <p>Contact us with any new or used bike or repair requests
                            Our professionals have decades of experience.
                        </p>
                        <button>Contact Us</button>
                    </div>
                </div>
                <div className="image">
                    <img src={home1} alt="camera dude"/>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;