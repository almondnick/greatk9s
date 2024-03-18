import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import styled from 'styled-components';

import { useMutation } from '@apollo/client';
import { ADD_TRAINING } from '../utils/mutations';
import { ADD_SITTING } from '../utils/mutations';

import photo from '../../src/assets/paw.jpg';


import TimePicker from 'react-bootstrap-time-picker';
import Auth from '../utils/auth';


function AppointmentForm() {

  const [addTraining, { errorTrain }] = useMutation(ADD_TRAINING);
  const [addSitting, { errorSit }] = useMutation(ADD_SITTING);

  const [validated, setValidated] = useState(false);

  const [service, setService] = useState('Select Service'); // Service is selected on dropdown
  const [serviceCheck, setServiceCheck] = useState(true);

  // Used for time pickers
  const [pickUpTime, setPickUpTime] = useState('09:00 AM');
  const [dropOffTime, setDropOffTime] = useState('09:00 AM');
  const [trainingStartTime, setTrainingTime] = useState('09:00 AM');

  // used for form
  const [phoneNumber, setPhoneNumber] = useState('');
  const [petName, setPetName] = useState('');
  const [comments, setComments] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [trainingDate, setTrainingDate] = useState('');

  const handleSubmit = async (event) => {

    event.preventDefault();
    console.log("FORM SUBMITTED!");
    console.log("Service is: " + service);

    // Make sure user selected a service!
    if(service === 'Sitting'){ // Fill out for Dog Sitting stuffs

      console.log("Sitting here");
      
      try {
        const { data } = await addSitting({
          variables: {
            phoneNumber: phoneNumber,
            petName: petName,
            appointmentStartDate: startDate,
            appointmentEndDate: endDate,
            startTime: dropOffTime,
            endTime: pickUpTime,
            comments: comments,
          },
        });
        } catch (err) {
        console.error(err);
      }

      console.log("Sitting End");
      window.location.replace("/userappointments");

    } 

    else if (service == "Training") { // Fill out for Dog Training stuffs
      console.log("Training here");

      try {
        const { data } = await addTraining({
          variables: {
            phoneNumber: phoneNumber,
            petName: petName,
            date: trainingDate,
            time: trainingStartTime,
            comments: comments,
          },
        });
        } catch (err) {
        console.error(err);
      }

    console.log("Training End");
    window.location.replace("/userappointments");

    } 
    else {
      alert("PLEASE SELECT A TYPE OF SERVICE!!!!");
    }

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();

      event.stopPropagation();

    }


    setValidated(true); 


    console.log("END FORM");

  }; // end form submission function

  const checkService = (e) => {
    setService(e.target.innerText);
    if(e.target.innerText == 'Sitting'){
      setServiceCheck(true);
    }
    else {
      setServiceCheck(false);
    }
  }

  const handlePhoneNumChange = (e) => {
    setPhoneNumber(e.target.value);
  }

  const handlePetNameChange = (e) => {
    setPetName(e.target.value);
  }

  const handleCommentChange = (e) => {
    setComments(e.target.value);
  }

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  }

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  }

  const handleTrainingDateChange = (e) => {
    setTrainingDate(e.target.value);
  }

  const handleDropOffTimeChange = (e) => {

    let realTimeNum = e / 60 / 60;
  
    if (realTimeNum < 12){
      setDropOffTime(realTimeNum + ":00 AM")
    }
    else if(realTimeNum == 12){
      setDropOffTime(realTimeNum + ":00 PM")
    } else {
      realTimeNum = realTimeNum - 12;
      setDropOffTime(realTimeNum + ":00 PM")
    }
  }

  const handlePickTimeChange = (e) => {
    let realTimeNum = e / 60 / 60;
  
    if (realTimeNum < 12){
      setPickUpTime(realTimeNum + ":00 AM")
    }
    else if(realTimeNum == 12){
      setPickUpTime(realTimeNum + ":00 PM")
    } else {
      realTimeNum = realTimeNum - 12;
      setPickUpTime(realTimeNum + ":00 PM")
    }

  }


  const handleTrainingTimeChange = (e) => {
    let realTimeNum = e / 60 / 60;
  
    if (realTimeNum < 12){
      setTrainingTime(realTimeNum + ":00 AM")
    }
    else if(realTimeNum == 12){
      setTrainingTime(realTimeNum + ":00 PM")
    } else {
      realTimeNum = realTimeNum - 12;
      setTrainingTime(realTimeNum + ":00 PM")
    }

  }


  return (
    <Wrapper>
    <Pic src={photo}></Pic>
    {Auth.loggedIn() ? (  // Check if user is logged in, if so display form
      <StyledForm noValidate validated={validated} onSubmit={handleSubmit}>
        <h1>Book An Appointment</h1>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Pet Name:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Pet name"
              onChange={handlePetNameChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Phone Number"
              onChange={handlePhoneNumChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Any Comments? Special Instructions?</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter comments here"
              onChange={handleCommentChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3 justify-content-center">
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Title>Select A Service</Title>
            <Dropdown>
              <Dropdown.Toggle size="lg" variant="primary" id="dropdown-basic">
              {service}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" onClick={checkService}>Sitting</Dropdown.Item>
              <Dropdown.Item href="#/action-2" onClick={checkService}>Training</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Form.Group>
        </Row>


        {serviceCheck ? ( // If true then have sitting 
        <div>
          <Title>Dog Sitting Selected</Title>
          <Row className="mb-3 justify-content-center">
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Start Date:</Form.Label>
              <Form.Control
                required
                type="date"
                onChange={handleStartDateChange}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom06">
              <Form.Label>End Date:</Form.Label>
              <Form.Control
                required
                type="date"
                onChange={handleEndDateChange}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3 justify-content-center">
            <Form.Group as={Col} md="4">
              <Form.Label>Select Drop-off Time:</Form.Label>
              <TimePicker id='dropOff' start="09:00" end="17:00" step={60}  onChange={handleDropOffTimeChange} value={dropOffTime} />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

            </Form.Group>

            <Form.Group as={Col} md="4">
              <Form.Label>Select Pickup Time:</Form.Label>
                  <TimePicker id="pickUp" start="09:00" end="17:00" step={60}  onChange={handlePickTimeChange} value={pickUpTime} />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

            </Form.Group>
          </Row>
          </div>
        ) : ( // if false then have training
        <div>
        <Title>Dog / People Training Selected</Title>
        <Row className="mb-3 justify-content-center">
          <Form.Group as={Col} md="4" controlId="validationCustom09">
            <Form.Label>Date:</Form.Label>
            <Form.Control
              required
              type="date"
              onChange={handleTrainingDateChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>

        <Row className="mb-3 justify-content-center">
          <Form.Group as={Col} md="4">
              <Form.Label>Select Start Time:</Form.Label>
              <TimePicker start="09:00" end="17:00" step={60}  onChange={handleTrainingTimeChange} value={trainingStartTime} />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

            </Form.Group>
          </Row>
        </div>
        )}

      
        
        <Button variant="dark" type="submit">Submit form</Button>
      

      </StyledForm>
    ) : 
    ( // If user is not logged in
    
    <Row className="mb-3 justify-content-center">
      <h2>Please Login or Sign Up to Book an Appointment!</h2>
      <div style= {{width:'200px'}}>
        <StyledButton size='lg' variant="primary" href='/login'>Login / Sign Up</StyledButton>
      </div>
    </Row>
    
    
    )}
    
    </Wrapper>
  );
}

export default AppointmentForm;

const Wrapper = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #92a8d1;
`

const Pic = styled.img`
    display: block;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid #111111;
    border-radius: 2px;
    margin-bottom: 15px;
    box-shadow: 1px 1px 10px #111111;
`
const StyledForm = styled(Form)`
  font-family: helvetica neue, arial, sans-serif;
  text-align: center;
  display: inline-block;
  border: 2px solid #111111;
  border-radius: 4px;
  width: 60%;
  background-color: #f8f8f8;
  padding: 25px;
  box-shadow: 1px 1px 7px #111111;
  margin-bottom: 15px;
`
const Title = styled.h3`
  font-family: helvetica neue, arial, sans-serif;
  text-decoration: underline;
`
const StyledButton = styled(Button)`
margin-bottom: 15px;
`