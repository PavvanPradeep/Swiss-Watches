import React from 'react'
import Cards from '../Collections/Cards'
import img1 from "../../assets/watches/captaincook_r32151318_sld_web.avif"
import img2 from "../../assets/watches/carrera_chronosprintxporsche.png"
import img3 from "../../assets/watches/day-date-36-gold.png"
import img4 from "../../assets/watches/royal_oak_perpetual_calendar.png"
import img5 from "../../assets/watches/p_5531G_001_1@2x.png"
import img6 from "../../assets/watches/carrera_date.png"

import { motion} from "framer-motion";
export default function New_Arrivals() {
  return (
    <>  
    <div className='-mt-3 -mb-3 p-1 overflow-x-hidden'>
         <div className='flex justify-center text-stone-300 text-center'>
            <div className=" flex mt-10 text-4xl font-medium leading-tight text-primary">
            NEW ARRIVAL
            </div> 
        </div>
        <p className='flex justify-center mt-3 italic text-neutral-500 font-medium leading-tight text-primary'>Discover the latest and all of our watches</p>
        <motion.div
          drag="x"
          style={{x:150}}
          dragConstraints={{ left: -500, right: 300}}>
            
        <div className="flex items-center justify-center bg-neutral-1000 m-20"> 
            <div className="flex gap-8">
                <Cards name='RADO' pfp={img1} desc='qweretystsgsg'/>
                <Cards name='TAG HEUER' pfp={img2} desc='qweretystsgsg'/>
                <Cards name='ROLEX' pfp={img3} desc='qweretystsgsg'/>
                <Cards name='AP' pfp={img4} desc='qweretystsgsg'/>
                <Cards name='PATEK' pfp={img5} desc='qweretystsgsg'/>
                <Cards name='TAG HEUER' pfp={img6} desc='qweretystsgsg'/>
            </div>
        </div>
    </motion.div>
     

    </div>
     
    </>
  
  )
}
