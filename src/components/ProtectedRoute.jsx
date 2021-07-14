import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { loginToken } from '../hooks/store/auth/actions';
import Loading from './Loading';

export default function ProtectedRoute({path, component: Component, ...props}) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const loading = useSelector(state => state.auth.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      const token = localStorage.getItem('token');
      if (token) {
        dispatch(loginToken());
      }
    }
  }, [isLoggedIn, dispatch]);

  return (
    <Route {...props} path={path} render={(props) =>
      loading 
        ? <Loading />
        : isLoggedIn 
          ? <Component {...props} /> 
          : <Redirect to="/login" />
    }/>
  )
}
