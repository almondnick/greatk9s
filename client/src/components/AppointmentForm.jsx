import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import styled from 'styled-components';
import photo from '../../src/assets/paw.jpg'

import TimePicker from 'react-bootstrap-time-picker';

function AppointmentForm() {
  const [validated, setValidated] = useState(false);

  const [service, setService] = useState('Select Service'); // Service is selected on dropdown
  const [serviceCheck, setServiceCheck] = useState(true);


  const handleSubmit = (event) => {


    console.log("FORM SUBMITTED!");

    if(service === 'Sitting'){ // Fill out for Dog Sitting stuffs

      



      console.log("Sitting");
    } 


    else if (service == "Training") { // Fill out for Dog Training stuffs



    }



    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();

      event.stopPropagation();

    }


    setValidated(true);




  };

  const checkService = (e) => {
    setService(e.target.innerText);
    if(e.target.innerText == 'Sitting'){
      setServiceCheck(true);
    }
    else {
      setServiceCheck(false);
    }
  }

  return (
    <Wrapper>
    <Pic src={photo}></Pic>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Phone Number"
            defaultValue="Phone Number"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Pet Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Pet name"
            defaultValue="Pet Name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
    
      <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Any Comments? Special Instructions?</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter comments here"
            defaultValue="Enter comments here"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {service}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" onClick={checkService}>Sitting</Dropdown.Item>
            <Dropdown.Item href="#/action-2" onClick={checkService}>Training</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </Form.Group>
      


      {serviceCheck ? ( // If true then have sitting 
      <div>
        <h1>Dog Sitting Selected</h1>
        <Form.Group as={Col} md="4" controlId="validationCustom05">
        <Form.Label>Start Date</Form.Label>
        <Form.Control
          required
          type="date"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom06">
        <Form.Label>End Date</Form.Label>
        <Form.Control
          required
          type="date"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom07">
          <Form.Label>Select Drop-off Time</Form.Label>
          <TimePicker start="00:00" end="23:30" step={30} />

          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom08">
        <Form.Label>Select Pickup Time</Form.Label>
            <TimePicker start="00:00" end="23:30" step={30} />

        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

        </Form.Group>
        </div>
      ) : ( // if false then have training
      <div>
      <h1>Dog / People Training Selected</h1>
      <Form.Group as={Col} md="4" controlId="validationCustom09">
      <Form.Label>Date</Form.Label>
      <Form.Control
        required
        type="date"
      />
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="4" controlId="validationCustom10">
          <Form.Label>Select Start Time</Form.Label>
          <TimePicker start="09:00" end="17:00" step={60} />

          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

        </Form.Group>
      </div>
      )}

     
      </Row>
      <Button type="submit">Submit form</Button>
    

    </Form>
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
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid #111111;
    border-radius: 2px;
    margin-bottom: 15px;
    box-shadow: 1px 1px 10px #111111;
`