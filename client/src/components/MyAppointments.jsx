import Card from 'react-bootstrap/Card';

const MyAppointments = () => {
  return (
    <main>
        <h1>Dog Sitting Appointments</h1>
        <Card>
            <Card.Header>Appointment Title</Card.Header>
            <Card.Body>
            <Card.Title>Your Appointment with Great K9s</Card.Title>
            <Card.Text>
            YADA YADA YADA.
            </Card.Text>
            </Card.Body>
        </Card>
        <h1>Dog Training Appointments</h1>
        <Card>
            <Card.Header>Appointment Title</Card.Header>
            <Card.Body>
            <Card.Title>Your Appointment with Great K9s</Card.Title>
            <Card.Text>
            YADA YADA YADA.
            </Card.Text>
            </Card.Body>
        </Card>
    </main>
    
  );
}

export default MyAppointments;