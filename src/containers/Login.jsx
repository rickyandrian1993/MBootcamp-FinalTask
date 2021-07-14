import React, { useEffect ,useState } from 'react';
import { 
  Button, 
  Paper, 
  TextField, 
  Typography, 
  withStyles 
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { login, loginToken } from '../hooks/store/auth/actions';
import { Link, useHistory } from 'react-router-dom';
import Loading from '../components/Loading';
import Centered from '../components/Centered';
import GoogleLogin from 'react-google-login';

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
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isLoading = useSelector(state => state.auth.isLoading);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn)
      history.push('/admin')
  }, [isLoggedIn, history]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(loginToken());
    }
  }, [dispatch]);

  const mockLogin = () => {
    dispatch(login(username, password));
  }

  const handleSucess = () => {

  }

  const handleFailure = () => {
    
  }

  return (
    isLoading
      ? <Loading />
      : <Centered>
          <FormContainer>
            <form onSubmit={mockLogin}>
              <Typography variant="h6" style={{textAlign: 'center', marginBottom: 24}}>LOGIN</Typography>
              <FormTextField onChange={(e) => setUsername(e.target.value)} variant="outlined" fullWidth label="Username" />
              <FormTextField onChange={(e) => setPassword(e.target.value)} variant="outlined" fullWidth type="password" label="Password" />
              <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>
              <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 20}}>
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText="Log in with Google"
                  onSuccess={handleSucess}
                  onFailure={handleFailure}
                />
                <Link to="/registration" style={{textDecoration: 'none', color: 'inherit'}}>
                  <Button type="button" variant="contained" color="primary">Register</Button>
                </Link>
              </div>
            </form>
          </FormContainer>
        </Centered>
  )
}
