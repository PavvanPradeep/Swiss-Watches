import React from 'react';
import vid1 from "../../assets/tag.mp4";
import vid2 from "../../assets/rm.mp4";
import Collections from '../Collections/Collections';

export default function Hero() {
  return (
    <div className="relative">
      <div className="relative lg:w-full ">
        <video src={vid1} type="video/mp4" autoPlay loop muted></video>
        <div className="absolute inset-24 flex flex-col items-center justify-center h-full text-center">
          <p className=" lg:py-0 decoration-slate-700 font-semibold tracking-widest lg:text-xs">
            <span className=''>NEW TAG HEUER MONACO CHRONOGRAPHS</span>
          </p>
          <h1 className="py-3 px-4 mb-5 tracking-wide text-white lg:text-5xl font-semibold">
            <span>CRAFTED FOR INSIDERS</span>
          </h1>
          <button
            type="button"
            className="inline-block border-2 border-primary-100 tracking-widest px-8 pb-4 pt-4 text-sm font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-white hover:text-black focus:outline-none focus:ring-0 active:border-primary-accent-200 "
            data-te-ripple-init>
            DISCOVER
          </button>
        </div>
      </div>
      
      <Collections />
    
      <div className="relative lg:w-full ">
      <video className="w-full max-h-fit" src={vid2} type="video/mp4" autoPlay loop muted></video>
        <div className="absolute inset-24 flex flex-col items-center justify-center h-full text-center">
          <p className=" lg:py-0 decoration-slate-700 font-semibold tracking-widest lg:text-xs">
            <span className=''>RICHARD MILLIE DIAMOND CUT CHRONOGRAPHS</span>
          </p>
          <h1 className="py-3 px-4 mb-5 tracking-wide text-white lg:text-5xl font-semibold">
            <span>UNCONVENTIONAL BEAUTY OF CERAMIC</span>
          </h1>
          <button
            type="button"
            className="inline-block border-2 border-primary-100 tracking-widest px-8 pb-4 pt-4 text-sm font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-white hover:text-black focus:outline-none focus:ring-0 active:border-primary-accent-200 "
            data-te-ripple-init>
            DISCOVER MORE
          </button>
        </div>
      </div>
      

    </div>
  );
}
