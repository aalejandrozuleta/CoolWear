import { About } from "./pages/About/About";
import { Product } from "./pages/Product/Product";
import { Home } from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/product" element={<Product />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </Router>
  )
}

export default App;
