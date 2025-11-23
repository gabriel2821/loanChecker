
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import Eligibility from "./Pages/CheckEligibility/Eligibility";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import CompareLoan from "./Pages/CompareLoan/CompareLoan";
import { Profile } from "./Pages/Profile/Profile";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="eligibility" element={<Eligibility />} />
            <Route path="compareLoan" element={<CompareLoan />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
