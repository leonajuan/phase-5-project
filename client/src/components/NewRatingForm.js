function NewRatingForm({ user, song }) {

  function handleNewRating(e) {
    e.preventDefault()
    let token = localStorage.getItem('token')
    const rating = e.target["rating"].value
    const comment = e.target["comment"].value
    if (user) {
      fetch("/ratings", {
        method: "POST",
        headers: {
          "token": token,
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          user_id: user.id,
          music_id: song.id,
          rating: rating,
          comment: comment
        })
      })
        .then(res => res.json())
        .then(newRating => {
          console.log(newRating)
        })
    }
    else {
      alert("You must be logged in to leave a review!")
    }
  }

  return (
    <div>
      <h2>Add a New Rating</h2>
      <form>
        <label for="rating">Rating</label>
        <input type="number" name="rating" min="1" max="5" step="1" />
        <label for="comment">Thoughts</label>
        <input type="text" name="comment" placeholder="Add your comments here..." />
        <button onSubmit={handleNewRating}>Submit</button>
      </form>
    </div>
  )
}

export default NewRatingForm;