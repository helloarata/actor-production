import Head from "next/head";
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";
import styles from '@/styles/components/Layout.module.css'

export default function Layout({children, title = "HP Next.js", fonts}) {
  return (
    <div className={`${styles.wrapper} ${fonts[0].className}`}>
      <Head>
        <meta name="description" content="Actor Productionはプロの役者を育て上げる組織です。「役者」としての在り方を、違う視点から問う。本サイトは、GoogleFonts x Actor の組み合わせで役者を一つのFontとして捉えたFont劇を公演致します。" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Actor Productionはプロの役者を育て上げる組織です。「役者」としての在り方を、違う視点から問う。本サイトは、GoogleFonts x Actor の組み合わせで役者を一つのFontとして捉えたFont劇を公演致します。" />
        <meta property="og:url" content="https://actor-production.vercel.app/" />
        <meta property="og:image" content="https://actor-production.vercel.app/thumbnail.png"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Actor Production" />
        <meta name="twitter:card" content="summary_large_image" /> 
        <title>{title}</title>
      </Head>
      <Header/>
      <Navigation fonts={fonts}/>
      <main className={styles.main}>{children}</main>
      <Footer fonts={fonts}/>
    </div>
  );
};