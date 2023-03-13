/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import Card from '../components/Card'

export async function getStaticProps() {

  const maxPokemons = 22
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  //Requisição
  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  //add index pokemon
  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results,
    },
  }
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title_container}>
          <h1>Poke<span>Next</span></h1>
          <Image
            src="/images/pokeball.png"
            width={50}
            height={50}
            atl="PokeNext"
          />
        </div>
        <div className={styles.pokemon_container}>
          {pokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </>
  )
}
