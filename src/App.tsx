import React from 'react'
import { Footer, Nav, Sidebar } from './components'
import {Home, Contact} from './containers'

function App() {
  const [isHome, setIsHome] = React.useState(true)
  
  const navBar = [
    {navName: 'About', link: '#about'},
    {navName: 'Work', link: '#work'}
  ]
  return (
    <>
      <Sidebar setIsHome={setIsHome} />
      <Nav leftNav="@Ayush Barnwal" rightNav={navBar} setIsHome={setIsHome} />
      <main>
        {isHome ? <Home /> : <Contact />}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
