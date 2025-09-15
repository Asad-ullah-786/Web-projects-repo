import React from 'react'
import Card from '../Card/Card'
import va from "../../assets/va.png"
import fw from "../../assets/fw.png"
import tti from "../../assets/tti.png"
import ise from "../../assets/ise.png"
import cb from "../../assets/cb.png"
import "./Project.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function Project() {

useGSAP(()=>{
    gsap.from("#heading" ,{
      x:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:"#heading",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 30%"
      }
    })
      gsap.from(".slider" ,{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".slider",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 30%"
      }
    })
    
})

  return (
   <div id="projects">
    <h1 id='heading'>2+ YEARS EXPERIENCED IN PROJECTS</h1>
    <div className="slider">
    <Card title="VIRTUAL ASSISTANT" Image={va}/>
     <Card title="AI POWERED FITNESS WEBSITE" Image={fw}/>
      <Card title="AI CHATBOT" Image={cb}/>
       <Card title="AI TEXT TO IMAGE" Image={tti}/>
        <Card title="IMAGE SEARCH ENGINE" Image={ise}/>
    </div>
   </div>
  )
}

export default Project
