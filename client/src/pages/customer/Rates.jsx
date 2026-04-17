import "../../assets/styles/Rates.module.css";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "../../assets/styles/Rates.module.css";

function Rates() {
  const location = useLocation();

  useEffect (() => {
    if (location.hash) {
      const element = document.querySelector(location.hash); 
      if (element) {
        element.scrollIntoView({behavior: "smooth", block: "start"});
      }
    }
  }, [location]);

  return (
    <div className={styles.ratesPage}>
      <main className={styles.ratesMain}>
        <section className={styles.heroSection}>
          <h2>Rates</h2>
          <p>Find our current rates for all of our services below.</p>

          <div className={styles.ratesLinks}>
            <a href="#dogBoarding">Dog Boarding</a>
            <a href="#dogGrooming">Dog Grooming</a>
            <a href="#catBoarding">Cat Boarding</a>
          </div>
        </section>

        <section id="dogBoarding" className={styles.rateSection}>
          <h3>Dog Boarding</h3>
          <p>
            All suites include plush bedding, daily housekeeping, room service,
            potty walks, and a progress report at the end of the stay.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.rateTable}>
              <thead>
                <tr>
                  <th>Suite Type</th>
                  <th>Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1 Dog</td>
                  <td>$45</td>
                </tr>
                <tr>
                  <td>Each Additional Dog</td>
                  <td>$35</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="dogGrooming" className={styles.rateSection}>
          <h3>Dog Grooming</h3>

          <div className={styles.tableWrapper}>
            <table className={styles.rateTable}>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Details / Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>X-Small</td>
                  <td>Up to 10 lbs — $65</td>
                </tr>
                <tr>
                  <td>Example Breeds</td>
                  <td>Pomeranian, Maltese, Schnauzer, Yorkie</td>
                </tr>

                <tr>
                  <td>Small</td>
                  <td>11–25 lbs — $65+</td>
                </tr>
                <tr>
                  <td>Example Breeds</td>
                  <td>Cavalier King Charles, Shih Tzu</td>
                </tr>

                <tr>
                  <td>Medium</td>
                  <td>26–50 lbs — $75+</td>
                </tr>
                <tr>
                  <td>Example Breeds</td>
                  <td>Spaniels, Terriers, Medium Doodles, Standard Poodle</td>
                </tr>
                <tr>
                  <td>Heavy Coat</td>
                  <td>$84–$108</td>
                </tr>
                <tr>
                  <td>Example Breeds</td>
                  <td>Keeshond, Australian Shepherd, Samoyed</td>
                </tr>

                <tr>
                  <td>Large</td>
                  <td>51–80 lbs — $80+</td>
                </tr>
                <tr>
                  <td>Example Breeds</td>
                  <td>Keeshond, Australian Shepherd, Samoyed</td>
                </tr>
                <tr>
                  <td>Curly and Wavy</td>
                  <td>$80–$109+</td>
                </tr>
                <tr>
                  <td>Example Breeds</td>
                  <td>Large Doodles, Standard Poodle</td>
                </tr>
                <tr>
                  <td>Heavy Coat</td>
                  <td>$107+</td>
                </tr>
                <tr>
                  <td>Example Breeds</td>
                  <td>Siberian Husky, Rough Collie</td>
                </tr>

                <tr>
                  <td>X-Large</td>
                  <td>81–99 lbs — $92+</td>
                </tr>
                <tr>
                  <td>Example Breeds</td>
                  <td>German Shepherd, XL Doodles, Malamute</td>
                </tr>

                <tr>
                  <td>XX-Large</td>
                  <td>100+ lbs — $108+</td>
                </tr>
                <tr>
                  <td>Example Breeds</td>
                  <td>Irish Wolfhound, Komondor</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="catBoarding" className={styles.rateSection}>
          <h3>Cat Boarding</h3>

          <div className={styles.tableWrapper}>
            <table className={styles.rateTable}>
              <thead>
                <tr>
                  <th>Suite Type</th>
                  <th>Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1 Cat</td>
                  <td>$35</td>
                </tr>

                <tr>
                  <td>Each additional cat</td>
                  <td>$24</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.bottomText}>
          <p>Our rates are competitive and we offer various packages to suit your pet’s needs.</p>
          <p>Feel free to contact us for a personalized quote.</p>
        </section>
      </main>
    </div>
  );
}

export default Rates;