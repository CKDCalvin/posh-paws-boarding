import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import styles from "../../assets/styles/Home.module.css";

function Home() {
    const navigate = useNavigate();
    const handleDogClick = () => {
        navigate("/rates#dogBoarding");
    };
    const handleCatClick = () => {
        navigate("/rates#catBoarding");
    };

    return (
        <div>
            <main>
                <div className={styles.welcomeSection}>
                    <h2>Welcome to Posh Paws Boarding!</h2>
                    <p>
                        We provide top-notch boarding and day care services for your beloved pets. Our experienced staff ensures that your
                        furry friends are well taken care of while you're away. Whether it's a short trip or an extended
                        vacation, we offer a safe and comfortable environment for your cats and dogs.
                    </p>
                </div>
                <div id={styles.servicesSection}>
                    <h3>Our Services</h3>
                    <div id={styles.servicesContainer}>
                        <div className={styles.petRate}>
                            <img src="/images/dog-services.jpg" alt="Dog" className={styles.serviceImg} />
                            <button className={styles.ratesBtn} onClick={handleDogClick}>
                                View Dog Boarding
                            </button>
                        </div>
                        <div className={styles.petRate}>
                            <img src="/images/cat-services.jpg" alt="Cat" className={styles.serviceImg} />
                            <button className={styles.ratesBtn} onClick={handleCatClick}>
                                View Cat Boarding
                            </button>
                        </div>
                    </div>
                </div>
                <div id={styles.featuresSection}>
                    <div id={styles.featuresContainer}>
                        <h3><strong>Why Choose Us?</strong></h3>
                        <ul id={styles.featuresList}>
                            <li>Daily Exercise and Playtime</li>
                            <li>Individualized Care Plans</li>
                            <li>24/7 Supervision</li>
                            <li>Grooming Services</li>
                            <li>Special Diet Accommodations</li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    );
}

export default Home;