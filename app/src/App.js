import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./screens/SignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TechMaps from "./screens/TechMaps";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<SignIn />} />
            <Route path="/techs_map" element={<TechMaps />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
