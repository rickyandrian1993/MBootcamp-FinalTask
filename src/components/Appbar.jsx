import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spacer from './Spacer';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { logout } from '../hooks/store/auth/actions';

export default function Appbar() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const username = useSelector(state => state.auth.username);
  const avatar = useSelector(state => state.auth.avatar);
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <AppBar position="sticky" style={{backgroundColor: '#3C5186', boxShadow: '#808070'}}>
      <Toolbar>
        <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
          <Typography variant="h6" noWrap>
            EP Store
          </Typography>
        </Link>
        <Spacer />
        {
          isLoggedIn
          ? <>
            <Link to="/admin" style={{textDecoration: 'none', color: 'inherit'}}>
              <Avatar src={avatar}>{!avatar && username[0].toUpperCase()}</Avatar>
            </Link>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </>
          : <>
            <Link to="/products" style={{textDecoration: 'none', color: 'inherit'}}>
              <Button color="inherit">Products</Button>
            </Link>
            <Link to="/cart" style={{textDecoration: 'none', color: 'inherit'}}>
              <Button color="inherit">Cart</Button>
            </Link>
            <Link to="/login" style={{textDecoration: 'none', color: 'inherit'}}>
              <Button color="inherit">Login</Button>
            </Link>
            </>
        }
      </Toolbar>
    </AppBar>
  )
}

