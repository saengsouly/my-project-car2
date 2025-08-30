import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const products = [
  { id: 1, name: "ໂທລະສັບ iPhone 15", price: "35,000,000", image: "https://via.placeholder.com/180" },
  { id: 2, name: "ແບດເຕີລາຄາ 5000mAh", price: "250,000", image: "https://via.placeholder.com/180" },
  { id: 3, name: "ເຄື່ອງປັກເຟືອນ", price: "1,200,000", image: "https://via.placeholder.com/180" },
  { id: 4, name: "ເມາບູກ SSD 1TB", price: "1,800,000", image: "https://via.placeholder.com/180" },
  { id: 5, name: "ຫຼັກ USB-C Cable", price: "80,000", image: "https://via.placeholder.com/180" },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
