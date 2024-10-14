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
    // Check if the product exists in the cart
    const itemExists = cartItems.find((item) => item.productId._id === product._id); // Correct comparison
  
    if (itemExists) {
      toast.error("This item is already in the cart.", {
        position: "top-right",
      });
    } else {
      // Make a POST request to add the product to the cart
      fetch(`http://localhost:3000/api/cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Include user token for authentication
        },
        body: JSON.stringify({
          productId: product._id, // Dynamically pass the product ID
          quantity: 1, // Default quantity, you can change this as needed
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to add item to cart");
          }
          return response.json();
        })
        .then((data) => {
          // Dispatch an action to update the cart in the Redux store
          dispatch(
            addItem({
              productId: product, // Pass the whole product object
              quantity: 1, // Set default quantity
            })
          );
          toast.success("Item added to cart!");
        })
        .catch((error) => {
          console.error("Error adding to cart:", error);
          toast.error("Failed to add item to cart");
        });
    }
  };
  
  
  useEffect(() => {
    
    fetch(`http://localhost:3000/api/products/${id}`)  
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch product details");
      }
      return response.json();
    })
    .then((data) => setProduct(data))
    .catch((error) => {
      console.error("Error fetching product details:", error);
    });
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
