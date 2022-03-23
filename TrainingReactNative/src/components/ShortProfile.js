import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

type AvatarProp = {
  name: String,
};

export default class ShortProfile extends Component<AvatarProp> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.profileImg}
          source={require('../assets/user.png')}
        />
        <Text style={styles.text}>Hi {this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  text: {
    fontWeight: 'normal',
    fontSize: 20,
    marginLeft: 5
  },
  profileImg: {
    width: 30,
    height: 30,
    borderRadius: 40,
    backgroundColor: 'gray',
    marginRight: 5,
  },
});
