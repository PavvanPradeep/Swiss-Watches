import React from "react";
import { useNavigate } from "react-router-dom"
// import './CardsCollection.css'

import {Card, ap_1159, royaloak_minute, royaloak_perpetual, carrera_date, carrera_porsche, carrera, daydate_green, daydate_gold, daydate_blue,patek_green,patek_teal,patek_blue} from "./images.jsx" 


export default function CardsCollection() {

    // Navigate to watches
    const navigate = useNavigate();

    const navigateToWatch = (imageSrc) => {
        // window.scrollTo({
        //     top: 0
        //   });
        navigate('/watch',{ state: { image: imageSrc } });
    }

    return(
        <div className="container gap-2 m-auto justify-center items-center text-black grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <div className="card card-1" onClick={() => navigateToWatch(ap_1159)}> <Card pfp={ap_1159} name="Code 11.59 by Audemars Piguet"  desc="Manual winding ultralat" brand="Audemars Piguet"/></div>
            <div className="card card-2" onClick={() => navigateToWatch(royaloak_perpetual)}><Card pfp={royaloak_perpetual} name="Code 11.59 by Audemars Piguet" desc="Manual winding ultralat" brand="Rolex"/></div>
            <div className="card card-3" onClick={() => navigateToWatch(royaloak_minute)}><Card pfp={royaloak_minute} name="Code 11.59 by Audemars Piguet" desc="Manual winding ultralat" brand="Rolex"/></div>
            <div className="card card-4" onClick={() => navigateToWatch(carrera_date)}><Card pfp={carrera_date} name="Code 11.59 by Audemars Piguet" desc="Manual winding ultralat" brand="Rolex"/></div>
            <div className="card card-5" onClick={() => navigateToWatch(carrera_porsche)}><Card pfp={carrera_porsche} name="Code 11.59 by Audemars Piguet" desc="Manual winding ultralat" brand="Rolex"/></div>
            <div className="card card-6" onClick={() => navigateToWatch(carrera)}><Card pfp={carrera} name="Code 11.59 by Audemars Piguet" desc="Manual winding ultralat" brand="Rolex"/></div>
            <div className="card card-7" onClick={() => navigateToWatch(daydate_green)}><Card pfp={daydate_green} name="Code 11.59 by Audemars Piguet" desc="Manual winding ultralat" brand="Rolex"/></div>
            <div className="card card-8" onClick={() => navigateToWatch(daydate_gold)}><Card pfp={daydate_gold} name="Code 11.59 by Audemars Piguet" desc="Manual winding ultralat" brand="Rolex"/></div>
            <div className="card card-9" onClick={() => navigateToWatch(daydate_blue)}><Card pfp={daydate_blue} name="Code 11.59 by Audemars Piguet" desc="Manual winding ultralat" brand="Rolex"/></div>
            <div className="card card-10" onClick={() => navigateToWatch(patek_green)}><Card pfp={patek_green} name="Code 11.59 by Audemars Piguet" desc="Manual winding ultralat" brand="Rolex"/></div>
            <div className="card card-11" onClick={() => navigateToWatch(patek_teal)}><Card pfp={patek_teal} name="Code 11.59 by Audemars Piguet" desc="Manual winding ultralat" brand="Rolex"/></div>
            <div className="card card-12" onClick={() => navigateToWatch(patek_blue)}><Card pfp={patek_blue} name="Code 11.59 by Audemars Piguet" desc="Manual winding ultralat" brand="Rolex"/></div>
        </div>
    )
}