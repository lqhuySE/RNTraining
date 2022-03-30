import React, {Component} from 'react';
import {View} from 'react-native';

type DividerProps = {
  color: String;
  size: Number;
};

export default class CustomDivider extends Component<DividerProps> {
  render() {
    return (
      <View
        style={{
          backgroundColor: this.props.color,
          height: this.props.size,
        }}
      />
    );
  }
}
