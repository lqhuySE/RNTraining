import React, {Component} from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Color from '../../constants/Color';

type ImageButtonProps = {
  onClicked: () => void;
};

class ImageButton extends Component<ImageButtonProps> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.props.onClicked}>
          <Image
            style={styles.image}
            source={require('../../assets/plus.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    borderRadius: 40,
    backgroundColor: Color.lightBlue,
    padding: 5,
    width: 45,
    height: 45,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },
});

export default ImageButton;
