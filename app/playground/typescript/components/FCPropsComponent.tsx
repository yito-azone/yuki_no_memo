import React from 'react'

type Props = {
  name: string,
  age: number
}

const FCPropsComponent: React.FC<Props> = ({ name, age }) => {
  return (
    <>
      <div>FCProps</div>
      {name} {age}
    </>
  )
}

export default FCPropsComponent