import { useState, useEffect } from "react";
import Song from "../components/Song"

function MusicList() {

  const [music, setMusic] = useState([])

  useEffect(() => {
    fetch("/musics")
      .then(res => res.json())
      .then(musicData => {
        setMusic(musicData)
      })
  }, [])

  const songComponents = music.map(song => {
    return <Song key={song.id} song={song} />
  })

  return (
    <div>
      {songComponents}
    </div>
  )
}

export default MusicList;