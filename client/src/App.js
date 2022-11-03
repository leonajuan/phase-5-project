import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MusicList from "./components/MusicList"

function App() {

  const [music, setMusic] = useState([])

  useEffect(() => {
    fetch("/musics")
      .then(res => res.json())
      .then(musicData => {
        setMusic(musicData)
      })
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/music">
            <MusicList music={music} />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
