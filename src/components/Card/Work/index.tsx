import {Button} from "../../";
import "./index.css";

function Work({item}) {
  return(
    <article className="recent-work">
      <div>
        <h2>{item.title}</h2>
        <p>{item.work}</p>
      </div>
      <Button buttonType="rounded" buttonColor="transparent" buttonImage="/images/arrow.png" />
    </article>
  )
}

export default Work;