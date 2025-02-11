import React from "react";
import "./about.css";
import { IMAGES } from "../../assets/image";

export const About = () => {
    return (
        <div className="about-section">
            <div className="about-container">
                <div className="about-text">
                    <h2>About Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt, beatae! Doloribus fuga aperiam magni ipsum repellat
                        voluptates itaque error, atque, exercitationem fugit ab, modi
                        ut voluptatum sequi ad eum! Rerum! Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Minus quia suscipit deserunt,
                        neque nemo veniam adipisci deleniti culpa dolor dolores omnis,
                        rem veritatis assumenda eaque dignissimos ut, nam debitis numquam!
                    </p>
                </div>
                <div className="about-image">
                    <img src={IMAGES.about} alt="About" />
                </div>
            </div>
        </div>
    );
};
