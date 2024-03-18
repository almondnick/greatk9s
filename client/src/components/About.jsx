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
      <Picture src={photo}></Picture>  
      <Title>About Us</Title>
      <Paragraph>
      Here at Gimme Paw, we provide exceptional care and attention to your pet while with us. We offer doggy daycare and training services with a fun and safe envirnment by our staff. 
      Check out our staff below!
      </Paragraph>

      <StyledCard>
        <Card.Body>
          <Michael src={michael}></Michael>
          <Card.Text>
            This is Michael! Our gifted dog whisperer
          </Card.Text>
        </Card.Body>
      </StyledCard>

      <StyledCard>
        <Card.Body>
          <Nick src={nick}></Nick>
          <Card.Text>
            Everyone meet Nick! Our intern in training
          </Card.Text>
        </Card.Body>
      </StyledCard>

      <StyledCard>
        <Card.Body>
          <Peyton src={peyton}></Peyton>
          <Card.Text>
            Welcome Peyton! Our head dog trainer
          </Card.Text>
        </Card.Body>
      </StyledCard>

      <StyledCard>
        <Card.Body>
          <Sarah src={sarah}></Sarah>
          <Card.Text>
            This is our lovely Sarah! One of our dog walkers (and usually the dog's favorite)
          </Card.Text>
        </Card.Body>
      </StyledCard>

      <StyledCard>
        <Card.Body>
          <Devin src={devin}></Devin>
          <Card.Text>
            This is Devin! He's here for his paw-sitive attitude
          </Card.Text>
        </Card.Body>
      </StyledCard>

      <StyledCard>
        <Card.Body>
          <Matt src={matt}></Matt>
          <Card.Text>
            Say hi to Matt! One of our dog walkers
          </Card.Text>
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
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  border-bottom: 3px solid #111111;
`
const Title = styled.h2`
  text-align: center;
  padding: 25px 20px 20px;
  font-weight: bold;
  color: #111111
`
const Paragraph = styled.h4`
  text-align: center;
  font-size: 20px;
  margin-left: 30px;
  margin-right: 30px;
`
const StyledCard = styled(Card)`
  margin: 30px auto;
  margin-bottom: 20px;
  width: 300px;
  text-align: center;
  box-shadow: 1px 1px 10px #111111;
`

const Michael = styled.img`
  border-radius: 5px;
`
const Nick = styled.img`
  height: 300px;
  width: 225px;
  border-radius: 5px;
`
const Peyton = styled.img`
  height: 250px;
  width: 200px;
  border-radius: 5px;
`
const Sarah = styled.img`
  height: 300px;
  width: 200px;
  border-radius: 5px;
`
const Devin = styled.img`
  height: 300px;
  width: 200px;
  border-radius: 5px;
`
const Matt = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 5px;
`