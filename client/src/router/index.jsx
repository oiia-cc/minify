import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login";
import DashboardPage from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "../components/Navbar";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <DashboardPage />
                        </ProtectedRoute>
                    }
                />
                <Route path="/" element={<DashboardPage />} />
                <Route path="/admin" element={<DashboardPage />} />
                <Route path="/profile" element={<DashboardPage />} />
            </Routes>
        </BrowserRouter>
    )
}