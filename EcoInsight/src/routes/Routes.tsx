import { Route, Routes } from "react-router-dom";

import ForgetPassword from "../Pages/auth/ForgetPassword";
import Login from "../Pages/auth/Login";
import SignUp from "../Pages/auth/SignUp";
import Dashboard from "../Pages/Dashboard";
import EcoInsight from "../Pages/landing/EcoInsight";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<EcoInsight />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/auth/forget-password" element={<ForgetPassword />} />
      <Route path="/auth/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
