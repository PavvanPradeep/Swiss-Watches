import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import './Watch.css';
import Image from './Image';
import { ap_1159, royaloak_minute, royaloak_perpetual, carrera_date, carrera_porsche, carrera, daydate_green, daydate_gold, daydate_blue,patek_green,patek_teal,patek_blue} from "../WatchCollection/images" 


export default function Watch() {

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

      const location = useLocation();
      const navigate = useNavigate();
      const [watches, setWatches] = useState([]);
      const [watchDetails, setWatchDetails] = useState({});

    
      const id = location.state.id;
      
      console.log(id);
        // console.log(new_variable);



        useEffect(() => {
            const fetchAllWatches = async () => {
                try {
                    const response = await axios.get('http://127.0.0.1:8000/auth/watches/');
                    const userResponse = axios.get('http://127.0.0.1:8000/auth/hello');
                    console.log("User response",userResponse.data);
                    setWatches(response.data);
                    console.log("All watches data received successfully:", response.data);
    
                    const details = response.data[id-1];
                    console.log(details);
                    if (details) {
                        console.log(details['name']);
                        const new_variable = nameToVariableMap[details['name']];
                        console.log(new_variable);
    
                        // set the state of watchDetails
                        setWatchDetails(details);
                    }
                } catch (error) {
                    console.error("Error fetching all watches data:", error);
                    console.error("Error details:", error.response.data);
                    // Redirect to a 404 page or handle the error appropriately
                    navigate('/404');
                }
            };
    
            if(watches.length === 0){
                fetchAllWatches();
            }
        }, [watches, navigate]);


        const saveToBackend = async () => {
            const confirmed = window.confirm("Added to cart");
            confirmed;
            try {
                // Hardcoded values
                const userId = 1;
                const quantity = 1; // You can adjust this value as needed
        
                // Dynamic values from watchDetails
                const watchId = id;
                const totalPrice = watchDetails['price'];
        
                // Create the Cart object
                const cartData = {
                    user_id: userId,
                    watch_id: watchId,
                    quantity: quantity,
                    total_price: totalPrice,
                };
        
                // Send the Cart object to the backend
                const response = await axios.post('http://127.0.0.1:8000/auth/cart/', cartData);
                console.log("Cart data received successfully:", response.data);
            } catch (error) {
                console.error("Error posting cart data:", error);
                console.error("Error details:", error.response ? error.response.data : error.message);
            }
        };
        
        




    return (
        <>
            <div className='watch-container'>
                <div className='image'>
                    <Image src={nameToVariableMap[watchDetails['name']]}/>
                </div>
                <div className='description'>
                    <p>{watchDetails['name']}</p>
                    <br />
                    <p>{watchDetails['price']}</p>
                    <br />
                    <button className='btn' onClick={saveToBackend}>Add to Cart</button>
                    <span><i className="fa fa-heart"></i></span>
                    <span><i className="fas fa-share" aria-hidden="true"></i></span><br />
                    <div className='assurance'>
                        <p>Two Year Warranty</p>
                        <br />
                        <p>Swiss made</p>
                    </div>
                </div>
            </div>

        <div className='more-description'>
            <p>Description</p>
            <p>The Code 11.59 by Audemars Piguet Ultra-Complication Universelle (RD#4) is a horological marvel that pushes the boundaries of what is possible in watchmaking. This timepiece represents the epitome of Audemars Piguet's technical prowess and innovative spirit. Its ultra-complication features a stunning array of intricate functions, seamlessly integrated into a singular masterpiece. From celestial displays to intricate chronometric functions, every detail of this watch is a testament to Audemars Piguet's dedication to precision and excellence. The design is a harmonious blend of contemporary elegance and cutting-edge engineering, demonstrating Audemars Piguet's commitment to both form and function. The Ultra-Complication Universelle (RD#4) is not just a watch; it is a testament to the heights that can be achieved when craftsmanship and innovation come together in perfect harmony. This timepiece stands as a beacon of excellence in the world of haute horlogerie, a true collector's dream for those who appreciate the pinnacle of watchmaking artistry.</p>
        </div>
        </>
    );
}
