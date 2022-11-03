import { useState, useEffect } from "react";
import Song from "../components/Song"

function MusicList({ music }) {

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