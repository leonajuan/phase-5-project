function Ratings({ rating }) {
  return (
    <>
      <p>Rating: {rating.show_star_ratings}</p>
      <p>{rating.comment}</p>
    </>
  )
}

export default Ratings;