import styles from './pageTitleArea.module.css';

export const PageTitleArea = ({ title }: { title: string }) => {
  let classNames = ''
  switch (title) {
    case '技術メモ':
      classNames = `${styles.titleArea} ${styles.memoColor}`;
      break;
    case '遊び場':
      classNames = `${styles.titleArea} ${styles.playgroundColor}`;
      break;
    default:
      classNames = `${styles.titleArea} ${styles.memoColor}`;
  }
  return (
    <div className={classNames}>
      <p className={styles.title}>{title}</p>
    </div>)
}