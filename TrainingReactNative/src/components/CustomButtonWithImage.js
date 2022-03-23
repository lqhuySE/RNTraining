import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';

type ButtonWithImageProp = {
  message: String,
  image: NodeRequire,
};

export default class CustomButtonWithImage extends Component<ButtonWithImageProp> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            alert(this.props.message);
          }}>
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
    borderColor: 'black',
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
