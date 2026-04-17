import React from "react";
import "../../assets/styles/about.css";

function About() {
    return (
        <div id="about-page">
            <div className="about-container">
                <section className="about-hero">
                    <h1>About Us</h1>
                    <p>
                        We are a team of passionate pet lovers dedicated to providing the
                        best care for your furry friends.
                    </p>
                </section>

                <section className="about-card">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to create a safe and loving environment for pets
                        while offering top-notch services to their owners.
                    </p>
                    <p>
                        Whether you need pet sitting, grooming, or training, we are here
                        to help you and your pets thrive together.
                    </p>
                    <p>
                        Thank you for choosing us to be a part of your pet’s life.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default About;