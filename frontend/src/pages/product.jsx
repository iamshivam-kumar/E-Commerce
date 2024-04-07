import React, { useContext } from "react";
import { ShopContext } from "../component/Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrumb from "../component/Breadcrumbs/Breadcrumb";
import ProductDisplay from "../component/ProductDisplay/ProductDisplay";
import all_product from "../component/data/all_product";


const Product = () => {
    //  = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product && all_product.find((e) => e.id === Number(productId));
    console.log(all_product);

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

