import "./App.css";
import { Route, Routes, Router, useParams } from "react-router-dom";
import { ToastContainer, Slide, Zoom, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "../src/container/Pages/Home/HomePage";
import CartPage from "./container/Pages/cart/CartPage";
import NotFoundPage from "./container/Pages/NotFoundPage";
import Blogs from "./container/Pages/Blogs/Blogs";
import SignUp from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import CartProvider from "./Provider/CartProvider";
import AuthProvider from "./Provider/AuthProvider";
import CheckOut from "./container/Pages/CheckOutPage/CheckOut";
import ProfilePage from "./container/Pages/Profile/Profile";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Categories from "./container/Pages/Products&Categories/Categories";
import ProductListContainer from "./container/Pages/products/ProductList/ProductListContainer";
import ThemeProvider from "./Provider/ThemeProvider";
import FavoriteProvider from "./Provider/FavoriteProvider";
import Favorite from "./container/Pages/FavoritePage/Favorite";
import http from "./services/httpServices";
import { useState, useEffect } from "react";
import AllOfferProducts from "./container/Pages/OfferPage/OfferPage";
import { Provider } from "react-redux";
import store from "./features/store";
import ProductsAndCategories from "./container/Pages/Products&Categories/Categories";
import ListContainer from "./components/UI/ListContainer/ListContainer";
function App() {
 
  
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <FavoriteProvider>
            <AuthProvider>
              <CartProvider>
                <ToastContainer
                  closeOnClick
                  position="top-left"
                  hideProgressBar={true}
                  transition={Flip}
                  theme={"colored"}
                />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/checkout" element={<CheckOut />} />
                  <Route path="*" element={<NotFoundPage />} />
                  <Route path="/blogs" element={<Blogs />} />
                  <Route
                    path="/offers"
                    element={<AllOfferProducts  />}
                  />
                  <Route path="/products/*" element={<ProductsAndCategories/>} />
               
           
            
                  <Route path="/myFavorite" element={<Favorite />} />
                  <Route
                    path={`/products/:id`}
                    element={<SingleProduct  />}
                  />
                </Routes>
              </CartProvider>
            </AuthProvider>
          </FavoriteProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
