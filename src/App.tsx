import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DashboardPage from "./pages/DashboardPage";
import AuthPage from "./pages/AuthPage";
import InformationPages from "./pages/InformationPages";
import ProtectedRoute from "./components/ProtectedRoute"; // ProtectedRoute'u içe aktar

const App: React.FC = () => {
  return (
    <Routes>
      {/* Login sayfası SideBar olmadan */}
      <Route path="/" element={<AuthPage />} />

      {/* SideBar ile gösterilecek ve koruma altındaki sayfalar */}
      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="inventory" element={<div>Inventory Page</div>} />
        <Route path="reports" element={<InformationPages />} />
        <Route path="suppliers" element={<InformationPages />} />
        <Route path="manage-store" element={<InformationPages />} />
        <Route path="settings" element={<InformationPages />} />
        <Route path="orders" element={<InformationPages />} />
      </Route>
    </Routes>
  );
};

export default App;
