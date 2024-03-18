import LoginForm from "../components/Login";
import SignupForm from "../components/Signup";
import styled from 'styled-components';

const Login = () => {
    return (
    <>
      <Title>Login or Sign Up</Title>
      <LoginForm/>
      <SignupForm/>
    </>
    )
}

export default Login;

const Title = styled.h1`
font-family: helvetica neue, arial, sans-serif;
text-align: center;
`