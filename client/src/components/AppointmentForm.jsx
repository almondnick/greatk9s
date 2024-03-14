import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';

import TimePicker from 'react-bootstrap-time-picker';

function AppointmentForm() {
  const [validated, setValidated] = useState(false);

  const [service, setService] = useState('Select Another Service'); // Service is selected on dropdown
  const [serviceCheck, setServiceCheck] = useState(true);


  const handleSubmit = (event) => {
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
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom02">
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
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend"></InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Email@email.com"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter your email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom01">
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
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
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
        <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label>Start Date</Form.Label>
        <Form.Control
          required
          type="date"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label>End Date</Form.Label>
        <Form.Control
          required
          type="date"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Select Start Time</Form.Label>
          <TimePicker start="00:00" end="23:30" step={30} />

          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label>Select End Time</Form.Label>
            <TimePicker start="00:00" end="23:30" step={30} />

        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

        </Form.Group>
        </div>
      ) : ( // if false then have training
      <div>
      <h1>Dog / People Training Selected</h1>
      <Form.Group as={Col} md="4" controlId="validationCustom01">
      <Form.Label>Date</Form.Label>
      <Form.Control
        required
        type="date"
      />
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Select Time</Form.Label>
          <TimePicker start="00:00" end="23:30" step={30} />

          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

        </Form.Group>
      </div>
      )}

     
      </Row>
      <Button type="submit">Submit form</Button>
    

    </Form>
  );
}

export default AppointmentForm;