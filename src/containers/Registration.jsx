import React, { useState } from 'react';
import { 
  Button, 
  Paper, 
  TextField, 
  Typography, 
  withStyles 
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../hooks/store/auth/actions';
import { useHistory } from 'react-router-dom';
import Loading from '../components/Loading';
import Centered from '../components/Centered';

const FormContainer = withStyles({
  root: {
    padding: 24,
    maxWidth: 300,
  }
})(Paper);

const FormTextField = withStyles({
  root: {
    marginBottom: 24,
  }
})(TextField);

export default function Login() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.isLoading);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

  const mockRegister = () => {
    dispatch(
      register(
        email,
        username, 
        password,
      )
    ).then(() => {
      history.push('/login');
    });
  }

  return (
    isLoading
      ? <Loading />
      : <Centered>
          <FormContainer>
            <form onSubmit={mockRegister}>
              <Typography variant="h6" style={{textAlign: 'center', marginBottom: 24}}>REGISTRATION</Typography>
              <FormTextField onChange={(e) => setEmail(e.target.value)} required variant="outlined" fullWidth label="Email" />
              <FormTextField onChange={(e) => setUsername(e.target.value)} required variant="outlined" fullWidth label="Username" />
              <FormTextField onChange={(e) => setPassword(e.target.value)} required variant="outlined" fullWidth type="password" label="Password" />
              <FormTextField onChange={(e) => setConfirmPassword(e.target.value)} required variant="outlined" fullWidth type="password" label="Confirm Password" error={password !== confirmPassword} />
              <Button type="submit" variant="contained" color="primary" fullWidth>Register</Button>
            </form>
          </FormContainer>
        </Centered>
  )
}
