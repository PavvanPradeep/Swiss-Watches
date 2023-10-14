import React from "react";
import { useNavigate } from "react-router-dom"
import './CardsCollection.css'

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
        <div className="container">
            <div className="card card-1" onClick={() => navigateToWatch(ap_1159)}><Card src={ap_1159}/></div>
            <div className="card card-2" onClick={() => navigateToWatch(royaloak_perpetual)}><Card src={royaloak_perpetual}/></div>
            <div className="card card-3" onClick={() => navigateToWatch(royaloak_minute)}><Card src={royaloak_minute}/></div>
            <div className="card card-4" onClick={() => navigateToWatch(carrera_date)}><Card src={carrera_date}/></div>
            <div className="card card-5" onClick={() => navigateToWatch(carrera_porsche)}><Card src={carrera_porsche}/></div>
            <div className="card card-6" onClick={() => navigateToWatch(carrera)}><Card src={carrera}/></div>
            <div className="card card-7" onClick={() => navigateToWatch(daydate_green)}><Card src={daydate_green}/></div>
            <div className="card card-8" onClick={() => navigateToWatch(daydate_gold)}><Card src={daydate_gold}/></div>
            <div className="card card-9" onClick={() => navigateToWatch(daydate_blue)}><Card src={daydate_blue}/></div>
            <div className="card card-10" onClick={() => navigateToWatch(patek_green)}><Card src={patek_green}/></div>
            <div className="card card-11" onClick={() => navigateToWatch(patek_teal)}><Card src={patek_teal}/></div>
            <div className="card card-12" onClick={() => navigateToWatch(patek_blue)}><Card src={patek_blue}/></div>
        </div>
    )
}