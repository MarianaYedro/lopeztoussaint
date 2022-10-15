import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sliders () {
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
        <div>
            <Slider {...settings}>
                <div>
                    <h1 className={styles.title}>SOMOS</h1>
                    <h1 className={styles.title2}>CONSULTORES</h1>
                    <h1 className={styles.title3}>TRIBUTARIOS</h1>
                    <div className={styles.linea}><Image src="/img/home/slider/linea.svg" width={308} height={70}/></div>
                    <div style={{
                        backgroundImage: "url(/img/home/slider/1.jpg)",
                        height: "600px",
                        backgroundRepeat: "no-repeat"
                        }}>
                    </div>
                </div>
                
                <div>
                <h1 className={styles.title}>SOMOS</h1>
                    <h1 className={styles.title2}>CONSULTORES</h1>
                    <h1 className={styles.title3}>TRIBUTARIOS</h1>
                    <div className={styles.linea}><Image src="/img/home/slider/linea.svg" width={308} height={70}/></div>
                    <div style={{
                        backgroundImage: "url(/img/home/slider/1.jpg)",
                        height: "620px",
                        backgroundRepeat: "no-repeat"
                        }}>
                    </div>
                </div>
                
                <div>
                <h1 className={styles.title}>SOMOS</h1>
                    <h1 className={styles.title2}>CONSULTORES</h1>
                    <h1 className={styles.title3}>TRIBUTARIOS</h1>
                    <div className={styles.linea}><Image src="/img/home/slider/linea.svg" width={308} height={70}/></div>
                    <div style={{
                        backgroundImage: "url(/img/home/slider/1.jpg)",
                        height: "620px",
                        backgroundRepeat: "no-repeat"
                        }}>
                    </div>
                </div>
            </Slider>
        </div>
    )
};


export default Sliders;