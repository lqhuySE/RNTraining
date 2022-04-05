import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Color from '../../constants/Color';

type InputFieldProps = {
  header: string;
  value: string;
  placeholder: string;
  multiline: boolean;
  passwordType: boolean;
  onTextChangeCallback: (text: string) => void;
  onBlurCallback: (param: any) => void;
  error: any;
  touch: any;
};

class CustomInputFieldValidation extends Component<InputFieldProps> {
  state = {
    value: this.props.value,
  };

  render() {
    const hasError = this.props.touch && this.props.error;
    return (
      <View>
        <Text style={styles.header}>{this.props.header}</Text>
        <TextInput
          style={[styles.textInput, hasError && styles.errorInput]}
          multiline={this.props.multiline}
          defaultValue={this.state.value}
          placeholder={this.props.placeholder}
          onChangeText={text => this.props.onTextChangeCallback(text)}
          onBlur={this.props.onBlurCallback}
          secureTextEntry={this.props.passwordType}
        />
        {hasError && <Text style={styles.errorText}>{this.props.error}</Text>}
        <View />
      </View>
    );
  }
}

export default CustomInputFieldValidation;

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
  },
  textInput: {
    borderColor: Color.lightGray,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
  },
  errorInput: {
    borderColor: Color.red,
  },
});
