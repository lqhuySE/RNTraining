import React, {Component} from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';

type ImageButtonProps = {
  image: NodeRequire;
  onClicked: () => void;
};

class ImageButtonNoBorder extends Component<ImageButtonProps> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.props.onClicked}>
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
    padding: 5,
    width: 40,
    height: 40,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },
});

export default ImageButtonNoBorder;
