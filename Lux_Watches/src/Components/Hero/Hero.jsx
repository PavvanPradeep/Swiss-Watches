import React from 'react'
import vid1 from "../../assets/tag.mp4"
import vid2 from "../../assets/rm.mp4"
import Collections from '../Collections/Collections'
export default function Hero() {
  return (
    <>  
        <div className='relative'>
            <video src={vid1} type="video/mp4" autoPlay loop muted ></video>
            <Collections/>
            <video className="w-full" src={vid2} type="video/mp4" autoPlay loop muted></video>
        </div>
        
    </>
  )
}

// 