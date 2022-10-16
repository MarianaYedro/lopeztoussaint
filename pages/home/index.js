import PropTypes from "prop-types";
import Layout from "../../components/Layout/Layout";
import Navbar from "../../components/Navbar/Navbar";
import SliderCustomers from "../../components/Customers/SliderCustomers";
import Section from "../../components/Section/Section";
import SectionAbout from "../../components/SectionAbout/SectionAbout";
//import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import All from "../../components/Footer/All";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./index.module.css";
import SliderServices from "../../components/Consultoria/SliderServices";
import ES from "./es.json";
import RRSS from "../../components/RRSS/RRSS";


export const Home = ({ data }) => {
    const {about, services, section} = data;
    return (
        <>
            <Layout title="LTS | Home">
                <div className={styles.container}>
                    <Navbar/>
                    
                    <div className={styles.banner}>
                        <div className={styles.title}>
                            <h1 className={styles.title1}>SOMOS</h1>
                            <h1>CONSULTORES</h1>
                            <h1>TRIBUTARIOS</h1>
                        
                        </div>
                        
                        <div><RRSS/></div>
                            
                    </div>

                    <Section elements={section.elements}/>

                    <SliderServices services={services}/>  

                    <div className={styles.about}>
                        <SectionAbout title={about.title} text={about.text} subtitle={about.subtitle} button={about.button}/>
                    </div>    
                    
                    <SliderCustomers/>

                    <div className={styles.contact}>

                        <iframe className={styles.map}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105151.29175078565!2d-58.506453414647204!3d-34.55411576881729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccad12b8739f9%3A0x33cbe733a3fc010e!2sMoreno%20957%2C%20C1091%20CABA!5e0!3m2!1ses-419!2sar!4v1663018471047!5m2!1ses-419!2sar"
                            width={800} height={680} border={0} allowFullScreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
        
                       
                    </div>
    
                    <div><Footer/><All/></div> 
                </div>
                
                
            </Layout>
        </>
    );
};

Home.propTypes = {
    data: PropTypes.shape({
        about: PropTypes.object.isRequired,
        services: PropTypes.array.isRequired,
        section: PropTypes.object.isRequired,
    }).isRequired,
    
};

export default Home;

export async function getStaticProps({locale}) {
    const data = locale === "es" ? ES : ES;

    return {
        props: {data}
    }
}