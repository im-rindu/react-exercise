import { Form, UserProfile } from "../../components";
import "./index.css";

function Contact() {
  //data dummy
  const formContact = [
    {id: "name", label: "Name", type: "text", placeholder: "Your name", rows: 1},
    {id: "email", label: "Email", type: "email", placeholder: "Your email", rows: 1},
    {id: "message", label: "Message", type: "textarea", placeholder: "Your message", rows: 5},
  ]
  const socialDetail = [
    {name: "Linkedin", link: "#"}, 
    {name: "Twitter", link: "#"}, 
    {name: "Instagram", link: "#"}, 
    {name: "Webflow", link: "#"}
  ]
  
  return(
    <section className="contact">
      <UserProfile userEmail="ayush.barnwal@brightscout.com" userPhone="+91 8651447521" socialDetail={socialDetail} />
      <Form title="Let’s build something cool together" fieldSet={formContact} />
    </section>
  )
}

export default Contact;