'use client'

import { useState, useEffect } from 'react';
import { PageTitleArea } from "../../components/atoms/pageTitleArea";
import { PlaygroundThreadsButton } from '../molecules/playgroundThreadsButton';
import styles from './playgroundTemplate.module.css';



export const PlaygroundTemplate = () => {
  return (
    <div className={styles.playgroundContents}>
      <PageTitleArea title={'遊び場'} />
      <div className={styles.playgroundListsContainer}>
        <PlaygroundThreadsButton link={'/playground/react-loader-spinner'}>
          react-loader-spinner
        </PlaygroundThreadsButton>
        <PlaygroundThreadsButton link={'/playground/pokemon'}>
          ポケモン図鑑
        </PlaygroundThreadsButton>
        <PlaygroundThreadsButton link={'/playground/typescript'}>
          TypeScript × React 練習用
        </PlaygroundThreadsButton>
        <PlaygroundThreadsButton link={'/playground/discord-clone'}>
          Discordクローン
        </PlaygroundThreadsButton>
        <PlaygroundThreadsButton link={'/playground/datepicker'}>
          和暦/西暦切り替えDatePicker
        </PlaygroundThreadsButton>
      </div>
    </div>
  )
}