import React from 'react'
import img1 from "../../assets/ryan-gosling.avif"
import img2 from "../../assets/margot_rm.jpeg"
export default function Celeb() {
  return (
    <>  
    <div className='flex'>
         <img className="object-cover aspect-aut object-left w-1/2"src={img1} alt="Watches for men" height={730}></img>
         <img className="object-cover aspect-auto object-right w-1/2" src={img2} alt="Watches for women" height={730}></img> 
    </div>
    </>
  )
}
// Positions still need fixing
