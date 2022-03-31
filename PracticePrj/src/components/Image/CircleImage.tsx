import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Color from '../../constants/Color';

type CircleImageProps = {
  image: NodeRequire;
  size: Number;
  isRadius: Boolean;
  radius: Number;
};

class CircleImage extends Component<CircleImageProps> {
  render() {
    return (
      <View>
        <Image
          style={[
            styles.imgAvatar,
            {
              width: this.props.size,
              height: this.props.size,
            },
          ]}
          source={this.props.image}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imgAvatar: {
    backgroundColor: Color.lightGray,
    margin: 5,
    borderRadius: 40,
  },
});

export default CircleImage;
