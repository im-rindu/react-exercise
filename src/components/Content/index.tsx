import {Card} from "../";
import "./index.css";

function Content({contentTitle, contentType, content}) {
  let cardContent;
  
  if(contentType==="about"){
    cardContent = <p>{content}</p>;
  }
  else{
    cardContent = <Card contentType={contentType} content={content} />
  }

  return(
    <section id={contentType} className="content">
      <div>
        <h3>
          {contentTitle}
        </h3>
      </div>
      <div>
        {cardContent}
      </div>
    </section>
  )
}

export default Content;