const checkIfExistInCart = (carts, data) => {
  let newCart = [...carts];
  const newItem = { ...data, qty: 1, total: data.price };

  const index = newCart.map(cart => cart._id).indexOf(newItem._id);

  if (index >= 0) {
    newCart[index].qty++;
    newCart[index].total = newCart[index].price * newCart[index].qty;
  } else {
    newCart = [...newCart, newItem];
  }


  return newCart;
}

export default checkIfExistInCart;