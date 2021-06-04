const cartProductId = [1, 5, 10, 18, 4];
const listOfProduct = cartProductId.map((id) => {
  return Products.getProductById(id.toString());
});

const totalPrice = listOfProduct.reduce((acc, curr) => {
  return (
    acc +
    curr.product_price -
    (curr.product_price * curr.product_discount.percent) / 100
  );
}, 0);

const USER_CART = {
  numOfProduct: cartProductId.length,
  totalPrice: totalPrice,
  carts: [...listOfProduct],
};

USER_CART.carts.forEach((product) => {
  document.getElementById('cart-container').innerHTML +=
    createProductCard(product);
});

document.getElementById('total-price').innerText =
  USER_CART.totalPrice.toFixed(2);
document.getElementById(
  'num-of-product'
).innerText = ` of ${USER_CART.numOfProduct} product's`;
