import Ratings from "../components/Ratings";

function RatingsList({ ratings, id }) {

  const ratingsComponents = ratings.filter(rating => rating.music_id === id).map(filteredRating => {
    return <Ratings key={filteredRating.id} rating={filteredRating} />
  })

  return (
    <div>
      {ratingsComponents}
    </div>
  )
}

export default RatingsList;