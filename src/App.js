import "./App.css";
import { Route, Routes, Router } from "react-router-dom";
import AboutUs from "./container/Pages/Aboutus/AboutUs";
import { ToastContainer, Slide, Zoom, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "../src/container/Pages/Home/HomePage";
import CartPage from "./container/Pages/cart/CartPage";
import NotFoundPage from "./container/Pages/NotFoundPage";
import Blogs from "./container/Pages/Blogs/Blogs";
import SignUp from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import ProductsPage from "./container/Pages/products/ProductsPage";
import ProductList from "./container/Pages/products/ProductList/ProductList";
import CartProvider from "./Provider/CartProvider";
import AuthProvider from "./Provider/AuthProvider";
import CheckOut from "./container/Pages/CheckOutPage/CheckOut";
import ProfilePage from "./container/Pages/Profile/Profile";
import SingleProduct from "./container/Pages/products/SingleProduct/SingleProduct";
import ModalProvider from "./Provider/ModalNavProvider";

function App() {
  return (
    <>
      <ModalProvider>
        <AuthProvider>
          <CartProvider>
            <ToastContainer
              closeOnClick
              position="top-left"
              hideProgressBar={true}
              transition={Flip}
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
              <Route path="/productspage" element={<ProductsPage />} />
              <Route path="/laptops" element={<ProductList />} />
              <Route path="/mobiles" element={<ProductList />} />
              <Route path="/cases" element={<ProductList />} />
              <Route path="/product/:id" element={<SingleProduct />} />
            </Routes>
          </CartProvider>
        </AuthProvider>
      </ModalProvider>
    </>
  );
}

export default App;

// https://s6.uupload.ir/files/afe981b36622b3b55d95ad26f55290d8ff407b62_1653469937_g5kw.jpg
// https://s6.uupload.ir/files/b7e7f5c40eb33dcefe01cf78a4c02ce21e8cdf34_1651074845_84bx.jpg
// https://s6.uupload.ir/files/6969c6df7ef275fbfce054beecb546a970b6341f_1637680475_k24i.jpg
// https://s6.uupload.ir/files/522caeefa14460199ddd4e3df6796f419d5b6b08_1645858426_hbs4.jpg
