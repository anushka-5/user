import React from "react";
// import "../../../public/css/Footer.css";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
// import Payment from "../../assets/payments.png.jpg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About Pink Panther</div>
                    <div className="text">
                        Step into the whimsical world of Pink Panther, where every meal is an adventure in flavor! We're dedicated to bringing you uniquely crafted dishes with a playful twist, all served in an atmosphere that's as fun and vibrant as our namesake.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            123 Whiskers Lane, Cartoon City, Fun Land, 000000
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 123-456-7890</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: info@pinkpanthercafe.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Appetizers</span>
                    <span className="text">Main Courses</span>
                    <span className="text">Desserts</span>
                    <span className="text">Beverages</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">Menu</span>
                    <span className="text">Reservations</span>
                    <span className="text">Gallery</span>
                    <span className="text">About Us</span>
                    <span className="text">Contact</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        Pink Panther 2024. A dash of mischief, a whole lot of flavor.
                    </span>
                    {/* <img src={Payment} alt="Payment Methods" /> */}
                </div>
            </div>
        </div>
    );
};

export default Footer;