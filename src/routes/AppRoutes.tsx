// src/routes/AppRoutes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "../containers/pages/LoginPage";
import HomePage from "../containers/pages/HomePage";
import DashboardPage from "../containers/pages/Dashboard";
import NotFoundPage from "../containers/pages/NotFoundPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    {/* <Route path="/dashboard" element={<DashboardLayout />}>
      <Route index element={<DashboardHome />} />
      <Route path="settings" element={<DashboardSettings />} />
    </Route> */}
    <Route path="/dashboard" element={<DashboardPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
