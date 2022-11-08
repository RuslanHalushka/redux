import React from "react";
import {ProductItem} from "../product-item";

export const ProductList = ({products})=>{

    return(
        <div>
            {products.map((product) =>{
                <ProductItem key = {product.id} product = {product}/>
            })}
        </div>
    )

}

