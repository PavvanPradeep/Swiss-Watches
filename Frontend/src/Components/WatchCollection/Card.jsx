import React, { useState } from 'react';

export default function Card(props) {
  const { name, pfp, pfp_hover, desc, brand } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 border-2 border-zinc-200 bg-pale"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="h-128 w-auto flex flex-col items-center justify-center">
          <img
            className={`h-1/2 object-cover transition duration-500 ease-in-out transform ${isHovered ? 'w-1/2 scale-110' : 'w-auto'}`}
            src={isHovered ? pfp_hover : pfp}
            alt=""
          />
          <div className='relative flex flex-col items-center justify-center m-10'>
            <p className='text-neutral-500 font-medium leading-tight text-primary m-2'>{brand}</p>
            <p className='font-semibold'>{name}</p>
            <p className='text-neutral-500 font-medium leading-tight text-primary italic m-2'>{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
