import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, StatusBar} from 'react-native';
import CircleImage from '../components/Image/CircleImage';
import CustomItemNoteList from '../components/Custom/CustomItemNoteList';

class Avatar extends Component {
  render() {
    return (
      <View style={styles.avatarContainer}>
        <CircleImage
          image={require('../assets/user.png')}
          size={30}
          isRadius={false}
          radius={40}
        />
        <Text>Hi Huy</Text>
      </View>
    );
  }
}

class HomePage extends Component {
  render() {
    return (
      <ScrollView
        style={styles.container}
        contentInsetAdjustmentBehavior="automatic">
        <Avatar />
        <Text style={styles.header}>Folders</Text>
        <CustomItemNoteList />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  avatarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    fontSize: 35,
    marginHorizontal: 5,
    marginVertical: StatusBar.currentHeight,
    fontWeight: 'bold',
  },
});

export default HomePage;
