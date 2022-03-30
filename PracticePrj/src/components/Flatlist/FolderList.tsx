import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import FolderItemData from '../../data/FolderItemData';
import ItemList from '../Custom/CustomItemNoteList';
import Color from '../../constants/Color';

export default class CustomFlatList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={FolderItemData}
          renderItem={({item, index}) => {
            return (
              <ItemList
                name={item.title}
                count={item.itemCount}
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
  },
});
