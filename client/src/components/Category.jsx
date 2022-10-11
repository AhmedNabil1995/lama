import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 300px;
    margin: 10px;
    border-radius: 10px;
    overflow: hidden;
    width: 300px;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const InfoContainer = styled.div`
    position: absolute;
    text-align: center;
`
const H1 = styled.h1`
    color: white;
`
const Button = styled.button`
    background-color: white;
    font-weight: 300;
    border: none;
    padding: 10px;
    cursor: pointer;
`

export const Category = (props) => {
    let {item} = props;
  return (
    <Container>
        <Img src={item.img} alt=''/>
        <InfoContainer>
            <H1>{item.title}</H1>
        <Link to={`/products/?category=${item.title}`}>
            <Button>shop Now</Button>
        </Link>
        </InfoContainer>
    </Container>
  )
}
