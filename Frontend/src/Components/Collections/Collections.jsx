import React from 'react'
import Cards from './Cards.jsx'
import img1 from "../../assets/GIRARD_PERREGAUX_VINTAGE_1945.jpg"
import img2 from "../../assets/GIRARD_PERREGAUX_MF_ALARM.jpeg"
import img3 from "../../assets/GIRARD_PERREGAUX_2022_07_JULY_06_POST_a.jpg"
import img4 from "../../assets/GIRARD_PERREGAUX_2022_07_JULY_06_POST_B.jpg"
import img5 from "../../assets/GIRARD_PERREGAUX_Images_Bridge.jpg"
import img6 from "../../assets/GIRARD_PERREGAUX_Images_Site_1966l.jpg"


import { motion } from "framer-motion";
export default function Collections() {
  return (
  <>
    <div className='-mt-3 -mb-3 p-1 overflow-x-hidden'>
      <div className='flex justify-center text-stone-300 text-center'>
        <div className=" flex mt-10 text-4xl font-medium leading-tight text-primary">
          COLLECTIONS
        </div> 
      </div>
      <p className='flex justify-center mt-3 italic text-neutral-500 font-medium leading-tight text-primary'>Discover the latest and all of our watches</p>
      <motion.div
          drag="x"
          style={{x:150}}
          dragConstraints={{ left: -500, right: 300}}>
          <div className="flex items-center justify-center bg-neutral-1000 m-20"> 
            {/* <div className="grid grid-cols-1 gap-7 md:grid-cols-3 lg:grid-cols-4"> */}
            <div className='flex gap-8'>
              <Cards name='LAUREATO' pfp={img3} />
              <Cards name="CAT'S EYE" pfp={img4} />
              <Cards name='BRIDGES' pfp={img5} />
              <Cards name='1966' pfp={img6} />
              <Cards name='VINTAGE 1945' pfp={img1} />
              <Cards name='ALARM' pfp={img2} />
            </div>
          </div>   
      </motion.div>
    </div> 
  </>
   
  )
}
