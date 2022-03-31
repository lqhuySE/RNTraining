import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import {AuthContext} from './AuthProvider';
import NoteScreen from '../screens/NoteScreen';
import NoteDetailScreen from '../screens/NoteDetailScreen';

const AuthStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
}

function RootNavigator() {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="Note" component={NoteScreen} />
      <RootStack.Screen name="NoteDetail" component={NoteDetailScreen} />
    </RootStack.Navigator>
  );
}

export default function AppStack() {
  const {user, isLoading} = useContext(AuthContext);
  return (
    <NavigationContainer>
      {user ? <RootNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
