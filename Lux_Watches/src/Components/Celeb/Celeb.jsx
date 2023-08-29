import React from 'react'
import img1 from "../../assets/Ryan2.webp"
import img2 from "../../assets/margot.webp"
export default function Celeb() {
  return (
    <>  
    <div className='flex'>
        <img src={img1} alt="Watches for men" width={690} height={730}></img>
        <img src={img2} alt="Watches for women" width={690} height={730}></img> 
    </div>
    </>
  )
}
// Positions still need fixing
// to add text content over the images 