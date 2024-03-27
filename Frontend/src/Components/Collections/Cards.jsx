import React from 'react'

export default function Cards(props) {
 const { name, pfp, desc } = props;
 return (
  <>
      <div className="rounded-xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 border-2 border-gray-800 w-full sm:w-auto md:w-auto lg:w-auto xl:w-auto 2xl:w-auto">
          <div className="h-96 w-72">
            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src={pfp} alt="" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="mb-7 text-3xl font-bold text-white">{name}</h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{desc}</p>
                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Know more</button>
          </div>
      </div>
  </>
 )
}
