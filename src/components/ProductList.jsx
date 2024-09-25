import React from 'react';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';
import { useState, useEffect } from 'react';
import './styles/ProductList.css';
import { useOutletContext } from 'react-router-dom';

function ProductList({ productData }) {
  const { searchTerm } = useOutletContext(); // Get the searchTerm from Outlet context

  const [filteredProducts, setFilteredProducts] = useState(productData);

  useEffect(() => {
    const filtered = productData.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [productData, searchTerm]);

  return (
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((data) => (
            <Link to={`/details/${data.id}`} key={data.id}>
            <ProductItem ProductDetails={data} />
          </Link>
          ))
        ) : (
          <p>Loading.....</p>
        )}
  
        
      </div>
    );
  
}

export default ProductList;

