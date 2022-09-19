import styled from "styled-components"

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;

height: 40px;
background-color: teal;
color: white;
font-size: 16px;
font-weight: 700;
`

const Announcement = () => {
  return (
    <Container>
      Super Deal! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Announcement