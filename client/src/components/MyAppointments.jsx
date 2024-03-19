import React from 'react';
import { useQuery } from '@apollo/client';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { QUERY_ME } from '../utils/queries';
import styled from 'styled-components';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { REMOVE_TRAINING } from '../utils/mutations';
import { REMOVE_SITTING } from '../utils/mutations';

const Wrapper = styled.main`
  background-color: #92a8d1;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 2em;
  color: #333333;
  text-decoration: underline; /* Add underline */
  text-align: center;
`;

const StyledCard = styled(Card)`
  margin: 0 auto 20px; /* Center horizontally and add bottom margin */
  max-width: 50%;
`;

const StyledCardHeader = styled(Card.Header)`
  background-color: #f0f0f0;
  font-weight: bold;
`;

const StyledCardBody = styled(Card.Body)`
  padding: 20px;
`;

const StyledCardText = styled(Card.Text)`
  font-size: 1.2em;
  color: #666666;
`;

const NoAppointmentsText = styled.p`
  text-align: center;
  font-size: 1.2em;
`;

const CenteredButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  .btn-primary {
    font-size: 1.5em;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2); 
  }
`;

const MyAppointments = () => {

  
  const [deleteTraining, { error2 }] = useMutation(REMOVE_TRAINING);
  const [deleteSitting, { error3 }] = useMutation(REMOVE_SITTING);

  const { loading, error, data } = useQuery(QUERY_ME);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error: {error.message} </p>;

  const { me: user } = data;
  const { trainingApmts, sittingApmts } = user;

  const hasAppointments = trainingApmts.length > 0 || sittingApmts.length > 0;

  
  const removeSitting = async(sitId) => {

  
    try {
      const { data } = await deleteSitting({
        variables: {
          sittingId: sitId,
        },
      });
      } catch (err) {
      console.error(err);
    }

    window.location.reload();

  }

  const removeTraining = async(trainId) => {

    try {
      const { data } = await deleteTraining({
        variables: {
          trainingId: trainId,
        },
      });
      } catch (err) {
      console.error(err);
    }

    window.location.reload();

  }

  return (
    <Wrapper>
      {hasAppointments ? (
        <>
          <Title>Dog Sitting Appointments</Title>
          {sittingApmts.map((apmt, index) => (
            <StyledCard key={index}>
              <StyledCardHeader>Sitting Appointments</StyledCardHeader>
              <StyledCardBody>
                <Card.Title>Your sitting appointment for {apmt.petName}:</Card.Title>
                <StyledCardText>
                  Pet Name: {apmt.petName} <br />
                  Drop-Off Date: {apmt.appointmentStartDate}<br />
                  Drop-Off Time: {apmt.startTime}<br />
                  Pick-up Date: {apmt.appointmentEndDate}<br />
                  Pick-up Time: {apmt.endTime}<br />
                  Comments: {apmt.comments}
                </StyledCardText>
                <Button variant="danger" onClick={() => removeSitting(apmt._id)}>Cancel Appointment</Button>
              </StyledCardBody>
            </StyledCard>
          ))}

          <Title>Dog Training Appointments</Title>
          {trainingApmts.map((apmt, index) => (
            <StyledCard key={index}>
              <StyledCardHeader>Training Appointments</StyledCardHeader>
              <StyledCardBody>
                <Card.Title>Your training session for {apmt.petName}:</Card.Title>
                <StyledCardText>
                  Pet Name: {apmt.petName}<br />
                  Date: {apmt.date}<br />
                  Time: {apmt.time}<br />
                  Comments: {apmt.comments}
                </StyledCardText>
                <Button variant="danger" onClick={() => removeTraining(apmt._id)}>Cancel Appointment</Button>
              </StyledCardBody>
            </StyledCard>
          ))}
        </>
      ) : (
        <>
          <NoAppointmentsText>You currently have no appointments. Click the button below to set your appointment!</NoAppointmentsText>
          <CenteredButton>
            <Link to="/BookNow">
              <Button variant="primary">Book Now</Button>
            </Link>
          </CenteredButton>
        </>
      )}
    </Wrapper>
  );
}

export default MyAppointments;
