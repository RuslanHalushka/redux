import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Header} from "./components/header";
import './styles.css';
import {ProductList} from "./components/product-list";
import {SET_PRODUCTS, setProducts} from './redux'

export default function App(){
    const {cart, wishlist, products} = useSelector(
        ({cart: {cart}, wishlist: {wishlist}, products: {products}})=>({
            cart, wishlist, products
        })
    );

    const dispatch = useDispatch();
    const fetchData = useCallback(async ()=>{
        const url = 'https://fakestoreapi.com/products';
        const response = await fetch(url).then(value => value.json());
        dispatch({type: SET_PRODUCTS, payload: response})
    })

    useEffect(()=>{
        fetchData()
    }, [dispatch])

    return(
        <div>
            {products.length}
            <Header/>
            <ProductList products = {products}/>
        </div>
    )
}
