import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

type InputFieldProps = {
  headerTitle: string,
  valueTitle: string,
  placeholder: string,
  multiline: boolean,
  onTextChange: (text: string) => void,
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
          multiline={this.props.multiline}
          defaultValue={this.state.value}
          placeholder={this.props.placeholder}
          onChangeText={text => this.props.onTextChange(text)}
          onEndEditing={event =>
            this.setState({
              isFocus: !this.state.isFocus,
            })
          }
          onFocus={event =>
            this.setState({
              isFocus: !this.state.isFocus,
            })
          }
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
});
