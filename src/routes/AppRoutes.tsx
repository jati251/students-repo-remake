// src/routes/AppRoutes.tsx
// import React from "react";
import { Routes, Route } from "react-router-dom";

import DashboardPage from "../containers/pages/Dashboard";
import NotFoundPage from "../containers/pages/NotFoundPage";
import LoginPage from "../containers/pages/LoginPage";
import SidebarPage from "../containers/pages/SidebarPage";
import PrivateRoute from "./PrivateRoutes";
import CurriculumPage from "../containers/pages/CurriculumPage";
import CalendarPage from "../containers/pages/CalendarPage";
import StudyPlanPage from "../containers/pages/StudyPlanPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    {/* <Route path="/dashboard" element={<DashboardLayout />}>
      <Route index element={<DashboardHome />} />
      <Route path="settings" element={<DashboardSettings />} />
    </Route> */}
    <Route
      path="/"
      element={
        <PrivateRoute>
          <SidebarPage />
        </PrivateRoute>
      }
    >
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />
       <Route
        path="/curriculum"
        element={
          <PrivateRoute>
            <CurriculumPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/study-plan"
        element={
          <PrivateRoute>
            <StudyPlanPage />
          </PrivateRoute>
        }
      />
       <Route
        path="/calendar"
        element={
          <PrivateRoute>
            <CalendarPage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);

export default AppRoutes;
