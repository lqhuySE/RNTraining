import React, {Component} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import Color from '../../constants/Color';

type ButtonClickProps = {
  title: String;
  onClicked: (param: any) => void;
};

export default class DialogButton extends Component<ButtonClickProps> {
  render() {
    return (
      <View style={{marginHorizontal: 10}}>
        <TouchableWithoutFeedback onPress={this.props.onClicked}>
          <Text style={styles.textButton}>{this.props.title}</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textButton: {
    color: Color.lightGreen,
  },
});
