function Friend({ friend }) {
  return (
    <div className="friend-card" style={{ border: '1px solid #bbb', width: '15%', maxWidth: '250px', padding: '20px', borderRadius: '8px' }}>
      <div style={{ display: 'block', margin: '0 auto', width: '200px', height: '200px', border: '5px solid #E8D5D2', borderRadius: '50%', backgroundImage: `url(${friend.image})`, backgroundPosition: '50% 50%', backgroundSize: 'cover' }}></div>
      <h1 style={{ textAlign: 'center', textTransform: "uppercase" }}>{friend.first_name}</h1>
      <h2 style={{ textAlign: 'center' }}>@{friend.username}</h2>

      <h4 style={{ textAlign: 'center' }}>{friend.bio}</h4>
    </div>
  )
}

export default Friend;