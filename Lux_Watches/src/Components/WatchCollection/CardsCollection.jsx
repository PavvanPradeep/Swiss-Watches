// import React from "react";
// import { useNavigate } from "react-router-dom"
// // import './CardsCollection.css'

// import {Card, ap_1159, royaloak_minute, royaloak_perpetual, carrera_date, carrera_porsche, carrera, daydate_green, daydate_gold, daydate_blue,patek_green,patek_teal,patek_blue} from "./images.jsx" 


// export default function CardsCollection() {

//     // Navigate to watches
//     const navigate = useNavigate();

//     const navigateToWatch = (imageSrc) => {
//         // window.scrollTo({
//         //     top: 0
//         //   });
//         navigate('/watch',{ state: { image: imageSrc } });
//     }

//     return(
//         <div className="container gap-2 m-auto justify-center items-center text-black grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
//             <div className="card card-1" onClick={() => navigateToWatch(ap_1159)}> <Card pfp={ap_1159} name="Code 11.59 by Audemars Piguet"  desc="Manual winding ultralat" brand="Audemars Piguet"/></div>
//             <div className="card card-2" onClick={() => navigateToWatch(royaloak_perpetual)}><Card pfp={royaloak_perpetual} name="Code 11.59 by Audemars Piguet" desc="Manual winding ultralat" brand="Rolex"/></div>
//             <div className="card card-3" onClick={() => navigateToWatch(royaloak_minute)}><Card pfp={royaloak_minute} name="Code 11.59 by Audemars Piguet" desc="Manual winding ultralat" brand="Rolex"/></div>
//             <div className="card card-4" onClick={() => navigateToWatch(carrera_date)}><Card pfp={carrera_date} name="Code 11.59 by Audemars Piguet" desc="Manual winding ultralat" brand="Rolex"/></div>
//             <div className="card card-5" onClick={() => navigateToWatch(carrera_porsche)}><Card pfp={carrera_porsche} name="Code 11.59 by Audemars Piguet" desc="Manual winding ultralat" brand="Rolex"/></div>
//             <div className="card card-6" onClick={() => navigateToWatch(carrera)}><Card pfp={carrera} name="Code 11.59 by Audemars Piguet" desc="Manual winding ultralat" brand="Rolex"/></div>
//             <div className="card card-7" onClick={() => navigateToWatch(daydate_green)}><Card pfp={daydate_green} name="Code 11.59 by Audemars Piguet" desc="Manual winding ultralat" brand="Rolex"/></div>
//             <div className="card card-8" onClick={() => navigateToWatch(daydate_gold)}><Card pfp={daydate_gold} name="Code 11.59 by Audemars Piguet" desc="Manual winding ultralat" brand="Rolex"/></div>
//             <div className="card card-9" onClick={() => navigateToWatch(daydate_blue)}><Card pfp={daydate_blue} name="Code 11.59 by Audemars Piguet" desc="Manual winding ultralat" brand="Rolex"/></div>
//             <div className="card card-10" onClick={() => navigateToWatch(patek_green)}><Card pfp={patek_green} name="Code 11.59 by Audemars Piguet" desc="Manual winding ultralat" brand="Rolex"/></div>
//             <div className="card card-11" onClick={() => navigateToWatch(patek_teal)}><Card pfp={patek_teal} name="Code 11.59 by Audemars Piguet" desc="Manual winding ultralat" brand="Rolex"/></div>
//             <div className="card card-12" onClick={() => navigateToWatch(patek_blue)}><Card pfp={patek_blue} name="Code 11.59 by Audemars Piguet" desc="Manual winding ultralat" brand="Rolex"/></div>
//         </div>
//     )
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Card from "./Card"; // Assuming you have a Card component
import { ap_1159, royaloak_minute, royaloak_perpetual, carrera_date, carrera_porsche, carrera, daydate_green, daydate_gold, daydate_blue, patek_green, patek_teal, patek_blue } from "./images.jsx";

export default function CardsCollection() {
  const [watches, setWatches] = useState([]);
  const navigate = useNavigate();

  const fetchWatches = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/auth/watches/");
      setWatches(response.data);
      console.log("Watch data received successfully:", response.data);
    } catch (error) {
      console.error("Error fetching watch data:", error);
      console.error("Error details:", error.response.data);
    }
  };

  const clearWatches = () => {
    setWatches([]);
    console.log("Watches cleared.");
  };

  useEffect(() => {
    fetchWatches();
  }, []);

  const nameToVariableMap = {
    "Code 11.59 by Audemars Piguet": ap_1159,
    "Royal Oak Minute Repeater Supersonnerie": royaloak_minute,
    "Royal Oak Perpetual Calendar": royaloak_perpetual,
    "Carrera Date": carrera_date,
    "Carrera Chronosprint x Porsche": carrera_porsche,
    "Carrera": carrera,
    "Day-Date 36 Everose Gold Green Dial": daydate_green,
    "Day-Date 36 Gold": daydate_gold,
    "Day-Date 36 White Gold Light Blue Dial": daydate_blue,
    "Patek Philippe Grand Complications 6300G-001": patek_green,
    "Patek Philippe Grand Complications 5531R-001": patek_teal,
    "Patek Philippe Grand Complications 5905R-010": patek_blue,
  };

  

  const navigateToWatch = (watch) => {
    navigate('/watch', { state: { id: watch.id } });
  };

  return (
    <div>
      <button onClick={clearWatches}>Clear Watches</button>
      <div className="container gap-2 m-auto justify-center items-center text-black grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {watches.map((watch, index) => (
          <div className={`card card-${index + 1}`} key={index} onClick={() => navigateToWatch(watch)}>
            <Card pfp={nameToVariableMap[watch.name]} name={watch.name} desc={watch.description} brand={watch.image} />
          </div>
        ))}
      </div>
    </div>
  );
}
