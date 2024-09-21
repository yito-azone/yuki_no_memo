import { HamburgerMenu } from "../molecules/hamburgerMenu"
import styles from "./header.module.css"

export const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.headerTitle}>ユキのメモ</div>
        <HamburgerMenu />
      </div>
    </header>
  )
}