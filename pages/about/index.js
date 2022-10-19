import PropTypes from "prop-types";
import React from 'react';
import Layout from "../../components/Layout/Layout";
import Navbar from "../../components/Navbar/Navbar";
import SectionAbout from "../../components/SectionAbout/SectionAbout";
import styles from "./index.module.css";
import PartnerGerman from '../../components/Partner/PartnerGerman';
import PartnerLeandro from '../../components/Partner/PartnerLeandro';
import Footer from "../../components/Footer/Footer";
import All from "../../components/Footer/All";
import Certifications from '../../components/Certifications/Certifications';
import ES from "./es.json";
import RRSS from "../../components/RRSS/RRSS";
import Link from "next/link";


export const About = ({data}) => {
  const {about} = data;

  return (
    <Layout title="LTS | Nosotros">
        <div>
            <div><Navbar/></div>

            <div className={styles.banner}>
              <div>
              </div>
                <div><RRSS/></div>              
            </div>
            
            <div className={styles.about}>
              <SectionAbout title={about.title} text={about.text} subtitle={about.subtitle} button={about.button}/>
            </div>

            <PartnerGerman/>
            
            <PartnerLeandro/>
            
            <Certifications/>

            <div className={styles.box}>
              <div>
                <h1>¿Dudas?</h1>
                <h1>Ponete en contacto con nosotros</h1>
              </div>
              
              <button><Link href="home/#contact"><a>Contacto</a></Link></button>
  
            </div>

            <div><Footer/><All/></div> 
        </div>
    </Layout>
  )
}

About.propTypes = {
  data: PropTypes.shape({
      about: PropTypes.object.isRequired,
  }).isRequired,
  
};

export default About; 

export async function getStaticProps({locale}) {
  const data = locale === "es" ? ES : ES;

  return {
      props: {data}
  }
}

