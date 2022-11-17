import { useState, useContext } from "react";
import UserContext from "../components/UserContext";
import RatingsList from "../components/RatingsList";
import NewRatingForm from "../components/NewRatingForm";

function Song({ song, ratings, addNewRating }) {

  const [showRatings, setShowRatings] = useState(false)
  const [openRatingForm, setOpenRatingForm] = useState(false)

  const { user, setUser } = useContext(UserContext)

  function handleRatingFormPreview() {
    setOpenRatingForm(!openRatingForm)
  }

  return (
    <div className="song-card">
      <img src={song.album_cover} alt={song.song_title} onClick={() => setShowRatings(!showRatings)} />
      <div>

        <h1 className="song-info">{song.song_title}</h1>
        <h4 className="song-info">{song.artist}</h4>
        <h3 className="song-info" id="song-album">{song.album}</h3>
      </div>
      <button id="rating-button" onClick={handleRatingFormPreview}>Add a New Rating</button>
      {openRatingForm ? <NewRatingForm user={user} song={song} addNewRating={addNewRating} /> : null}
      {showRatings ? <RatingsList ratings={ratings} id={song.id} /> : null}
    </div>
  )
}

export default Song;