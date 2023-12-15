import styles from '@/styles/components/contents/Column.module.scss';
import Link from "next/link";

export default function Column({ column, fonts })  {
  return (
    <section id='column' className={`${styles.column} ${fonts && fonts[0].className}`}>
      <div className={styles.column__headline}>
        <h2 className={`${styles.column__headline__title} ${fonts && fonts[1].className}`}>Column</h2>
      </div>

      <div className={styles.column__body}>
        <div className={styles.column__title}>
          <h3 className={styles.column__title__subhead}>みんなの考え。「役者」ってなんだろう?</h3>
        </div>

        <div className={styles.column__content}>
          <div className={styles.column__content__container}>
            {column && column.map((column) => (
              <article key={column.id} className={styles.column__container}>
                <Link href={`/column/${column.id}`}>
                  <div className={styles.column__img__container}>
                    <img src={`${column.img.url}`} className={styles.column__img} alt='つぶらな瞳でこちらを見つめている犬'/>
                  </div>
                  <h2 className={styles.column__container__title}>
                    {column.title}
                  </h2>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}