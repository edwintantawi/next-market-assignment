const cartLocalStorage = localStorage.getItem('CART_PRODUCT_ID');
if (!cartLocalStorage) {
  localStorage.setItem('CART_PRODUCT_ID', JSON.stringify([]));
}

const authToggler = document.querySelector('.nav__auth-toggler');
const navAuth = document.querySelector('.nav__auth-action');
authToggler.addEventListener('click', () => {
  navAuth.classList.toggle('nav__auth-action--active');
});
