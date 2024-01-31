import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './styles.css';

const AddToCartPage = () => {
  const { state } = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: '',
  });

  if (!state || !state.product) {
    return <div>Thank you for placing your order!</div>;
  }

  const { name, price, image, description } = state.product;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFinishOrder = () => {
    
    console.log('Order details:', formData);
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      paymentMethod: '',
    });
  };

  return (
    <div className="add-to-cart-page">
      <div className="product-details">
        <img src={require(`./images/${image}`)} alt={name} />
        <h2>{name}</h2>
        <p>${price.toFixed(2)}</p>
        <p>{description}</p>
      </div>

      <div className="user-info-form">
        <h2>Enter Your Information</h2>
        <form onSubmit={handleFinishOrder}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />

          <label>Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />

          <label>Address:</label>
          <textarea name="address" value={formData.address} onChange={handleInputChange} required />

          <label>Payment Method:</label>
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleInputChange} required>
            <option value="">Select Payment Method</option>
            <option value="cash">Cash on Delivery</option>
            <option value="card">Credit Card</option>
          </select>

          <button type="submit">Finish Order</button>
        </form>
      </div>
    </div>
  );
};

export default AddToCartPage;
