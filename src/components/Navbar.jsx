import React from "react";
import styled from "styled-components";
import {Search, ShoppingCartTwoTone} from '@mui/icons-material';
import { Badge } from "@mui/material";



const Container = styled.div({
  height: "60px",
});

const Wrapper = styled.div({
  padding: "10px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Left = styled.div({
  flex: "1",
  display: "flex",
  alignItems: "center",
});
const Center = styled.div({
  flex: "1",
  textAlign: "center",
});
const Right = styled.div({
  flex: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
});
const Lenguage = styled.span({
  fontSize: "14px",
  cursor: "pointer",
});
const SearchContainer = styled.div({
  border: "0.5px solid lightgray",
  display: "flex",
  alignItems: "center",
  marginLeft: "25px",
  padding: "5px",
});
const Logo = styled.h1({
  fontWeight: "bold",
  
});
const Input = styled.input({
  border: "none",

});
const MenuItem = styled.div ({
  fontSize: "14px",
  cursor:"pointer",
  marginLeft:"25px",
})
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Lenguage>En</Lenguage>
          <SearchContainer>
            <Input />
            <Search style={{color:"gray", fontSize:"16px"
              }}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Ecotienda</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem> 
          <Badge  badgeContent={4} color="primary">
          <ShoppingCartTwoTone/>
      </Badge>
      </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
