import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

type TextViewProps = {
  title: String,
};

export default class TextView extends Component<TextViewProps> {
  render() {
    return (
      <View>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});
