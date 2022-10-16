import React from 'react';
import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h6>ACERCA DE</h6>
              <li>Servicios</li>
              <li>Sobre nosotros</li>
              <li>Certificaciones</li>
              <li>Contacto</li>
      </div>
        
      <div className={styles.box}>  
        <h6>DIRECCIÓN</h6>
            <li>Dr. Mariano Moreno 957,</li>
            <li>Piso 7 – Oficina “3” (C1091AAS)</li>
            <li>Ciudad Autónoma Buenos Aires,</li>
            <li>Argentina</li>
      </div>

      <div className={styles.box}>
        <h6>CONTACTO</h6>
            <li>Tel.: (+5411) 5272–1100</li>
            <li>Mail: info@lopeztoussaint.com.ar</li>
      </div>

      <div className={styles.box}>
        <h6>RRSS</h6>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Linkedin</li>
      </div>

      <div>
        <Image src="/img/consejo-profesional.svg" width={177} height={143} alt="lts" />
      </div>

      

    </div>

      

    
  )
}
