import Link from "next/link";
import Image from "next/image";
import React from 'react';
import styles from "./Navbar.module.css";
import Dropdown from "./Dropdown";
import NavLinks from "./NavLinks";


export default function Navbar() {
  return (
    <nav className={styles.nav}>

          <div className={styles.logo}>
            <Link href="/home/">
              <a>
              <Image src="/img/lts-logo.svg" width={170} height={50} alt="lts" />
              </a>
            </Link>
          </div>

          <div className={styles.navlinks}>
            <NavLinks/>
          </div>
          
          <div className={styles.hamburger}>
            <Dropdown/>
          </div>  
    </nav>
  );
}
