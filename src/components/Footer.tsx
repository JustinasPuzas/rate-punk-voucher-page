import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.about}>
        <img src="./logo.svg" />
        <p>
          Ratepunk compares hotel room prices across the major online travel
          agencies. When you search for a room, Ratepunk extension scans the top
          booking sites and runs a price comparison, so you can be confident in
          knowing you’re getting the best deal!
        </p>
      </div>
      <div className={styles.links}>
        <nav>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Price Comparison</a>
            </li>
            <li>
              <a href="/">Chrome Extension</a>
            </li>
            <li>
              <a href="/">How it Works</a>
            </li>
            <li>
              <a href="/">Rate Punk Blog</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </nav>
        <div className={styles.contacts}>
          <div>
            <h3>Contact</h3>
            <ul className={styles.contactList}>
              <li>
                <img src="./email-footer.svg" />
                <a href="mailto:hi@ratepunk.com">hi@ratepunk.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Social</h3>
            <ul className={styles.socialsList}>
              <li>
                <a href="/">
                  <img src="./instagram.svg" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="./facebook.svg" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="./linkedin.svg" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="./twitter.svg" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="./tiktok.svg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
