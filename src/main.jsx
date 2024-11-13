import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Home.jsx";

// lazy Loading
const NotFound = lazy(() => import("./components/NotFound.jsx"));
const Checkout = lazy(() => import("./components/Checkout.jsx"));
const Cart = lazy(() => import("./components/Cart.jsx"));
const ProductDetail = lazy(() => import("./components/ProductDetail.jsx"));
const Login = lazy(() => import("./components/Login.jsx"));
const Signup = lazy(() => import("./components/signUp.jsx"));

const appRouting = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", // Redirect root to login
        element: <Navigate to="/login" replace />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Checkout />
          </Suspense>
        ),
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/signup",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Signup />
      </Suspense>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouting} />
  </StrictMode>
);
