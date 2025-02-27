import { useState } from "react";
import PageNav from "../components/PageNav";
import styles from "./Login.module.css";

export default function Login() {
    const [email, setEmail] = useState("pragesh@example.com");
    const [password, setPassword] = useState("qwerty");

    return (
        <>
            <PageNav /> 
            
            <main className={styles.login}> 
                <form className={styles.form}>
                    <div className={styles.row}>
                        <h2>CRM Login</h2>
                        <label htmlFor="email">Username</label>
                        <input
                            className={styles.input}
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>

                    <div className={styles.row}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>

                    <div>
                    <button className="cta cta-border">Login</button>

                    </div>
                </form>
            </main>
        </>
    );
}
