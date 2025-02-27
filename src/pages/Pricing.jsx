import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <section className={styles.plans}>
      <h2>Subscription Plans</h2>
      <div className={styles.planGrid}>
        <div className={styles.planCard}>
          <h3>Basic Plan</h3>
          <p>$10/month</p>
          <ul>
            <li>Access to CRM Features</li>
            <li>Email Support</li>
          </ul>
          <button className="cta cta-border">Choose Plan</button>
        </div>
        <div className={styles.planCard}>
          <h3>Pro Plan</h3>
          <p>$20/month</p>
          <ul>
            <li>All Basic Features</li>
            <li>Priority Support</li>
            <li>Advanced Analytics</li>
          </ul>
          <button className="cta cta-border">Choose Plan</button>
        </div>
        <div className={styles.planCard}>
          <h3>Enterprise Plan</h3>
          <p>$50/month</p>
          <ul>
            <li>All Pro Features</li>
            <li>Dedicated Account Manager</li>
            <li>Custom Integrations</li>
          </ul>
          <button className="cta cta-border">Choose Plan</button>
        </div>
      </div>
    </section>
  );
}
