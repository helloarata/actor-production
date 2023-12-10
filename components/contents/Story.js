import styles from '@/styles/components/contents/Story.module.scss';

export default function Story({ fonts }) {
  return (
    <section id='story' className={`${styles.story} ${fonts[0].className}`}>
      <div className={styles.story__headline}>
        <h2 className={` ${styles.story__headline__title} ${fonts[1].className}`}>Story</h2>
      </div>
      <div className={styles.story__body}>
        <div className={styles.story__typeface}>
          <div className={styles.story__typeface__head}>
            <h3 className={styles.story__typeface__name}>Noto Serif Japanese</h3>
            <ul className={styles.story__typeface__summary}>
              <li>
                書体名: Noto Serif Japanese
                <span></span>
              </li>
              <li>
                読み方: ノト セリフ ジャパニーズ
                <span></span>
                </li>
              <li>
                使用元: Google Fonts
                <span></span>
              </li>
            </ul>
          </div>
          <div>
            <p className={styles.story__typeface__description}>
              Notoは、すべての現代言語および古代言語のためのグローバルフォントコレクションです。Noto Serif JPは、日本語および日本で使用される他の言語向けのモジュレートされた（セリフのある）デザインです。ひらがな、カタカナ、漢字、ラテン文字、キリル文字、ギリシャ文字、ハングルをサポートしています。さまざまなウェイトが用意されています。
            </p>
          </div>
          <div></div>
        </div>
        {/* 1行 */}
        <div className={styles.story__line}>
          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span className={fonts[6].className}>魔</span></div>
              <div className={styles.typing}><span className={fonts[6].className}>王</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>ユウジ ボク</span>
              <span>Yuji Boku</span>
            </div>
          </a>

          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span>を</span></div>
              <div className={styles.typing}><span>倒</span></div>
              <div className={styles.typing}><span>す</span></div>
              <div className={styles.typing}><span>べ</span></div>
              <div className={styles.typing}><span>く</span></div>
              <div className={styles.typing}><span>、</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>ノト セリフ ジャパニーズ</span>
              <span>Noto Serif Japanese</span>
            </div>
          </a>
        </div>
        {/* 2行 */}
        <div className={styles.story__line}>
          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span>王</span></div>
              <div className={styles.typing}><span>都</span></div>
              <div className={styles.typing}><span>か</span></div>
              <div className={styles.typing}><span>ら</span></div>
              <div className={styles.typing}><span>旅</span></div>
              <div className={styles.typing}><span>立</span></div>
              <div className={styles.typing}><span>ち</span></div>
              <div className={styles.typing}><span>を</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>ノト セリフ ジャパニーズ</span>
              <span>Noto Serif Japanese</span>
            </div>
          </a>
        </div>
        {/* 3行 */}
        <div className={styles.story__line}>
          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span>余</span></div>
              <div className={styles.typing}><span>儀</span></div>
              <div className={styles.typing}><span>な</span></div>
              <div className={styles.typing}><span>く</span></div>
              <div className={styles.typing}><span>さ</span></div>
              <div className={styles.typing}><span>れ</span></div>
              <div className={styles.typing}><span>る</span></div>
              <div className={styles.typing}><span>。</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>ノト セリフ ジャパニーズ</span>
              <span>Noto Serif Japanese</span>
            </div>
          </a>
        </div>
        {/* 4行 */}
        <div className={styles.story__line}>
          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span className={fonts[2].className}>勇</span></div>
              <div className={styles.typing}><span className={fonts[2].className}>者</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>シッポリ ミンチョウ</span>
              <span>Shippori Mincho</span>
            </div>
          </a>
          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span className={fonts[3].className}>戦</span></div>
              <div className={styles.typing}><span className={fonts[3].className}>士</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>ゼン アンティーク</span>
              <span>Zen Antique</span>
            </div>
          </a>
        </div>
        {/* 5行 */}
        <div className={styles.story__line}>
          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span className={fonts[4].className}>僧</span></div>
              <div className={styles.typing}><span className={fonts[4].className}>侶</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>キウィ マル</span>
              <span>Kiwi Maru</span>
            </div>
          </a>
          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span className={fonts[5].className}>魔</span></div>
              <div className={styles.typing}><span className={fonts[5].className}>法</span></div>
              <div className={styles.typing}><span className={fonts[5].className}>使</span></div>
              <div className={styles.typing}><span className={fonts[5].className}>い</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>ゼン オールド ミンチョウ</span>
              <span>Zen Old Mincho</span>
            </div>
          </a>
        </div>
        {/* 6行 */}
        <div className={styles.story__line}>
          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span className={fonts[2].className}>勇</span></div>
              <div className={styles.typing}><span className={fonts[2].className}>者</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>シッポリ ミンチョウ</span>
              <span>Shippori Mincho</span>
            </div>
          </a>
          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span>4</span></div>
              <div className={styles.typing}><span>人</span></div>
              <div className={styles.typing}><span>は</span></div>
              <div className={styles.typing}><span>、</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>ノト セリフ ジャパニーズ</span>
              <span>Noto Serif Japanese</span>
            </div>
          </a>
        </div>
        {/* 7行 */}
        <div className={styles.story__line}>
          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span>1</span></div>
              <div className={styles.typing}><span>0</span></div>
              <div className={styles.typing}><span>年</span></div>
              <div className={styles.typing}><span>の</span></div>
              <div className={styles.typing}><span>旅</span></div>
              <div className={styles.typing}><span>路</span></div>
              <div className={styles.typing}><span>を</span></div>
              <div className={styles.typing}><span>経</span></div>
              <div className={styles.typing}><span>て</span></div>
              <div className={styles.typing}><span>も</span></div>
              <div className={styles.typing}><span>な</span></div>
              <div className={styles.typing}><span>お</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>ノト セリフ ジャパニーズ</span>
              <span>Noto Serif Japanese</span>
            </div>
          </a>
        </div>
        {/* 8行 */}
        <div className={styles.story__line}>
          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span className={fonts[6].className}>魔</span></div>
              <div className={styles.typing}><span className={fonts[6].className}>王</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>ユウジ ボク</span>
              <span>Yuji Boku</span>
            </div>
          </a>
          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span>の</span></div>
              <div className={styles.typing}><span>す</span></div>
              <div className={styles.typing}><span>み</span></div>
              <div className={styles.typing}><span>か</span></div>
              <div className={styles.typing}><span>に</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>ノト セリフ ジャパニーズ</span>
              <span>Noto Serif Japanese</span>
            </div>
          </a>
        </div>
        {/* 9行 */}
        <div className={styles.story__line}>
          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span>辿</span></div>
              <div className={styles.typing}><span>り</span></div>
              <div className={styles.typing}><span>着</span></div>
              <div className={styles.typing}><span>く</span></div>
              <div className={styles.typing}><span>こ</span></div>
              <div className={styles.typing}><span>と</span></div>
              <div className={styles.typing}><span>は</span></div>
              <div className={styles.typing}><span>で</span></div>
              <div className={styles.typing}><span>き</span></div>
              <div className={styles.typing}><span>ず</span></div>
              <div className={styles.typing}><span>、</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>ノト セリフ ジャパニーズ</span>
              <span>Noto Serif Japanese</span>
            </div>
          </a>
        </div>
        {/* 10行 */}
        <div className={styles.story__line}>
          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span>途</span></div>
              <div className={styles.typing}><span>方</span></div>
              <div className={styles.typing}><span>に</span></div>
              <div className={styles.typing}><span>暮</span></div>
              <div className={styles.typing}><span>れ</span></div>
              <div className={styles.typing}><span>て</span></div>
              <div className={styles.typing}><span>い</span></div>
              <div className={styles.typing}><span>た</span></div>
              <div className={styles.typing}><span>。</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>ノト セリフ ジャパニーズ</span>
              <span>Noto Serif Japanese</span>
            </div>
          </a>
        </div>
        {/* 11行 */}
        <div className={styles.story__line}>
          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span>あ</span></div>
              <div className={styles.typing}><span>る</span></div>
              <div className={styles.typing}><span>日</span></div>
              <div className={styles.typing}><span>。</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>ノト セリフ ジャパニーズ</span>
              <span>Noto Serif Japanese</span>
            </div>
          </a>
        </div>
        {/* 12行 */}
        <div className={styles.story__line}>
          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span className={fonts[2].className}>勇</span></div>
              <div className={styles.typing}><span className={fonts[2].className}>者</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>シッポリ ミンチョウ</span>
              <span>Shippori Mincho</span>
            </div>
          </a>
          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span>一</span></div>
              <div className={styles.typing}><span>向</span></div>
              <div className={styles.typing}><span>の</span></div>
              <div className={styles.typing}><span>前</span></div>
              <div className={styles.typing}><span>に</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>ノト セリフ ジャパニーズ</span>
              <span>Noto Serif Japanese</span>
            </div>
          </a>
        </div>
        {/* 13行 */}
        <div className={styles.story__line}>
          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span>一</span></div>
              <div className={styles.typing}><span>人</span></div>
              <div className={styles.typing}><span>の</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>ノト セリフ ジャパニーズ</span>
              <span>Noto Serif Japanese</span>
            </div>
          </a>
          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span className={fonts[7].className}>役</span></div>
              <div className={styles.typing}><span className={fonts[7].className}>者</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>BIZ UDP ミンチョウ</span>
              <span>BIZ UDPMincho</span>
            </div>
          </a>
          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span>が</span></div>
              <div className={styles.typing}><span>現</span></div>
              <div className={styles.typing}><span>れ</span></div>
              <div className={styles.typing}><span>た</span></div>
              <div className={styles.typing}><span>。</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>ノト セリフ ジャパニーズ</span>
              <span>Noto Serif Japanese</span>
            </div>
          </a>
        </div>
        {/* 14行 */}
        <div className={styles.story__line}>
          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span>冒</span></div>
              <div className={styles.typing}><span>険</span></div>
              <div className={styles.typing}><span>の</span></div>
              <div className={styles.typing}><span>舞</span></div>
              <div className={styles.typing}><span>台</span></div>
              <div className={styles.typing}><span>は</span></div>
              <div className={styles.typing}><span>さ</span></div>
              <div className={styles.typing}><span>ら</span></div>
              <div className={styles.typing}><span>に</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>ノト セリフ ジャパニーズ</span>
              <span>Noto Serif Japanese</span>
            </div>
          </a>
        </div>
        {/* 15行 */}
        <div className={styles.story__line}>
          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span>混</span></div>
              <div className={styles.typing}><span>沌</span></div>
              <div className={styles.typing}><span>の</span></div>
              <div className={styles.typing}><span>渦</span></div>
              <div className={styles.typing}><span>へ</span></div>
              <div className={styles.typing}><span>。</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>ノト セリフ ジャパニーズ</span>
              <span>Noto Serif Japanese</span>
            </div>
          </a>
        </div>
        {/* 16行 */}
        <div className={styles.story__line}>
          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span className={fonts[2].className}>勇</span></div>
              <div className={styles.typing}><span className={fonts[2].className}>者</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>シッポリ ミンチョウ</span>
              <span>Shippori Mincho</span>
            </div>
          </a>
          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span>一</span></div>
              <div className={styles.typing}><span>向</span></div>
              <div className={styles.typing}><span>は</span></div>
              <div className={styles.typing}><span>無</span></div>
              <div className={styles.typing}><span>事</span></div>
              <div className={styles.typing}><span>に</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>ノト セリフ ジャパニーズ</span>
              <span>Noto Serif Japanese</span>
            </div>
          </a>
        </div>
        {/* 17行 */}
        <div className={styles.story__line}>
          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span className={fonts[6].className}>魔</span></div>
              <div className={styles.typing}><span className={fonts[6].className}>王</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>ユウジ ボク</span>
              <span>Yuji Boku</span>
            </div>
          </a>
          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span>の</span></div>
              <div className={styles.typing}><span>す</span></div>
              <div className={styles.typing}><span>み</span></div>
              <div className={styles.typing}><span>か</span></div>
              <div className={styles.typing}><span>に</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>ノト セリフ ジャパニーズ</span>
              <span>Noto Serif Japanese</span>
            </div>
          </a>
        </div>
        {/* 18行 */}
        <div className={styles.story__line}>
          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span>辿</span></div>
              <div className={styles.typing}><span>り</span></div>
              <div className={styles.typing}><span>着</span></div>
              <div className={styles.typing}><span>く</span></div>
              <div className={styles.typing}><span>こ</span></div>
              <div className={styles.typing}><span>と</span></div>
              <div className={styles.typing}><span>が</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>ノト セリフ ジャパニーズ</span>
              <span>Noto Serif Japanese</span>
            </div>
          </a>
        </div>
        {/* 19行 */}
        <div className={styles.story__line}>
          <a className={styles.story__item}>
            <div className={styles.story__item__characters}>
              <div className={styles.typing}><span>で</span></div>
              <div className={styles.typing}><span>き</span></div>
              <div className={styles.typing}><span>る</span></div>
              <div className={styles.typing}><span>の</span></div>
              <div className={styles.typing}><span>だ</span></div>
              <div className={styles.typing}><span>ろ</span></div>
              <div className={styles.typing}><span>う</span></div>
              <div className={styles.typing}><span>か</span></div>
              <div className={styles.typing}><span>.</span></div>
              <div className={styles.typing}><span>.</span></div>
              <div className={styles.typing}><span>.</span></div>
            </div>
            <div className={styles.story__item__typeface}>
              <span>ノト セリフ ジャパニーズ</span>
              <span>Noto Serif Japanese</span>
            </div>
          </a>
        </div>


      </div>
    </section>
  );
}