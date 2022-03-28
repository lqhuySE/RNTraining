import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Alert,
} from 'react-native';
import CustomInputField from '../components/InputField/CustomInputField';
import CustomBasicButton from '../components/Button/CustomBasicButton';

class GoToSignIn extends Component {
  render() {
    return (
      <View>
        <TouchableWithoutFeedback>
          <Text style={styles.textButton}>Sign In</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default function SignUpScreen() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <CustomInputField
        headerTitle={'Email'}
        valueTitle={email}
        placeholder={'Please enter your email'}
        multiline={false}
        passwordType={false}
        onTextChange={value => setEmail(value)}
      />
      <CustomInputField
        headerTitle={'Password'}
        valueTitle={password}
        placeholder={'Please enter your password'}
        multiline={false}
        passwordType={true}
        onTextChange={value => setPassword(value)}
      />
      <CustomInputField
        headerTitle={'Confirm Password'}
        valueTitle={password}
        placeholder={'Please enter your password'}
        multiline={false}
        passwordType={true}
        onTextChange={value => setPassword(value)}
      />
      <CustomBasicButton
        title={'Register'}
        active={true}
        onClicked={() => Alert.alert('RN', 'This is alert')}
      />
      <View style={styles.textBottomContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text>Have an account ? </Text>
          <GoToSignIn />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 5,
    color: 'black',
  },
  inputView: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  textBottomContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  backDivider: {
    backgroundColor: 'black',
    height: 1,
    alignSelf: 'center',
    flex: 1,
  },
  textButton: {
    color: '#008ECF',
  },
});
