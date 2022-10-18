import React from 'react';
import styles from "./Dropdown.module.css";
import { HiMenu } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import { useState } from "react";
import NavLinks from "./NavLinks";
import Image from 'next/image';
import Link from 'next/link';


export default function Dropdown() {
  const [open, setOpen] = useState(false);
  
  const hamburgerIcon = <HiMenu className={styles.button} onClick={() => setOpen (!open)}/>;
  const closeIcon = <CgClose className={styles.button} onClick={() => setOpen (!open)}/>;
    
  return (
      <nav className={styles.box}>
        <div>
            <Link href="/home/">
              <a>
              <Image src="/img/lts-logo.svg" width={170} height={50} alt="lts" />
              </a>
            </Link>
          </div>

        <div>
          {open ? closeIcon : hamburgerIcon }
          {open && <NavLinks/>}
        </div>
    
      </nav>
  )
}   
