import styles from '@/styles/components/contents/Company.module.css';

export default function Company({ fonts }) {
  return (
    <section id='company' className={`${styles.company} ${fonts[0].className}`}>
      <div className={styles.company__headline}>
        <h2 className={`${styles.company__headline__title} ${fonts[1].className}`}>Company</h2>
      </div>

      <div className={styles.company__body}>
        <div className={styles.company__title}>
          <h3 className={`${styles.company__title__subhead} ${fonts[1].className}`}>Actor Productionについて知る</h3>
          <p className={styles.company__body__text}>私たちは「ことば」を大切に。演じる集団 Actor Production です。ことばの魅力。人の表現によって生み出される想いを共に一つのカタチにします。</p>
        </div>
        <a className={styles.company__button}>
          <div className={styles.company__button__container}>
            <div className={`${styles.company__button__container__label} ${fonts[1].className} `}>View More</div>
          </div>
        </a>
      </div>
    </section>
  );
}