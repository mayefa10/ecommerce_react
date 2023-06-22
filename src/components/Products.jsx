import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data.js';
import Product from './Product.jsx';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
`;
export default function Products() {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
}
