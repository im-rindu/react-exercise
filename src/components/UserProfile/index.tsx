import "./index.css";

function UserProfile({userEmail, userPhone, socialDetail}) {
  return (
    <figure className="user-profile">
      <img src="/images/the-man-circle-hd.png" />
      <figcaption>
        <h3>Contact Details</h3>
        <p>
          {userEmail}
        <br />
          {userPhone}
        </p>
        <br />
        <h3>Social</h3>
        <ul>
          {socialDetail.map((item) => 
            <li>{item.name}</li>)
          }
        </ul>
      </figcaption>
    </figure>
  )
}

export default UserProfile;