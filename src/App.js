import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Cart from "./pages/Card/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/card" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
