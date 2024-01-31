import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
const FeaturedProduct = ({ product }) => {
  const { id, name, price, image } = product;

  return (
      <div className="featured-product">
        <img src={require(`./images/${image}`)} alt={name} />
        <h3>{name}</h3>
        <p>${price.toFixed(2)}</p>
        <Link to={`/products/${id}`}>View Product</Link>
      </div>
  );
};

export default FeaturedProduct;
