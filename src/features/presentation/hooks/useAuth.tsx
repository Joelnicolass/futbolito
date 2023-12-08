import React, { useEffect, useState } from 'react'
import { IsAuthenticatedUseCase } from '../../domain/usecases/auth/is_authenticated_use_case';

export const useAuth = () => {
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
      const auth = async () => {
        const user = new IsAuthenticatedUseCase();
        const data = await user.isAuthenticated();

        if (data) {
            setIsAuth(true);
        }else{
            setIsAuth(false);
        }
      };
      auth();
    }, []);
  return {
    isAuth,
  }
}
