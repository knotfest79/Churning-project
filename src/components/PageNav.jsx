import { Link } from "react-scroll";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./logo";


function PageNav() {
    const location = useLocation();
    const navigate = useNavigate();

    // Function to navigate to homepage and scroll
    const handleNavClick = (sectionId) => {
        if (location.pathname === "/") {
            // ✅ If already on homepage, use react-scroll
            document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        } else {
            // ✅ If on another page, navigate to homepage with query param
            navigate(`/?scrollTo=${sectionId}`);
        }
    };

    return (
        <nav className={styles.nav}>
           <Logo />
            <ul>
                <li>
                    <NavLink to="/">Homepage</NavLink>
                </li>
                <li>
                    {location.pathname === "/" ? (
                        <Link to="features" smooth={true} duration={500}>Features</Link>
                    ) : (
                        <button className={styles.navButton} onClick={() => handleNavClick("features")}>Features</button>
                    )}
                </li>
                <li>
                    {location.pathname === "/" ? (
                        <Link to="pricing" smooth={true} duration={500}>Pricing</Link>
                    ) : (
                        <button className={styles.navButton} onClick={() => handleNavClick("pricing")}>Pricing</button>
                    )}
                </li>
                <li>
                    {location.pathname === "/" ? (
                        <Link to="about" smooth={true} duration={500}>About Us</Link>
                    ) : (
                        <button className={styles.navButton} onClick={() => handleNavClick("about")}>About Us</button>
                    )}
                </li>
                <li>
                    {location.pathname === "/" ? (
                        <Link to="contact" smooth={true} duration={500}>Contact Us</Link>
                    ) : (
                        <button className={styles.navButton} onClick={() => handleNavClick("contact")}>Contact Us</button>
                    )}
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default PageNav;
