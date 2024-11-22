import { Route, Routes } from "react-router-dom";

import Login from "../Pages/auth/Login";
import SignUp from "../Pages/auth/SignUp";
import EcoInsight from "../Pages/landing/EcoInsight";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<EcoInsight />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<SignUp />} />
    </Routes>
  );
};

export default AppRoutes;
