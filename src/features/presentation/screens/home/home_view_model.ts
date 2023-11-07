import { StackActions, useNavigation } from '@react-navigation/native';

export const HomeViewModel = () => {
    const navigation = useNavigation();
    const handleTap = () =>{
        navigation.dispatch(

            StackActions.replace('Login')
        );
    };
  return {
    handleTap,
  };
};
