import "./index.css";	
function Review({item}) {
  return(
    <article className="review">
      <p>‟{item.review}”</p>
      <div className="reviewer-info">
        <img src={item.image} />
        <div>
          <p style={{fontFamily: 'NeueMontreal-Medium'}}>{item.name}</p>
          <p>{item.job}</p>
        </div>
      </div>
    </article>
  )
}

export default Review;