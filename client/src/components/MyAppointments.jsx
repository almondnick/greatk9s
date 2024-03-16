import React from 'react';
import { useQuery } from '@apollo/client'
import Card from 'react-bootstrap/Card';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const MyAppointments = () => {
  const { loading, error, data } = useQuery(QUERY_ME);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error: {error.message} </p>;

  const { me: user } = data;
  const { trainingApmts, sittingApmts } = user;
  
  return (
    <main>
      <h1>Dog Sitting Appointments</h1>
      {sittingApmts.map((apmt, index) => (
        <Card key={index}>
          <Card.Header>Sitting Appointments</Card.Header>
          <Card.Body>
            <Card.Title>Your sitting appointment with Great K9s:</Card.Title>
            <Card.Text>
              Pet Name: {apmt.petName} <br/>
              Drop-Off Date: {apmt.appointmentStartDate}<br/>
              Drop-Off Time: {apmt.startTime}<br/>
              Pick-up Date: {apmt.appointmentEndDate}<br/>
              Pick-up Time: {apmt.endTime}<br/>
              Comments: {apmt.comments}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
      
      <h1>Dog Training Appointments</h1>
      {trainingApmts.map((apmt, index) => (
        <Card key={index}>
          <Card.Header>Training Appointments</Card.Header>
          <Card.Body>
            <Card.Title>Your training session with Great K9s:</Card.Title>
            <Card.Text>
              Pet Name: {apmt.petName}<br/>
              Date: {apmt.date}<br/>
              Time: {apmt.time}<br/>
              Comments: {apmt.comments}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </main>
  );
}

export default MyAppointments;