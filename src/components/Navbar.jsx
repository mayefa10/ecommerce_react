import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartTwoTone } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { mobile } from '../responsive';

const Container = styled.div`
  height: 60px;
  ${mobile({ height: '80px' })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 0px' })}
`;

const Left = styled.div({
  flex: '1',
  display: 'flex',
  alignItems: 'center',
});
const Center = styled.div({
  flex: '1',
  textAlign: 'center',
});
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div({
  border: '0.5px solid lightgray',
  display: 'flex',
  alignItems: 'center',
  marginLeft: '25px',
  padding: '5px',
});
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '20px' })}
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: '50px'})}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: 'gray', fontSize: '16px' }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>GameStore</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartTwoTone />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
