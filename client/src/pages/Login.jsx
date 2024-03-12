import Auth from '../utils/auth';
import { LOGIN_USER } from '../utils/mutations';
import { useState } from 'react';

const Login = () => {
    const [loginUser, {error}] = useMutation(LOGIN_USER);
    const [formState, setFormState] = useState({ email: '', password: ''});

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
    } 
};

export default Login;