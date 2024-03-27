import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "../../assets/ryan-gosling.avif";
import img2 from "../../assets/margot_rm.jpeg";

const images = [img1, img2];
const texts = ['WATCHES FOR MEN', 'WATCHES FOR WOMEN'];

export default function Final() {
 const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
 const [hasSetPosition, setHasSetPosition] = useState(false);
 const [initialSlidePosition, setInitialSlidePosition] = useState(0);

 const settings = {
   dots: false,
   infinite: true,
   speed: 1000,
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   autoplay: true,           // Enable autoplay
   autoplaySpeed: 2500,  // Set autoplay speed in milliseconds
 };

 const sliderRef = React.createRef();

 useEffect(() => {
   if (!hasSetPosition && sliderRef.current) {
     sliderRef.current.slickGoTo(initialSlidePosition);
     setHasSetPosition(true);
   }
 }, [hasSetPosition, initialSlidePosition, sliderRef]);

 useEffect(() => {
   const handleResize = () => {
     setIsMobile(window.innerWidth <= 768);
   };

   window.addEventListener('resize', handleResize);

   return () => {
     window.removeEventListener('resize', handleResize);
   };
 }, []);

 if (isMobile) {
   return (
     <Slider ref={sliderRef} {...settings} className="custom-slider">
{images.map((img, index) => (
 <div key={index} className="relative">
   <img className="object-cover w-full h-full" src={img} alt={`Slide ${index + 1}`} />
   <div className='absolute inset-0 flex flex-col justify-center items-center'>
     <p className='text-white text-3xl sm:text-4xl font-bold'>{texts[index]}</p>
     <p className='text-white text-xs hover:underline cursor-pointer'>VIEW ALL WATCHES</p>
   </div>
 </div>
))}

     </Slider>
   );
 } else {
   return (
         <> 
          <div className='flex flex-wrap'>
            <div className='w-full sm:w-1/2 aspect-ratio-box' style={{ aspectRatio: '2 / 1' }}>
              <div className='aspect-ratio-box-inside relative'>
                <img className="object-cover w-full h-full" src={img1} alt="Watches for men" />
                <div className='absolute inset-0 flex flex-col justify-center items-center'>
                 <p className='text-white text-3xl sm:text-4xl font-bold'>WATCHES FOR MEN</p>
                 <p className='text-white text-xs hover:underline cursor-pointer'>VIEW ALL WATCHES</p>
                </div>
              </div>
            </div>
            <div className='w-full sm:w-1/2 aspect-ratio-box' style={{ aspectRatio: '2 / 1' }}>
              <div className='aspect-ratio-box-inside relative'>
                <img className="object-cover w-full h-full" src={img2} alt="Watches for women" />
                <div className='absolute inset-0 flex flex-col justify-center items-center'>
                 <p className='text-white text-3xl sm:text-4xl font-bold'>WATCHES FOR WOMEN</p>
                 <p className='text-white text-xs hover:underline cursor-pointer'>VIEW ALL WATCHES</p>
                </div>
              </div>
            </div>
          </div>
         </>
       );
      }
     }

// Add the following CSS in your global styles or in a <style> tag within the component
<style>
{`
 .aspect-ratio-box {
   position: relative;
   width: 100%;
 }
 .aspect-ratio-box:before {
   content: '';
   display: block;
   padding-top: 50%; /* This sets the aspect ratio to 2:1 */
 }
 .aspect-ratio-box-inside {
   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
 }
   
`}
</style>
