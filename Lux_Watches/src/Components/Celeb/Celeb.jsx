import React from 'react';
import img1 from "../../assets/ryan-gosling.avif";
import img2 from "../../assets/margot_rm.jpeg";

export default function Celeb() {
  return (
    <>  
      <div className='flex'>
        <div className='relative' style={{ height: '75vh' }}>
          <img className="object-cover w-full h-full" src={img1} alt="Watches for men" />
          <div className='absolute inset-0 flex flex-col justify-center items-center'>
            <p className='text-white text-4xl font-bold'>WATCHES FOR MEN</p>
            <p className='text-white text-xs hover:underline cursor-pointer'>VIEW ALL WATCHES</p>
          </div>
        </div>
        <div className='relative' style={{ height: '75vh' }}>
          <img className="object-cover w-full h-full" src={img2} alt="Watches for women" />
          <div className='absolute inset-0 flex flex-col justify-center items-center'>
            <h2 className='text-white text-4xl font-bold'>WATCHES FOR WOMEN</h2>
            <p className='text-white text-xs hover:underline cursor-pointer'>VIEW ALL WATCHES</p>
          </div>
        </div>
      </div>
    </>
  );
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