import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class CustomDivider extends Component {
  render() {
    return <View style={styles.divider} />;
  }
}

const styles = StyleSheet.create({
  divider: {
    backgroundColor: 'black',
    height: 1,
    alignSelf: 'center',
    flex: 1,
  },
});
