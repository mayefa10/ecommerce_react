import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import { Footer } from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: '10px', flexDirection: 'column' })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: '40vh' })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: '10px' })}
`;

const Title = styled.h1`
  font-weight: 200 bold;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 100%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({width:'100%' })}
`;

const Filter = styled.div`
display:flex,
align-items:center;


`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterGame = styled.select`
  margin-left: 8px;
  padding: 3px;
  ${mobile({marginLeft:' 128px' })}
`;

const FilterGameOptions = styled.option``;

const AddContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
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
  border: 1px solid #0f2441;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 6px;
`;

const Button = styled.button`
  padding: 15px;
  cursor: pointer;
  border: 2px solid #0f2441;
  background-color: white;
  font-size: 16px;

  &:hover {
    background-color: #0f2441;
    color: white;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="../assets/miniConsoles.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>All for gamers</Title>
          <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
            magni deserunt quo vero sunt nam labore, dicta adipisci
            exercitationem itaque laborum assumenda expedita aliquid? Distinctio
            totam at error eos ab.
          </Desc>
          <Price>$ 50</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Games</FilterTitle>
              <FilterGame>
                <FilterGameOptions>Popular Games</FilterGameOptions>
                <FilterGameOptions>Education games</FilterGameOptions>
                <FilterGameOptions>Adventure games</FilterGameOptions>
                <FilterGameOptions>Table game</FilterGameOptions>
              </FilterGame>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
