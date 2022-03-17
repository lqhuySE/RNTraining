import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import NoteItemData from '../data/FolderNoteItemData';
import CustomItemList from './CustomItemList';

export default class CustomFlatList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={NoteItemData}
          renderItem={({item, index}) => {
            return (
              <CustomItemList
                title={item.title}
                itemNumber={item.itemCount}
                index={index}
              />
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: 'green',
  },
});
