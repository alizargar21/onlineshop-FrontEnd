import "./App.css";
import { Route, Routes, Router ,useParams } from "react-router-dom";
import AboutUs from "./container/Pages/Aboutus/AboutUs";
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
import Categories from "./container/Pages/Categories/Categories";
import ProductListContainer from "./container/Pages/products/ProductList/ProductListContainer";
import ThemeProvider from "./Provider/ThemeProvider";
import FavoriteProvider from "./Provider/FavoriteProvider";
import Favorite from "./container/Pages/FavoritePage/Favorite";
import http from "./services/httpServices";
import { useState , useEffect } from "react";
import AllOfferProducts from "./container/Pages/OfferPage/OfferPage"

function App() {
  
  const Fetching = async()=> {
    const data =await http.get("/products")
    const allProducts =data.data
    setProducts(allProducts)
    
  
  }
  const [products , setProducts] = useState([])
  // const [data , setData] = useState([])
  useEffect(() => {
    Fetching()
  }, [setProducts]);
  return (
    <>
      <ThemeProvider>
        
        <FavoriteProvider>
        <AuthProvider>
          <CartProvider>
            <ToastContainer
              closeOnClick
              position="top-left"
              hideProgressBar={true}
              transition={Flip}
              theme={"colored" }
            />
            <Routes>
              <Route path="/" element={<HomePage products={products}/>} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/offers" element={<AllOfferProducts products={products}/>} />
              <Route path="/laptops" element={<ProductListContainer />} />
              <Route path="/mobiles" element={<ProductListContainer />} />
              <Route path="/cases" element={<ProductListContainer />} />
              <Route path="/myFavorite" element={<Favorite />} />
              <Route path={`/products/:id`} element={<SingleProduct products={products}/>} />
            </Routes>
            
          </CartProvider>
        </AuthProvider>
        </FavoriteProvider>
      
      </ThemeProvider>
    </>
  );
}

export default App;
