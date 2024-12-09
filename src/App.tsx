import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DashboardPage from "./pages/DashboardPage";
import AuthPage from "./pages/AuthPage";
import InformationPages from "./pages/InformationPages";
import ProtectedRoute from "./components/ProtectedRoute";
import InventoryPage from "./pages/InventoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />

      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="inventory" element={<InventoryPage />} />
        <Route path="inventoryDetail" element={<ProductDetailPage />} />
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
