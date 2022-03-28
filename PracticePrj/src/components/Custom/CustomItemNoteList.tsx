import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Color from '../../constants/Color';

class ItemNoteList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.iconList}
          source={require('../../assets/folder.png')}
        />
        <Text style={styles.folderName}>Folder 1</Text>
        <Text style={styles.numberItem}>0</Text>
        <Image
          style={styles.iconList}
          source={require('../../assets/folder.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: Color.yellow,
    borderWidth: 1,
    padding: 10,
  },
  iconList: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  folderName: {
    flex: 1,
    fontSize: 15,
  },
  numberItem: {
    flex: 1,
    textAlign: 'right',
    fontSize: 15,
  },
});

export default ItemNoteList;
