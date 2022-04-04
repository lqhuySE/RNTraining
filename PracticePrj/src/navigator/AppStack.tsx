import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import {AuthContext} from './AuthProvider';
import NoteDetailScreen from '../screens/NoteDetail/NoteDetailScreen';
import OnboardingScreen from '../screens/OnBoarding/OnBoardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();

const AuthNavigator = () => {
  let routeName: string;
  const [isFirstLaunch, setIsFirstLaunch] = useState<any>(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });

    return () => {
      isFirstLaunch;
    };
  }, [isFirstLaunch]);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  return (
    <AuthStack.Navigator initialRouteName={routeName}>
      <AuthStack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{header: () => null}}
      />
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="Home" component={HomeScreen} />
      {/*<RootStack.Screen name="Note" component={NoteScreen} />*/}
      <RootStack.Screen name="NoteDetail" component={NoteDetailScreen} />
    </RootStack.Navigator>
  );
};

export default function AppStack() {
  const {user} = useContext(AuthContext);
  return (
    <NavigationContainer>
      {user ? <RootNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
