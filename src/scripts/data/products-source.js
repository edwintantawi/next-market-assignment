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
    const userQuery = query.toLowerCase();
    const filteredProductByQuery = PRODUCTS_DATA.filter((product) => {
      const productName = product.product_name.toLowerCase();
      const productCategory = product.product_category.toLowerCase();
      const productShop = product.shop_name.toLowerCase();
      if (
        productName.includes(userQuery) ||
        productCategory.includes(userQuery) ||
        productShop.includes(userQuery)
      ) {
        return true;
      }
    });
    return filteredProductByQuery;
  }
}
