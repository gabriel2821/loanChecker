
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import Eligibility from "./Pages/CheckEligibility/Eligibility";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import CompareLoan from "./Pages/CompareLoan/CompareLoan";
import { Profile } from "./Pages/Profile/Profile";
import { UserProvider } from "./components/Context/UserContext";
import { ProtectedRoute } from "./Auth/ProtectedRoute";


function App() {

  return (
    <>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <MainLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="eligibility" element={<Eligibility />} />
              <Route path="compareLoan" element={<CompareLoan />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

export default App
