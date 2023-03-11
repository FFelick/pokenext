
import styles from '@/styles/Home.module.css'

export async function getStaticProps() {

  const maxPokemons = 250
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
      <div >
        <h1>PokeNext</h1>
        <ul>
          {pokemons.map((pokemon) =>(
            <li key={pokemon.id}>{pokemon.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
