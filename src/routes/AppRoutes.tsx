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
import LecturingActivityPage from "../containers/pages/LecturingActivityPage";
import KksPage from "../containers/pages/KksPage";
import GraduationPage from "../containers/pages/GraduationPage";
import ThesisPage from "../containers/pages/ThesisPage";
import RegistrationPage from "../containers/pages/RegistrationPage";
import CatatanPrestasiPage from "../containers/pages/CatatanPrestasiPage";
import ServicePage from "../containers/pages/ServicePage";
import BillinformationPage from "../containers/pages/BillinformationPage";
import HerRegistPage from "../containers/pages/HerRegistPage";
import ScholarshipPage from "../containers/pages/ScholarshipPage";

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
      <Route
        path="/lecturing-activity"
        element={
          <PrivateRoute>
            <LecturingActivityPage />
          </PrivateRoute>
        }
      />
       <Route
        path="/kks"
        element={
          <PrivateRoute>
            <KksPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/thesis"
        element={
          <PrivateRoute>
            <ThesisPage />
          </PrivateRoute>
        }
      />
        <Route
        path="/graduation"
        element={
          <PrivateRoute>
            <GraduationPage />
          </PrivateRoute>
        }
      />
       <Route
        path="/registration"
        element={
          <PrivateRoute>
            <RegistrationPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/catatan-prestasi"
        element={
          <PrivateRoute>
            <CatatanPrestasiPage />
          </PrivateRoute>
        }
      />
       <Route
        path="/service"
        element={
          <PrivateRoute>
            <ServicePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/billinformation"
        element={
          <PrivateRoute>
            <BillinformationPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/her-register"
        element={
          <PrivateRoute>
            <HerRegistPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/scholarship"
        element={
          <PrivateRoute>
            <ScholarshipPage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);

export default AppRoutes;
