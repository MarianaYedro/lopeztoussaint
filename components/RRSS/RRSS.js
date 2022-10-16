import Link from "next/link";
import Image from "next/image";
import styles from "./RRSS.module.css";

export default function RRSS() {

return (
    <div className={styles.rrss}>
        <Link href="/">
            <a><Image src="/img/home/rrss/facebook.svg" width={25} height={25} alt="facebook"/></a>
        </Link>

        <Link href="/">
            <a><Image src="/img/home/rrss/instagram.svg" width={25} height={25} alt="instagram"/></a>
        </Link>
        <Link href="/">
            <a><Image src="/img/home/rrss/linkedin.svg" width={25} height={25} alt="linkedin"/></a>
        </Link>
    </div>

)

}



