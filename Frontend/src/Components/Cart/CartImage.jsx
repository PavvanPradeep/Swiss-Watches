import React from 'react'

export default function CartImage(props) {
    const { pfp } = props;
  return (
    <>
      <div className="group relative items-center justify-center overflow-hidden transition-shadow bg-pale">
        <div className="p-5 border-zinc-200">
          <img className="h-32 w-auto" src={pfp} alt="" />
        </div>
      </div>

    </>
  )
}

    