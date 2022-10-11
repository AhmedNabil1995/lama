import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Product } from './Product'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: center;
    flex-wrap: wrap;
`

const Products = ({cat}) => {

  const [products,setProducts] = useState([]);

  useEffect(()=>{
    console.log(cat);
    const getproducts = async()=>{
        let res = await axios.get(cat?`http://localhost:8000/products?category=${cat}`:`http://localhost:8000/products?limit=20&page=1`);
        setProducts(res.data);
    }
    getproducts();
  },[cat])

  return (
    <Container>
        {products?.map((item)=>{
            return (<Product item={item} key={item.id} />)
        })}
    </Container>
  )
}

export default Products
