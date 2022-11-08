import { useState } from "react";
import RatingsList from "../components/RatingsList"

function Song({ song, ratings }) {

  const [showRatings, setShowRatings] = useState(false)

  return (
    <div>
      <h1>{song.song_title}</h1>
      <img src={song.album_cover} alt={song.song_title} onClick={() => setShowRatings(!showRatings)} />
      <h3>{song.artist}</h3>
      <h4>{song.album}</h4>
      {showRatings ? <RatingsList ratings={ratings} id={song.id} /> : null}
    </div>
  )
}

export default Song;