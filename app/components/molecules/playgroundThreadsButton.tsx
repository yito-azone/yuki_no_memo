'use client'

import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './playgroundThreadsButton.module.css';


export const PlaygroundThreadsButton = ({
  link,
  children
}: {
  link: string,
  children: React.ReactNode
}) => {

  return (
    <div className={styles.threadButton}>
      <Link className={styles.link} href={link}>
        <div className={styles.title}>
          {children}
        </div>
      </Link>
    </div>
  )
}