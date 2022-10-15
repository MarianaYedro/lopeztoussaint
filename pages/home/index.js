import PropTypes from "prop-types";
import Layout from "../../components/Layout/Layout";
import Navbar from "../../components/Navbar/Navbar";
//import SliderCustomers from "../../components/Customers/SliderCustomers";
//import Section from "../../components/Section/Section";
//import SectionAbout from "../../components/SectionAbout/SectionAbout";
//import Form from "../../components/Form/Form";
//import Footer from "../../components/Footer/Footer";
//import All from "../../components/Footer/All";
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
import styles from "./index.module.css";
//import SliderServices from "../../components/Consultoria/SliderServices";
import ES from "./es.json";
import Image from "next/image";
//import RRSS from "../../components/RRSS/RRSS";


export const Home = ({ data }) => {
    const {about, services, section} = data;
    return (
        <>
            <Layout title="LTS | Home">
                <div className={styles.container}>
                    <Navbar/>
                    
                    
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