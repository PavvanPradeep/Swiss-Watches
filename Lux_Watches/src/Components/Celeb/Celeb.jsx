import React from 'react'
import img1 from "../../assets/ryan-gosling.avif"
import img2 from "../../assets/margot_rm.jpeg"
export default function Celeb() {
  return (
    <>  
    <div className='flex'>
      <div className='container relative'>
          <img className="object-cover aspect-auto object-left"src={img1} alt="Watches for men" height={730}></img>
          <div className='flex justify-center text-center'>
            <p className='absolute bottom-1/3 text-white lg:text-4xl font-bold'>WATCHES FOR MEN</p>
            <p className='absolute bottom-1/4 text-white text-xs hover:underline cursor-pointer'> VIEW ALL WATCHES</p>
          </div>
      </div> 
      <div className='container relative'>
        <img className="object-cover aspect-auto object-right" src={img2} alt="Watches for women" height={730}></img> 
        <div className='flex justify-center text-center text-slate-50 '>
            <h2 className='absolute bottom-1/3 lg:text-4xl font-bold'>WATCHES FOR WOMEN</h2>
            <div className='flex justify-center text-center'>
              <p className='absolute bottom-1/4 text-xs hover:underline cursor-pointer'>VIEW ALL WATCHES</p>    
            </div>
        </div>
      </div>
    </div>
    </>
  )
}
// ADD svg
{/* <div className='flex space-x-4'>
  <div>
    <svg></svg>
  </div>
  <div>
    1
  </div>
</div> */}