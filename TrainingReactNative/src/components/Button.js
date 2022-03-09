import React, {Component} from 'react';
import {Button, View} from 'react-native';

type ButtonProp = {
  title: String,
  onClicked: (param: any) => void,
};

export default class CustomButton extends Component<ButtonProp> {
  render() {
    return (
      <View>
        <Button title={this.props.title} onPress={this.props.onClicked} />
      </View>
    );
  }
}
