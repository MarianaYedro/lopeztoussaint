import React from 'react';
import Image from 'next/dist/client/image';
import Link from 'next/dist/client/link';
import styles from "./PartnerLeandro.module.css";

export default function Partner() {
  return (
    <div className={styles.container}>
        <div className={styles.box}>
            <h2 className={styles.title1}>Asociado:</h2>
            <h2 className={styles.title2}>Germán A. Lopez Toussaint</h2>
            <h4>Resúmen de Antecedentes Profesionales</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis odio vitae urna
                molestie blandit. Duis eu ornare quam, faucibus fringilla enim. Phasellus cursus, dui in pretium
                molestie, elit eros pharetra justo, eget blandit felis velit eu nunc. Donec nunc ex, fermentum
                nec accumsan sed, rutrum at felis. Mauris a semper nulla, eget mollis elit. In ac neque vitae
                eros suscipit hendrerit. Etiam urna nunc, ultrices vitae aliquet et, ultrices ac lorem. Sed porta id
                nulla nec maximus. Quisque vel ullamcorper eros. In rhoncus accumsan risus ut ornare. Duis at
                vehicula ex. In hac habitasse platea dictumst. Duis mattis volutpat erat vel posuere. Nulla in
            </p>

            
              <button><Link href="/"><a>Ver más</a></Link></button>
              <button><Link href="/"><a>Descargar resúmen</a></Link></button>
            

            <div className={styles.li }>
              <li>Contador Público – FCE – UBA (2005).</li>
              <li>Profesor auxiliar de grado – FCE – UBA.</li>
              <li>Miembro Adherente de la Asociación Argentina de Estudios Fiscales.</li>
              <li>Co-autor del libro “Liquidando Impuesto a la Ganancia Mínima Presunta”.</li>
              <li>Autor y conferencista en temas de la especialidad.</li>
            </div>
        </div>
        <div className={styles.img}><Image src="/img/about/leandro.png" width={781} height={496} alt="lts"/></div>
    </div>
  )
}