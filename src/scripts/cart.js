const showProductCart = () => {
  let cartProductStorage = JSON.parse(localStorage.getItem('CART_PRODUCT_ID'));
  let cartProductId = [...cartProductStorage];
  let listOfProduct = cartProductId.map((id) => {
    return Products.getProductById(id.toString());
  });

  let totalPrice = listOfProduct.reduce((acc, curr) => {
    return (
      acc +
      curr.product_price -
      (curr.product_price * curr.product_discount.percent) / 100
    );
  }, 0);

  let USER_CART = {
    numOfProduct: cartProductId.length,
    totalPrice: totalPrice,
    carts: [...listOfProduct],
  };

  document.getElementById('cart-container').innerHTML = '';
  if (!USER_CART.carts.length) {
    document.getElementById('order').classList.add('disable');
    document.getElementById('cart-container').innerHTML =
      "<p class='noreview'>oops it looks like your shopping cart is still empty</p>";
  } else {
    USER_CART.carts.forEach((product, index) => {
      document.getElementById('cart-container').innerHTML += createProductCard(
        product,
        index
      );
    });
  }
  document.getElementById(
    'total-price'
  ).innerText = `$${USER_CART.totalPrice.toFixed(2)}`;
  document.getElementById(
    'num-of-product'
  ).innerText = ` of ${USER_CART.numOfProduct} product's`;

  const trashButton = document.querySelectorAll('.trashButtons');
  trashButton.forEach((button) => {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      const nodeIndex = this.dataset.index;
      console.info('node index', nodeIndex);
      const productStorage = JSON.parse(
        localStorage.getItem('CART_PRODUCT_ID')
      );
      const spliceitem = productStorage.splice(parseInt(nodeIndex), 1);
      console.info('index', nodeIndex);
      console.info('deleted', spliceitem);
      localStorage.setItem('CART_PRODUCT_ID', JSON.stringify(productStorage));
      showProductCart();
      event.stopPropagation();
    });
  });
};

showProductCart();
