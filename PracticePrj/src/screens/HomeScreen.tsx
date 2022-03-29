import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import FirebaseAuthUtils from '../utils/FirebaseUtils';

function HomeScreen() {
  const signOut = () => {
    FirebaseAuthUtils.signOut().catch(e => {
      console.log(e);
    });
  };

  return (
    <View>
      <View>
        <Button title={'Demo button'} onPress={() => signOut()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    justifyContent: 'center',
  },
});

export default HomeScreen;
