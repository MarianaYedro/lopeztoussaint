import PropTypes from "prop-types";
import React from 'react';
import Image from 'next/dist/client/image';
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
//import "normalize.css";

export const About = ({data}) => {
  const {about} = data;

  return (
    <Layout title="LTS | Nosotros">
        <div>
            <div><Navbar/></div>

            <div>
              <Image src="/img/about/about.jpg" width={1920} height={936} alt="lts" />
              <div className={styles.rrss}><RRSS/></div>
            </div>
            
            <SectionAbout title={about.title} text={about.text} subtitle={about.subtitle} button={about.button}/>
            
            <PartnerGerman/>
            
            <PartnerLeandro/>
            
            <Certifications/>

            <div className={styles.box}>
              <div>
                <h2>¿Dudas?</h2>
                <h2>Ponete en contacto con nosotros</h2>
              </div>
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

