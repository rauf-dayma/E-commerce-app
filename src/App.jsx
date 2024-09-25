import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import appStore from "./utils/appStore.js";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "./App.css"

function App() {
  const [searchTerm, setSearchTerm] = useState(''); // State to hold the search term

  return (
    <>
      <Provider store={appStore}>
        {/* Pass the setSearchTerm function to the Header */}
        <Header setSearchTerm={setSearchTerm} />
        <Outlet context={{ searchTerm }} /> {/* Use Outlet if needed */}

        <ToastContainer />
      </Provider>
    </>
  );
}

export default App;
