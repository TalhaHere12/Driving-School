import React from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Body from './Components/Body'
import Download from './Components/Download.'
import More from './Components/More'
import Question from './Components/Question'
import Footer from './Components/Footer'
import './App.css'

function App() {
  return (
    <>
    <div className='Main-Page' >
  <Navbar/>
  <Main/>
  <Body/>
  <Download/>
  <More/>
  <Question/>
  <Footer/>
    </div>
    </>
  )
}

export default App