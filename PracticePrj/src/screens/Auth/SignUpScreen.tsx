import React, {Component} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import CustomBasicButton from '../../components/Button/CustomBasicButton';
import FirebaseAuthUtils from '../../utils/FirebaseUtils';
import {Formik} from 'formik';
import {signUpValidationSchema} from '../../utils/ValidationUtils';
import CustomInputFieldValidation from '../../components/InputField/CustomInputFieldValidation';

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
  const signUp = (email: string, password: string) => {
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
      <Formik
        initialValues={{email: '', password: '', confirmPassword: ''}}
        validationSchema={signUpValidationSchema}
        onSubmit={values => signUp(values.email, values.password)}>
        {props => {
          return (
            <View>
              <CustomInputFieldValidation
                header={'Email'}
                value={props.values.email}
                placeholder={'Please enter your email'}
                multiline={false}
                passwordType={false}
                onTextChangeCallback={props.handleChange('email')}
                onBlurCallback={props.handleBlur('email')}
                error={props.errors.email}
                touch={props.touched.email}
              />
              <CustomInputFieldValidation
                header={'Password'}
                value={props.values.password}
                placeholder={'Please enter your password'}
                multiline={false}
                passwordType={true}
                onTextChangeCallback={props.handleChange('password')}
                onBlurCallback={props.handleBlur('password')}
                error={props.errors.password}
                touch={props.touched.password}
              />
              <CustomInputFieldValidation
                header={'Confirm password'}
                value={props.values.confirmPassword}
                placeholder={'Please enter your password again'}
                multiline={false}
                passwordType={true}
                onTextChangeCallback={props.handleChange('confirmPassword')}
                onBlurCallback={props.handleBlur('confirmPassword')}
                error={props.errors.confirmPassword}
                touch={props.touched.confirmPassword}
              />
              <CustomBasicButton
                title={'Register'}
                active={true}
                onClicked={props.handleSubmit}
              />
            </View>
          );
        }}
      </Formik>
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
