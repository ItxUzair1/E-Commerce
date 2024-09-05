import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Components/Home.jsx';
import SignUpLayout from './Layout/LoginLayout.jsx';
import SignIn from './Components/LoginForm.jsx';
import SignUp from './Components/SignUpForm.jsx';
import AllProducts, { FetchProducts } from './Components/AllProducts.jsx';
import Products, { FetchCategoryProducts } from './Components/Products.jsx';
import ProductDetails, { FetchProductDetails } from './Components/ProductDetails.jsx';
import NotFoundPage from './Components/NotFound.jsx';
import { LoginProvider } from './Components/Context/LoginContext.jsx';
import ContactUs from './Components/ContactUs.jsx';
import AboutUs from './Components/About.jsx';
import { SearchContext, SearchProvider } from './Components/Context/SearchContext.jsx';
import { CartProvider } from './Components/Context/CartContext.jsx';
import Cart from './Components/Cart.jsx';

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='allproducts' element={<AllProducts />} loader={FetchProducts} />
        <Route path='category/:category' element={<Products />} loader={FetchCategoryProducts} />
        <Route path='products/:id' element={<ProductDetails />} loader={FetchProductDetails} />
        <Route path='contactus' element={<ContactUs/>}/>
        <Route path='about' element={<AboutUs/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Route>
      <Route path='/signin' element={<SignUpLayout />}>
        <Route path='' element={<SignIn />} />
      </Route>
      <Route path='/register' element={<SignUpLayout />}>
        <Route path="" element={<SignUp />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginProvider>
        <SearchProvider>
           <CartProvider>
              <RouterProvider router={router} />
           </CartProvider>
        </SearchProvider>
    </LoginProvider>      
  </StrictMode>
);
