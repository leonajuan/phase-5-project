import Friend from "../components/Friend";

function UsersList({ friends }) {

  const friendComponents = friends.map(friend => {
    return <Friend key={friend.id} friend={friend} />
  })

  return (
    <div>
      {friendComponents}
    </div>
  )
}

export default UsersList;