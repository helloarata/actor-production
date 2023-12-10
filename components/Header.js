import styles from '@/styles/components/Header.module.css';
import { Vollkorn } from 'next/font/google'

// 欧文
const vollkorn = Vollkorn({
  weight: ['400', '700'],
  subsets: ['latin']
});

export default function Header() {
  return (
    <header className={styles.header}>
        <a className={styles.header__container}>
          <h1 className={`${styles.header__title} ${vollkorn.className}`}>Actor Production</h1>
        </a>
    </header>
  );
}