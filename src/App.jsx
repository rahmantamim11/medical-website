import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Doctors from './Components/Doctors'
import Blogs from './Components/Blogs'
import Footer from './Components/Footer'


function App() {

  return (

    <>
     <Navbar></Navbar>
     <main>
      <div id='home'><Home></Home></div>
      <div id='about'><About></About></div>
      <div id='services'><Services></Services></div>
      <div id='doctors'><Doctors></Doctors></div>
      <div id='blogs'><Blogs></Blogs></div>
     </main>
     <Footer></Footer>
    </>

  )
}

export default App
