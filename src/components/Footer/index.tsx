import "./index.css";
import {Nav, Button} from "../"

function Footer(){
  const navList = [
    {navName: 'Linkedin', link: '#'},
    {navName: 'Twitter', link: '#'},
    {navName: 'Instagram', link: '#'},
    {navName: 'Webflow', link: '#'}
  ]
  return(
    <section className="footer">
      <div className="footer-content">
        <div>
          <h2>Have something in mind?</h2>
          <div className="man-photo">
            <img src="/images/the-man-circle.png" /><h2> let's build together.</h2>
          </div>
        </div>
        <Button buttonName="Get in touch" />
      </div>
      <div>
        <Nav leftNav="Build with 💖 by Brightscout & Ayush" rightNav={navList} />
      </div>
    </section>
  )
}

export default Footer;