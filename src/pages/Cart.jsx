import styled from 'styled-components'
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Add, Remove } from '@mui/icons-material'
import { mobile } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
padding: 20px;
${mobile({padding: "10px"})}
`


const Title = styled.h1`
font-weight: 300;
text-align: center;
`

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;`

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${(props) => props.type === "filled" && "none"};
background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
color: ${(props) => props.type === "filled" && "white"};
`

const TopTexts = styled.div`
${mobile({display: "none"})}`

const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column"})}
`

const Info = styled.div`
flex: 3;
`
const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column"})}`

const ProductDetail = styled.div`
flex: 2;
display: flex;`

const Image = styled.img`
width: 200px;`

const Details = styled.div`
display: flex;
justify-content: space-around;
flex-direction: column;
padding: 20px;
`

const ProductName = styled.span``

const ProductID = styled.span``

const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ProductAmmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`

const ProductAmmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile({margin: "5px 15px"})}`

const ProductPrice = styled.div`
font-size: 24px;
font-weight: 200;
${mobile({marginBottom: "20px"})}`

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`

const Summary = styled.div`
flex: 1;
height: 50vh;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
`
const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItem = styled.div`
display: flex;
justify-content: space-between;
margin: 30px 0px;
font-weight: ${props => props.type === "total" && "500"};
font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const SummaryButton = styled.button`
width: 100%;
padding: 10px;
background-color: teal;
color: white;
font-weight: 600;
border-radius: 10px;
border: none;
`
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your WishList(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png" />
                <Details>
                  <ProductName><b>Product:</b>MIKKI LINE CLOTH</ProductName>
                  <ProductID><b>ID:</b>65325845</ProductID>
                  <ProductColor color="black"/>
                  <ProductSize>
                    <b>Size:</b>XXL
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmmountContainer>
                  <Add />
                  <ProductAmmount>1</ProductAmmount>
                  <Remove />
                </ProductAmmountContainer>
                <ProductPrice>$ 15.00</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
             <Product>
              <ProductDetail>
                <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png" />
                <Details>
                  <ProductName><b>Product:</b>MIKKI LINE CLOTH</ProductName>
                  <ProductID><b>ID:</b>65325845</ProductID>
                  <ProductColor color="black"/>
                  <ProductSize>
                    <b>Size:</b>XXL
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmmountContainer>
                  <Add />
                  <ProductAmmount>1</ProductAmmount>
                  <Remove />
                </ProductAmmountContainer>
                <ProductPrice>$ 15.00</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 30</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated shipping</SummaryItemText>
              <SummaryItemPrice>$ 4.95</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping discount</SummaryItemText>
              <SummaryItemPrice>$ -4.95</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText >Total</SummaryItemText>
              <SummaryItemPrice>$ 30</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>CHECKOUT NOW</SummaryButton>
          </Summary>
        </Bottom>
     </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart