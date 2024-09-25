import ProductList from "./ProductList";
import { useEffect, useState } from "react";

function Home() {
  const [allProduct, setAllProducts] = useState([]); // Full list of products from API
  const [searchTerm, setSearchTerm] = useState(''); // Search term

  // Fetch Products from the API when the component mounts
  useEffect(() => {
    fetchProductsFromAPI();
  }, []);

  // Function to fetch products data from API
  async function fetchProductsFromAPI() {
    const response = await fetch('https://dummyjson.com/products');
    const productData = await response.json();
    console.log("Fetched Products Data:", productData); // Debugging: Check if data is correct

    setAllProducts(productData.products); // Store the complete product list
  }

  return (
    <>
      <ProductList productData={allProduct} searchTerm={searchTerm} />
    </>
  );
}

export default Home;

