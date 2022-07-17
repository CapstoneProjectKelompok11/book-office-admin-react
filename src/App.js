import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import ManageReview from "./pages/ManageReview";
import ManagingList from "./pages/ManageList";
import Inbox from "./pages/Inbox";
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
          <Route path="/ManagingList" element={<ManagingList />} />
          <Route path="/ManageReview" element={<ManageReview />} />
          <Route path="/Inbox" element={<Inbox />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
