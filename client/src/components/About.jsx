import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

import photo from '../../src/assets/group-dog-pic.jpg';
import michael from '../../src/assets/Michael.png';
import nick from '../../src/assets/Nick.png';
import peyton from '../../src/assets/Peyton.png';
import sarah from '../../src/assets/Sarah.png';
import devin from '../../src/assets/Devin.png';
import matt from '../../src/assets/Matt.png';

function About() {
  return (
    <Wrapper>
      <br></br>
      <Picture src={photo}></Picture>  
      <Title>About Us</Title>
      <Paragraph>
      Bark! Here at Gimme Paw, we provide exceptional care and attention to your pet while with us. We offer doggy daycare and training services with a fun and safe envirnment by our staff. 
      Check out our staff below!
      </Paragraph>

      <StyledCard>
        <Card.Body>
          <Image src={michael} alt="Image 1" />
          <Caption>This is Michael! Our gifted dog whisperer</Caption>
        
          <Image src={nick} alt="Image 2" />
          <Caption>Everyone meet Nick! Our intern in training</Caption>
      
          <Image src={peyton} alt="Image 3" />
          <Caption>Welcome Peyton! Our head dog trainer</Caption>
       
          <Image src={sarah} alt="Image 4" />
          <Caption>This is our lovely Sarah! One of our dog walkers</Caption>
     
          <Image src={devin} alt="Image 5" />
          <Caption>Meet Devin! He's here for his paw-sitive attitude</Caption>
        
          <Image src={matt} alt="Image 6" />
          <Caption>Say hi to Matt! One of our dog walkers</Caption>
        </Card.Body>
      </StyledCard>

    </Wrapper> 
  );
}

export default About;

const Wrapper = styled.div`
 background-color: #92a8d1;
 font-family: helvetica neue, arial, sans-serif;
 padding-bottom: 20px;
`
const Picture = styled.img`
  display: block;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 360px;
  margin-bottom: 15px;
  box-shadow: 1px 1px 10px #111111;
`
const Title = styled.h2`
  font-family: helvetica neue, arial, sans-serif;
  font-size: 40px;
  text-align: center;
  color: #111111;
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #111111;
  max-width: 30%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`
const Paragraph = styled.h4`
  font-family: helvetica neue, arial, sans-serif;
  text-align: center;
  color: #111111;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #111111;
  max-width: 75%;
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  background-color: #f8f8f8;
`;

const StyledCard = styled(Card)`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 275px;
  box-shadow: 1px 1px 10px #111111;
  margin-top: 30px;
`;

const Caption = styled.p`
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 15px;
`;

const Image = styled.img`
  height: 250px;
  width: 225px;
  border-radius: 15px;
  border: 2px solid black;
`
