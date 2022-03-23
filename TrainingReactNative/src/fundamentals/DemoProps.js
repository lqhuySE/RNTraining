import React, {Component} from 'react';
import {View, Text} from 'react-native';

type MessageProps = {
  message: String,
};

class Message extends Component<MessageProps> {
  render() {
    return (
      <View>
        <Text>{this.props.message}</Text>
      </View>
    );
  }
}

export default class DemoProps extends Component {
  render() {
    return (
      <View>
        <Message message={'This is a first message'} />
      </View>
    );
  }
}
