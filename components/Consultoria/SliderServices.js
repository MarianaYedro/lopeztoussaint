import PropTypes from "prop-types";
import React from "react";
import Slider from "react-slick";
import styles from "./SliderServices.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/dist/client/link";


export const Slide = ({service, index}) => {
    const {title, subtitle, text, subtitle2, text2, subtitle3, text3,} = service;

    return (
        <section className={styles.consultoria} priority={index===0}>
            <h2>{title}</h2>
            <div className={styles.content}>
                <div className={styles.box}>
                    <h3>{subtitle}</h3>
                    <p>{text}</p>
                    <button>
                        <Link href="/"><a>Ver más</a></Link>
                    </button>
                </div>

                <div className={styles.box}>
                    <h3>{subtitle2}</h3>
                    <p>{text2}</p>
                    <button>
                        <Link href="/"><a>Ver más</a></Link>
                    </button>
                </div>

                <div className={styles.box}>
                    <h3>{subtitle3}</h3>
                    <p>{text3}</p>
                    <button>
                        <Link href="/"><a>Ver más</a></Link>
                    </button>
                </div>
                
            </div>
        </section>
    );
};

Slide.propTypes = {
    service: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        subtitle2: PropTypes.string.isRequired,
        text2: PropTypes.string.isRequired,
        subtitle3: PropTypes.string.isRequired,
        text3: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
}

Slide.defaultProps = {};

const SliderServices = ({services}) => {
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
    };

    return(
        <div>
            <Slider {...settings}>
               {services.map((service, index) => (
                <Slide key={service.id} service={service} index={index}/>
               ))}
            </Slider>
        </div>
    )
};

SliderServices.propTypes = {
    services: PropTypes.array.isRequired,
};

SliderServices.defaultProps = {};

export default SliderServices;
