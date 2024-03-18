import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

function LoginForm(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleFormSubmit}>
        <Title>Login</Title>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label htmlFor='email'>Email:</Form.Label>
        <StyledInput type="email" placeholder="Enter Your Email" name="email" id="email" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label htmlFor='pwd'>Password:</Form.Label>
        <StyledInput type="password" placeholder="Enter Your Password" name="password" id="pwd" onChange={handleChange} />
      </Form.Group>
      {error ? (
        <div>
          <p className='error-text'>The provided credentials are incorrect. Please try again.</p>
        </div>
      ) : null}
      <Button variant="dark" type="submit">
        Login
      </Button>
      </StyledForm>

      <Title>OR</Title>
    </Wrapper> 
  );
}

export default LoginForm;

const Wrapper = styled.div`
  text-align: center;
`

const Title = styled.h3`
  font-family: baskerville, serif;
  text-decoration: underline;
`

const StyledForm = styled(Form)`
  font-family: baskerville, serif;
  text-align: center;
  display: inline-block;
  border: 2px solid #111111;
  border-radius: 4px;
  width: 60%;
  background-color: #92a8d1;
  padding: 25px;
  box-shadow: 1px 1px 7px #111111;
  margin-bottom: 15px;
`

const StyledInput = styled(Form.Control)`
  max-width: 60%;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
`