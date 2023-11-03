import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate, useNavigate} from "react-router-dom";
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Home/>
      {/* <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes> */}
    </div>
  );
}

export default App;
