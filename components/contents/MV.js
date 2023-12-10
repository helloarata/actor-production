import styles from '@/styles/components/contents/MV.module.scss';


export default function MV({ fonts }) {
  return (
    <section className={`${styles.mv} ${fonts[0].className}`}>
      <div className={styles.mv__background}>
        <ul className={styles.mv__script}>
          <li><dl><dt className={styles.mv__script__character}>戦士</dt><dd>「僧侶!ここまでやらせたら相撲とってやらんか!」</dd></dl></li>
          <li><dl><dt className={styles.mv__script__character}>僧侶</dt><dd>「デースもっ!」</dd></dl></li>
          <li><dl><dt className={styles.mv__script__character}>魔法使い</dt><dd>「何してんの? 私」</dd></dl></li>
          <li><dl><dt className={styles.mv__script__character}>戦士</dt><dd>「相撲を取る気満々だった」</dd></dl></li>
          <li><dl><dt className={styles.mv__script__character}>勇者</dt><dd>「凄いっ! 新しい呪文はなんですか!?」</dd></dl></li>
          <li><dl><dt className={styles.mv__script__character}>僧侶</dt><dd>「よく聞け。この呪文はこのレベルが上がった中、手に入れた最強の呪文」</dd></dl></li>
          <li><dl><dt className={styles.mv__script__character}>勇者</dt><dd>「これで魔王が倒せますね!」</dd></dl></li>
          <li><dl><dt className={styles.mv__script__character}>僧侶</dt><dd>「かもな」</dd></dl></li>
          <li><dl><dt className={styles.mv__script__character}>戦士</dt><dd>「早く言え!」</dd></dl></li>
          <li><dl><dt className={styles.mv__script__character}>僧侶</dt><dd>「この呪文をかけられた者は耳の裏のところの匂いが恐ろしく臭くなる。それはそれは臭くなる。そしてモンスターがその匂いに耐えきれなくなったところで攻撃!そんな呪文だよ」</dd></dl></li>
          <li><dl><dt className={styles.mv__script__character}>勇者</dt><dd>「凄いっ!」</dd></dl></li>
          <li><dl><dt className={styles.mv__script__character}>僧侶</dt><dd>「カ・レイシュウ........。そう名付けたよ」</dd></dl></li>
          <li><dl><dt className={styles.mv__script__character}>魔法使い</dt><dd>「ってことは味方の誰かにかけて戦うってことでしょ?私、絶対イヤだよ、そんな役割。女の子だからね」</dd></dl></li>
          <li><dl><dt className={styles.mv__script__character}>勇者</dt><dd>「かけて下さい!僧侶さん!私にカ・レイシュウをかけて下さい!」</dd></dl></li>
          <li><dl><dt className={styles.mv__script__character}>僧侶</dt><dd>「カ・レイシュウ!」呪文のSE。魔法使いが恐る恐る勇者の耳の裏のところを嗅ぐ........</dd></dl></li>
          <li><dl><dt className={styles.mv__script__character}>魔法使い</dt><dd>「.............くっさ!っっ!!」</dd></dl></li>
          <li><dl><dt className={styles.mv__script__character}>戦士</dt><dd>「てかさ、魔王のすみかって何処なんだろうな」</dd></dl></li>
          <li><dl><dt className={styles.mv__script__character}>勇者</dt><dd>「さぁ....」</dd></dl></li>
        </ul>
      </div>

      <div className={styles.mv__foreground}>
        <div className={styles.mv__foreground__title}>
          <p className={fonts[1].className}>Google Fonts * Actor</p>
          <h2 className={styles.mv__foreground__message}>共に物語をつくろう</h2>
        </div>
      </div>
    </section>
  );
}