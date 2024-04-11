import React, { useContext } from 'react';
import './ProductDisplay.css';
import { RiStarLine } from 'react-icons/ri';
import { ShopContext } from '../Context/ShopContext';
const ProductDisplay = ({product}) => {
    
    const all =useContext(ShopContext);
    

    console.log(product);
    return (
        <div className='productDisplay'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>
                    <img src={product.image} alt="" />
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                </div> 
                <div className='productdisplay-img'>
                    <img className='productdisplay-main-img' src={product.image} alt=''/>
                </div>
            </div>
            <div className='productdisplay-right'>
            
                <h1>{product.name}</h1>
                <div className='productdisplay-right-stars'>
                    <RiStarLine />
                    <RiStarLine />
                    <RiStarLine />
                    <RiStarLine />
                    <RiStarLine />
                    <p>(122)</p>
                </div>
                <div className='productdisplay-right-prices'>
                <div className='productdisplay-right-prices-old'>${product.old_price}</div>
                <div className='productdisplay-right-prices-new'>${product.new_price}</div>
                </div>
            
            <div className='productdisplay-right-description'>
            At one glance, a customer can quickly get all the essential details. 
            The descriptions are brief and all one-line sentences. They are also 
            well-detailed with technical information.
            </div>
            <div className='productdisplay-right-size'>
                <h1>Select Size</h1>
            <div className='productdisplay-right-sizes'>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
            </div>
            <button onClick={()=>{all[2](product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category:</span>Women, T-Shirt, Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags:</span>Modern, Latest, Crop Top</p>
        </div>
        </div>
        
    );
}

export default ProductDisplay;

