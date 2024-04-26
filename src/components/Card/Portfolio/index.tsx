import {Button} from "../../";
import "./index.css";

function Portfolio({item}) {
  return(
    <figure className="portfolio">
      <img src={item.image} />
      <Button buttonName="Visit the website" buttonType="square" buttonColor="light" buttonSize="regular" buttonImage="/images/arrow.png" />
    </figure>
  )
}

export default Portfolio;