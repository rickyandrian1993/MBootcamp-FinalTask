import React, { useState } from 'react';
import {
  Container,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ProductCard from '../components/ProductCard';
import useFetchProducts from '../hooks/useFetchProducts';
import SkeletonMediaCard from '../components/SkeletonMediaCard';
import { useDispatch } from 'react-redux';
import { addProduct } from '../hooks/store/product/actions';

const FormTextField = withStyles({
  root: {
    marginBottom: 24,
  }
})(TextField);

const ContainerTitleAndButton = (props) => <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 20}} {...props} />;

export default function Admin() {
  const [ refetch, setRefetch ] = useState(false);
  const { loading, datas: products } = useFetchProducts(refetch);
  const [ open, setOpen] = useState(false);
  const [ productName, setProductName] = useState('');
  const [ productDescription, setProductDescription] = useState('');
  const [ productPrice, setProductPrice] = useState('');
  const [ productImage, setProductImage] = useState('');
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const dispatch = useDispatch();

  const handleOpenDialog = () => {
    setOpen(true);
  }

  const handleCloseDialog = () => {
    setOpen(false);
  }

  const handleSubmit = () => {
    setOpen(false);
    dispatch(
      addProduct(
        productName, 
        productDescription, 
        productPrice, 
        productImage
      )
    ).then(() => {
      setRefetch(!refetch);
    })
  }

  return (
    <Container maxWidth="xl">
      <ContainerTitleAndButton>
        <Typography variant="h4">
          Manage Product
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpenDialog}>Add Product</Button>
      </ContainerTitleAndButton>
      <Grid container alignItems="center" justifyContent="flex-start">
        {
          loading
            ? <SkeletonMediaCard count={8} />
            : products.map((product) =>
              <Grid item xs={12} sm={6} md={3} lg={3} xl={2} key={product._id} >
                <ProductCard data={product} from="admin" />
              </Grid>
              )
        }
      </Grid>

      <Dialog fullScreen={fullScreen} open={open} onClose={handleCloseDialog} aria-labelledby="responsive-dialog-title">
      <DialogTitle id="responsive-dialog-title">{"Add new product"}</DialogTitle>
        <DialogContent>
          <FormTextField onChange={(e) => setProductName(e.target.value)} variant="outlined" fullWidth label="Product Name" />
          <FormTextField onChange={(e) => setProductDescription(e.target.value)} variant="outlined" fullWidth label="Product Description" />
          <FormTextField onChange={(e) => setProductPrice(e.target.value)} variant="outlined" fullWidth label="Price" />
          <FormTextField onChange={(e) => setProductImage(e.target.value)} variant="outlined" fullWidth label="Product Image" />
        </DialogContent>
        <Button onClick={handleSubmit} variant="contained" color="primary" autoFocus style={{marginRight: 20, marginBottom: 20, marginLeft: 20}}>
          Save
        </Button>
      </Dialog>
    </Container>
  )
}

