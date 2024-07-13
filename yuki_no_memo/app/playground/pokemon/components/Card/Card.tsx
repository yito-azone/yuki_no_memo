'use client'

import Image from 'next/image'
import React from 'react'
import './Card.css'

const Card = (pokemon: any) => {
  return (
    <div className="pokemonCard">
      <div className='pokemonName'>{pokemon.pokemon.name}</div>
      <div className="pokemonImage">
        <Image src={pokemon.pokemon.sprites.front_default} fill sizes='30vw' alt="" />
      </div>
    </div>
  )
}

export default Card