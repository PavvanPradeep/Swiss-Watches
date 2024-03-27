import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Card from "./Card"; // Assuming you have a Card component
import { ap_1159, cactus_jack, royaloak_perpetual, carrera_date, carrera_porsche, carrera, daydate_green, daydate_gold, daydate_blue, patek_green, patek_teal, patek_blue } from "./images.jsx";
import {ap_1159_h, cactus_jack_h, royaloak_perpetual_h, carrera_date_h, carrera_porsche_h, carrera_h, daydate_green_h, daydate_gold_h, daydate_blue_h,
  patek_green_h,patek_teal_h,patek_blue_h
} from './hoverImages.jsx'

export default function CardsCollection() {
  const [watches, setWatches] = useState([]);
  const navigate = useNavigate();

  const fetchWatches = async () => {
    try {
      console.log("url:",import.meta.env.VITE_BACKEND_URL)
      const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/auth/watches/");
      // const response = await axios.get("http://127.0.0.1:8000/auth/watches/");
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
    "Royal Oak Cactus Jack": cactus_jack,
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

  const nameToVariableMap1 = {
    "Code 11.59 by Audemars Piguet": ap_1159_h,
    "Royal Oak Cactus Jack": cactus_jack_h,
    "Royal Oak Perpetual Calendar": royaloak_perpetual_h,
    "Carrera Date": carrera_date_h,
    "Carrera Chronosprint x Porsche": carrera_porsche_h,
    "Carrera": carrera_h,
    "Day-Date 36 Everose Gold Green Dial": daydate_green_h,
    "Day-Date 36 Gold": daydate_gold_h,
    "Day-Date 36 White Gold Light Blue Dial": daydate_blue_h,
    "Patek Philippe Grand Complications 6300G-001": patek_green_h,
    "Patek Philippe Grand Complications 5531R-001": patek_teal_h,
    "Patek Philippe Grand Complications 5905R-010": patek_blue_h,
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
            <Card pfp_hover={nameToVariableMap1[watch.name]} pfp={nameToVariableMap[watch.name]} name={watch.name} desc={watch.description} brand={watch.image} />
          </div>
        ))}
      </div>
    </div>
  );
}
