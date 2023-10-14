import React from 'react';

export default function Image(props) {


  return (
      <img className="image" src={props.src} height={600} style={{ width: '45%' }} />
  );
}
