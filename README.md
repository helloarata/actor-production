Actor Production
==================

## はじめに
Next.js + microCMS + Vercel で作られた、架空劇団のブランディングサイトです。

## 開発環境の構築
### 必須のソフトウェア
  - node.js
### 環境変数の設定

| 環境変数名               | 説明                                  |
|:-----------------------:|:------------------------------------:|
| MICROCMS_SERVICE_DOMAI  | MicroCmSのドメイン名                   |
| MICROCMS_API_KEY        | APIキー名                             |

### 依存ライブラリのインストール
```
npm install
```
### ローカル環境での起動コマンド
```
npm run dev
npm run build
npm run start
```
## 主なリポジトリ内のフォルダ構造
```
│
├ components
│　├ contents // 各コンテンツ別に分けたコンポーネントを格納
│　│  ├ Cast.js    // Castコンテンツのコンポーネント
│　│  ├ Company.js // Companyコンテンツのコンポーネント
│　│  ├ Concept.js // Conceptコンテンツのコンポーネント
│　│  ├ MV.js      // MVコンテンツのコンポーネント
│　│  └ Story.js   // Storyコンテンツのコンポーネント
│　├ Footer.js     // Footerコンテンツのコンポーネント
│　├ Header.js     // Headerコンテンツのコンポーネント
│　├ Icon.js       // FontAwesomeからIconを取得したコンポーネント
│　├ Layout.js     // 全てのコンポーネントを包括
│　└ Navigation.js // navコンテンツのコンポーネント
│
├ public
│　└ thumbnail.png // OGPで使用する画像
├ src
│　├ libs
│　│  └ client.js // microcmsを利用する。API関連の記述
│　├ pages
│　│  ├ column
│　│  │  └ [id].js // Column の詳細記事ページ 
│　│  ├ column.js // Columnコンテンツのコンポーネント
│　│  └ index.js  // 全てのコンテンツのコンポーネントを読み込んだTOPページ
│　└ styles // CSS Modulesを導入。ディレクトリ内は components 内のファイル構造に寄せて各コンポーネント別に分けたcssを配置
│

```

## 概要
このプロジェクトでは、next/font を使用して、Google フォントを用いています。

## 使用技術のマニュアル
 ### Next.jsについてのリソース
[Next.js Documentation](https://nextjs.org/docs) 

### MicroCmSについてのリソース
[MicroCmS Documentation](https://document.microcms.io/manual/getting-started)

### Vercelについてのリソース
[Vercel Documentation](https://vercel.com/docs/deployments/overview)

## 今回使用したスキル
[![My Skills](https://skillicons.dev/icons?i=js,html,css,sass)](https://skillicons.dev)

以上になります。ありがとうございます。