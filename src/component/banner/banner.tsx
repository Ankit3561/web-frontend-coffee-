import React from "react";
import "./style.css";
import { Button } from "../button/button";
import { IMAGES } from "../../assets/image";

export const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-description">
                <h2>Coffee Ordering Made Easy</h2>
                <p>Get Started Today!</p>
                <div className="btn-container">
                    <Button text="Order Now" variant="primaryOrangeHex" />
                    <a href="/menu" className="menu-link">
                        See Menu
                    </a>
                </div>
            </div>
            <div className="banner-image">
                <img
                    src={IMAGES.logo}
                    alt="banner"
                />
            </div>
        </div>
    );
};
