import { ArrowLeftOutlined , ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import {sliderItems} from '../data'

const Container = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
`


const Arrow = styled.div`
position: absolute;
top: 0;
bottom: 0;
margin: auto;
width: 50px;
height: 50px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
background-color: #fff7f7;
right: ${props=>props.direction==='right'&& '10px'};
left: ${props=>props.direction==='left'&& '10px'};
cursor: pointer;
opacity: 0.6;
z-index: 2;
`;
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    padding: 20px;
    transform: translateX(${props=>props.index * -100}vw);
    transition: all 1.5s ease;
`;
const Slide = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: ${props=>props.bg};
`;

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
    width: 100%;
`;
const Img = styled.img`
height: 70%;
`;
const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
`;
const Title = styled.h1`
    font-size: 70px;
    `;
const Desc = styled.p`
    letter-spacing: 2px;
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 500;
`;
const Button = styled.button`
    padding: 10px;
    background-color: transparent;
    cursor: pointer;
    font-size: 24px;
`;



export const Slider= () => {

    let [slideIndex,setSlideIndex] = useState(0);

    const handleClick = (dir)=>{
        if(dir==='left'){
            setSlideIndex(slideIndex>0 ? slideIndex-1: 2);
        }else{
            setSlideIndex(slideIndex<2 ? slideIndex+1 : 0);
        }
    }

  return (
    <Container>
        <Arrow direction='left' onClick={()=>{handleClick('left')}}>
            <ArrowLeftOutlined />
        </Arrow>

        <Wrapper index={slideIndex}>
            {sliderItems.map((item)=>{
                return(
                    <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                    <Img alt=''  src="https://ederbeauty.com/wp-content/themes/ederbeauty/assets/images/hero/eder-beauty-home-hero.jpg"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>Shop Now</Button>
                    </InfoContainer>
                </Slide>
                )
            })}
        </Wrapper>

        <Arrow direction='right' onClick={()=>{handleClick('right')}}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}
