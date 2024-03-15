import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  text-align: center;
  margin: 20px auto;
  max-width: 90%;
`;

const StyledPrice = styled(Card.Header)`
  background-color: #f8f9fa;
  font-weight: bold;
  color: green;
`;

const StyledTitle = styled(Card.Title)`
  color: #007bff;
  font-weight: bold;
  font-size: 25px;
`;

function ServiceCard() {
  return (
    <>
      <StyledCard>
        <Card.Body>
          <StyledTitle>Dog Sitting Services</StyledTitle>
          <Card.Text>
            The best dog sitting in the world. Always watching. Waiting. Anticipating.
          </Card.Text>
          <Button variant="primary" href='/booknow'>Book Now</Button>
          <StyledPrice>$50 PER DAY</StyledPrice>
        </Card.Body>
        <Card.Footer className="text-muted">*Includes portuguese paw pampering</Card.Footer>
      </StyledCard>

      <StyledCard>
        <Card.Body>
          <StyledTitle>Dog Training Services</StyledTitle>
          <Card.Text>
            The best dog training in the world. Your dog will know perfect English after we're done.
          </Card.Text>
          <Button variant="primary" href='/booknow'>Book Now</Button>
          <StyledPrice>$100 PER HOUR</StyledPrice>

        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </StyledCard>
    </>
  );
}

export default ServiceCard;