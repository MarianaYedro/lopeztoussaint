import PropTypes from "prop-types";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./SliderCustomers.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SlidersCustomers = ({}) => {
    const settings = {
        dots: true,
        dotsClass: styles.dots,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, 
    }
    return(
        <div className={styles.container}>
            <h2 id="customers">Nuestros Clientes</h2>
            <Slider {...settings}>
                <div className={styles.img}>
                    <Image src="/img/home/customers/orbis.svg" width={200} height={150} alt="orbis"/>
                    <Image src="/img/home/customers/escala.svg" width={350} height={150} alt="escala" />
                    <Image src="/img/home/customers/criteria.svg" width={250} height={150} alt="criteria" />
                    <Image src="/img/home/customers/maserati.svg" width={250} height={150} alt="maserati" />
                </div>
                
                <div className={styles.img}>
                    <Image src="/img/home/customers/orbis.svg" width={200} height={150} alt="orbis" />
                    <Image src="/img/home/customers/escala.svg" width={350} height={150} alt="escala" />
                    <Image src="/img/home/customers/criteria.svg" width={250} height={150} alt="criteria" />
                    <Image src="/img/home/customers/maserati.svg" width={250} height={150} alt="maserati" />
                </div>
                
                <div className={styles.img}>
                    <Image src="/img/home/customers/orbis.svg" width={200} height={150} alt="orbis" />
                    <Image src="/img/home/customers/escala.svg" width={350} height={150} alt="escala" />
                    <Image src="/img/home/customers/criteria.svg" width={250} height={150} alt="criteria" />
                    <Image src="/img/home/customers/maserati.svg" width={250} height={150} alt="maserati" />
                </div>
            </Slider>
        </div>
    );
};


export default SlidersCustomers;