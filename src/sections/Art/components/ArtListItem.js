function ArtListItem({ title, artist, imageUrl, subjects }) {
  return (
    <li>
        <div className="frame">
            <img src={imageUrl} alt={`Artwork by ${artist}`} />
        </div>

        <h3>{title}</h3>
        <p>Artist: {artist}</p>
        <h4>Artistic Subjects:</h4>
        <ul>
            {subjects && subjects.map((subject, index) => <li key={index}>{subject}</li>)}
        </ul>
    </li>
  )
}

export default ArtListItem