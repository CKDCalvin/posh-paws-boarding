import React from "react";
import "../../assets/styles/contact.css";

function Contact() {
    return (
        <div id="contact-page">
            <div className="contact-container">
                <section className="contact-hero">
                    <h1>Contact Us</h1>
                    <p>
                        Have questions or want to get in touch? We’d love to hear from you.
                    </p>
                    <p>Feel free to reach out to us anytime.</p>
                </section>

                <section className="contact-card">
                    <h2>Get in Touch</h2>
                    <p><strong>Phone:</strong> 913-555-0245</p>
                    <p><strong>Email:</strong> info@poshpawsboarding.com</p>
                    <p><strong>Address:</strong> 2140 Haskell Ave, Lawrence, KS 66046</p>
                </section>

                <section className="contact-card">
                    <h2>Follow Us</h2>
                    <p>Instagram: @poshpawsboarding</p>
                    <p>Facebook: Posh Paws Boarding</p>
                </section>
            </div>
        </div>
    );
}

export default Contact;