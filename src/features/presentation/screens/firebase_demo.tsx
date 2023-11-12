import auth from '@react-native-firebase/auth';
import { StackActions, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export const FirebasePrueba = ()=> {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const navigation = useNavigation();

  // Handle user state changes
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) {setInitializing(false);}
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    auth().signInWithEmailAndPassword('asd@hotmail.com','123456').finally((data)=> console.log(data));


    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {return null;}
const handleTap = () =>{
    navigation.dispatch(StackActions.replace('Home'));
};
  if (!user) {
    return (
      <View>
        <Text>Login</Text>
        <TouchableOpacity onPress={handleTap}>
            <Text >Go back </Text>
        </TouchableOpacity>

      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
};
