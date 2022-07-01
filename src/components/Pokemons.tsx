import axios from 'axios'
import { useEffect, useState } from "react"
type Poke = {
  name: string,
  url: string
}
export const Pokemons = () => {
  const [pokemon, setPokemon] = useState<Poke[]>([])
  const [offset, setOffSet] = useState(0)
  const [loading, setLoading] = useState(false)
  const [countPokemon, setCountPokemon] = useState(0)
  const URL = `https://pokeapi.co/api/v2/pokemon?limit=15&offset=${offset}`
  const loadingPokemons = async () => {
    setLoading(true)
    const res = await axios.get(URL)
    const arrayPokemons = res.data.results
    const countP = res.data.count
    setCountPokemon(countP)
    setPokemon(arrayPokemons)
    setLoading(false)
  }
  useEffect(() => {
    loadingPokemons()
  }, [])
  const handleNext = () => {
    setOffSet(offset + 15)
    console.log(offset)
    loadingPokemons()
  }
  const handlePrev = () => {
    setOffSet(offset - 15)
    console.log(offset)
    loadingPokemons()
  }
  return (
    <div className="flex flex-col  items-center p-8 w-[70%] bg-gray-600 h-full mt-8">

      {!loading ?
        <div className='w-full'>
          {pokemon.map((item, key) => (
            <h1 className='w-full bg-white m-1 first-letter:uppercase rounded-xl text-xl p-1' key={item.url}>{item.name}</h1>
          ))}
        </div> :
        <div>
          <h1 className='text-white text-4xl'>CARREGANDO...</h1>
        </div>
      }
      <div className='w-full flex content-between justify-between mt-10'>
        {offset != 0 ?
          <button
            className="border-2 border-black  bg-orange-500 text-xl p-2"
            onClick={handlePrev}
          >Anterior</button>
          :
          <div></div>
        }
        {offset != countPokemon ?
          <button
            onClick={handleNext}
            className="border-2 border-black  bg-orange-500 text-xl p-2">Proximo</button>
          :
          <div></div>
        }
      </div>
    </div>
  )
}