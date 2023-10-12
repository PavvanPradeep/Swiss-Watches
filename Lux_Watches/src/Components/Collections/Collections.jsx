import React from 'react'
import Cards from './Cards.jsx'
import img1 from "../../assets/ryan-gosling.avif"
import img2 from "../../assets/margot_rm.jpeg"
import { motion} from "framer-motion";
export default function Collections() {
  return (
  <>
    <div className='-mt-3 -mb-3 p-1'>
      <div className='flex justify-center text-stone-300 text-center'>
        <div className=" flex mt-10 text-4xl font-medium leading-tight text-primary">
          COLLECTIONS
        </div> 
      </div>
      <p className='flex justify-center mt-3 italic text-neutral-500 font-medium leading-tight text-primary'>Discover the latest and all of our watches</p>
      <motion.div
          drag="x"
          style={{x:450}}
          dragConstraints={{ left: -500, right: 470}}>
          <div className="flex min-h-screen items-center justify-center bg-neutral-1000 -mt-14 -mb-14"> 
            {/* <div className="grid grid-cols-1 gap-7 md:grid-cols-3 lg:grid-cols-4"> */}
            <div className='flex gap-8'>
              <Cards name='hello world' pfp={img1} desc='qweretystsgsg'/>
              <Cards name='wassup' pfp={img2} desc='qweretystsgsg'/>
              <Cards name='hello world' pfp={img1} desc='qweretystsgsg'/>
              <Cards name='wassup' pfp={img2} desc='qweretystsgsg'/>
              <Cards name='hello world' pfp={img1} desc='qweretystsgsg'/>
              <Cards name='wassup' pfp={img2} desc='qweretystsgsg'/>
            </div>
          </div>   
      </motion.div>
    </div> 
  </>
   
  )
}
