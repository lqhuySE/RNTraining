import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import CustomInputField from '../components/CustomInputField';
import CustomButton from '../components/Button';
import CustomButtonWithImage from '../components/CustomButtonWithImage';
import CustomDivider from '../components/CustomDivider';

class GoToSignUp extends Component {
  render() {
    return (
      <View>
        <TouchableWithoutFeedback>
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
        <CustomButtonWithImage
          message={'Sign in by Google'}
          image={require('../assets/google.png')}
        />
        <CustomButtonWithImage
          message={'Sign in by Facebook'}
          image={require('../assets/facebook.png')}
        />
      </View>
    );
  }
}

export default function LoginPageController({navigation}) {
  const [email, setEmail] = useState('example@gmail.com');
  const [password, setPassword] = useState();

  return (
    <SafeAreaView>
      <ScrollView
        style={styles.scrollViewContainer}
        contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={styles.title}>Login</Text>
          <CustomInputField
            headerTitle={'Email'}
            valueTitle={email}
            placeholder={'Please enter your email'}
            multiline={false}
            onTextChange={value => setEmail(value)}
          />
          <CustomInputField
            headerTitle={'Password'}
            valueTitle={password}
            placeholder={'Please enter your password'}
            multiline={true}
            onTextChange={value => setPassword(value)}
          />
          <CustomButton
            title={'Login'}
            onClicked={() => navigation.navigate('Home')}
          />
          <View style={styles.textBottomContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text>Don't have any account ? </Text>
              <GoToSignUp />
            </View>
            <GoToForgetPassword />
          </View>
          <Divider />
          <LoginWithThirdParty />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
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
    flex: 1,
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
