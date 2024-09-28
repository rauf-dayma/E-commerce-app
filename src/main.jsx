import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom'
import './index.css'
import Home from './components/Home.jsx'


// lazy Loading


const NotFound = lazy(()=> import("./components/NotFound.jsx"))
const Checkout = lazy(()=> import("./components/Checkout.jsx"))
const Cart = lazy(()=> import("./components/Cart.jsx"))
const ProductItem = lazy(()=> import("./components/ProductItem.jsx"))
const ProductDetail = lazy(()=> import("./components/ProductDetail.jsx"))



const appRouting = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Suspense> <Cart /> </Suspense>
      },
      {
        path: "/details/:id",
        element: <Suspense> <ProductDetail />  </Suspense>
      },
      {
        path: "/checkout",
        element: <Suspense> <Checkout />  </Suspense>
      },
    ],
    errorElement: <NotFound />,
  },
 
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouting} />
  </StrictMode>,
)
