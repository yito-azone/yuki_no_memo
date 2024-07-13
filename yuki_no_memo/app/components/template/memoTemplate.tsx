'use client'

import { useState, useEffect } from 'react';
import { MemoThreadsButton } from "../../components/molecules/memoThreadsButton";
import { PageTitleArea } from "../../components/atoms/pageTitleArea";
import styles from './memoTemplate.module.css';

type Thread = {
  fields: {
    title: {
      stringValue: string;
    }
    link: {
      stringValue: string;
    }
  }
}

export const MemoTemplate = () => {
  const [threads, setThreads] = useState([] as Thread[]);

  useEffect(() => {
    // const usersCollectionRef = collection(db, 'threads');
    // getDocs(usersCollectionRef).then((querySnapshot) => {
    //   setThreads(
    //     querySnapshot.docs.map((doc) => ({
    //       ...doc.data()
    //     }))
    //   );
    // });
    const getMemoLists = async () => {
      const res = await fetch('/api/get-memo-list');
      const result = await res.json();
      if (result.data) {
        setThreads(result.data);
      }
    }

    getMemoLists();
  }, []);

  return (
    <div className={styles.memoContents}>
      <PageTitleArea title={'技術メモ'} />
      {threads.length > 0 && (
        <div className={styles.memoListsContainer}>
          {threads.map((thread, index) => (
            <div key={`thread-${index}`}>
              <MemoThreadsButton link={thread.fields?.link.stringValue}>
                {thread.fields?.title.stringValue}
              </MemoThreadsButton>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}