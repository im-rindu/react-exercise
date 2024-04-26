import Portfolio from "./Portfolio";
import Review from "./Review";
import Work from "./Work";

function Card({contentType, content}) {
  let cardContent

  if(contentType === "review") {
    cardContent = content.map((item) =>
      <Review item={item} />
    )
  } else if(contentType === "work") {
    cardContent = content.map((item) =>
      <Work item={item} />
    )
  } else if(contentType === "portfolio") {
    cardContent = content.map((item) =>
      <Portfolio item={item} />
    )
  }
  
  return cardContent;
}

export default Card;