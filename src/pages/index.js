import Layout from '../../components/Layout';
import MV from '../../components/contents/MV';
import Concept from '../../components/contents/Concept';
import Column from './column.js';
import Story from '../../components/contents/Story';
import Company from '../../components/contents/Company';
import Cast from '../../components/contents/Cast';
import Image from 'next/image'
import {Noto_Serif_JP, Vollkorn, Shippori_Mincho, Zen_Antique, Kiwi_Maru, Zen_Old_Mincho, Yuji_Boku, BIZ_UDPMincho } from 'next/font/google'
import { client } from '@/libs/client';

// 和文
const notojp = Noto_Serif_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});
// 欧文
const vollkorn = Vollkorn({
  weight: ['400', '700'],
  subsets: ['latin']
});
// 勇者
const shippori_mincho = Shippori_Mincho({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});
// 戦士
const zen_antique = Zen_Antique({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});
// 僧侶
const kiwi_maru = Kiwi_Maru({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});
// 魔法使い
const zen_old_mincho = Zen_Old_Mincho({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});
// 魔王
const yuji_boku = Yuji_Boku({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});
// 役者
const biz_udp_mincho = BIZ_UDPMincho({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});


export default function RootLayout({column}) {
  const fonts = [notojp, vollkorn, shippori_mincho, zen_antique, kiwi_maru, zen_old_mincho, yuji_boku, biz_udp_mincho];
  return (
    <Layout title='Top' fonts={fonts}>
      <MV fonts={fonts}/>
      <Concept fonts={fonts}/>
      <Column column={column} fonts={fonts}/>
      <Story fonts={fonts}/>
      <Company fonts={fonts}/>
      <Cast fonts={fonts}/>
    </Layout>
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "column" });

  return {
    props: {
      column: data.contents,
    },
  };
};
