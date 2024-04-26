import "./index.css";

function Portfolio({item}) {
  return(
    <figure className="portfolio">
      <img src={item.image} />
    </figure>
  )
}

export default Portfolio;