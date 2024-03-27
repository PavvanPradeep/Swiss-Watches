import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import './Watch.css';
import Image from './Image';
import { ap_1159, cactus_jack, royaloak_perpetual, carrera_date, carrera_porsche, carrera, daydate_green, daydate_gold, daydate_blue,patek_green,patek_teal,patek_blue} from "../WatchCollection/images" 


export default function Watch() {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[]);

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

      const location = useLocation();
      const navigate = useNavigate();
      const [watches, setWatches] = useState([]);
      const [watchDetails, setWatchDetails] = useState({});
      const [showCard, setShowCard] = useState(false);
      const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

      const isMounted = useRef(true);

      useEffect(() => {
        // Set the flag to true when the component mounts
        isMounted.current = true;
    
        // Cleanup function to set the flag to false when the component unmounts
        return () => {
          isMounted.current = false;
        };
      }, []);
    


      const onViewCart = () => {
        navigate('/cart');
      };
      
      const AddedToCartCard = ({ watchDetails, onViewCart }) => {
        return (
          <div className="added-to-cart-card">
            <p>Added to cart</p>
            <div>
              <img src={nameToVariableMap[watchDetails['name']]} alt={watchDetails['name']} />
              <p>{watchDetails['name']}</p>
              <p>{watchDetails['price']}</p>
              <button onClick={onViewCart}>View Cart</button>
            </div>
          </div>
        );
      };
      

    
      const id = location.state.id;
      
      console.log(id);
        // console.log(new_variable);



        useEffect(() => {
            const fetchAllWatches = async () => {
                try {
                    const response = await axios.get(import.meta.env.VITE_BACKEND_URL+"/auth/watches/");
                    const userResponse = axios.get(import.meta.env.VITE_BACKEND_URL+"/auth/hello");
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
        
            try {
                // Check user authentication
                const response = await axios.post('http://127.0.0.1:8000/auth/auth/login/', { email: 'hello@gmail.com', password: 'hello1234' });

                setIsUserAuthenticated(true);
          
                // Rest of your saveToBackend function...
                // Check for success or failure and take appropriate actions
                if (response.status === 200) {
                    // Login successful, perform necessary actions
                    console.log("Login successful");
                } else {
                    // Login failed, display error message or take appropriate actions
                    console.log("Login failed");
                }
              } catch (error) {
                console.error("Error checking user authentication:", error);
          
                // Handle the case where the user is not authenticated
                if (error.response && error.response.status === 401) {
                  alert("Please login to add watches to the cart");
                  // You may redirect the user to the login page or show a login modal here
                }
              }



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
                console.error(error.response.data)
                if(error.response.data.error === "Quantity must be 1"){
                    alert("Item already in cart");
                }
            }

            // setShowCard(true);
            // // document.body.classList.add('blur');

            // setTimeout(() => {
            //     setShowCard(false);
            //     // document.body.classList.remove('blur');
            // }, 3000);
        };
        
        




    return (
        <>
            {showCard && <AddedToCartCard watchDetails={watchDetails} onViewCart={() => navigate('/cart')} />}
            <div className='watch-container'>
                <div className='image float-left bg-pale h-full'>
                    <Image src={nameToVariableMap[watchDetails['name']]}/>
                </div>
                <div className='description float-right'>
                    <p><div className='text-3xl font-aliquam'>{watchDetails['name']}</div></p>
                    <br />
                    <p>{watchDetails['price']}</p>
                    <br />
                    <button className='btn' onClick={saveToBackend}>Add to Cart</button>
                    <span><i className="fa fa-heart"></i></span>
                    <span><i className="fas fa-share" aria-hidden="true"></i></span><br />
                    <div className='assurance'>
                        <p>Two Year Warranty</p>
                        <br/>
                        <p>Swiss made</p>
                    </div>
                </div>
            </div>

            <div className='more-description'>
                <p className='desc-header'>Description</p>
                <p className='desc-contents'>{watchDetails['more_description']}</p>
            </div>
        </>
    );
}
