import React from 'react'
import styled from 'styled-components'
import { Category } from './Category'
const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: center;
    flex-wrap: wrap;
`

export const Catergories = ({categories}) => {
  return (
    <Container>
        {categories?.map((item)=>{
            return (<Category item={item} key={item.id} />)
        })}
    </Container>
  )
}
