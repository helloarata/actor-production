import styles from '@/styles/components/contents/Cast.module.css';
import { PlusIcon } from '../Icon';

export default function Cast({ fonts }) {
  return (
    <section id='cast' className={`${styles.cast} ${fonts[0].className}`}>
      <div className={styles.cast__headline}>
        <h2 className={`${styles.cast__headline__title} ${fonts[1].className}`}>Cast</h2>
      </div>

      <ul className={styles.cast__list}>
        <li>
          <dl>
            <dt className={`${styles.cast__item__role}`}>欧文</dt>
            <dd className={`${styles.cast__item__name} ${fonts[1].className}`}><a href='https://fonts.google.com/specimen/Vollkorn'>Vollkorn</a></dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt className={`${styles.cast__item__role}`}>和文</dt>
            <dd className={`${styles.cast__item__name}`}><a href='https://fonts.google.com/noto/specimen/Noto+Serif+JP'>Noto Serif Japanese</a></dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt className={`${styles.cast__item__role}`}>勇者</dt>
            <dd className={`${styles.cast__item__name} ${fonts[2].className}`}><a href='https://fonts.google.com/specimen/Shippori+Mincho'>Shippori Mincho</a></dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt className={`${styles.cast__item__role}`}>戦士</dt>
            <dd className={`${styles.cast__item__name} ${fonts[3].className}`}><a href='https://fonts.google.com/specimen/Zen+Antique'>Zen Antique</a></dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt className={`${styles.cast__item__role}`}>僧侶</dt>
            <dd className={`${styles.cast__item__name} ${fonts[4].className}`}><a href='https://fonts.google.com/specimen/Kiwi+Maru'>Kiwi Maru</a></dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt className={`${styles.cast__item__role}`}>魔法使い</dt>
            <dd className={`${styles.cast__item__name} ${fonts[5].className}`}><a href='https://fonts.google.com/specimen/Zen+Old+Mincho'>Zen Old Mincho</a></dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt className={`${styles.cast__item__role}`}>魔王</dt>
            <dd className={`${styles.cast__item__name} ${fonts[6].className}`}><a href='https://fonts.google.com/specimen/Yuji+Boku'>Yuji Boku</a></dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt className={`${styles.cast__item__role}`}>役者</dt>
            <dd className={`${styles.cast__item__name} ${fonts[7].className}`}><a href='https://fonts.google.com/specimen/BIZ+UDPMincho'>BIZ UDPMincho</a></dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt className={styles.cast__item__role}>仲間になる</dt>
            <dd className={styles.cast__item__name}><a className={styles.addMember} href='#'><PlusIcon /></a></dd>
          </dl>
        </li>
      </ul>
    </section>
  );
}