import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const userEmail = localStorage.getItem("userEmail");
  const userPassword = localStorage.getItem("userPassword");

  // Eğer kullanıcı bilgileri yoksa giriş sayfasına yönlendir
  if (!userEmail || !userPassword) {
    return <Navigate to="/" replace />;
  }

  // Kullanıcı bilgileri varsa içeriği render et
  return <>{children}</>;
};

export default ProtectedRoute;
