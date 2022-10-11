import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const Container = styled.div`
    height:60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display : flex;
    align-items:center;
    justify-content: space-between;
`;

const Left = styled.div`
display : flex;
align-items:center;
flex: 1;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
     display: flex;
     align-items: center;
     border: 0.5px solid lightgray;
     padding: 5px;
     margin-left: 25px;
`;

const Input = styled.input`
     border: none;
     outline: none;
`;


const Center = styled.div`
  flex: 1;
`;

const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
`

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenueItem = styled.div`
  margin-left: 25px;
  cursor: pointer;
  font-size: 14px;
`;



const NavBar = () => {
  let {count} = useSelector(state=>state.cart)
  return (
    <Container>
      <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input></Input>
                <Search style={{ color: "gray", fontSize: 16 }}/>
            </SearchContainer>
        </Left>
        <Center>
          <Link to='/'>
          <Logo>LAMA.</Logo>
          </Link>
        </Center>
        <Right>
          <Link to='/register'>
          <MenueItem>Register</MenueItem>
          </Link>
          <Link to='/login'>
          <MenueItem>Sign in</MenueItem>
          </Link>
          <Link to='/cart'>
          <MenueItem>
            <Badge badgeContent={count} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenueItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default NavBar
