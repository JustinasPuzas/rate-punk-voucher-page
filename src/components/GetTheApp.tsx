import Link from "next/link";
import styles from "./GetTheApp.module.css";

export default function GetTheApp() {
  return (
    <section className={styles.section}>
      <StoreLink
        logo="./chrome.svg"
        store="Chrome Web Store"
        link="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk"
      />
      <StoreLink
        logo="./apple.svg"
        store="apple app store"
        link="https://apps.apple.com/app/ratepunk/id1607823726"
      />
      <div className={styles.stars}>
        <img src="./star.svg" />
        <img src="./star.svg" />
        <img src="./star.svg" />
        <img src="./star.svg" />
        <img src="./star.svg" />
        <p>Chrome Store reviews</p>
      </div>
      
    </section>
  );
}

function StoreLink(props: { logo: string; store: string; link: string }) {
  return (
    <Link className={styles.store} href={props.link}>
      <img src={props.logo}></img>
      <div>
        <p>available in the</p>
        <h4>{props.store}</h4>
      </div>
    </Link>
  );
}
