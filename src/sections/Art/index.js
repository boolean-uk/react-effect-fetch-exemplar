import { useEffect, useState } from "react"
import ArtList from "./components/ArtList"

const API_URL = 'https://api.artic.edu/api/v1/artworks?fields=title,artist_title,subject_titles,image_id'
const IMG_RESOURCE = '/full/843,/0/default.jpg'

function ArtsSection() {
  const [artworks, setArtworks] = useState([])

  const getArtworks = async () => {
      const response = await fetch(API_URL)
      const { data, config } = await response.json()

      const iiifUrl = config.iiif_url.replace('\\', '')

      const mappedArtworks = data.map(art => {
          return {
              ...art,
              image_url: `${iiifUrl}/${art.image_id}${IMG_RESOURCE}`
          }
      })

      setArtworks(mappedArtworks)
  }

  useEffect(() => {
    getArtworks()
  }, [])
  
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
          <ArtList artworks={artworks} />
      </div>
    </section>
  )
}

export default ArtsSection
