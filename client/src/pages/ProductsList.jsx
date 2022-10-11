import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { Newsletter } from '../components/Newsletter'
import Products from '../components/Products'

const Title = styled.h1`
margin-left: 20px;
`;
const FilterContainer = styled.div`
padding: 20px;
display: flex;
justify-content: space-between;
`;
const Filter = styled.div`
display: flex;
align-items: center;
`;
const FilterText = styled.p`
margin-right: 10px;
font-weight: 500;
`;
const Select = styled.select`
margin: 0 5px;
padding: 8px;
font-size: 16px;
`;
const Option = styled.option`
padding: 5px;
font-weight: 300;
`;

 const ProductsList = () => {
    let cat = useLocation().search.split('=')[1];
  return (
    <>
        <NavBar />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products</FilterText>
                <Select defaultValue={`Color`}>
                    <Option disabled={true}>Color</Option>
                    <Option>red</Option>
                    <Option>yellow</Option>
                    <Option>blue</Option>
                    <Option>orange</Option>
                </Select>
                <Select defaultValue={`Size`}>
                    <Option disabled={true}>Size</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
            <FilterText>sort Products</FilterText>
                <Select defaultValue={`Newest`}>
                    <Option disabled={true}>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (dsc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
         <Products cat={cat}/> 
        <Newsletter />
        <Footer />
    </>
  )
}

export default ProductsList;