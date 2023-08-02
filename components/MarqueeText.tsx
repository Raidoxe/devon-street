import styles from "../app/page.module.css";

export default function MarqueeText() {
  return (
    <div className={styles.marquee}>
      <div>
        <span className={styles.devstreetText}>D E V O N S T R E E T</span>
        <span className={styles.realityText}>REALITY</span>
        <span className={styles.outText}>OUT</span>
        <span className={styles.nowText}>NOW</span>
        <span className={styles.devstreetText}>D E V O N S T R E E T</span>
        <span className={styles.realityText}>REALITY</span>
        <span className={styles.outText}>OUT</span>
        <span className={styles.now2Text}>NOW</span>
      </div>
    </div>
  );
}
