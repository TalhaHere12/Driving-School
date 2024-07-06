import React from 'react'
import './Question.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
function Question() {
    useEffect(() => {
      Aos.init()
    }, [])
    
  return (
    <>
    <div className='Main' >
        <div className='Container' data-aos="fade-right" >
            <div className='Heading' >
                <text>Need to add credit to your account</text>
            </div>
            <button>Top Up</button>
        </div>
        <div className='Container' data-aos="fade-left" >
            <div className='Heading' >
                <text>Have a question about learning to drive</text>
            </div>
            <button>Chat Now</button>
        </div>
    </div>
    </>
  )
}

export default Question