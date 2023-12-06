import { Product } from "./pages/Product/Product";
import { Home } from "./pages/Home/Home";
import  Login  from "./pages/Login/Login";
import SingUp from "./pages/SignUp/SignUp";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserSettings from "./pages/UserSettings/UserSettings";
import {ProductCreate} from "./pages/ProductCreate/ProductCreate";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/product" element={<Product />}/>
        <Route path="/productCreate" element={<ProductCreate />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SingUp />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/userSettings" element={<UserSettings />} />
      </Routes>
    </Router>
  )
}

export default App;
