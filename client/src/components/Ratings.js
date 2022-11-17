function Ratings({ rating }) {
  return (
    <div className="rating-card">
      <li className="rating-username">@{rating.user.username} said:</li>
      <li className="rating-rating">Rating: {rating.show_star_ratings}</li>
      <li className="rating-comment">{rating.comment}</li>
    </div>
  )
}

export default Ratings;