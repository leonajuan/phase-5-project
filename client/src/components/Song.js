function Song({ song }) {

  return (
    <div>
      <h1>{song.song_title}</h1>
      <img src={song.album_cover} alt={song.song_title} />
      <h3>{song.artist}</h3>
      <h4>{song.album}</h4>
    </div>
  )
}

export default Song;