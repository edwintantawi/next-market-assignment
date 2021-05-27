// import PRODUCTS_DATA from './products-data.js';

class Products {
  static getProductsByEvent(event) {
    const filteredProductByEvent = PRODUCTS_DATA.filter(
      (product) => product.product_discount.type === event
    );
    return filteredProductByEvent;
  }

  static getNormalProducts() {
    const filteredProductsExceptEvent = PRODUCTS_DATA.filter(
      (product) => product.product_discount.type === null
    );
    return filteredProductsExceptEvent;
  }

  static getProductById(id) {
    const filteredProductById = PRODUCTS_DATA.find(
      (product) => product.product_id === id
    );
    return filteredProductById;
  }

  static getRecomendationByCategory(category) {
    const filteredProductByCategory = PRODUCTS_DATA.filter(
      (product) => product.product_category === category
    );
    return filteredProductByCategory;
  }

  static getProductsBySearch(query) {
    const filteredProductByQuery = PRODUCTS_DATA.filter((product) => {
      const productName = product.product_name.toLowerCase();
      return productName.includes(query.toLowerCase());
    });
    return filteredProductByQuery;
  }
}
