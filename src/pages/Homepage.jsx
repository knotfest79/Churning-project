import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageNav from "../components/PageNav";
import Features from "./Features";
import Pricing from "./Pricing";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import styles from "./Homepage.module.css";

export default function Homepage() {
    const location = useLocation();

    useEffect(() => {
        
        const params = new URLSearchParams(location.search);
        const scrollTo = params.get("scrollTo");

        if (scrollTo) {
            document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <main>
            <PageNav />

           

            <section id="hero" className={styles.hero}>
                <h1>Revolutionize Your Business with Our AI-Powered CRM!</h1>
                <p>Streamline customer management, predict churn, and boost retention with our cutting-edge tools.</p>
                <div className={styles.buttons}>
                <button className={styles.primaryButton}>Learn more</button>
                <button className={styles.secondaryButton}>View Plans</button>
            </div>
            </section>
            
            <section className={styles.talentSection}>
                <div className={styles.talentGrid}>
                    <div className={styles.talentItem}>
                        <img src="./Icon1.png" alt="Right Talent" />
                        <h3>Right Talent</h3>
                        <p>Our solutions combine technology and expertise to help you hire people who contribute to your companys growth.</p>
                    </div>
                    <div className={styles.talentItem}>
                        <img src="./Icon2.png" alt="Right Time" />
                        <h3>Right Time</h3>
                        <p>Hire whenever you need from a pool of independently screened candidates.</p>
                    </div>
                    <div className={styles.talentItem}>
                        <img src="./Icon3.png" alt="Right Cost" />
                        <h3>Right Cost</h3>
                        <p>Flexible hiring ensures the right talent at the right price.</p>
                    </div>
                </div>
            </section>

            <section id="features"><Features /></section>
            <section id="pricing"><Pricing /></section>
            <section id="about"><About /></section>
            <section id="contact"><Contact /></section>

            <Footer />
        </main>
    );
}
