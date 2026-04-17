import React from "react";

import "../assets/styles/Footer.css";

function Footer() {
    return (
        <div id="footer-in-main">
            <div id="posh-paws-info">
                <h3>Posh Paws Info</h3>
                <p>Hours of Operation(Cat/Dog Boarding CheckIn/CheckOut): Mon-Fri 9-10AM/5-6PM | Sat-Sun 8-10AM/ 5-8PM</p>
                <p>Tour Schedule: Available Mon-Sat 9AM-12PM</p>
                <p>Cancellation Policy: 24-hour notice required for cancellations.</p>
                <p>Serving Areas within 20 miles of our location.</p>

            </div>
            <div id="location">
                <h3>Our Location</h3>
                <iframe
                    title="Posh Paws Boarding Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4727.331724173657!2d-95.23011891837237!3d38.945251363700926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87bf66033ee5a0b1%3A0xb6ed38ac5959f6af!2s2140%20Haskell%20Ave%2C%20Lawrence%2C%20KS%2066046!5e1!3m2!1sen!2sus!4v1774206902753!5m2!1sen!2sus"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe></div>
            <div id="contact-partners">
                <div id="contact-inf">
                    <h3>Contact Us</h3>
                    <p>Phone: 913-555-0245</p>
                    <p>Email: info@poshpawsboarding.com</p>
                    <p>Address: 2140 Haskell Ave, Lawrence, KS 66046</p>
                    <h4>Follow us on social media for updates and promotions!</h4>
                    <p>Instagram: @poshpawsboarding</p>
                    <p>Facebook: Posh Paws Boarding</p>
                </div>
                <div id="partners">
                    <h3>In Partnership With:</h3>
                    <div id="partner-logos">
                        <a href="https://www.freepik.com/app"><img src="/images/pet-eats-logo.png" alt="Partner Logo" className="logos" /></a>
                        <a href="https://www.sunflowerpet.com/"><img src="/images/Sunflower-logo-pet.webp" alt="Partner Logo" className="logos" /></a>
                        <a href="https://lawrence.earthwisepet.com/products/shop/"><img src="/images/EarthWisePet-Logo-Asset.png" alt="Partner Logo" className="logos" /></a>
                    </div>
                </div>
                <p>Created by Calvin Kugonza</p> 
            </div>
        </div>
    );
}

export default Footer;