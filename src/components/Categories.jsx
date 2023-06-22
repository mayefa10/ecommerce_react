import React from 'react';
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justifyContent:space-between;
`;

export default function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id}/>
      ))}
    </Container>
  );
}
