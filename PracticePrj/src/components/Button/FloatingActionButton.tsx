import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Color from '../../constants/Color';

const actions = [
  {
    icon: require('../../assets/new_folder.png'),
    name: 'bt_accessibility',
    position: 2,
  },
  {
    icon: require('../../assets/new_file.png'),
    name: 'bt_language',
    position: 1,
  },
];

class FloatingActionButton extends Component {
  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
});

export default FloatingActionButton;
