import React from 'react';
import { useSelector } from 'react-redux';

const Product = () => {
  const product = useSelector((state) => state.assets.assets[0]);

  if (!product) return <div>Loading...</div>;

  return (
    <div style={styles.productContainer}>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.subtitle}</p>
      <div style={styles.tagsContainer}>
        {product.tags.map((tag) => (
          <button key={tag} style={styles.tagButton}>{tag}</button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  productContainer: {
    padding: '20px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    backgroundColor: '#fff',
    marginBottom: '20px',
  },
  tagsContainer: {
    marginTop: '10px',
  },
  tagButton: {
    margin: '5px',
    padding: '10px 15px',
    fontSize: '14px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Product;