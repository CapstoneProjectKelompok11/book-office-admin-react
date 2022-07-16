import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import OrderDetail from "./pages/OrderDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/OrderDetail" element={<OrderDetail />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
