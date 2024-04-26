import "./index.css"

function Sidebar({setIsHome}) {
  return(
    <aside>
      <ul className="nav">
        <li><a href="#" onClick={(e) =>setIsHome(true)}><h1>Home</h1></a></li>
        <li><a href="#about" onClick={(e) =>setIsHome(true)}><h1>About</h1></a></li>
        <li><a href="#work" onClick={(e) =>setIsHome(true)}><h1>Work</h1></a></li>
        <li><a href="#" onClick={(e) =>setIsHome(false)}><h1>Contact</h1></a></li>
      </ul>
      <ul className="social">
        <li>Linkedin</li>
        <li>Twitter</li>
        <li>Instagram</li>
        <li>Webflow</li>
      </ul>
      <button className="close-aside" onClick={(e) => {document.querySelector("aside")?.classList.add("hidden"); document.querySelector("aside")?.classList.remove("unhidden");}} ><span>+</span></button>
    </aside>
  );
}

export default Sidebar;