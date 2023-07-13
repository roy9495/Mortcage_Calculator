import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  Navbar  from "./components/Navbar";
import  Home  from "./Home";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
