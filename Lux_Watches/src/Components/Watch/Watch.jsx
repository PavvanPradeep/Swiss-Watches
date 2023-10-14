import React from 'react';
import { useLocation } from 'react-router-dom';
import './Watch.css';
import Image from './Image';

export default function Watch() {
    const location = useLocation();
    const image = location.state.image;

    return (
        <>
            <div className='watch-container'>
                <div className='image'>
                    <Image src={image} />
                </div>
                <div className='description'>
                    <p>Code 11.59</p>
                    <br />
                    <p>$17,500</p>
                    <br />
                    <button className='btn'>Book an Appointment</button>
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
