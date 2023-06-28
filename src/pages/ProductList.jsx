import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from "../components/Newsletter";
import Products from '../components/Products';
import { Footer } from '../components/Footer';

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right:20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right:20px;
`;
const Option = styled.option`
 
`;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Games
            </Option>
            <Option>Popular games</Option>
            <Option>Traditional games</Option>
            <Option>Childish games</Option>
            <Option>Table games</Option>
             <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
             Video Games
            </Option>
            <Option>Action</Option>
            <Option>Adventure</Option>
            <Option>Arcadian</Option>
            <Option>Sports</Option>
            <Option>Simulation</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
