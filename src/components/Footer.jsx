import { Facebook, Instagram, LinkedIn, MailOutlined, Phone, Room, Twitter } from '@mui/icons-material';
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
display: flex;
${mobile({flexDirection: "column"})};

`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1`

`
const Description = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon = styled.div`
display: flex;
align-items: center;
justify-content: center;

width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
margin-right: 20px;
`

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({display: "none"})};
`;

const Title = styled.h3`
margin-bottom: 30px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`
const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({backgroundColor: "#eee"})};
`;

const ContactItem = styled.div`
display: flex;
align-items: center;
${'' /* justify-content: center; */}
margin-bottom: 20px;

`;

const Payment = styled.img`
width: 75%
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Ladmy</Logo>
        <Description>
          In our store You can find everything you want
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook/>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram/>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="3B5990">
            <LinkedIn/>
          </SocialIcon> 
        </SocialContainer>  
      </Left>    
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Home</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}} />
         754 Chestnout Ave, NorthHumberland 45879 
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/>
         +1 362 25 68
        </ContactItem>
        <ContactItem>
          <MailOutlined style={{marginRight:"10px"}}/>
         info@sg-goods.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer