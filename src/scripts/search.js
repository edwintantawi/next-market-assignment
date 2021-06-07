const productsContainer = document.getElementById('search-container');
const searchStatusContainer = document.getElementById('search-status');
const query = urlParser('q');

document.querySelector('input[name="q"]').value = query;

if (!query) window.location.replace('/');
const products = Products.getProductsBySearch(query);
if (products.length > 0) {
  products.forEach((product) => {
    productsContainer.innerHTML += createProductCard(product);
  });
} else {
  searchStatusContainer.innerText =
    "what you're looking for doesn't seem to exist";
}
