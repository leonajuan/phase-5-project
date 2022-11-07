import Swal from 'sweetalert2'

function ProfilePage({ setUser, user, handleLogOut, handleDeleteUser }) {

  console.log(user)

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

  return (
    <div>
      <img src={user.image} alt={user.first_name} />
      <h1>Hello, {user.first_name}</h1>
      <h4>{user.username}</h4>
      <h3>{user.bio}</h3>
      <button onClick={editBio}>Update Bio</button>
      <button onClick={handleLogOut}>Log Out</button>
      <button onClick={handleDeleteUser}>Delete Account</button>
    </div>
  )
}

export default ProfilePage;