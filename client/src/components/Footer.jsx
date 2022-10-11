import React from 'react'
import {Facebook,Instagram,Twitter,Pinterest,Phone,Room,MailOutline} from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;
const Left = styled.div`
flex: 1;
`;

const Logo = styled.h1`
    text-transform: uppercase;
`;
const Desc = styled.p`
    margin-bottom: 20px;
    font-weight: 300;
`;
const SocailContainer = styled.div`
    display: flex;

`;
const SocailIcon = styled.div`
    margin-left: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #${props=>props.color};
    border-radius: 50%;
    color: white;
`;


const Center = styled.div`
flex: 1;
padding: 20px;
`;

const Title = styled.h3``;
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
font-weight: 400;
`;
const ListItem = styled.li`
    width: 50%;
`;

const Right = styled.div`
flex: 1;
padding: 20px;
`;
const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`;
const Payment = styled.img`
    margin-top: 20px;
    width: 50%;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Lama</Logo>
            <Desc>There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.</Desc>
            <SocailContainer>
                <SocailIcon color="3B5999">
                    <Facebook />
                </SocailIcon>
                <SocailIcon color="E4405F">
                    <Instagram />
                </SocailIcon>
                <SocailIcon color="55ACEE">
                    <Twitter />
                </SocailIcon>
                <SocailIcon color="E60023">
                     <Pinterest />
                </SocailIcon>
            </SocailContainer>
        </Left>
        <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
        </Center>
        <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@lama.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer
