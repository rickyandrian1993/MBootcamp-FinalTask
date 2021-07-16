import {
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import ProductCard from '../components/ProductCard';
import useFetchProducts from '../hooks/useFetchProducts';
import SkeletonMediaCard from '../components/SkeletonMediaCard';

export default function Products() {
  const { loading, datas: products } = useFetchProducts();
  
  return (
    <Container maxWidth="xl">
      <Typography variant="h3" align="center" gutterBottom={true}>
        Product
      </Typography>
      <Grid container alignItems="center" justifyContent="flex-start">
        {
          loading
            ? <SkeletonMediaCard count={10} />
            : products.map((product) =>
              <Grid item xs={12} sm={6} md={3} lg={3} xl={2} key={product._id} >
                <ProductCard data={product} from="product" />
              </Grid>
              )
        }
      </Grid>
    </Container>
  )
}

