import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

// Import Components
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard"; // นำเข้า Dashboard
import CreateUser from './pages/Createuser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} /> {/* ใช้ตัวพิมพ์เล็ก */}
        <Route path="create-grade" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
