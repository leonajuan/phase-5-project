import { useState, useEffect } from "react";
import Song from "../components/Song"

function MusicList() {

  const [music, setMusic] = useState([])
  const [ratings, setRatings] = useState([])

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

  const songComponents = music.map(song => {
    return <Song key={song.id} song={song} ratings={ratings} />
  })

  return (
    <div>
      {songComponents}
    </div>
  )
}

export default MusicList;