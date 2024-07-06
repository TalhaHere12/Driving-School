import React,{useEffect} from 'react'
import android from '/Driving-School-Website/my-app/src/Pics/android-app.png'
import ios from '/Driving-School-Website/my-app/src/Pics/ios-app.png'
import './Download.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Card() {
  useEffect(() => {
    Aos.init()
  }, [])
    return (
      <div className="Card-1">
        <div className="Card-header-1">
          <h2 className="Headin-1">For existing drivers</h2>
        </div>
        <div className="Card-body-1">
          <p className="Text-1">Its free to download all you need is an android or an apple phone.</p>
        </div>
        <div className='download-logos' >
            <img src={android} ></img>
            <img src={ios} ></img>
        </div>
      </div>
    );
  }
function Download() {
  return (
    <div data-aos="fade-right" >
    <Card/>
    </div>
  )
}
export default Download