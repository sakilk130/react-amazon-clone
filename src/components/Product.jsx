import React from 'react';
import { useStateValue } from '../context/StateProvider';

import '../styles/Product.css';

function Product({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // add item to basket
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
