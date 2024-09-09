// src/routes/AppRoutes.tsx
// import React from "react";
import { Routes, Route } from "react-router-dom";

import DashboardPage from "../containers/pages/Dashboard";
import NotFoundPage from "../containers/pages/NotFoundPage";
import LoginPage from "../containers/pages/LoginPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    {/* <Route path="/dashboard" element={<DashboardLayout />}>
      <Route index element={<DashboardHome />} />
      <Route path="settings" element={<DashboardSettings />} />
    </Route> */}
    <Route path="/dashboard" element={<DashboardPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
