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
    <div>
      <h1>{song.song_title}</h1>
      <img src={song.album_cover} alt={song.song_title} onClick={() => setShowRatings(!showRatings)} />
      <h3>{song.artist}</h3>
      <h4>{song.album}</h4>
      <button onClick={handleRatingFormPreview}>Add a New Rating</button>
      {openRatingForm ? <NewRatingForm user={user} song={song} addNewRating={addNewRating} /> : null}
      {showRatings ? <RatingsList ratings={ratings} id={song.id} /> : null}
    </div>
  )
}

export default Song;