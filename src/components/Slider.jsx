import styled from "styled-components";
import ArrowLeftTwoToneIcon from "@mui/icons-material/ArrowLeftTwoTone";
import ArrowRightTwoToneIcon from "@mui/icons-material/ArrowRightTwoTone";
import imgBanner from "../assets/banner-image.png";

const Container = styled.div({
  width: "100%",
  height: "100vh",
  display: "flex",
  position: "relative",
  backgroundColor:"orange",
});
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  
`;
const Wrapper= styled.div`
   height:100%;

`;
const Slide = styled.div`
    display:flex;
    align-items:center;
    width:100vw;
    height:100vh;
`;
const ImgContainer = styled.div`
  height:100%;
  flex:1,

`;
const Image = styled.img`
  height:80%;
`;
const InfoContainer = styled.div`
    flex:1,
    padding:50%;
`;
const Title = styled.h1`
 
`
const Description = styled.p`

`
const Button = styled.button`

`
const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftTwoToneIcon />
      </Arrow>
      <Wrapper>
        <ImgContainer>
        <Image src={imgBanner}/>
        
        <InfoContainer>
          <Title>All in games and technology</Title>
          <Description>All in games and technology</Description>
          <Button></Button>
          
        </InfoContainer>
        </ImgContainer>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightTwoToneIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
