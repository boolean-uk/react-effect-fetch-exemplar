import { useEffect, useState } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

const API_URL = 'https://api.adviceslip.com/advice'

function AdviceSection() {
  const [advice, setAdvice] = useState('')
  const [favourites, setFavourites] = useState([])

  const addToFavourites = () => {
      const exists = favourites.find(el => el === advice)

      if (!exists) {
        setFavourites([...favourites, advice])
      }
  }

  const getAdvice = async () => {
      const response = await fetch(API_URL)
      const json = await response.json()

      setAdvice(json.slip.advice)
  }

  useEffect(() => {
    getAdvice()
  }, [])

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <AdviceSlip advice={advice} />
        <button onClick={getAdvice}>Get More Advice</button>
        <button onClick={addToFavourites}>Save to Favourties</button>
      </section>

      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <FavouriteSlipsList favourites={favourites} />
      </section>
    </section>
  )
}

export default AdviceSection
