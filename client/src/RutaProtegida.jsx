import { Navigate } from "react-router-dom";

const RutaProtegida = ({ user, children }) => {
    if (!user?.id) {
      return <Navigate to="/login" replace />;
    }  
    return children;
  };
export default RutaProtegida;