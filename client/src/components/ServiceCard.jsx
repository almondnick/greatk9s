import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import Picture1 from '../../src/assets/dog-sitting.jpg';
import Picture2 from '../../src/assets/dog-training.jpg';

function ServiceCard() {
  return (
    <Wrapper>
      <StyledCard>
        <Card.Body>
          <StyledTitle>Dog Sitting Services</StyledTitle>
          <Picture src={Picture1}></Picture>
          <Card.Text>
            The best dog sitting in the world. Always watching. Waiting. Anticipating.
          </Card.Text>
          <StyledButton variant="primary" href='/booknow'>Book Now</StyledButton>
          <StyledPrice>$50 PER DAY</StyledPrice>
        </Card.Body>
        <Card.Footer className="text-muted">*Includes portuguese paw pampering</Card.Footer>
      </StyledCard>

      <StyledCard>
        <Card.Body>
          <StyledTitle>Dog Training Services</StyledTitle>
          <Picture src={Picture2}></Picture>
          <Card.Text>
            The best dog training in the world. Your dog will know perfect English after we're done.
          </Card.Text>
          <StyledButton variant="primary" href='/booknow'>Book Now</StyledButton>
          <StyledPrice>$100 PER HOUR</StyledPrice>

        </Card.Body>
      </StyledCard>
    </Wrapper>
  );
}

export default ServiceCard;

const StyledCard = styled(Card)`
  text-align: center;
  font-family: helvetica neue, arial, sans-serif;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  box-shadow: 1px 1px 10px #111111;
  margin-bottom: 20px;
`;

const StyledPrice = styled(Card.Header)`
  background-color: #f8f9fa;
  font-weight: bold;
  color: #111111;
`;

const StyledTitle = styled(Card.Title)`
  color: #007bff;
  font-weight: bold;
  font-size: 25px;
`;

const StyledButton = styled(Button)`
  margin-bottom: 15px;
`

const Picture = styled.img`
  width: 50%;
  border: 2px solid #111111;
  border-radius: 5px;
  margin: 10px;
`

const Wrapper = styled.div`
  padding: 20px;
  background-color: #dedede;
`