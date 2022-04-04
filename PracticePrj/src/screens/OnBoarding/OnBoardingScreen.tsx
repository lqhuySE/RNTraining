import React from 'react';
import {Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Simple = ({navigation}: any) => (
  <Onboarding
    onDone={() => navigation.replace('Login')}
    onSkip={() => navigation.replace('Login')}
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={require('../../assets/physics.png')} />,
        title: 'Hi',
        subtitle: 'Welcome to note app',
      },
      {
        backgroundColor: '#fe6e58',
        image: <Image source={require('../../assets/android.png')} />,
        title: 'Hi',
        subtitle: 'Welcome to note app',
      },
      {
        backgroundColor: '#999',
        image: <Image source={require('../../assets/apple.png')} />,
        title: 'Hi',
        subtitle: 'Welcome to note app',
      },
    ]}
  />
);

export default Simple;
