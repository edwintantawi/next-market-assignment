const createProductCard = (product) =>
  `
  <a href="detail.html?id=${product.product_id}">
    <div class="card__item">
      <div class="card__item__img__container">
        <img src="${
          product.product_picture
        }" alt="" class="card__item__img__photo">
      </div>
      <div class="card__item__product">
        ${
          product.product_discount.percent !== 0
            ? `<span class="card__item__discount">${product.product_discount.percent}%</span>`
            : ''
        }
        <div class="card__item__price">
          ${
            product.product_discount.percent !== 0
              ? `<p class="card__item__price__normal">$${product.product_price}</p>`
              : ''
          }
          <p class="card__item__price__hot">$${(
            product.product_price -
            (product.product_price * product.product_discount.percent) / 100
          ).toFixed(2)}</p>
        </div>
        <h3 class="card__item__title">
          ${product.product_name}
        </h3>
        <div class="card__item__seller">
          <img src="src/assets/icons/shop.svg" alt="icon shop" class="card__item__seller__icon">
          <p class="card__item__seller__name">${product.shop_name}</p>
        </div>
        <div class="card__item__info">
          <img src="src/assets/icons/star.svg" alt="star" class="card__item__info__star">
          <p class="card__item__info__content">${(
            product.product_star.reduce(
              (acumulator, current) => acumulator + current
            ) / 5
          ).toFixed(1)}</p>
          <span class="card__item__info__content">|</span>
          <p class="card__item__info__content">${
            product.product_sold
          } sold out</p>
        </div>
      </div>
    </div>
  </a>
  `;
