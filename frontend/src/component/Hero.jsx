import React from 'react';
import './Hero.css';
import {RiArrowRightLine} from 'react-icons/ri';

function Hero(){
    return(
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src='https://tse2.mm.bing.net/th?id=OIP.q2cp093BaDbMp2Cicfu0FAHaHa&pid=Api&P=0&h=180' alt=''/>                 
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
        
        <div className='hero-latest-btn'>
            <div>Latest Collection</div>
             {/* <div>Aroow icon</div> */}
             <RiArrowRightLine/>
             
             {/* <img src='https://tse4.mm.bing.net/th?id=OIP.AfSZUFp1_i0UgpTcI9veFQHaF1&pid=Api&P=0&h=20' alt=''/> */}

        </div>
        </div>

        <div className='hero-right'>
            <img src='https://tse1.mm.bing.net/th?id=OIP.KU6Z0D7OFAbZxkeSVXUkpQHaFj&pid=Api&P=0&h=500' alt=''/>
            
        </div>

    </div>
    ); 
}

export default Hero;