import Link from "next/link";
import React from 'react';
import styles from "./NavLinks.module.css";

  
export default function NavLinks() {
  return (
    <nav>
        <div className={styles.items}>
            <Link href="/home/#services"><a>Servicios</a></Link>
            <Link href="/about"><a>Sobre Nosotros</a></Link>
            <Link href="/home/#customers"><a>Nuestros Clientes</a></Link>
            <Link href="/about/#certifications"><a>Certificaciones</a></Link>
            <Link href="/home/#contact"><a>Contacto</a></Link>
        </div> 
    </nav>
  );
}
