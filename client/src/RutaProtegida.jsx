import { Navigate } from "react-router-dom";
import useLocalStorage from './hooks/useLocalStorage';

const RutaProtegida = ({ user, children }) => {
  const [userLocal, setUser] = useLocalStorage("user", "");

    if (user?.id || userLocal?.id ) {
      return children;
    }  
    return <Navigate to="/login" replace />;
  };
export default RutaProtegida;