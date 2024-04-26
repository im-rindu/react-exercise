import {Button} from "../";
import "./index.css"

function Sidebar({setIsHome}) {
  return(
    <aside>
      <ul className="nav">
        <li><a href="#" onClick={() =>setIsHome(true)}><h1>Home</h1></a></li>
        <li><a href="#about" onClick={() =>setIsHome(true)}><h1>About</h1></a></li>
        <li><a href="#work" onClick={() =>setIsHome(true)}><h1>Work</h1></a></li>
        <li><a href="#" onClick={() =>setIsHome(false)}><h1>Contact</h1></a></li>
      </ul>
      <ul className="social">
        <li>Linkedin</li>
        <li>Twitter</li>
        <li>Instagram</li>
        <li>Webflow</li>
      </ul>
      <div className="close-button" onClick={hide}>
        <Button buttonName="+" buttonType="rounded" buttonColor="light"/>
      </div>
    </aside>
  );
}

function hide(){
  document.querySelector("aside")?.classList.remove("unhidden");
  document.querySelector("aside")?.classList.add("hidden");
}


export default Sidebar;