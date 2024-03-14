import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ServiceCard() {
  return (
    <>
    <Card className="text-center">
      <Card.Header>$50 PER DAY</Card.Header>
      <Card.Body>
        <Card.Title>Dog Sitting Services</Card.Title>
        <Card.Text>
          The best dog sitting in the world. Always watching. Waiting. Anticipating.
        </Card.Text>
        <Button variant="primary" href='/booknow'>Book Now</Button>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>

    <Card className="text-center">
      <Card.Header>$100 PER HOUR</Card.Header>
      <Card.Body>
        <Card.Title>Dog Training Services</Card.Title>
        <Card.Text>
          The best dog training in the world. Your dog will know perfect English after we're done.
        </Card.Text>
        <Button variant="primary" href='/booknow'>Book Now</Button>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
    </>
  );
}

export default ServiceCard;