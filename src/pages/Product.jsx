import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, Remove } from "@mui/icons-material"
import { mobile } from "../responsive"

const Container = styled.div``

const Wrapper = styled.div`
display: flex;
padding: 50px;
${mobile({padding: "10px", flexDirection: "column"})};
`

const ImgContainer = styled.div`
flex: 1;`

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({height: "40vh"})}`

const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
${mobile({padding: "10px"})}
`

const Title = styled.h1`
font-weight: 200;`

const Description = styled.p`
margin: 20px 0px;`

const Price = styled.span`
font-size: 40px;
font-weight: 100;`

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
width: 65%;
margin: 30px 0px;
${mobile({width: "100%"})}
`

const Filter = styled.div`
display:flex;
align-items: center;`

const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius:50%;
background-color: ${props => props.color};
margin: 0px 5px;
cursor: pointer;
`

const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
width: 65%;
${mobile({width: "100%"})}`;

const AmountContainer = styled.div`
display:flex;
align-items: center;
font-weight:700;
`;

const Amount = styled.span`
display:flex;
align-items: center;
justify-content: center;
width: 30px;
height: 30px;
border-radius:10px;
border: 1px solid teal;
margin: 0px 5px;`;

const Button = styled.button`
padding: 15px;
border: 2px solid teal;
font-weight: 500;
margin-left: 15px;
background-color: white;
cursor: pointer;
&:hover {
  background-color: #f8f4f4;
}
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png"/>
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jeans</Title>
          <Description>ksjgklrjgfjrgf'sdkvnfkdnsvkjkjrfmvklj;ksjdv
          </Description>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
              <Button>ADD TO CART</Button>
            </AmountContainer>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product