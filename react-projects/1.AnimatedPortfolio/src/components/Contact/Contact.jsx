import React from 'react'
import con from "../../assets/contact.png"
import "./Contact.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function Contact() {

    useGSAP(()=>{
    gsap.from(".leftcontact" ,{
      x:-200,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".leftcontact",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 30%"
      }
    })
      gsap.from(".rightcontact" ,{
      x:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".rightcontact",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 30%"
      }
    })
    
})

  return (
   <div id="contact">
    <div className="leftcontact">
    <img src={con} alt="" />
    </div>
    <div className="rightcontact">
    <form action="https://formspree.io/f/meolnwav" method='post'>
        <input type="text " name='Username' placeholder='Name' />
        <input type="email" name='Email'placeholder='abc@gmail.com' />
        <textarea name="message" id="textarea" placeholder='Message me'></textarea>
        <input type="submit" id='btn' value="Submit"/>
    </form>
    </div>
   </div>
  )
}

export default Contact
