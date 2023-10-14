import React from 'react';

export default function Card(props) {


  return (
      <img className="image" src={props.src} height={730} style={{ width: '50%' }} />
  );
}
