import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

export default function Cart() {
  const carts = useSelector(state => state.cart.carts);

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom={true}>
        Cart
      </Typography>
      <Grid container alignItems="center" justifyContent="flex-start">
        {
          carts.length <=0
            ? <Typography variant="h2">Cart Kosong</Typography>
            : carts.map((cart) => 
                <Grid item xs={3} key={cart._id} >
                  <ProductCard data={cart} from="cart" />
                </Grid>
          )
        }
      </Grid>
    </Container>
  )
}
