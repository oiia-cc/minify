import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login";
import DashboardPage from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Unknown from "../pages/Unknown";
import AddFilePage from "../pages/AddFilePage";
import Navbar from "../components/Navbar";
import { PublicRoute } from "./PublicRoutes";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<DashboardPage />} />
        <Route path="/unknown" element={<Unknown />} />
        <Route
          path="/addFile"
          element={
            <ProtectedRoute>
              <AddFilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
