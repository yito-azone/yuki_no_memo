'use client'

import React, { useRef, useState } from 'react';
import styles from './memoThreadsButton.module.css'


export const MemoThreadsButton = ({
  link,
  children
}: {
  link: string,
  children: React.ReactNode
}) => {
  const handleRedirect = () => {
    window.open(link, '_blank');
  }

  return (
    <div className={styles.threadButton} onClick={handleRedirect}>
      <div className={styles.title}>
        {children}
      </div>
    </div>
  )
}