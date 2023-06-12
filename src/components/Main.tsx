import { after } from "node:test";
import styles from "./Main.module.css";
import { useState } from "react";
import axios from "axios";

export default function Main() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    try {
      const response = await axios.post("/api/getVoucher", { email });
      setError("");
      setSuccess(true);
    } catch (err: any) {
      console.log(err.response.data.error);
      setError(`${err.response.data.error}`);
    }
  };
  
  const onClickCopy = () => {
    navigator.clipboard.writeText("https://ratepunk.com/referral");
  };


  return (
    <main className={styles.main}>
      <section className={styles.inviteSection}>
        <article>
          <h1 className={styles.h1}>REFER FRIENDS AND GET REWARDS</h1>
          <p>
            Refer your friends to us and earn hotel booking vouchers. We'll give
            you 1 coin for each friend that installs our extension. Minimum
            cash-out at 20 coins.
          </p>
          <form className={styles.form} onSubmit={onSubmit}>
            <samp className={styles.error}>{error}</samp>
            {success ? (
              <>
                <samp className={styles.success}>
                  <img src="./success.svg" /> Your email is confirmed!{" "}
                </samp>
                <div onClick={onClickCopy} className={styles.referralWrapper}>
                  <input disabled id="email" value="https://ratepunk.com/referral" />
                  <button type="button" value="asdasd">
                    Copy!
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className={styles.inputWrapper}>
                  <img src="./email.svg"></img>
                  <input id="email" placeholder="Enter Your Email Address" />
                </div>
                <button className={styles.submit} type="submit">
                  Get Referral Link
                </button>
              </>
            )}
          </form>
        </article>
        <small>Limits on max rewards apply.</small>
      </section>
      <section className={styles.stepsSection}>
        <div className={styles.stepsContainer}>
          <article>
            <img src="./invite.svg" />
            <div>
              <h3>STEP 1</h3>
              <h2>INVITE FRIENDS</h2>
              <p>Refer friends with your unique referral link.</p>
            </div>
          </article>
          <article>
            <img src="./collect-coins.svg" />
            <div>
              <h3>STEP 2</h3>
              <h2>COLLECT COINS</h2>
              <p>
                Get 1 coin for each friend that installs our extension using
                your referral link.
              </p>
            </div>
          </article>
          <article>
            <img src="./voucher.svg" />
            <div>
              <h3>STEP 3</h3>
              <h2>GET VOUCHER</h2>
              <p>
                Redeem for a $20 hotel booking voucher once you collect 20
                coins.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
