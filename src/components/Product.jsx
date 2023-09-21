import React from 'react';
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

const Icon = styled.div`
    opacity:0;
    width:40pz;
    height.40px;
    border-radius:50%;
    background-color:white;
    display:flex;
    align-item:center;
    justify-content:center;
    margin:10px;
    transition:all 0.5s ease;
    &:hover{
        background-color:#f2f2f2;
        transform:scale(1.1);
    }
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  position: relative;

  &:hover ${Icon}{
    opacity:1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
`;

const Image = styled.img`
  height: 70%;
  width: 80%;
  border-radius: 50%;
  z-index: 2;
`;
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:all 0.5s ease;
  cursor:pointer;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <SearchOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderRoundedIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
