import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import agentImage from "./assets/agent.jpeg";
import userImage from "./assets/user-avatar.png";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import React, { useEffect, useState } from "react";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  )
  
}

export default App;
