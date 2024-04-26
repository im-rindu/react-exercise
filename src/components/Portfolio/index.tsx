import {Card} from "../";
import "./index.css";

function Portfolio({content}) {
  const portfolioContent = <Card contentType={"portfolio"} content={content} />;

  return(
    <article className="portfolio-list">
      <div>
        {portfolioContent}
      </div>
    </article>
  )
}

export default Portfolio;