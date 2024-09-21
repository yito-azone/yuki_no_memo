import React from 'react'

type Props = {
  name: string,
  age: number
}

const PropsComponent = ({ name, age }: Props) => {
  return (
    <>
      <div>Props</div>
      {name} {age}
    </>
  )
}

export default PropsComponent