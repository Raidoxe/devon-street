import Image from "next/image";
import styles from "./page.module.css";
import RealityBackgroundSVG from "@/components/RealityBackgroundSVG";
import MarqueeText from "@/components/MarqueeText";

export default function Home() {
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.header}>
          <Image
            src="/Logo.svg"
            alt="Devon Street Logo"
            className={styles.logo}
            width={100}
            height={100}
          />
          <div className={styles.headerDivs}>
            <a className={styles.headerLinks}>Gallery</a>
          </div>
          <div className={styles.headerDivs}>
            <a className={styles.headerLinks}>Live</a>
          </div>
          <div className={styles.headerDivs}>
            <a className={styles.headerLinks}>Music</a>
          </div>
        </div>
      </div>
      <div className={styles.album}>
        <div className={styles.vertTextBox}>
          <span className={styles.vertText}>D E V O N S T R E E T</span>
        </div>
        <MarqueeText />
        <RealityBackgroundSVG />
      </div>
    </div>
  );
}

/*<Image src="/AlbumPhoto18bit.png" alt="Reality Album Photo" />*/
