import { Link } from "react-scroll";
import styles from "./PageNav.module.css";
import { NavLink } from "react-router-dom";

function PageNav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link to="hero" smooth={true} duration={500}>Homepage</Link>
                </li>
                <li>
                    <Link to="features" smooth={true} duration={500}>Features</Link>
                </li>
                <li>
                    <Link to="pricing" smooth={true} duration={500}>Pricing</Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>About Us</Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>Contact Us</Link>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink> {/* Login still uses router */}
                </li>
            </ul>
        </nav>
    );
}

export default PageNav;
