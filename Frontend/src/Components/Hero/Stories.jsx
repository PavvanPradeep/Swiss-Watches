import React from 'react';
import img1 from "../../assets/Rolex.avif";
import img2 from "../../assets/Rolex2.avif";

export default function Stories() {
  return (
    <>
      <div className='mx-4 sm:mx-8 md:mx-12 lg:mx-24'>
        <div className='flex flex-col md:flex-row items-center md:items-start mx-4 my-14'>
          <div className='md:w-1/2 md:order-1 mb-5 md:mb-0'>
            <img className="object-cover w-full max-w-full h-auto" src={img1} alt="Rolex Yacht-Master" />
          </div>
          <div className='md:w-1/2 md:order-2 mt-5 md:mt-0 md:ml-5'>
            <p className='text-white font-serif font-extrabold text-4xl md:text-6xl italic'>ROLEX YACHT-MASTER</p>
            <p className='text-white font-light text-base md:text-lg mt-4 md:mt-6 mb-2 md:mb-4'>OYSTER PERPETUAL</p>
            <p className='text-zinc-300 font-extralight text-sm md:text-base'>Inspired by the rich heritage that has bound Rolex to the world of yachting since the 1950s, 
              the Yacht-Master and Yacht-Master II models embody the brand’s nautical spirit. The Yacht-Master brilliantly blends 
              function and seafaring style. Presented in 2007, the Yacht-Master II is a regatta chronograph built for yachting competitions.
              It features a countdown function with a mechanical memory programmable from 1 to 10 minutes which can be synchronized on the fly
              – a function that responds to the need for precise timing during the crucial starting sequence of a regatta.
            </p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row-reverse items-center md:items-start mx-4 my-14'>
          <div className='md:w-1/2 md:order-1 mb-5 md:mb-0'>
            <img className="object-cover w-full max-w-full h-auto" src={img2} alt="Rolex Explorer-40" />
          </div>
          <div className='md:w-1/2 md:order-2 mt-5 md:mt-0 md:mr-5'>
            <p className='text-white font-serif font-extrabold text-4xl md:text-6xl italic'>ROLEX EXPLORER-40</p>
            <p className='text-white font-light text-base md:text-lg mt-4 md:mt-6 mb-2 md:mb-4'>OYSTER PERPETUAL</p>
            <p className='text-zinc-300 font-extralight text-sm md:text-base'>The Explorer range is expanded with the arrival of a new 40 mm model. Offering enhanced legibility, 
              this timepiece carries all the qualities that have made the Explorer – one of the brand’s first tool-watches
              – a reference throughout the decades. Simple, robust and corrosion resistant, the new Explorer 40 is crafted 
              from Oystersteel, an alloy specific to Rolex.
            </p>
            <p className='text-white font-light text-base md:text-lg mt-2 md:mt-4 mb-2 md:mb-4'>OYSTER STEEL</p>
            <p className='text-zinc-300 font-extralight text-sm md:text-base'>Oystersteel offers exceptional sheen. Rolex watches crafted from this special steel retain their lustre even when exposed to the most extreme conditions.
              Produced exclusively for Rolex, Oystersteel belongs to the 904L steel family – alloys that are commonly used in advanced-technology fields such as the aerospace and chemical industries. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
