

import styles from "./Features.module.css"
export default function Features() {
    return (
    
          <section className={styles.features}>
            <h2>Our Features</h2>
            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <h3>Churn Prediction</h3>
                <p>Stay ahead by predicting churn before it happens.</p>
              </div>
              <div className={styles.featureCard}>
                <h3>Customer Management</h3>
                <p>Manage your customer data seamlessly.</p>
              </div>
              <div className={styles.featureCard}>
                <h3>Security Settings</h3>
                <p>Ensure the safety of your data with advanced security tools.</p>
              </div>
            </div>
          </section>

        
    )
  }
  