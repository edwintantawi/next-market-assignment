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
          <p class="card__item__price__hot">$${getProductPrice(product)}</p>
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
          <p class="card__item__info__content">
          ${handleRatingArray(product.product_star)}
          </p>
          <span class="card__item__info__content">|</span>
          <p class="card__item__info__content">${
            product.product_sold
          } sold out</p>
        </div>
      </div>
    </div>
  </a>
  `;

const createDetailInfo = (product) =>
  `
  <div class="product__image">
    <img
      src="${product.product_picture}"
      alt="${product.product_name}"
      class="product__image-img"
    />
  </div>
  <div class="product__detail">
    <span class="product__detail-category">${product.product_category}</span>
    <h1>${product.product_name}</h1>
    <div class="stats">
      <span class="stats__rating">
        <img
          src="src/assets/icons/star.svg"
          alt=""
          class="stats__rating-icon"
        />
        <span>${handleRatingArray(product.product_star)}</span>
      </span>
      <span>${product.product_sold} sold</span>
      <span>${product.product_stock} stocks</span>
    </div>
    ${
      product.product_discount.percent !== 0
        ? ` <span class="product__detail-discount">${product.product_discount.percent}%</span> <span class="product__detail-normal">$${product.product_price}</span>`
        : ''
    }
    <span class="product__detail-price">$${getProductPrice(product)}</span>
    <h2>About This Product</h2>
    <p>
      ${product.product_description}
    </p>

    <div class="shop">
      <div class="shop__info">
        <img
          src="src/assets/icons/shop-avatar.svg"
          alt=""
          class="shop__image"
        />
        <div class="shop__detail">
          <span class="shop__name">${product.shop_name}</span>
          <span class="shop__location">${product.shop_location}</span>
        </div>
      </div>
      <a href="#" class="btn btn--fill shop__visit">Visit</a>
    </div>
  </div>
  `;

const createSubTotal = ({ product_price, product_discount, product_stock }) =>
  `
  <span class="subtotal__title">SubTotal</span>
    <span class="subtotal__price" id="total-price">$${getProductPrice({
      product_price,
      product_discount,
    })}</span>

    <div class="subtotal__counter">
      <button class="handleChangeCounter">-</button>
      <input type="text" value="1" id="counter" />
      <button class="handleChangeCounter">+</button>
      <span class="subtotal__stock">${product_stock} stock's</span>
    </div>
    <a href="#" class="btn btn--fill">Add to Cart</a>
    <a href="#" class="btn btn--outline">Buy Now</a>
    <div class="subtotal__utility">
      <a href="#">
        <img src="src/assets/icons/favorite.svg" alt="" />
      </a>
      <a href="#">
        <img src="src/assets/icons/chat.svg" alt="" />
      </a>
      <a href="#">
        <img src="src/assets/icons/share.svg" alt="" />
      </a>
    </div>
  `;

const createReviewRating = ({ product_star }) =>
  `
  <div class="review__rating-total">
    <img src="src/assets/icons/star.svg" alt="" />
    <div>
      <span class="current">${handleRatingArray(product_star)}</span>
      <span class="max">/ 5</span>
    </div>
  </div>
  <div class="review__rating-progress">
    ${product_star
      .map(
        (rating, index) =>
          `
        <div class="progress">
          <img
            src="src/assets/icons/star.svg"
            alt=""
            class="progress__icon"
          />
          <span class="progress__title">${index + 1}</span>
          <progress
            value="${handleRatingPercentage(rating, product_star)}"
            max="100"
            class="progress__indicator"
          ></progress>
          <span class="progress__title progress__title--count">${rating}</span>
        </div>  
      `
      )
      .join(' ')}
  </div>
  `;

const createListOfStar = (numOfStar) => {
  const starList = Array(5).fill(false);
  for (let i = 0; i < numOfStar; i++) {
    starList[i] = true;
  }

  return starList
    .map((star) => {
      if (star) return `<img src="src/assets/icons/star.svg" alt="" />`;
      return `<img src="src/assets/icons/star-outline.svg" alt="" />`;
    })
    .join(' ');
};

const createTimeTemplate = (timestamp) => {
  const time = new Date(timestamp);
  const template = `${time.getDate()}-${time.getMonth()}-${time.getFullYear()}`;
  return template;
};

const createReviewMessage = ({ product_review }) =>
  `
  ${product_review
    .map(
      (review) =>
        `
      <div class="message">
        <div class="message__profile">
          <img
            src="src/assets/icons/user-avatar.svg"
            alt=""
            class="message__profile-image"
          />
          <div>
            <h3 class="message__name">${review.review_name}</h3>
            <p class="message__timestamp">at ${createTimeTemplate(
              review.review_timestamp
            )}</p>
          </div>
        </div>
        <div class="message__review">
          <div class="message__review-star">
            ${createListOfStar(review.review_star)}
          </div>
          <p>
            ${review.review_content}
          </p>
        </div>
      </div>`
    )
    .join(' ')}
  `;
