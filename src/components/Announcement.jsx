import styled from "styled-components"

const Container= styled.div ({
    height:"30px",
    background:" #0f2441",
    color:"white",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    fontSize:"14px",
    fontWeight:"500",

})

const Announcement = () => {
  return (
    <Container >
        Super Deal! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Announcement;