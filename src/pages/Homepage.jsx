import PageNav from "../components/PageNav";
import Features from "./Features";
import styles from "./Homepage.module.css";
import Pricing from "./Pricing";
import About from "./About"
import Contact from "./Contact";
import Footer from "./Footer";


export default function Homepage() {
  return (
    <main>
      <PageNav />

            <section className={styles.hero}>
        <h1>Revolutionize Your Business with Our AI-Powered CRM!</h1>
        <p>
          Streamline customer management, predict churn, and boost retention with our cutting-edge tools.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryButton}>Learn More</button>
          <button className={styles.secondaryButton}>View Plans</button>
        </div>
      </section>

      <section id = "features">
      <Features />
      </section>

          
     <section id = "pricing">

     <Pricing />
     </section>


    <section id ="about">
      
     <About />
      </section>    

     
     <section id = "contact">

     <Contact />
     </section>

     <section id = "footer">

     <Footer />
     </section>
      
  

    </main>
  );
}
