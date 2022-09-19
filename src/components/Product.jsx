import { FavoriteBorderOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import { SearchOutlined } from '@mui/icons-material';
import styled from "styled-components"

const Info = styled.div`
position: absolute;

display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
top: 0;
left:0;

background-color: rgba(0,0,0,0.2);
transition: all 0.5s ease;
z-index:3;
opacity: 0;
`

const Container = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
flex: 1;
margin: 5px;
min-width: 280px;
height:350px;
background-color: #f5fbfd;
&:hover ${Info} {
  opacity: 1;
}
`
const Circle = styled.div`
position: absolute;
width:200px;
height:200px;
border-radius:50%;
background-color: white;

`
const Image = styled.img`
height:75%;
z-index:2;
`

const Icon = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
margin: 10px;
transition: all 0.5s ease;
cursor:pointer;
&:hover {
  background-color:#e9f5f5;
  transform: scale(1.5);
}
`

const Product = ({item}) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined/>
        </Icon> 
        <Icon>
          <SearchOutlined/>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined/>
        </Icon> 
      </Info>        
    </Container>
  )
}

export default Product