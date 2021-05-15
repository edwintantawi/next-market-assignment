class Products{
  static async getAllProducts() {
    const response = await fetch('src/scripts/data/products.json');
    const responseJson = await response.json();
    return responseJson.products;
  };
  static async getProductById(id) {
    const products = await this.getAllProducts();
    const findProduct = products.find((product) => product.product_id === String(id));
    return findProduct;
  };
};

export default Products;
