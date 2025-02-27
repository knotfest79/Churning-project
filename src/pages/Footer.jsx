
import Logo from "../components/logo";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                {/* ✅ Logo (Can be resized via CSS) */}
                <div className={styles.logoContainer}>
                    <Logo />
                </div>

                {/* ✅ Quick Links */}
                <div className={styles.links}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/features">Features</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
            </div>

            {/* ✅ Copyright Text */}
            <p>© 2025 CRM Company. All Rights Reserved.</p>
        </footer>
    );
}
