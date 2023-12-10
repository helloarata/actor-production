import styles from '@/styles/components/contents/Concept.module.scss';

export default function Concept({ fonts }) {
  return (
    <section id='concept' className={`${styles.concept} ${fonts[0].className}`}>
      <div className={styles.concept__headline}>  
        <h2 className={`${styles.concept__headline__title} ${fonts[1].className}`}>Concept</h2>
      </div>
      <p className={styles.concept__body__text}>
          <span>本公演のキャストは、</span><span className={fonts[1].className}>Font</span><span>です。</span><br />
          <span>一つの</span><span className={fonts[1].className}>Font</span><span>を</span><br/>
          <span>一人の「役者」と捉え、</span><br />
          <span className={fonts[1].className}>Font</span><span>と言葉に込められた想いに</span><br />
          <span>フォーカスした。</span><br />
          <span className={fonts[1].className}>Font</span><span>劇をお届けします。</span>
       </p>
    </section>
  );
}