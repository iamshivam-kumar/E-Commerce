import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../component/Breadcrumbs/Breadcrumb";
import ProductDisplay from "../component/ProductDisplay/ProductDisplay";
import { ShopContext } from "../component/Context/ShopContext";
import all_product from "../component/data/all_product";


const Product = () => {
    const allproductvalue = useContext(ShopContext);
    const {id} = useParams();
    console.log(id)
    const product = allproductvalue[0] && allproductvalue[0].find((e) => e.id === Number(id));

    console.log(all_product,product)

    return (
        <div>
            {product ? (
                <div>
                    <Breadcrumb product={product} />
                    <ProductDisplay product={product} />
                </div>
            ) : (
                <p>Product not found</p>
                
            )}
        </div>
    );
}

export default Product;

