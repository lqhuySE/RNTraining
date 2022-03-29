import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import Color from '../../constants/Color';

type BasicButtonProps = {
  title: string;
  active: boolean;
  onClicked: (param: any) => void;
};

class BasicButton extends Component<BasicButtonProps> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={[
            styles.touchableContainer,
            this.props.active ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={this.props.onClicked}>
          <Text style={styles.buttonText}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginVertical: 10,
  },
  touchableContainer: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: Color.lightBlue,
  },
  inactiveButton: {
    backgroundColor: Color.lightGray,
  },
  buttonText: {
    fontSize: 18,
    color: Color.white,
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default BasicButton;
