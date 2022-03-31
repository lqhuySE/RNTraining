import React from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import FolderItemData from '../../data/FolderItemData';
import ItemList from '../Custom/CustomItemNoteList';

type ItemClickProps = {
  onItemClickCallback: (id: string) => void;
};

const CustomFlatList = (props: ItemClickProps) => {
  const onItemClick = (title: string) => {
    props.onItemClickCallback(title);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={FolderItemData}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.itemList}
            key={item.id}
            onPress={() => onItemClick(item.title)}>
            <ItemList name={item.title} count={item.itemCount} index={index} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
  },
  itemList: {
    borderRadius: 5,
  },
});

export default CustomFlatList;
