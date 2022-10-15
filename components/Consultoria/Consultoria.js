import React from 'react';
import styles from './Consultoria.module.css';
import Link from 'next/link';

export default function Consultoria() {
  return (
    <section className={styles.consultoria}>
        <h2>Consultoría Tributaria</h2>
            <div className={styles.content}>
                <div className={styles.box}>
                    <h3>Asesoramiento Tributario</h3>
                    <p>Servicios de asesoramiento tributario nacional e internacional. Análisis
                    del impacto de los impuestos en las operaciones locales e internacionales.
                    Análisis especiales para reorganizaciones.</p>
                    <button>
                        <Link href="/"><a>Ver más</a></Link>
                    </button>
                </div>
                
                <div className={styles.box}>
                    <h3>Planificación impositiva</h3>
                    <p>Planificación y asistencia en el establecimiento de nuevas operaciones en
                        la Argentina o en el exterior, que mejor se adapten a las necesidades de su
                        empresa y de la manera más eficiente desde el punto de vista impositivo.
                        Análisis de repatriación de utilidades.</p>
                        <button>
                        <Link href="/"><a>Ver más</a></Link>
                    </button>
                </div>
                
                <div className={styles.box}>
                    <h3>Precios de Transferencia</h3>
                    <p>Asistencia en el cumplimiento de las obligaciones emergentes del régimen
                        de operaciones internacionales. Elaboración de informes de precios de
                        transferencia y declaraciones juradas. Planificación de inversiones u
                        operaciones intercompañía. Diagnóstico de los posibles problemas.</p>
                        <button>
                        <Link href="/"><a>Ver más</a></Link>
                    </button>
                </div>
            </div>
          </section>
  )
}
