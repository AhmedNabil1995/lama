import React from 'react'
import styled from 'styled-components';
import { FavoriteBorderOutlined, SearchOutlined, ShopOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';


const ControlContainer = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0,0,0,0.3);
   margin: auto;
   display: none;
   justify-content: center;
   align-items: center;
   transition:all 0.3s ease;
`

const Container = styled.div`
    margin: 20px;
    border-radius: 10px;
    max-width: 300px;
    overflow: hidden;
    height: 400px;
    flex-grow:1 ;
    position: relative;
    background-color: #dcf5f8;
    &:hover ${ControlContainer}
    {
        display: flex;
    } 
`


const Icon = styled.span`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    background-color:rgba(255,255,255,0.6);
    justify-content: center;
    margin: 5px;
    align-items: center;
    cursor: pointer;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`



export const Product = (props) => {
    let {item} = props;
  return (
    <Container>
        <Img src={item.thumbnail}/>
        <ControlContainer>
            <Icon>
                <ShopOutlined />
            </Icon>
            <Icon>
                <Link to={`/products/${item.id}`}>
                <SearchOutlined />
                </Link>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </ControlContainer>
    </Container>
  )
}
