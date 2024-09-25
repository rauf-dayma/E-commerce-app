import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast.configure();  no longer required

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = () => {
    const itemExists = cartItems.find((item) => item.id === product.id);

    if (itemExists) {
      toast.error("This item is already in the cart.", {
        position: "top-right", 
      });
    } else {
      dispatch(addItem(product));
      toast.success("Item added to cart!", {
        position: "top-right", 
      });
    }
  };

  useEffect(() => {
    // Replace with your actual API call for fetching individual product details by ID
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="product-details-info">
        <h1>{product.title}</h1>
        <p className="price">${product.price}</p>
        {product.discountPercentage > 0 && (
          <p className="discount">
            $
            {(product.price * (1 - product.discountPercentage / 100)).toFixed(
              2
            )}
          </p>
        )}
        <p>
          <strong>Brand:</strong> {product.brand}
        </p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
        <p>
          <strong>Description:</strong> {product.description}
        </p>
        <p>
          <strong>Rating:</strong> {product.rating}/5
        </p>
        <p>
          <strong>Stock:</strong> {product.stock} ({product.availabilityStatus})
        </p>
        <p>
          <strong>Dimensions (W x H x D):</strong> {product.dimensions.width} x{" "}
          {product.dimensions.height} x {product.dimensions.depth} cm
        </p>
        <p>
          <strong>Weight:</strong> {product.weight} g
        </p>
        <p>
          <strong>Minimum Order Quantity:</strong>{" "}
          {product.minimumOrderQuantity}
        </p>
        <p>
          <strong>Return Policy:</strong> {product.returnPolicy}
        </p>
        <p>
          <strong>Warranty:</strong> {product.warrantyInformation}
        </p>
        <p>
          <strong>Shipping Information:</strong> {product.shippingInformation}
        </p>

        <h3>Tags:</h3>
        <ul>
          {product.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>

        <h3>Reviews:</h3>
        <ul>
          {product.reviews.map((review, index) => (
            <li key={index}>
              <p>
                <strong>{review.reviewerName}:</strong> {review.comment}{" "}
                (Rating: {review.rating}/5)
              </p>
            </li>
          ))}
        </ul>

        <button className="addToCartBtn" onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
