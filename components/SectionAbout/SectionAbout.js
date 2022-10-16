import PropTypes from "prop-types";
import React from 'react';
import styles from './SectionAbout.module.css';
import Link from 'next/link';
import Image from 'next/image';



const SectionAbout= ({title, text, subtitle, button}) => {
  return (
    <section className={styles.about}>
        <div className={styles.box}>

            <h2>{title}</h2>
            <p>{text}</p>
            <h4>{subtitle}</h4>
            
            <button><Link href="/"><a>{button}</a></Link></button>
        
        </div>

        <div className={styles.img}>
            <Image src="/img/home/about/about-section.svg" width={1000} height={600} alt="about" />
        </div>


    </section>
  );
};

SectionAbout.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,

}

export default SectionAbout;
