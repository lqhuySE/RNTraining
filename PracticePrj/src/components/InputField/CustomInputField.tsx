import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Color from '../../constants/Color';

type InputFieldProps = {
  headerTitle: string;
  valueTitle: string;
  placeholder: string;
  multiline: boolean;
  passwordType: boolean;
  onTextChange: (text: string) => void;
};

class CustomInputField extends Component<InputFieldProps> {
  state = {
    value: this.props.valueTitle,
    isFocus: false,
    fontsLoaded: false,
  };

  render() {
    return (
      <View>
        <Text style={styles.header}>{this.props.headerTitle}</Text>
        <TextInput
          style={styles.textInput}
          multiline={this.props.multiline}
          defaultValue={this.state.value}
          placeholder={this.props.placeholder}
          onChangeText={text => this.props.onTextChange(text)}
          onEndEditing={_ =>
            this.setState({
              isFocus: !this.state.isFocus,
            })
          }
          onFocus={_ =>
            this.setState({
              isFocus: !this.state.isFocus,
            })
          }
          secureTextEntry={this.props.passwordType}
        />
        <View />
      </View>
    );
  }
}

export default CustomInputField;

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
});
