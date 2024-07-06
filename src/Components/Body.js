import React,{useEffect} from 'react'
import './Body.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Card() {
  useEffect(() => {
    Aos.init()
  }, [])
    return (
      <div className="Card">
        <div className="Card-header">
          <h2 className="Heading">For existing drivers</h2>
        </div>
        <div className="Card-body">
          <p className="Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec mauris vitae velit.</p>
          <button className="Button">Click me</button>
        </div>
      </div>
    );
  }
function Body() {
  return (
    <>
    <div className='Main' data-aos="fade-right" >
        <div className='Card-Container'>
            <Card/>
            <Card/>
        </div>
    </div>
    </>
  )
}
export default Body