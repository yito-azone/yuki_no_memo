'use client'

import React, { useRef, useState } from 'react';
import styles from './hamburgerMenu.module.css'
import { CSSTransition } from 'react-transition-group';

import fade from '../../styles/transitions/fade.module.css';
import { LinkButton } from '../atoms/linkButton';

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <CSSTransition in={isOpen} timeout={500} classNames={fade} nodeRef={nodeRef}>
        <div className={styles.hamburgerMenu} ref={nodeRef} onClick={toggleMenu}>
          <div className={styles.hamburgerIcon}></div>
        </div>
      </CSSTransition>
      {isOpen && (
        <ul className={styles.menuItems} onClick={toggleMenu}>
          <li><LinkButton path="/">ホーム</LinkButton></li>
          <li><LinkButton path="/memo">技術メモ</LinkButton></li>
          <li><LinkButton path="/playground">遊び場</LinkButton></li>
        </ul>
      )}
    </>
  )
}