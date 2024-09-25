import './styles/ProductItem.css';

const ProductItem = ({ ProductDetails }) => {
  const {
    id,
    title,
    description,
    price,
    rating,
    stock,
    images,
    thumbnail,
  } = ProductDetails;

  return (
    <div className="product-item">
      <img src={thumbnail} alt={title} className="product-image" />
      <div className="product-info">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <div className="product-meta">
          <span className="product-price">${price.toFixed(2)}</span>
          <span className="product-rating">Rating: {rating}★</span>
          <span className={`product-stock ${stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
            {stock > 0 ? `In Stock: ${stock}` : 'Out of Stock'}
          </span>
        </div>
      </div>
    </div>
  );
};



export default ProductItem;