import React, { useContext } from "react";
import './CSS/ShopCategory.css';
import { ShopContext } from "../component/Context/ShopContext";
import {RiArrowDropDownLine} from'react-icons/ri';
import Item from "../component/Item/Item";
import all_product from "../component/data/all_product";

//import all_product from "../component/data/all_product";
// import data_newCollection from "../component/data/NewCollection_data";
// import data_product from "../component/data/product_data";

const ShopCategory=(props)=>{
    // const {all_product}= useContext(ShopContext);
    // const {all_product}=useContext(ShopContext);
    const { products } = useContext(ShopContext);

    return (
    <div className="shop-category">
        {/* <img className="shopcategory-banner" src={props.banner} alt=""/> */}
        
        <img className="shopcategory-banner" src={props.banner} alt="" />


        <div className="shopcategory-indexSort">
            <p>
                <span>Showing 1-12</span> out of 36 products
            </p>
            <div className="shopcategory-sort">
                Sort by <RiArrowDropDownLine/>
            </div>
        </div>
        <div className="shopcategory-products">
            {all_product.map((item)=>{
                if(props.category===item.category){
                    return<Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                }
                else{
                    return null;
                }
            })}

        </div> 
        <div className="shopcategory-loadmore">
            Explore More

        </div>
    
    </div>);
}

export default ShopCategory;
