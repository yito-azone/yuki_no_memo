import styles from './linkButton.module.css';
import Link from 'next/link';

export const LinkButton = ({
  path,
  children
}: {
  path: string,
  children: React.ReactNode
}) => {
  return (
    <div className={styles.menuButton}>
      <Link href={path} className={styles.link}>
        {children}
      </Link>
    </div>
  )
}