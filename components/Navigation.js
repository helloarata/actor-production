import { useState } from "react";
import {Link as Scroll} from "react-scroll"
import styles from '@/styles/components/Navigation.module.css';

export default function Navigation({ fonts }){
  const [open, setOpen] = useState(false);
  const onClickToggleFunction = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <nav className={`${styles.nav} ${styles.visibility}`} aria-expanded={open}>
        <div className={styles.nav__primary}>
          <ul className={styles.nav__primary__list}>
            <li><Scroll onClick={onClickToggleFunction} to="concept" smooth={true} className={`${styles.nav__primary__list__item} ${fonts[1].className}`}>Concept</Scroll></li>
            <li><Scroll onClick={onClickToggleFunction} to="column" smooth={true} className={`${styles.nav__primary__list__item} ${fonts[1].className}`}>Column</Scroll></li>
            <li><Scroll onClick={onClickToggleFunction} to="story" smooth={true} className={`${styles.nav__primary__list__item} ${fonts[1].className}`}>Story</Scroll></li>
            <li><Scroll onClick={onClickToggleFunction} to="company" smooth={true} className={`${styles.nav__primary__list__item} ${fonts[1].className}`}>Company</Scroll></li>
            <li><Scroll onClick={onClickToggleFunction} to="cast" smooth={true} className={`${styles.nav__primary__list__item} ${fonts[1].className}`}>Cast</Scroll></li>
          </ul>
        </div>
        <button 
          className={`${styles.nav__togglebutton} ${styles.toggleButon}`} 
          onClick={onClickToggleFunction} 
          aria-expanded={open} 
          aria-controls="navigation" 
          aria-label="メニューを開きます"
        >
          <span className={styles.nav__togglebutton__hamburger}></span>
        </button>
      </nav>
  );
}