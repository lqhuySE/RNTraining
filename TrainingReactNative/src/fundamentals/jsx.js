import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class DemoJsx extends Component {
  render() {
    const name = 'World';
    return (
      <View>
        <Text>Hello {name}</Text>
      </View>
    );
  }
}
