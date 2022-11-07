import Swal from "sweetalert2";
import { useRef } from "react";

// import { useState } from "react";

function ProfilePage({ setUser, user, handleLogOut, handleDeleteUser, login }) {

  const imageRef = useRef(null)

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
    fetch("/user-image", {
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
        <div>
          <img src={user.image} alt={user.first_name} />
          <h2>Hello, {user.first_name}</h2>
          <h4>{user.username}</h4>
          <h3>{user.bio}</h3>
          <form onSubmit={handlePhotoUpdate}>
            <input type="file" name="image" accept="image/png, image/gif, image/jpeg" ref={imageRef} />
            <input type="submit" />
          </form>
          <button onClick={editBio}>Update Bio</button>
          <button onClick={handleLogOut}>Log Out</button>
          <button onClick={handleDeleteUser}>Delete Account</button>
        </div> : <h2>Please sign in.</h2>}
    </div>
  )
}

export default ProfilePage;