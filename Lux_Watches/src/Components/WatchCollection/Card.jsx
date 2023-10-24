import React from 'react';

export default function Card(props) {
  const { name, pfp, desc,brand } = props;
  return (
    <>
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 border-2 border-zinc-200 bg-pale">
            <div className="h-128 w-128 flex flex-col items-center justify-center">
              <img className="h-1/2 w-1/2  transition-transform duration-500" src={pfp} alt="" />
              <div className='relative flex flex-col items-center justify-center m-10'>
                <p className='text-neutral-500 font-medium leading-tight text-primary m-2'>{brand}</p>
                <p className='font-semibold'>{name}</p>
                <p className='text-neutral-500 font-medium leading-tight text-primary italic m-2'>{desc}</p>
            </div>
          </div>
        </div>
    </>
  )
}
    