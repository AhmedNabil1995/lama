import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 20px;
    background-color: #f5efe8;
`
const Title = styled.h1`
    font-size: 60px;
`
const Desc = styled.p`
    font-size: 20px;
    font-weight: 300;
`
const Div = styled.div`
    border:1px solid #eee;
    width: 50%;
    display: flex;
    align-items: center;
    height: 40px;
`
const Input = styled.input`
    border: none;
    outline: none;
    padding-left: 20px;
    height: 100%;
    flex: 8;
`
const Button = styled.button`
    background-color: teal;
    color: white;
    border: none;
    height: 100%;
    flex: 1;
`

export const Newsletter = () => {
  return (
    <Container>
        <Title>NewSeletter</Title>
        <Desc>get timly update from your favourite products</Desc>
        <Div>
            <Input />
            <Button>
                
            </Button>
        </Div>
    </Container>
  )
}
