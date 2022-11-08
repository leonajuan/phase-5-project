function Ratings({ rating }) {
  return (
    <>
      <p>Rating: {rating.rating}</p>
      <p>{rating.comment}</p>
    </>
  )
}

export default Ratings;