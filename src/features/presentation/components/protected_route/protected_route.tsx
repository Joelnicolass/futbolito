import React, {useState} from 'react';
import {useRouter} from '../../hooks/useRouter';
import {ROUTES} from '../../router/routes';

interface ProtectedRoute {
children: React.ReactNode
}
export const ProtectedRoute = ({children}:ProtectedRoute) => {
  const [isAuth, setIsAuth] = useState(true);
  const {handleReplace} = useRouter();
  return isAuth ? <>{handleReplace(ROUTES.LOGIN)}</> : {children};
};
