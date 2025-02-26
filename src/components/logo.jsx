import { Link } from "react-router-dom"; // ✅ Correct import for routing
import styles from "./Logo.module.css";

function Logo() {
    return(
        <Link to="/" className={styles.logoContainer}>
            <img src="./Logo.png" alt="Nest CRM" className={styles.logo} />
        </Link>
    );
}

export default Logo;
