import style from './homeButton.module.css'
import Link from 'next/link'

export const HomeButton = ({
  path,
  type,
  children
}: {
  path: string
  type: string
  children: React.ReactNode
}) => {
  let typeClass;
  switch (type) {
    case 'memo':
      typeClass = style.memo;
      break;
    case 'playground':
      typeClass = style.playground
  }
  return (
    <div className={`${style.homeButton} ${typeClass}`}>
      <Link href={path} className={style.link}>{children}</Link>
    </div>
  )
}