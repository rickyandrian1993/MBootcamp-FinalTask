import React from 'react'
import { 
  Card, 
  CardMedia, 
  CardContent,
  Typography, 
  makeStyles,
  IconButton
} from '@material-ui/core';
import { MdStore, MdAddShoppingCart, MdDeleteForever, MdRemoveShoppingCart } from 'react-icons/md';
import Spacer from './Spacer';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../hooks/store/cart/actions';
import { deleteProduct } from '../hooks/store/product/actions';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 300,
    margin: theme.spacing(2),
    border: '1px solid #a7a7a7',
    borderRadius: 8
  },
  media: {
    height: 250,
    borderRadius: 8,
    objectFit: 'cover',
  }
}));

const nf = Intl.NumberFormat('id', { currency: 'IDR', style: 'currency', maximumFractionDigits: 0});
const ActionDiv = (props) => <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} {...props} />;
const CustomCardConten = (props) => <div style={{margin: 8}} {...props} />;

export default function ProductCard(props) {
  const classes = useStyles();
  const item = props.data;
  const checkFrom = props.from;
  const dispatch = useDispatch();

  const handleAddCart = (obj) => {
    dispatch(addToCart(obj));
  }

  const handleRemoveCart = (id) => {
    
    dispatch(removeFromCart(id));
  }

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  }

  return (
    <Card className={classes.card}>
      <CustomCardConten>
        <CardMedia className={classes.media} image={item.image} title={item.title} />
        <CardContent>
          <Typography variant="h6">
            {item.name}
          </Typography>
          <Typography variant="body2" component="p">
            {item.description}
          </Typography>
          <Typography variant="caption" color="textSecondary" component="p" style={{display: 'flex' }}>
            <MdStore size={20} />{item.createdBy} Store
          </Typography>
          <ActionDiv>
            <Typography variant="body1" color="secondary" component="span">
              {checkFrom === "cart" 
                ? nf.format(item.price * item.qty) 
                : nf.format(item.price)
              }
            </Typography>
            <Typography variant="body1" color="secondary" component="span">
              &nbsp;
              {checkFrom === "cart" 
                ? " X " + item.qty 
                : null
              }
            </Typography>
            <Spacer />
            <IconButton size="small" onClick={() => 
              checkFrom !== "product" 
                ? checkFrom !== "admin"
                  ? handleRemoveCart(item._id)
                  : handleDeleteProduct(item._id)
                : handleAddCart(item) }>
              
              {checkFrom !== "product" 
                ? checkFrom !== "admin" 
                  ? <MdRemoveShoppingCart />
                  : <MdDeleteForever />
                : <MdAddShoppingCart />}
            </IconButton>
          </ActionDiv>
        </CardContent>
      </CustomCardConten>
    </Card>
  )
}
