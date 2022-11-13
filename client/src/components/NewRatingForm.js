function NewRatingForm({ user }) {
  return (
    <div>
      <h2>Add a New Rating</h2>
      <form>
        <label for="rating">Rating</label>
        <input type="number" name="rating" min="1" max="5" step="1" />
        <label for="comment">Thoughts</label>
        <input type="text" name="comment" placeholder="Add your comments here..." />
      </form>
    </div>
  )
}

export default NewRatingForm;