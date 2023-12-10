import { client } from '@/libs/client';
import Link from "next/link";
import { Noto_Serif_JP } from 'next/font/google'
import styles from '@/styles/components/contents/column/column.module.scss';

const notojp = Noto_Serif_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',  // set font-display to 'swap'
});

export default function ColumnId({ column }) {
  return (
    <main className={notojp.className}>
      <div className={styles.column}>
        <div className={styles.column__container}>
          <h1 className={styles.column__title}>{column.title}</h1>
          <div className={styles.column__publishedat}>
            <ul>
              <li>{column.publishedAt}</li>
            </ul>
          </div>
          <div className={styles.column__body} dangerouslySetInnerHTML={{
              __html: `${column.body}`,
           }}>
          </div>
          <Link href="/" className={styles.column__button}>
            <div className={styles.button__container}>
              <div>公演に戻る</div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "column" });

  const paths = data.contents.map((content) => `/column/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "column", contentId: id });

  return {
    props: {
      column: data,
    },
  };
};