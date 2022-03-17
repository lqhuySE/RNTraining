import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePageController from './HomePageController';
import LoginPageController from './LoginPageController';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginPageController}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomePageController}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
