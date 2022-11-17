import Swal from "sweetalert2";
import { useState, useContext, useRef } from "react";
import UserContext from "../components/UserContext";
// import ChatRoom from "../components/ChatRoom";

function ProfilePage({ handleLogOut, handleDeleteUser, login }) {

  const imageRef = useRef(null)
  // const [chatOpen, setChatOpen] = useState(null)

  const { user, setUser } = useContext(UserContext)

  function editBio() {
    let token = localStorage.getItem('token')
    const { value: text } = Swal.fire({
      input: 'textarea',
      inputLabel: `Edit Bio`,
      inputPlaceholder: 'Type your bio here...',
      inputAttributes: {
        'aria-label': 'Type your bio here'
      },
      preConfirm: (text) => {
        fetch(`/user-bio`, {
          method: 'PATCH',
          headers: {
            'token': token,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user_id: user.id,
            bio: text
          }),
        })
          .then(res => res.json())
          .then(updatedUser => {
            setUser(updatedUser)
          })
      },
      showCancelButton: true
    })
    if (text) {
      Swal.fire(text)
    }
  }

  function updatePhoto(imageSrc) {
    let token = localStorage.getItem('token')
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: user.id,
        image: imageSrc
      }),
    })
      .then(res => res.json())
      .then(newImage => {
        setUser(newImage)
      })
  }

  function handlePhotoUpdate(e) {
    e.preventDefault()
    let reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        updatePhoto(reader.result)
      }
    }
    reader.readAsDataURL(imageRef.current.files[0])
  }

  return (
    <div>
      {login ?
        <div id="profile-div">
          <img id="profile-photo" src={user.image} alt={user.first_name} />
          <h1 id="profile-name">{user.first_name} {user.last_name}</h1>
          <h4 id="profile-username">@{user.username}</h4>
          <h3 id="profile-bio">{user.bio}</h3>
          <h4 id="photo-update-label">Update Profile Photo:</h4>
          <form onSubmit={handlePhotoUpdate} id="profile-photo-update">
            <input type="file" name="image" accept="image/png, image/gif, image/jpeg" ref={imageRef} />
            <input type="submit" />
          </form>
          <button id="update-bio-button" className="profile-buttons" onClick={editBio}>Update Bio</button>
          <button id="logout-button" className="profile-buttons" onClick={handleLogOut}>Log Out</button>
          <button id="delete-button" className="profile-buttons" onClick={handleDeleteUser}>Delete Account</button>
          <div className="ProfilePage-headings">
            <h2>My Top Rated Songs:</h2>
            <h4>{user.ratings[0].music_id}</h4>
            <h4>{user.ratings[0].show_star_ratings}</h4>
            <h4 >{user.ratings[0].comment}</h4>
          </div>
          {/* <button type="button" onClick={() => setChatOpen(prev => !prev)}>{chatOpen ? "Close Chat" : "Open Chat"}</button>
          {chatOpen ? <ChatRoom user={user} /> : null} */}
        </div> : <h2 className="logged-out-message">Please sign in.</h2>}
    </div>
  )
}

export default ProfilePage;