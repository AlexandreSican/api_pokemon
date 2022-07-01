import { Header } from "../Header"
import { Pokemons } from "../Pokemons"

export const BodyApp = () => {
  return (
    <div>
      <div className="min-w-[100vw] min-h-[100vh] bg-gray-800 w-full h-full flex flex-col items-center pt-8">
        <Header />
        <Pokemons />
      </div>
    </div>
  )
}