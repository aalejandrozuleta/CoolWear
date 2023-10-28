import { About } from "./pages/About/About";
import { Product } from "./pages/Product/Product";
import { Home } from "./pages/Home/Home";
import  Login  from "./pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingUp from "./pages/SignUp/SignUp";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/product" element={<Product />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SingUp />} />
      </Routes>
    </Router>
  )
}

export default App;
