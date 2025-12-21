import { Navigate } from "react-router-dom";

export function PublicRoute({ children }) {
  const token = localStorage.getItem("token");

  if (token && token !== "undefined") {
    // Nếu đã đăng nhập, không cho vào Login nữa, đẩy về trang chủ/dashboard
    return <Navigate to="/" replace />;
  }
  return children;
}
