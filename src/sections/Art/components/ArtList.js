import ArtListItem from "./ArtListItem"

function ArtList({ artworks }) {
    return (
        <ul className="art-list">
            {artworks.map((art, index) => (
                <ArtListItem
                    key={index}
                    title={art.title}
                    artist={art.artist_title}
                    imageUrl={art.image_url}
                    subjects={art.subjects}
                />
            ))}
        </ul>
    )
}

export default ArtList
