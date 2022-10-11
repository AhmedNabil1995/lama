import { Add, Remove } from "@material-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import {Newsletter} from "../components/Newsletter";
import {publicRequest} from '../requestMethods'
import {useDispatch} from 'react-redux'
import {addProduct} from '../Redux/cartSlice'

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;

`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;

`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  let [product,setproduct] = useState({});
  let {id} = useParams();
  let [quantity,setQuantity] = useState(1);
  let dispatch = useDispatch();
  useEffect(()=>{
     const getProduct = async()=>{
     let res =await publicRequest.get(`/products/${id}`);
     setproduct(res.data)
     }
     getProduct()
  },[id])

const addToCart =()=>{

  dispatch(addProduct({...product,quantity}))
}

const handleClick =(plus)=>{
  if(!plus){
    quantity>1 && setQuantity(quantity-1)
    }else{
      setQuantity(quantity+1)
    }
}

  return (
    <Container>
      <NavBar />
      <Wrapper>
        <ImgContainer>
          <Image src={product?.thumbnail} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product?.title}</Title>
          <Desc>
            {product?.description}
          </Desc>
          <Price>$ {product?.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <span onClick={()=>handleClick(false)}>
              <Remove />
              </span>
              <Amount>{quantity}</Amount>
              <span onClick={()=>handleClick(true)}>
              <Add />
              </span>
            </AmountContainer>
            <Button onClick={addToCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;