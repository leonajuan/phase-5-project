function Ratings({ rating }) {
  return (
    <>
      <p>@{rating.user.username} said:</p>
      <p>Rating: {rating.show_star_ratings}</p>
      <p>{rating.comment}</p>
    </>
  )
}

export default Ratings;