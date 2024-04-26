import "./index.css";

function Banner(){
  return(
    <section className="banner">
      <img src="/images/the-man.png" alt="the-man" />
      <h1>Webflow Developer &nbsp; UI/UX Designer &nbsp; Web Designer &nbsp;</h1>
      <div className="hi-icon" onClick={(e) => {document.querySelector("aside")?.classList.add("unhidden"); document.querySelector("aside")?.classList.remove("hidden");}} >
        <img src="/images/hi-icon.png" />
        <h2>Hi I’m Ayush</h2>
      </div>
    </section>
  )
}

export default Banner;