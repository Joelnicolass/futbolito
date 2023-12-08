import {StackActions, useNavigation, useNavigationState} from '@react-navigation/native';
import {LogoutUseCase} from '../../../domain/usecases/auth/logout_use_case';
import {useRouter} from '../../hooks/useRouter';
import {ROUTES} from '../../router/routes';
import {IsAuthenticatedUseCase} from '../../../domain/usecases/auth/is_authenticated_use_case';
import {useEffect, useState} from 'react';
import { GetMatchesUseCase } from '../../../domain/usecases/match/get_matches_use_case';
import { MatchRepositoryImpl } from '../../../data/repositories/match_repository_impl';
import { MatchDatasourceImpl } from '../../../data/datasources/remote/match_datasource_impl';

export const HomeViewModel = () => {
  const navigation = useNavigation();
  const logoutUseCase = new LogoutUseCase();
  const authUseCase = new IsAuthenticatedUseCase();
  const [isLoading, setIsLoading] = useState(false);
  const [mapData, setMapData] = useState([]);
  const selector = useNavigationState(state => state);
  console.log(selector);

  const {handleReplace} = useRouter();
  const handleTap = () => {
    navigation.dispatch(StackActions.replace('Login'));
  };
  const handleLogout = () => {
    logoutUseCase.logout();
    handleReplace(ROUTES.LOGIN);
  };
  const handleAuth = () => {
    navigation.dispatch(StackActions.replace('Auth'));
  };

  const googleApisUrl = 'https://maps.googleapis.com/maps/api/place/textsearch/json';
const location = {
  latitude: -34.5596842,
  longitude: -58.4621494,
};
  const url = `${googleApisUrl}?query=${'starbucks'}&location=${location}&key=AIzaSyBMhV5xqSryaT1m7oUiC1nDioZSg_Spkek`;

  const getMapResults = async () => {
    try {
      const data = await fetch(url);
      const json = await data.json();
      console.log(json);
      if (json && json.results){
        setMapData(json.results.map((result) => {
          const {lat, lng} = result.geometry.location;
          return {
            latitude: lat,
            longitude: lng,
          };
        }));
      }
    } catch (e){
      console.log(e);

    }
  };
  // useEffect(() => {
  //   setIsLoading(true);
  //   const validateAuth = async () => {
  //     const isAuth = await authUseCase.isAuthenticated();
  //     if (!isAuth) {

  //       handleReplace(ROUTES.LOGIN);
  //       setIsLoading(false);
  //     }
  //   }
  //   validateAuth();
  // }, []);

  return {
    handleTap,
    handleAuth,
    handleLogout,
    isLoading,
    getMapResults,
    mapData
  };
};
