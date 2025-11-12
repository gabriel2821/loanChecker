
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Dashboard from "./Pages/Dashboard/Dashboard"
import SignUp from "./Pages/SignUp/SignUp";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
