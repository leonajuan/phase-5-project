import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header"
import MusicList from "./components/MusicList"
import LandingPage from "./components/LandingPage"
import NavBar from "./components/NavBar"

function App() {

  const [music, setMusic] = useState([])
  const [userProfile, setUserProfile] = useState([])
  const [user, setUser] = useState({})
  const [filteredUsers, setFilteredUsers] = useState([])

  useEffect(() => {
    fetch("/users")
      .then(res => res.json())
      .then(userData => {
        setUserProfile(userData)
        setFilteredUsers(userData)
      })
  }, [])

  useEffect(() => {
    fetch("/musics")
      .then(res => res.json())
      .then(musicData => {
        setMusic(musicData)
      })
  }, [])

  // function handleSignIn(e) {
  //   e.preventDefault()
  //   const username = e.target["username"].value
  //   const password = e.target["password"].value
  //   fetch("/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "applcation/json"
  //     },
  //     body: JSON.stringify({
  //       username: username,
  //       password: password
  //     })
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setUser(data.user)
  //       localStorage.setItem("token", data.token)
  //       // alert("You're logged in!")
  //     })
  // }

  function handleSignIn(e) {
    e.preventDefault()
    const username = e.target["username"].value
    const password = e.target["password"].value
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(res => res.json())
      .then(data => {
        setUser(data.user)
        localStorage.setItem("token", data.token)
        // alert("You're logged in!")
      })
  }

  function handleSignUp(e) {
    e.preventDefault()
    const firstName = e.target["first-name"].value
    const lastName = e.target["last-name"].value
    const username = e.target["username"].value
    const bio = e.target["bio"].value
    const password = e.target["password"].value
    const image = e.target["image"].value
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: userProfile.length + 1,
        first_name: firstName,
        last_name: lastName,
        username: username,
        bio: bio,
        password: password,
        image: image
      }),
    })
      .then(res => res.json())
      .then(newUser => addNewUser(newUser))
  }

  function addNewUser(newUser) {
    const updatedUsersArray = [...userProfile, newUser]
    setFilteredUsers(updatedUsersArray)
    alert("Thank you for signing up!")
  }

  return (
    <>
      <Header />
      <NavBar />
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/music">
              <MusicList music={music} />
            </Route>
            <Route path="/">
              <LandingPage handleSignIn={handleSignIn} handleSignUp={handleSignUp} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
