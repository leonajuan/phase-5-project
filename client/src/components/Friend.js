function Friend({ friend }) {
  return (
    <div>
      <h1>{friend.first_name}</h1>
      <h2>@{friend.username}</h2>
      <img src={friend.image} alt={friend.name} />
      <h4>{friend.bio}</h4>
    </div>
  )
}

export default Friend;