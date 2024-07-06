import React,{useEffect} from 'react';
import './Main.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
function Card() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="heading">For existing drivers</h2>
      </div>
      <div className="card-body">
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec mauris vitae velit.</p>
        <button className="button">Click me</button>
      </div>
    </div>
  );
}

// function CardWithBackground() {
//     return (
//       <div className="card card-with-background">
//         <div className="card-header">
//           <h2 className="heading">For drivers with experience</h2>
//         </div>
//         <div className="card-body">
//           <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec mauris vitae velit.</p>
//           <button className="button">Click me</button>
//         </div>
//       </div>
//     );
// }

// function CardWithoutBackground() {
//     return (
//       <div className="card">
//         <div className="card-header">
//           <h2 className="heading">For new drivers</h2>
//         </div>
//         <div className="card-body">
//           <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec mauris vitae velit.</p>
//           <button className="button">Click me</button>
//         </div>
//       </div>
//     );
// }

function Main() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className='main' data-aos="fade-right" >
      <div className="card-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Main;
