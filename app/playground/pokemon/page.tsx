'use client'

import React, { useEffect, useState } from 'react'
import { getAllPokemon, getPokemon } from '../../utils/pokemonApi'
import Card from './components/Card/Card';
import './page.css'

const Pokemon = () => {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([] as any);
  const [prevURL, setPrevURL] = useState(null as null | string);
  const [nextURL, setNextURL] = useState(null as null | string);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const res = await getAllPokemon(initialURL);
      setPrevURL(res.previous);
      setNextURL(res.next);
      loadPokemonData(res.results);
      setLoading(false);
    }
    fetchPokemonData();
  }, []);

  const loadPokemonData = async (data: any) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon: any) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  }

  const handleClickPrev = async () => {
    if (!prevURL) { return; }
    const res = await getAllPokemon(prevURL);
    setPrevURL(res.previous);
    setNextURL(res.next);
    loadPokemonData(res.results);
  }

  const handleClickNext = async () => {
    if (!nextURL) { return; }
    const res = await getAllPokemon(nextURL);
    setPrevURL(res.previous);
    setNextURL(res.next);
    loadPokemonData(res.results);
  }

  return (
    <>
      {
        loading ? (
          <div>ロード中です...</div>
        ) : (
          <>
            <div className='pageTitle'>ポケモン図鑑</div>
            <div className="pokemonContainer">
              {pokemonData.map((pokemon: any, i: number) => {
                return <Card key={i} pokemon={pokemon} />
              })}
            </div>
            <div className='pageButtonArea'>
              <button className='pageButton' onClick={handleClickPrev}>前へ</button>
              <button className='pageButton' onClick={handleClickNext}>次へ</button>
            </div>
          </>
        )}
    </>
  )
}

export default Pokemon