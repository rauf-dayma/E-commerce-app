import ProductList from "./ProductList";
import { useEffect, useState } from "react";

function Home() {
  const [allProduct, setAllProducts] = useState([]); // Full list of products from API
  const [searchTerm, setSearchTerm] = useState(""); // Search term

  // Fetch Products from the API when the component mounts
  useEffect(() => {
    fetchProductsFromAPI();
  }, []);

  // Function to fetch products data from API
  async function fetchProductsFromAPI() {
    const token = localStorage.getItem("token"); // Retrieve JWT token from local storage

    try {
      const response = await fetch("http://localhost:3000/api/products", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Add Bearer token to request
        },
      });

      if (response.ok) {
        const products = await response.json();
        console.log("Products:", products);
        setAllProducts(products); // Store the complete product list
      } else {
        const error = await response.json();
        console.error("Error fetching products:", error.message);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }

  return (
    <>
      <ProductList productData={allProduct} searchTerm={searchTerm} />
    </>
  );
}

export default Home;
