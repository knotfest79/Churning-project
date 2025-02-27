import styles from "./Signup.module.css";
export default function Signup() {
  return (
    <main>
      <form className={styles.signupForm}>
        <div>
          <h2>Set up your account </h2>
          <h4>Become a member and Enjoy!</h4>
          <label htmlFor="email">Fullname</label>
          <input type="name" id="name" />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" />
          <label htmlFor="email">Phone</label>
          <input type="phone" id="phone" />
        </div>

        <div>
          <button>Create Account</button>
        </div>
      </form>
    </main>
  );
}
