import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import Card from "./pages/Card/Card";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/card" element={<Card/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
