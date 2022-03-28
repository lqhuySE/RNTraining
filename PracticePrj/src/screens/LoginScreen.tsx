import React, {Component, useState} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import CustomInputField from '../components/InputField/CustomInputField';
import CustomBasicButton from '../components/Button/CustomBasicButton';
import CustomImageButton from '../components/Button/CustomImageButton';
import FirebaseAuthUtils from '../utils/FirebaseUtils';

type NavigationProps = {
  onClicked: (param: any) => void;
};

class GoToSignUp extends Component<NavigationProps> {
  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={this.props.onClicked}>
          <Text style={styles.textButton}>Sign up</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

class GoToForgetPassword extends Component {
  render() {
    return (
      <View>
        <TouchableWithoutFeedback>
          <Text style={styles.textButton}>Forgot your password ?</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

class Divider extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', marginVertical: 20}}>
        <View style={styles.backDivider} />
        <Text style={{alignSelf: 'center', paddingHorizontal: 5}}>Or</Text>
        <View style={styles.backDivider} />
      </View>
    );
  }
}

class LoginWithThirdParty extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <CustomImageButton image={require('../assets/google.png')} />
        <CustomImageButton image={require('../assets/facebook.png')} />
      </View>
    );
  }
}

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    FirebaseAuthUtils.signIn(email, password).catch(e => {
      console.log(e);
    });
  };

  const goToSignUp = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      <CustomBasicButton
        title={'Login'}
        active={true}
        onClicked={() => signIn()}
      />
      <View style={styles.textBottomContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text>Don't have any account ? </Text>
          <GoToSignUp onClicked={() => goToSignUp()} />
        </View>
        <GoToForgetPassword />
      </View>
      <Divider />
      <LoginWithThirdParty />
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
