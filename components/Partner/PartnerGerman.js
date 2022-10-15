import React from 'react';
import Image from 'next/dist/client/image';
import Link from 'next/dist/client/link';
import styles from "./PartnerGerman.module.css";

export default function Partner() {
  return (
    <div className={styles.container}>
        <div className={styles.img}><Image src="/img/about/german.png" width={817} height={708} alt="lts" /></div>
        <div className={styles.box}>
            <h2 className={styles.title1}>Socio Principal:</h2>
            <h2 className={styles.title2}>Germán A. Lopez Toussaint</h2>
            <h4>Resúmen de Antecedentes Profesionales</h4>
            <p>Asesoró en aspectos de planificación, cumplimiento y control tributario a más de 100 firmas
                industriales (metalúrgica aceros, tubos de acero, alambre, insumos para la industria petrolera,
                prótesis odontológicas con tecnología nuclear, desarrollo con tecnología nuclear de
                prótesis óseas, alimentos, fraccionamiento especies, productos eléctricos, cosméticos, plásticos,
                editorial, edición de publicaciones, impresiones, imprentas rápidas electrónicas, anteojos,
                juguetes y rodados infantiles, máquinas para juego, textiles), mineras (canteras, minas), constructoras
                (obras civiles e industriales, viales, estructuras metálicas, grandes obras eléctricas,)
            </p>

            <button><Link href="/"><a>Ver más</a></Link></button>
            <button><Link href="/"><a>Descargar resúmen</a></Link></button>
            
            <div className={styles.li }>
              <li>Contador Público – FCE – UBA.</li>
              <li>Especializado en Tributación, Finanzas Públicas e Integración Regiona.</li>
              <li>Especialista en Docencia Universitaria, área de especialidad Finanzas Públicas.</li>
              <li>Cursó estudios de Economía – FCE – UBA.</li>
              <li>Profesor Adjunto y Titular.</li>
            </div>
        </div>
    </div>
  )
}
