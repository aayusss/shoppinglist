import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProductComponents from './ProductComponents'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setProducts } from '../redux/ProductActions'

const ProductListing = () => {
    const products=useSelector((state) => state)
    const dispatch=useDispatch()
    const fetchData = async()=>{
        const response = await axios.get("https://fakestoreapi.com/products").catch((err)=>{
            console.log("err",err)
        });
        dispatch(setProducts(response.data))
    }
    useEffect(()=>{
        fetchData();
    },[]);
    console.log(products)
    return (
        <div className="ui grid container">
            <ProductComponents/>
        </div>
    )
}

export default ProductListing
