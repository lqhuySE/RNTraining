import React from 'react';
import AuthProvider from './src/navigator/AuthProvider';
import {SafeAreaView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppStack from './src/navigator/AppStack';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <AuthProvider>
        <AppStack />
      </AuthProvider>
    </SafeAreaView>
  );
};

export default App;
