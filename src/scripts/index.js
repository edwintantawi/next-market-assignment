const authToggler = document.querySelector('.nav__auth-toggler');
const navAuth = document.querySelector('.nav__auth-action');
authToggler.addEventListener('click', () => {
  navAuth.classList.toggle('nav__auth-action--active');
});
