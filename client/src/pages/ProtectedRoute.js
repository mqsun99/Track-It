import { useAppContext } from "../context/appContext";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { user } = useAppContext();
  if (!user) {
    return <Navigate to="/landing"></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
