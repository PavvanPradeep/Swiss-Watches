import React from 'react';
import Navbar from '../Navbar/Navbar'
import Celeb from '../Celeb/Celeb'
import Footer from '../Footer/Footer'
import vid1 from "../../assets/tag.mp4";
import vid2 from "../../assets/rm.mp4";
import vid3 from "../../assets/GP.mp4";
import Collections from '../Collections/Collections';
import New_Arrivals from '../New_Arrivals/New_Arrivals';
import Stories from './Stories';
import './Responsiveness.css';

export default function Hero() {
  return (
    <div className="relative">

      {/* Importing Navbar with props */}
      <Navbar navPosition={{position: 'absoulute'}} navTextStyle={{color: 'white'}} navBGColor='white' navIcon={{background: 'white'}} navCartIcon='cart.svg' navSearchIcon='search.svg'/>

      <div className="video-container relative aspect-w-16 aspect-h-9">
      <video className="responsive-video w-full h-full lg:h-full object-cover z-1" src={vid1} type="video/mp4" autoPlay loop muted playsInline></video>
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
    
      <div className="video-container relative lg:w-full ">
      <video className="responsive-video w-full max-h-fit" src={vid2} type="video/mp4" autoPlay loop muted playsInline></video>
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
      <Stories/>
      {/* GP */}
       <div className="video-container relative lg:w-full ">
      <video className="responsive-video w-full max-h-fit" src={vid3} type="video/mp4" autoPlay loop muted playsInline></video>
        <div className="absolute inset-24 flex flex-col items-center justify-center h-full text-center">
          <p className=" lg:py-0 decoration-slate-700 font-semibold tracking-widest lg:text-xs">
            <span className=''>GIRARD PERREGAUX X ASTON MARTIN</span>
          </p>
          <h1 className="py-3 px-4 mb-5 tracking-wide text-white lg:text-5xl font-semibold">
            <span>AN ODE TO SPEED</span>
          </h1>
          <button
            type="button"
            className="inline-block border-2 border-primary-100 tracking-widest px-8 pb-4 pt-4 text-sm font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-white hover:text-black focus:outline-none focus:ring-0 active:border-primary-accent-200 "
            data-te-ripple-init>
            DISCOVER MORE
          </button>
        </div>
      </div>
      <New_Arrivals/>

      {/* Importing Celeb and Footer */}
      <Celeb/>

      <Footer/>
    </div>
  );
}
