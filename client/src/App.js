import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserContext from './components/UserContext';
import Header from "./components/Header";
import MusicList from "./components/MusicList";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import UsersList from "./components/UsersList";
import ProfilePage from "./components/ProfilePage";
import MessagesList from "./components/MessagesList";
import './App.css';

function App() {

  const [friends, setFriends] = useState([])
  const [user, setUser] = useState({})
  const [filteredUsers, setFilteredUsers] = useState([])
  const [login, setLogin] = useState(false)

  useEffect(() => {
    fetch("/users")
      .then(res => res.json())
      .then(userData => {
        setFriends(userData)
        setFilteredUsers(userData)
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
          setUser(data)
          setFilteredUsers(data)
          setLogin(true)
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
        setLogin(true)
      })
  }

  function addNewUser(newUser) {
    const updatedUsersArray = [...friends, newUser]
    setFilteredUsers(updatedUsersArray)
    alert("Thank you for signing up!")
  }

  function handleLogOut() {
    localStorage.removeItem('token')
    window.location.reload()
  }

  // function handleDeleteUser() {
  //   let token = localStorage.getItem('token')
  //   if (token) {
  //     fetch(`/users/${user.id}`, {
  //       method: "DELETE",
  //       headers: {
  //         "token": token,
  //         "Content-Type": "application/json"
  //       }
  //     })
  //       .then(res => res.json())
  //       .then(deletedUser => {
  //         console.log(deletedUser)
  //         // let filteredArray = friends.filter(friend => friend !== deletedUser)
  //         // setFriends(filteredArray)
  //       })
  //   }
  // }

  function handleDeleteUser() {
    let token = localStorage.getItem("token")
    if (token) {
      fetch(`/users/${user.id}`, {
        method: "DELETE",
        headers: {
          "token": token,
          "Content-Type": "application/json"
        },
      })
        .then(res => res.json())
        .then(deletedUser => {
          console.log(deletedUser)
        })
    }
  }

  return (
    <>
      <Header />
      <NavBar />
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <div className="App">
            <Switch>
              <Route path="/profile">
                <ProfilePage handleLogOut={handleLogOut} handleDeleteUser={handleDeleteUser} login={login} />
              </Route>
              <Route path="/music">
                <MusicList />
              </Route>
              <Route path="/messages">
                <MessagesList />
              </Route>
              <Route path="/users">
                <UsersList friends={friends} />
              </Route>
              <Route path="/">
                <LandingPage handleSignIn={handleSignIn} addNewUser={addNewUser} friends={filteredUsers} login={login} handleLogOut={handleLogOut} />
              </Route>
            </Switch>
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
