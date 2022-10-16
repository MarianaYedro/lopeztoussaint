import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./Certifications.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Certifications () {
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
            <h2>Certificaciones</h2>

            <Slider {...settings}>
                <div>
                    <Image src="/img/consejo-profesional.svg" width={177} height={143} alt="lts" />
                    <Image src="/img/consejo-profesional.svg" width={177} height={143} alt="lts" />
                    <Image src="/img/consejo-profesional.svg" width={177} height={143} alt="lts" />
                </div>
                
                <div>
                    <Image src="/img/consejo-profesional.svg" width={177} height={143} alt="lts" />
                    <Image src="/img/consejo-profesional.svg" width={177} height={143} alt="lts" />
                    <Image src="/img/consejo-profesional.svg" width={177} height={143} alt="lts" />
                    
                </div>
                
                <div>
                    <Image src="/img/consejo-profesional.svg" width={177} height={143} alt="lts" />
                    <Image src="/img/consejo-profesional.svg" width={177} height={143} alt="lts" />
                    <Image src="/img/consejo-profesional.svg" width={177} height={143} alt="lts" />
                    
                </div>
       
            </Slider>
        </div>
    )
};


export default Certifications;