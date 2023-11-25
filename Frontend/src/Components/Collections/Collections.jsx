import React from 'react'
import Cards from './Cards.jsx'
import img1 from "../../assets/GIRARD_PERREGAUX_VINTAGE_1945.jpg"
import img2 from "../../assets/GIRARD_PERREGAUX_MF_ALARM.jpeg"
import img3 from "../../assets/GIRARD_PERREGAUX_2022_07_JULY_06_POST_a.jpg"
import img4 from "../../assets/GIRARD_PERREGAUX_2022_07_JULY_06_POST_B.jpg"
import img5 from "../../assets/GIRARD_PERREGAUX_Images_Bridge.jpg"
import img6 from "../../assets/GIRARD_PERREGAUX_Images_Site_1966l.jpg"


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
          <div className="flex items-center justify-center bg-neutral-1000 m-20"> 
            {/* <div className="grid grid-cols-1 gap-7 md:grid-cols-3 lg:grid-cols-4"> */}
            <div className='flex gap-8'>
              <Cards name='LAUREATO' pfp={img3} desc='qweretystsgsg'/>
              <Cards name="CAT'S EYE" pfp={img4} desc='qweretystsgsg'/>
              <Cards name='BRIDGES' pfp={img5} desc='qweretystsgsg'/>
              <Cards name='1966' pfp={img6} desc='qweretystsgsg'/>
              <Cards name='VINTAGE 1945' pfp={img1} desc='qweretystsgsg'/>
              <Cards name='ALARM' pfp={img2} desc='qweretystsgsg'/>
            </div>
          </div>   
      </motion.div>
    </div> 
  </>
   
  )
}
