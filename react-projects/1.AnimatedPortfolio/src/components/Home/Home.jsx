import React from 'react'
import "./Home.css"
import man from "../../assets/man.png"
import { TypeAnimation } from 'react-type-animation';
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
function Home() {
  useGSAP(()=>{
    let tl1=gsap.timeline();
    tl1.from(".line1",{
      y: 70,
      duration:1,
      opacity:0
    })
     tl1.from(".line2",{
      y: 70,
      duration:1,
      opacity:0
    })
     tl1.from(".line3",{
      y: 70,
      duration:1,
      opacity:0
    })
    gsap.from(".righthome img",{
       y: 200,
      duration:1,
      opacity:0
    })
   
  })

  return (
    <div id="home">
      <div className="lefthome">
      <div className="homedetails">
        <div className="line1">
        I'M
        </div>
        <div className="line2">
          ASAD ULLAH
        </div>
        <div className="line3">
         <TypeAnimation
  sequence={[
    'EDITOR',
    1000, // 1 second rukega
    'WEB DEVELOPER',
    2000,
    'SOFTWARE DEVELOPER',
    2000
  ]}
  wrapper="span"
  speed={40}
  repeat={Infinity}
  cursor={true}
/>
        </div>
        <a href="#contact">
  <button>HIRE ME</button>
</a>

      </div>
      </div>
      <div className="righthome">
        <img src={man} alt="" />
      </div>
    </div>
  )
}

export default Home
 