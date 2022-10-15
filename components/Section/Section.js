import PropTypes from "prop-types";
import {useMemo} from "react";
//import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Section.module.css"

const Section = ({elements}) => {
  const node = useMemo(
    () =>
      elements.map((e)=>{
        const {image, to} =e;
        return (
          <section key={elements}>
              <div className={styles.box} id="services"> 
                <Link href="/">
                  <a className={styles.img}><Image src={image} width={100} height={80} /></a>
                </Link>
                <Link href="/"><a>{to}</a></Link>
              </div>
          </section>
      );
}), [elements]
);
return <div  className={styles.services} key={elements}>{node}</div>;
};


Section.PropTypes ={
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      to: PropTypes.string,
    })
    ).isRequired,
}

export default Section;