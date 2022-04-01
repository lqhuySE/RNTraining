import React, {Component, useState} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import CustomInputField from '../../components/InputField/CustomInputField';
import CustomBasicButton from '../../components/Button/CustomBasicButton';
import FirebaseAuthUtils from '../../utils/FirebaseUtils';

type NavigationProps = {
  onClicked: (param: any) => void;
};

class GoToSignIn extends Component<NavigationProps> {
  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={this.props.onClicked}>
          <Text style={styles.textButton}>Sign In</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default function SignUpScreen({navigation}: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const signUp = () => {
    FirebaseAuthUtils.signUp(email, password).catch(e => {
      console.log(e);
    });
  };

  const backToSignIn = () => {
    navigation.goBack();
  };

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
        valueTitle={confirmPassword}
        placeholder={'Please enter your password'}
        multiline={false}
        passwordType={true}
        onTextChange={value => setConfirmPassword(value)}
      />
      <CustomBasicButton
        title={'Register'}
        active={true}
        onClicked={() => signUp()}
      />
      <View style={styles.textBottomContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text>Have an account ? </Text>
          <GoToSignIn onClicked={() => backToSignIn()} />
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
