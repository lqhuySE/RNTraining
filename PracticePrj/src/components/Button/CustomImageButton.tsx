import React, {Component} from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Color from '../../constants/Color';

type ImageButtonProps = {
  image: NodeRequire;
};

class ImageButton extends Component<ImageButtonProps> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Image style={styles.image} source={this.props.image} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  button: {
    borderRadius: 5,
    borderColor: Color.lightGray,
    borderWidth: 1,
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
