export const getStaticPaths = async() => {

    const maxPokemons = 300
    const api = 'https://pokeapi.co/api/v2/pokemon/'
  
    //Requisição
    const res = await fetch(`${api}/?limit=${maxPokemons}`)
    const data = await res.json()

    // paramentos
    const paths = data.results.map((pokemon, index) => {
        return {
            params: {pokemonid: (index + 1).toString() },
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async(context) => {

    const id = context.params.pokemonid

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const data = await res.json()
    return {
        props: { pokemon: data },
    }
}

export default function Pokemon({pokemon}) {
    return (
        <>
            <p>{pokemon.name}</p>
        </>
    )
}