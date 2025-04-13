
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUserProfile } from "./redux-store/slices/userSlice";
import { useEffect } from "react";
import Category from "./components/Category";
import Home from "./pages/Home";
import CategoryPage from "./components/CategoryPage";
import SingleRecipe from "./components/SingleRecipe";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Header from "./components/Header";
import Cart from "./components/Cart";
// import OrderSuccess from "./components/OrderSucces";
import Order from "./components/Order";
// import CartItem from "./components/CartItem";
import './index.css'
// import Search from './components/Search'
function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("jwtToken"); // Retrieve the JWT from localStorage

  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile(token));
    }
  }, [token, dispatch]);

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/recipe/:id" element={<SingleRecipe />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<SignUp />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/order-success" element={<OrderSuccess />} /> */}
        <Route path="/order" element={<Order />} />
        <Route path="/category" element={<Category />} />


        


      </Routes>
      <Newsletter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;