import Link from "next/link";
import Image from "next/image";
import React from 'react';
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.nav}>
          <div>
            <Link href="/home/"><a>
              <Image src="/img/lts-logo.svg" width={170} height={50} alt="lts" />
              </a>
            </Link>
          </div>

            <div className={styles.navBox}>
                <Link href="/home/#services"><a>Servicios</a></Link>
                <Link href="/about"><a>Sobre Nosotros</a></Link>
                <Link href="/home/#customers"><a>Nuestros Clientes</a></Link>
                <Link href="/"><a>Certificaciones</a></Link>
                <Link href="/home/#contact"><a>Contacto</a></Link>
            </div>
    </nav>
  );
}
