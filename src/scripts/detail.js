const productId = urlParser('id');
const product = Products.getProductById(productId);
if (!product) window.location.replace('/');

document.getElementById('product-info').innerHTML = createDetailInfo(product);
document.getElementById('subtotal').innerHTML = createSubTotal(product);
document.getElementById('review-rating').innerHTML =
  createReviewRating(product);
document.getElementById('review-message').innerHTML = createReviewMessage(
  product
).trim()
  ? createReviewMessage(product)
  : "<p class='noreview'>there doesn't seem to be a review here</p>";

const handleChangeCounters = document.querySelectorAll('.handleChangeCounter');
const counterValue = document.getElementById('counter');
const totalPrice = document.getElementById('total-price');
const recomendationList = document.getElementById('recomendation-list');
const addToCartButton = document.getElementById('add-to-cart');

addToCartButton.addEventListener('click', () => {
  console.info('clicked');
  for (let i = 0; i < parseInt(counterValue.value); i++) {
    const prev = JSON.parse(localStorage.getItem('CART_PRODUCT_ID'));
    localStorage.setItem(
      'CART_PRODUCT_ID',
      JSON.stringify([...prev, product.product_id])
    );
  }
});

Products.getRecomendationByCategory(product.product_category).forEach(
  (product) => (recomendationList.innerHTML += createProductCard(product))
);

const countTotalPrice = () => {
  totalPrice.innerText = `$${(
    parseFloat(getProductPrice(product)) * parseInt(counterValue.value)
  ).toFixed(2)}`;
};
const handleChangeCounter = (event) => {
  if (event.target.innerText === '+') {
    if (counterValue.value >= product.product_stock) return;
    counterValue.value = parseInt(counterValue.value) + 1;
  }
  if (event.target.innerText === '-') {
    if (counterValue.value <= 1) return;
    counterValue.value = parseInt(counterValue.value) - 1;
  }
  countTotalPrice();
};
handleChangeCounters.forEach((handler) =>
  handler.addEventListener('click', handleChangeCounter)
);
counterValue.addEventListener('change', countTotalPrice);
