import Friend from "../components/Friend";

function UsersList({ friends }) {

  const friendComponents = friends.map(friend => {
    return <Friend key={friend.id} friend={friend} />
  })

  return (
    <div style={{ marginTop: '7.5%', display: 'flex', gap: '10px' }}>
      {friendComponents}
    </div>
  )
}

export default UsersList;