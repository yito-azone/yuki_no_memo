import { HomeImage } from "../organisms/homeImage"
import { HomeButton } from "../atoms/homeButton"
import style from "./homeTemplate.module.css"

export const HomeTemplate = () => {
  return (
    <main>
      <HomeImage />
      <div className={style.homeButtonPosition}>
        <HomeButton path='/memo' type='memo'>技術メモはこちら</HomeButton>
      </div>
      <div className={style.homeButtonPosition}>
        <HomeButton path='/playground' type='playground'>遊び場はこちら</HomeButton>
      </div>
    </main>
  )
}