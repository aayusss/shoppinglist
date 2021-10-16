import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { selectedProducts } from '../redux/ProductActions';

const ProductDetails = () => {
    const product=useSelector((state)=>state)
    const dispatch=useDispatch();
    const {productId}=useParams();
    const fetchProductDetails= async () =>{
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err)=>{
            console.log(err)
        })
     dispatch(selectedProducts(response.data))
    }
    useEffect(()=>{
        if(productId && productId!=="") fetchProductDetails()
    },[productId])

    return (
        <div>
            <h2>Product Details</h2>
        </div>
    )
}

export default ProductDetails
