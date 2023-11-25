import React from 'react';

export default function Image(props) {


  return (

    // <div className="group relative cursor-pointer items-center justify-center overflow-hidden border-2 border-zinc-200 bg-pale">
      <div className="h-auto w-1/3 p-5 flex items-center justify-center">

        <img className="image" src={props.src} />
      </div>
    // </div>
  );
}
