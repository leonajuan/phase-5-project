import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header"
import MusicList from "./components/MusicList"
import LandingPage from "./components/LandingPage"
import NavBar from "./components/NavBar"
import UsersList from "./components/UsersList"
import ProfilePage from "./components/ProfilePage"

function App() {

  const [music, setMusic] = useState([])
  const [friends, setFriends] = useState([])
  const [user, setUser] = useState({})
  const [filteredUsers, setFilteredUsers] = useState([])

  useEffect(() => {
    fetch("/users")
      .then(res => res.json())
      .then(userData => {
        setFriends(userData)
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

  useEffect(() => {
    let token = localStorage.getItem("token")
    if (token) {
      fetch('/profile', {
        headers: {
          'token': token,
          'Content-Type': 'application/json',
        }
      })
        .then(res => res.json())
        .then(data => {
          // console.log("already logged in", data)
          setUser(data)
          // HERE
        })
    }
  }, [])

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

  // function handleSignUp(e) {
  //   e.preventDefault()
  //   const firstName = e.target["first-name"].value
  //   const lastName = e.target["last-name"].value
  //   const username = e.target["username"].value
  //   const bio = e.target["bio"].value
  //   const password = e.target["password"].value
  //   const image = e.target["image"].value
  //   fetch("/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       id: friends.length + 1,
  //       first_name: firstName,
  //       last_name: lastName,
  //       username: username,
  //       bio: bio,
  //       password: password,
  //       image: image
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(newUser => addNewUser(newUser))
  // }

  function addNewUser(newUser) {
    const updatedUsersArray = [...friends, newUser]
    setFilteredUsers(updatedUsersArray)
    alert("Thank you for signing up!")
  }

  function handleLogOut() {
    localStorage.removeItem('token')
    window.location.reload()
  }

  function deleteUser() {
    let token = localStorage.getItem('token')
    if (token) {
      fetch('/user', {
        method: 'DELETE',
        headers: {
          'token': token,
          'Content-Type': 'application/json'
        },
      })
      // .then(res => res.json())
      // .then(deletedUser => {
      //   console.log(deletedUser)
      // })
    }
  }

  return (
    <>
      <Header />
      <NavBar />
      {/* <ProfilePage user={user} /> */}
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/profile">
              <ProfilePage setUser={setUser} user={user} handleLogOut={handleLogOut} deleteUser={deleteUser} />
            </Route>
            <Route path="/music">
              <MusicList music={music} />
            </Route>
            <Route path="/users">
              <UsersList friends={friends} />
            </Route>
            <Route path="/">
              <LandingPage handleSignIn={handleSignIn} addNewUser={addNewUser} friends={friends} />
            </Route>

          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
