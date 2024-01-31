import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './styles.css';

const dummyData = [
  {
    id: 1,
    name: 'Watch',
    price: 19.99,
    image: 'product1.jpg',
    description: 'A stylish and elegant watch suitable for any occasion. Crafted with precision and quality materials.',
  },
  {
    id: 2,
    name: 'Perfume',
    price: 14,
    image: 'product2.jpg',
    description: 'Indulge your senses with this captivating fragrance. Delicately balanced and long-lasting.',
  },
  {
    id: 3,
    name: 'Gold Ring',
    price: 200,
    image: 'product3.jpg',
    description: 'Exquisite craftsmanship meets timeless elegance in this stunning gold ring. The perfect symbol of love and commitment.',
  },
  {
    id: 4,
    name: 'Makeup Kit',
    price: 25.99,
    image: 'product5.jpg',
    description: 'Unlock your inner artist with this comprehensive makeup kit. Create endless looks with vibrant colors and versatile shades.',
  },
  {
    id: 5,
    name: 'Makeup Kit',
    price: 25.99,
    image: 'product5.jpg',
    description: 'Elevate your makeup routine with this professional-grade kit. Perfect for everyday wear or special occasions.',
  },
  {
    id: 6,
    name: 'Shoes',
    price: 10,
    image: 'product6.jpg',
    description: 'Step into style and comfort with these trendy shoes. Designed to keep you looking fashionable all day long.',
  },
  {
    id: 7,
    name: 'Fake Plant',
    price: 21.5,
    image: 'product7.jpg',
    description: 'Bring the beauty of nature indoors with this lifelike fake plant. No watering or maintenance required!',
  },
  {
    id: 8,
    name: 'Chocolate Milk',
    price: 5,
    image: 'product8.jpg',
    description: 'Indulge in the rich and creamy taste of chocolate milk. A delicious treat for any time of day.',
  },
  {
    id: 9,
    name: 'Camera',
    price: 200,
    image: 'product9.jpg',
    description: 'Capture life\'s precious moments with this high-quality camera. From family gatherings to breathtaking landscapes, never miss a shot.',
  },
  {
    id: 10,
    name: 'Headphone',
    price: 15.5,
    image: 'product10.jpg',
    description: 'Immerse yourself in superior sound quality with these premium headphones. Perfect for music lovers and audiophiles alike.',
  },
];


const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchedProduct = dummyData.find((item) => item.id === parseInt(id, 10));

    if (fetchedProduct) {
      setProduct(fetchedProduct);
    } else {
      console.error(`Product with ID ${id} not found.`);
    }
  }, [id]);

  const handleAddToCart = () => {
    navigate(`/cart`, { state: { product } });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="product-details">
        <img src={require(`./images/${product.image}`)} alt={product.name} />
        <h2>{product.name}</h2>
        <p>${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
