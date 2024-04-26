import "./index.css";

function Work({item}) {
  return(
    <article className="recent-work">
      <div>
        <h2>{item.title}</h2>
        <p>{item.work}</p>
      </div>
      <button>
        <a href={item.link}>
          <img style={{marginTop: "2.5px"}} src="/images/arrow.png" />
        </a>
      </button>
    </article>
  )
}

export default Work;