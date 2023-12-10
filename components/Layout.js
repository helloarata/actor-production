import Head from "next/head";
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";
import styles from '@/styles/components/Layout.module.css'

export default function Layout({children, title = "HP Next.js", fonts}) {
  return (
    <div className={`${styles.wrapper} ${fonts[0].className}`}>
      <Head>
        <title>{title}</title>
      </Head>
      <Header/>
      <Navigation fonts={fonts}/>
      <main className={styles.main}>{children}</main>
      <Footer fonts={fonts}/>
    </div>
  );
};