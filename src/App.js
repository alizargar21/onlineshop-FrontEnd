import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "../src/container/Pages/Home/HomePage";
import CartPage from "./container/Pages/cart/CartPage";
import NotFoundPage from "./container/Pages/NotFoundPage";
import Blogs from "./container/Pages/Blogs/Blogs";
import SignUp from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import CheckOut from "./container/Pages/CheckOutPage/CheckOut";
import ThemeProvider from "./Provider/ThemeProvider";
import Favorite from "./container/Pages/FavoritePage/Favorite";
import AllOfferProducts from "./container/Pages/OfferPage/OfferPage";
import { Provider } from "react-redux";
import store, { getAuthenticationDataFromLocalStorage } from "./features/store";
import ProductsAndCategories from "./container/Pages/Products&Categories/Categories";
import { getFavoriteDataFromLocalStorage } from "./features/store";
import { setInitialValue } from "./features/FavoriteSlice/FavoriteSlice";
import { alreadyUser } from "./features/AuthSlice/AuthSlice";
import ProductDetails from "./container/Pages/ProductDetails/ProductDetailsPage";
import Authentication from "./container/Pages/Auth/Authentication";
const favData = getFavoriteDataFromLocalStorage();
const authData = getAuthenticationDataFromLocalStorage();

if (favData) {
  store.dispatch(setInitialValue(favData));
}
if (authData !== null) {
  store.dispatch(alreadyUser(authData));
}
function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <ToastContainer
            closeOnClick
            position="top-left"
            hideProgressBar={true}
            transition={Flip}
            theme={"colored"}
          />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/authentication/*" element={<Authentication />} >
              <Route path="login" element={<Login />}/>
              <Route path="signup" element={<SignUp />}/>
            </Route>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/offers" element={<AllOfferProducts />} />
            <Route path="/products/*" element={<ProductsAndCategories />} />
            <Route path="/myFavorite" element={<Favorite />} />
            <Route path={`/products/:id`} element={<ProductDetails />} />
          </Routes>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
