const getProductPrice = ({ product_price, product_discount }) => {
  const price = (
    product_price -
    (product_price * product_discount.percent) / 100
  ).toFixed(2);
  return price;
};
