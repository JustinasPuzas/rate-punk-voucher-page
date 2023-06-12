import { useRouter } from "next/router";
import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header className={styles.header}>
      <img src="./logo.svg"></img>
      <nav>
        <ul>
          <li>
            <NavLink href="/">Chrome Extension</NavLink>
          </li>
          <li>
            <NavLink href="/price-comparison">Price Comparison</NavLink>
          </li>
          <li>
            <NavLink href="/blog">Blog</NavLink>
          </li>
        </ul>
      </nav>

      <img
        className={styles.mobileNav}
        src="./menu.svg"
        onClick={() => setMobileNav(true)}
      ></img>

      {mobileNav && (
        <div className={styles.mobileNavMenu}>
          <div className={styles.mobileHead}>
            <img src="./logo.svg"></img>
            <img
              className={styles.mobileNav}
              src="./close.svg"
              onClick={() => setMobileNav(false)}
            ></img>
          </div>
          <ul>
            <li>
              <NavLink href="/">Chrome Extension</NavLink>
            </li>
            <li>
              <NavLink href="/price-comparison">Price Comparison</NavLink>
            </li>
            <li>
              <NavLink href="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function NavLink({ children, href }: any) {
  const router = useRouter();

  const style = {
    color: router.pathname === href ? "#4EB3E3" : "black",
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}
