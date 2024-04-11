import React, {createContext, useEffect, useState}from "react";
import all_product from '../data/all_product';
export const ShopContext = createContext();

const getDafaultCart = ()=>{
    let cart = {};
    for(let index =0; index < all_product.length+1; index++){
        cart[index]= 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    // const contextValue = {all_product};
    const [cartItems,setCartItems] = useState(getDafaultCart());
    // const [all_product,setAll_product] = useState([]);
    
    // useEffect(()=>{
    //     fetch('http://localhost:7000/allproducts')
    //     .then((response)=>response.json())
    //     .then((data)=>setAll_product(data))
    // },[])

     

    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItems);
    }
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        
    }
    
    //const Products = { all_product,addToCart, removeFromCart,cartItems };


    const allValue = [all_product, cartItems, addToCart, removeFromCart];

    // const Products = {all_product,cartItems}
    // const contextValue = {
    //     products: all_product,
    //     addToCart: addToCart,
    //     removeFromCart: removeFromCart
    // }

    console.log(allValue,"allValue")


    return (
        <ShopContext.Provider value={ allValue }>
            {props.children}

        </ShopContext.Provider>
    )
}

export default ShopContextProvider;