import React from 'react';
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import styled from 'styled-components';
import { mobile} from '../responsive';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justifyContent:space-between;
  ${mobile({ padding: "0px",flexDirection:"column" })}
 
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
