import Image from "next/image"
import style from "./homeImage.module.css"

export const HomeImage = () => {
  return (
    <div className={style.homeImageArea}>
      <Image
        src="/images/ai_create_cat.png"
        alt="AI生成した海辺で踊る猫"
        fill={true}
        priority
      />
      <div className={style.homeImageText}>
        <p>ここはユキが調べたこと<br />
          好き勝手に実装したいものを試す遊び場<br /><br />
          これは初めてAI画像生成で生成した<br />
          『海辺で踊る猫』</p>
      </div>
    </div>
  )
}