const productId = urlParser('id');
const product = Products.getProductById(productId);
console.info(product);
if (!product) window.location.replace('/');

document.getElementById('product-info').innerHTML = createDetailInfo(product);
document.getElementById('subtotal').innerHTML = createSubTotal(product);
document.getElementById('review-rating').innerHTML =
  createReviewRating(product);
document.getElementById('review-message').innerHTML =
  createReviewMessage(product);

const handleChangeCounters = document.querySelectorAll('.handleChangeCounter');
const counterValue = document.getElementById('counter');
const totalPrice = document.getElementById('total-price');

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
