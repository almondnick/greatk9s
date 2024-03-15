import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import photo from '../../src/assets/group-dog-pic.jpeg';
import michael from '../../src/assets/Michael.png';
import nick from '../../src/assets/Nick.png';
import peyton from '../../src/assets/Peyton.png';
import sarah from '../../src/assets/Sarah.png';
import devin from '../../src/assets/Sarah.png';
import matt from '../../src/assets/Sarah.png';

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
            Devin! for now lol
          </Card.Text>
        </Card.Body>
      </StyledCard>

      <StyledCard>
        <Card.Body>
          <Matt src={matt}></Matt>
          <Card.Text>
            Matt! for now lol
          </Card.Text>
        </Card.Body>
      </StyledCard>

    </Wrapper> 
  );
}

export default About;

const Wrapper = styled.div`
 background-color: #92a8d1;
 font-family: baskerville, serif;
`
const Picture = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
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
`
const StyledCard = styled(Card)`
  margin: 20px auto;
  max-width: 50%;
  text-align: center;
`

const Michael = styled.img`
  border-radius: 5px;
`
const Nick = styled.img`
  height: 250px;
  width: 200px;
  border-radius: 5px;
`
const Peyton = styled.img`
  height: 250px;
  width: 200px;
  border-radius: 5px;
`
const Sarah = styled.img`
  height: 350px;
  width: 200px;
  border-radius: 5px;
`
const Devin = styled.img`
  height: 350px;
  width: 200px;
  border-radius: 5px;
`
const Matt = styled.img`
  height: 350px;
  width: 200px;
  border-radius: 5px;
`