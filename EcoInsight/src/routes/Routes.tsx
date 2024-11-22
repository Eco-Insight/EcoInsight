import { Route, Routes } from "react-router-dom";

import Login from "../Pages/auth/Login";
import EcoInsight from "../Pages/landing/EcoInsight";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<EcoInsight />} />
      <Route path="/auth/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
