import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

// Styled components for SignupForm
const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-family: baskerville, serif;
  text-decoration: underline;
`;

const StyledForm = styled(Form)`
  font-family: baskerville, serif;
  text-align: center;
  display: inline-block;
  border: 2px solid #111111;
  border-radius: 4px;
  width: 40%;
  background-color: #92a8d1;
  padding: 25px;
  box-shadow: 1px 1px 7px #111111;
  margin-bottom: 15px;
`;

const StyledInput = styled(Form.Control)`
  max-width: 50%;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
`;

function SignupForm(props) {
  const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await addUser({
        variables: {
          firstName: formState.firstName,
          lastName: formState.lastName,
          email: formState.email,
          password: formState.password,
        },
      });
      const token = data.addUser.token;
      Auth.login(token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Wrapper>
      <Title>Signup</Title>
      <StyledForm onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label htmlFor='firstName'>First Name:</Form.Label>
          <StyledInput type="text" placeholder="First" name="firstName" id="firstName" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label htmlFor='lastName'>Last Name:</Form.Label>
          <StyledInput type="text" placeholder="Last" name="lastName" id="lastName" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label htmlFor='email'>Email:</Form.Label>
          <StyledInput type="email" placeholder="youremail@test.com" name="email" id="email" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label htmlFor='pwd'>Password:</Form.Label>
          <StyledInput type="password" placeholder="******" name="password" id="pwd" onChange={handleChange} />
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit
        </Button>
      </StyledForm>
    </Wrapper>
  );
}

export default SignupForm;
