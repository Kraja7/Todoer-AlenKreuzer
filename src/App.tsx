import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/fetch" element={<Main />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
