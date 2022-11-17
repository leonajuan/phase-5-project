import { useState, useContext, useEffect } from "react";
import UserContext from "../components/UserContext";
import Song from "../components/Song";

function MusicList() {

  const [music, setMusic] = useState([])
  const [ratings, setRatings] = useState([])

  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    fetch("/musics")
      .then(res => res.json())
      .then(musicData => {
        setMusic(musicData)
      })
  }, [])

  useEffect(() => {
    fetch("/ratings")
      .then(res => res.json())
      .then(ratingsData => {
        setRatings(ratingsData)
      })
  }, [])

  function addNewRating(newRating) {
    const updatedRatingsArray = [...ratings, newRating]
    setRatings(updatedRatingsArray)
  }

  const songComponents = music.map(song => {
    return <Song key={song.id} song={song} ratings={ratings} user={user} addNewRating={addNewRating} />
  })

  return (
    <>
      <div>
        <h1 className="discover-header">DISCOVER WHAT'S IN OUR QUEUE</h1>
      </div>
      <div className="song-cards">
        {songComponents}
      </div>
    </>
  )
}

export default MusicList;