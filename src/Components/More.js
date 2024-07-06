import React,{useEffect} from 'react'
import './More.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Column(){
    return(
        <>
        <div className='Column'  >
            <div className='line1' >Driving Lessons </div>
            <div className='line2' >Automatic Driving Licenses</div>
            <div className='line3' >Female Driving Instructors</div>
        </div>
        </>
    )
}
function Separator(){
    return(
        <>
        <div className='Separator-line'>
        </div>
        </>
    )
}
function More() {
    useEffect(() => {
      Aos.init()
    }, [])
    
  return (
    <>
    <div className='Main-Container' data-aos="fade-right" >
        <Column/>
        <Separator/>
        <Column/>
        <Separator/>
        <Column/>
        <Separator/>
    </div>
    </>
  )
}
export default More

