import User from "../components/User"

function UsersList({ friends }) {

  const friendComponents = friends.map(friend => {
    return <User key={friend.id} friend={friend} />
  })

  return (
    <div>
      {friendComponents}
    </div>
  )
}

export default UsersList;