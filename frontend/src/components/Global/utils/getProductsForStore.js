import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts as listProducts } from '../../../redux/actions/productActions'


export default function GetProductsForStore() {
    const dispatch = useDispatch()

    const getProducts = useSelector(state => state.getProducts)
    const { products, loading, error } = getProducts

        dispatch(listProducts())

    console.log(products)

    return { products, loading, error }
}