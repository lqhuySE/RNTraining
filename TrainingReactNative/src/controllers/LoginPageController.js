import React, {Component} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import CustomInputField from '../components/CustomInputField';
import CustomButton from '../components/Button';

class GoToSignUp extends Component {
  render() {
    return (
      <View>
        <TouchableWithoutFeedback>
          <Text style={styles.button}>Sign up</Text>
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
          <Text style={styles.button}>Forgot your password ?</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

class Divider extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', marginVertical: 30}}>
        <View style={styles.backDivider} />
        <Text style={{alignSelf: 'center', paddingHorizontal: 5}}>Or</Text>
        <View style={styles.backDivider} />
      </View>
    );
  }
}

export default class LoginPageController extends Component {
  state = {
    email: 'futurex.honda@gmail.com',
    password: '',
  };

  setEmail = (newValue: string) => {
    this.setState({email: newValue});
    console.log(newValue);
  };

  setPassword = (newValue: String) => {
    this.setState({password: newValue});
  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView
          style={styles.scrollViewContainer}
          contentInsetAdjustmentBehavior="automatic">
          <Text style={styles.title}>Login</Text>
          <CustomInputField
            headerTitle={'Email'}
            valueTitle={this.state.email}
            placeholder={'Please enter your email'}
            multiline={false}
            onTextChange={value => this.setEmail(value)}
          />
          <CustomInputField
            headerTitle={'Password'}
            valueTitle={this.state.password}
            placeholder={'Please enter your password'}
            multiline={true}
            onTextChange={value => this.setPassword(value)}
          />
          <CustomButton
            title={'Login'}
            onClicked={() => Alert.alert('RN Training', 'Demo')}
          />
          <View style={styles.textBottomContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text>Don't have any account ? </Text>
              <GoToSignUp />
            </View>
            <GoToForgetPassword />
          </View>
          <Divider />
          <View />
        </ScrollView>
      </SafeAreaView>
    );
  }
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
});
