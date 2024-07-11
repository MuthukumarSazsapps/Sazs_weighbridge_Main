import { useLocalStorage } from 'react-use';
import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRoutesValidator = () => {
    const [jwt] = useLocalStorage('auth');
    console.log("jwt,jwt",jwt);
    return jwt ? <Outlet /> : <Navigate to="/login" />;
  };