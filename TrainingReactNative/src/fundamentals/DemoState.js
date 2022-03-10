import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

type MessageProp = {
  message: String,
  messageState: Boolean,
};

class Message extends Component<MessageProp> {
  state = {isSend: this.props.messageState};
  render() {
    return (
      <View>
        <Text>
          This is the {this.props.message}, this message is {''}
          {this.state.isSend ? 'sent' : 'not be sent'}
        </Text>
        <Button
          title={!this.state.isSend ? 'Send ' : 'Sent ' + this.props.message}
          disabled={this.state.isSend}
          onPress={() => this.setState({isSend: !this.state.isSend})}
        />
      </View>
    );
  }
}

export default class extends Component {
  render() {
    return (
      <View>
        <Message message={'First message'} messageState={false} />
        <Message message={'Second message'} messageState={false} />
        <Message message={'Third message'} messageState={false} />
      </View>
    );
  }
}
