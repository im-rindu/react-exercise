import './index.css';

function Nav({leftNav, rightNav, setIsHome=null}) {
  const nav = rightNav.map((nav) => 
    <li>
      <a href={nav.link}>{nav.navName}</a>
    </li>
  )
  return(
    <section className='nav-bar'>
      <div>{leftNav}</div>
      <ul>
        {setIsHome ? <li><a href="#" onClick={(e) => {setIsHome(true)}}>Home</a></li> : null}
        {nav}
        {setIsHome ? <li><a href="#" onClick={(e) => {setIsHome(false)}}>Contact</a></li> : null}
      </ul>
    </section>
  )
}

export default Nav;