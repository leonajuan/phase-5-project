function ProfilePage({ user, handleLogOut }) {

  console.log(user)
  return (
    <div>
      <img src={user.image} alt={user.first_name} />
      <h1>Hello, {user.first_name}</h1>
      <h4>{user.username}</h4>
      <h3>{user.bio}</h3>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default ProfilePage;